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
    const supabase = createRouteHandlerClient({ cookies });
    const { data } = await supabase.auth.getSession();
    const { session } = data;

    if (!session) {
      NextResponse.json({ error: "Não autorizado" }, { status: 401 });
      return;
    }

    await supabase.from("ratings").insert({
      rating: body.rating,
      reason: body.reason,
      userId: session.user.id,
    });

    return NextResponse.json({});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
