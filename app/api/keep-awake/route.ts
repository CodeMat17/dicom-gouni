import { supabaseServiceClient } from "@/utils/supabase/service";
import type { NextResponse } from "next/server";

export const GET = async (res: NextResponse) => {
  try {
    // Query each table to keep them awake
    const responses = await Promise.all([
      supabaseServiceClient.from("aboutUs").select("id"),
      supabaseServiceClient.from("achievements").select("id"),
      supabaseServiceClient.from("contactUs").select("id"),
      supabaseServiceClient.from("events").select("id"),
      supabaseServiceClient.from("getInvolved").select("id"),
      supabaseServiceClient.from("hero").select("id"),
      supabaseServiceClient.from("statements").select("id"),
      supabaseServiceClient.from("team").select("id"),
    ]);

    console.log("Keeping backend awake...");
    return new Response(JSON.stringify({ message: "Backend is awake" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Error keeping backend awake" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
