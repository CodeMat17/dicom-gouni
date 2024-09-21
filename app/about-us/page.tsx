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

        <div className='px-4 space-y-3 max-w-2xl mx-auto dark:text-gray-400'>
          <h1 className='text-xl font-medium text-center'>
            Empowering Students Through Competition and Excellence
          </h1>
          <p>
            We provide platforms that allow students to compete, learn and
            foster an environment that challenges them to improve beyond their
            limits as they journey into spheres unknown.
          </p>
          <p>
            Join us on this transformational journey, where competition sparks
            growth and excellence is a pursuit for the rest of life.
          </p>
        </div>
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
