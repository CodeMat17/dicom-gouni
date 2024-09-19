"use client";

import GoogleMapButton from "@/components/GoogleMapButton";
import HeaderTitle from "@/components/HeaderTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ContactUsComponent: React.FC = () => {
  return (
    <div className=' min-h-screen px-6 py-12 bg-gray-100  dark:bg-gray-950'>
      <HeaderTitle title='Contact Us' align='center' />

      {/* Contact Details */}
      <div className='mt-4 max-w-5xl mx-auto w-full flex flex-col justify-center text-center gap-10 mb-12'>
        {/* Office Location and Contact Details */}
        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-300'>
              Office Location
            </h2>
            <p className=' text-gray-700 dark:text-gray-400 mb-1'>
              Directorate of Competitions <br /> Within the Faculty of Computer
              Science <br /> IECE.
            </p>

            <GoogleMapButton />
          </div>
          <div>
            <h2 className='text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-400'>
              Contact Details
            </h2>
            <p className=' text-gray-700 dark:text-gray-300 mb-2'>
              <strong>Email:</strong> dicom@gouni.edu.ng
            </p>
            <Button asChild>
              <Link href='mailto:dicom@gouni.edu.ng'>Just send an email</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
