import configFile from "@/config";
import { findCheckoutSession } from "@/libs/stripe";
import { createClient } from "@supabase/supabase-js";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import User from "../../../../models/User";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-08-16",
  typescript: true,
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// This is where we receive Stripe webhook events
// It used to update the user data, send emails, etc...
// By default, it'll store the user in the database
// See more: https://shipfa.st/docs/features/payments
export async function POST(req: NextRequest) {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return NextResponse.json(
      { error: "Missing env variables for Supabase" },
      { status: 500 }
    );
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const body = await req.text();

  const signature = headers().get("stripe-signature");

  let event: Stripe.Event;

  // verify Stripe event is legit
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error(`Webhook signature verification failed. ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  const object = event.data.object as {
    id: string;
    client_reference_id: string;
  };
  const eventType = event.type;

  try {
    switch (eventType) {
      case "checkout.session.completed": {
        // First payment is successful and the subscription is created | or the subscription was canceled so create new one

        const session = await findCheckoutSession(object.id);

        const customerId = session?.customer as string;
        const priceId = session?.line_items?.data[0]?.price.id;
        const userId = object.client_reference_id;
        const plan = configFile.stripe.plans.find((p) => p.priceId === priceId);

        if (!plan) break;

        const customer = (await stripe.customers.retrieve(
          customerId
        )) as Stripe.Customer;

        let user: User | null = null;

        // Get or create the user. userId is normally pass in the checkout session (clientReferenceID) to identify the user when we get the webhook event
        if (userId) {
          const query = await supabase
            .from("users")
            .select()
            .eq("id", userId)
            .single<User>();
          user = query.data;
        } else if (customer.email) {
          const query = await supabase
            .from("users")
            .select<"*", User>()
            .eq("email", customer.email);
          user = query.data[0];

          if (!user) {
            const query = await supabase
              .from("users")
              .insert([{ email: customer.email }])
              .single<User>();

            user = query.data;
          }
        } else {
          console.error("No user found");
          throw new Error("No user found");
        }

        // update user data (for instance add credits)
        user.priceId = priceId;
        user.customerId = customerId;
        await supabase.from("users").update(user).eq("id", user.id);

        // Extra: send email with user link, product page, etc...
        // try {
        //   await sendEmail(...);
        // } catch (e) {
        //   console.error("Email issue:" + e?.message);
        // }

        break;
      }

      case "checkout.session.expired": {
        // User didn't complete the transaction
        // Can send an email to the user to remind him to complete the transaction, for instance
        break;
      }

      case "customer.subscription.updated": {
        // The customer might have changed the plan (higher or lower plan, cancel soon etc...)
        const subscription = await stripe.subscriptions.retrieve(object.id);
        const planId = subscription?.items?.data[0]?.price?.id;
        // Do any operation here
        break;
      }

      case "customer.subscription.deleted": {
        // The customer stopped the subscription.
        // Do any operation here
        break;
      }

      default:
      // Unhandled event type
    }
  } catch (e) {
    console.error("stripe error: ", e.message);
  }

  return NextResponse.json({});
}
