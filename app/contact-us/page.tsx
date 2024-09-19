

import ContactUsComponent from "@/components/ContactUsComponent";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "This is the contact details of the Directorate of Competitions, Godfrey Okoye University, Enugu.",
};

const ContactUs: React.FC = () => {
  return (
    <div className=' min-h-screen'>
   <ContactUsComponent />
    </div>
  );
};

export default ContactUs;
