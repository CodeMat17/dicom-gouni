

import GetInvolvedComponent from "@/components/GetInvolvedComponent";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Visit this page to get involved with the Directorate of Competitions, Godfrey Okoye University, Enugu.",
};


const GetInvolved = () => {
 

  return (
    <div className='min-h-screen'>
   <GetInvolvedComponent />
    </div>
  );
};

export default GetInvolved;
