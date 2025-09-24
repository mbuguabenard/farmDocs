// app/api/onboarding/route.ts
import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { bio, farmingType, farmSize, location, experience, full_name } = body;

  const { error } = await supabase.from("profiles").upsert(
    {
      id: session.user.id,
      full_name,
      bio,
      farming_type: farmingType,
      farm_size: farmSize,
      location,
      experience,
    },
    { onConflict: ["id"] }
  );

  if (error) {
    console.error("Onboarding save error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
