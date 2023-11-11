import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// This route is used to store the leads that are generated from the landing page.
// The API call is initiated by <ButtonLead /> component
export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    const existingLead = await supabase
      .from("healing_journey_readings")
      .select("*")
      .eq("email", body.email);

    const answers = [
      body.firstQuestionAnswer,
      body.secondQuestionAnswer,
      body.thirdQuestionAnswer,
      body.fourthQuestionAnswer,
      body.fifthQuestionAnswer,
      body.sixthQuestionAnswer,
      body.seventhQuestionAnswer,
      body.eighthQuestionAnswer,
      body.ninthQuestionAnswer,
      body.tenthQuestionAnswer,
    ];

    if (existingLead.data.length > 0) {
      await supabase
        .from("healing_journey_readings")
        .update({
          name: body.name,
          date: body.date,
          answers,
          type: body.type,
        })
        .eq("email", body.email);
    } else {
      await supabase.from("healing_journey_readings").insert({
        name: body.name,
        date: body.date,
        email: body.email,
        answers,
        type: body.type,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
