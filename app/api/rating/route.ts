import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// This route is used to store the leads that are generated from the landing page.
// The API call is initiated by <ButtonLead /> component
export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.rating) {
    return NextResponse.json(
      { error: "Uma nota é obrigatória" },
      { status: 400 }
    );
  }

  try {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    const data = await supabase.from("ratings").insert({
      rating: body.rating,
      reason: body.reason,
    });

    return NextResponse.json({
      data,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
