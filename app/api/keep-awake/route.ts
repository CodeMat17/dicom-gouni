import { supabaseServiceClient } from "@/utils/supabase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Query each table to keep them awake
    await Promise.all([
      supabaseServiceClient.from("aboutUs").select("id"),
      supabaseServiceClient.from("achievements").select("id"),
      supabaseServiceClient.from("contactUs").select("id"),
      supabaseServiceClient.from("events").select("id"),
      supabaseServiceClient.from("getInvolved").select("id"),
      supabaseServiceClient.from("hero").select("id"),
      supabaseServiceClient.from("statements").select("id"),
      supabaseServiceClient.from("team").select("id"),
    ]);

    return NextResponse.json({ message: "Keeping backend awake..." });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
