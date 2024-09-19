import { AboutUsStatements } from "@/components/AboutUsStatements";
import HeaderTitle from "@/components/HeaderTitle";
import OurTeamCards from "@/components/OurTeamCard";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "This is the about page of the Directorate of Competitions, Godfrey Okoye University, Enugu.",
};

const AboutUs = async () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-950 w-full min-h-screen '>
      <div className='py-12'>
        <HeaderTitle title='About Us' align='center' />
        <AboutUsStatements />

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
