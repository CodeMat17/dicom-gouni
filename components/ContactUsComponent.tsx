"use client";

import GoogleMapButton from "@/components/GoogleMapButton";
import HeaderTitle from "@/components/HeaderTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ContactUsComponent: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [titleInView, setTitleInView] = useState(false); // Trigger animation only once

    useEffect(() => {
      if (inView) {
        setTitleInView(true);
      }
    }, [inView]);

    const titleVariants = {
      hidden: { opacity: 0, x: -50 },
      visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: i * 0.1, // Adjust delay for each letter
        },
      }),
    };

    // Variants for the content sliding up
    const contentVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 1.5, // Wait until the title animation completes
        },
      },
  };
  
   const cardVariants = {
     hidden: { opacity: 0, y: 50 },
     visible: (i: number) => ({
       opacity: 1,
       y: 0,
       transition: {
         delay: i * 0.2, // Delay each card animation
         duration: 0.6,
       },
     }),
   };

    const subtitle = "CONTACT US";

  return (
    <div
      ref={ref}
      className=' min-h-screen px-6 py-12 bg-gray-100  dark:bg-gray-950'>
      {/* Subtitle animation */}
      <motion.h1
        className='text-4xl font-bold text-center dark:text-gray-300 mx-4'
        initial='hidden'
        animate={titleInView ? "visible" : "hidden"}>
        {subtitle.split("").map((letter, index) => (
          <motion.span key={index} custom={index} variants={titleVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Contact Details */}
      <motion.div
        initial='hidden'
        animate={titleInView ? "visible" : "hidden"}
        variants={contentVariants}
        className='mt-8 max-w-5xl mx-auto w-full flex flex-col justify-center text-center gap-10 mb-12'>
        {/* Office Location and Contact Details */}
        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-xl font-medium mb-2 text-gray-700 dark:text-gray-300'>
              Office Location
            </h2>
            <p className=' text-gray-700 dark:text-gray-400 mb-1'>
              Directorate of Competitions <br /> Within the Faculty of Computer
              Science <br /> IECE.
            </p>

            <GoogleMapButton />
          </div>
          <div>
            <h2 className='text-xl font-medium mb-2 text-gray-700 dark:text-gray-400'>
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
      </motion.div>
    </div>
  );
};

export default ContactUsComponent;
