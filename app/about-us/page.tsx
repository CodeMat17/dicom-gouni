import AboutUsNote from "@/components/AboutUsNote";
import { AboutUsStatements } from "@/components/AboutUsStatements";
import HeaderTitle from "@/components/HeaderTitle";
import OurTeamCards from "@/components/OurTeamCard";
import Services from "@/components/Services";
import { createClient } from "@/utils/supabase/server";
import { Metadata } from "next";

export interface Statement {
  id: number; // Adjust the type based on your actual data structure
  title: string;
  desc: string;
  created_at: string; // Adjust based on your Supabase table
}

export const metadata: Metadata = {
  title: "About Us",
  description:
    "This is the about page of the Directorate of Competitions, Godfrey Okoye University, Enugu.",
};

const AboutUs = async () => {
  const supabase = createClient();

  const { data: statements } = await supabase
    .from("aboutUs")
    .select("*")
    .order("created_at", { ascending: true });

  return (
    <div className='bg-gray-50 dark:bg-gray-950 w-full min-h-screen '>
      <div className='py-12'>
        {/* <HeaderTitle title='About Us' align='center' /> */}

        <AboutUsNote />

        <AboutUsStatements statements={statements || []} />

        <div className='mt-20'>
          <HeaderTitle title='Our Team' align='center' />
          <OurTeamCards />
        </div>

        <div className='mt-20'>
          <HeaderTitle title='Our Services' align='center' />
          <Services />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
