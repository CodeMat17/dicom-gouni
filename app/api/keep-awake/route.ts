
import { NextApiRequest, NextApiResponse } from 'next';
import {supabaseServiceClient} from '@/utils/supabase/service'

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {


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
    return res.status(200).json({ message: "Backend is awake" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error keeping backend awake" });
  }
};

