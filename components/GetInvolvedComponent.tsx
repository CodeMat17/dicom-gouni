"use client";

import HeaderTitle from "@/components/HeaderTitle";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { MinusIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { toast } from "sonner";

type Props = {
  id: string;
  title: string;
  desc: string;
};

const GetInvolvedComponent = () => {
  const supabase = createClient();

  const { ref, inView } = useInView({ threshold: 0.2 });
  const [titleInView, setTitleInView] = useState(false); // Trigger animation only once

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Props[]>([]);

  const fetchData = async () => {
    try {
      const { data } = await supabase.from("getInvolved").select("*");

      if (data) {
        setData(data || []);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch data from the server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const subtitle = "GET INVOLVED";

  if (loading) {
    return (
      <div className='w-full py-32 flex items-center justify-center gap-4'>
        <MinusIcon className='animate-spin' />
        <p>Please wait...</p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className='min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-950 px-6 py-10'>
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

      <motion.div
        initial='hidden'
        animate={titleInView ? "visible" : "hidden"}
        variants={contentVariants}
        className='max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12'>
        {/* Join the Club Section */}
        {data &&
          data.map((item) => (
            <motion.div
              key={item.id}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }} // Animate when 20% in view
              custom={item.id}
              variants={cardVariants}
              className='bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow'>
              <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4'>
                {item.title}
              </h2>
              <p className='text-gray-600 dark:text-gray-400 mb-6'>
                {item.desc}
              </p>
              {item.title === "Join the Club" && (
                <Button
                  asChild
                  className='bg-blue-600 text-white hover:bg-blue-500'>
                  <Link
                    href='https://chat.whatsapp.com/CwjAibg6ZrnA42ph536W61'
                    target='_blank'>
                    Join Now
                  </Link>
                </Button>
              )}

              {item.title === "Volunteer Opportunities" && (
                <Button
                  asChild
                  className='bg-blue-600 text-white hover:bg-blue-500'>
                  <Link href='mailto:dicom@gouni.edu.ng'>Volunteer</Link>
                </Button>
              )}
              {item.title === "Partnerships" && (
                <Button
                  asChild
                  className='bg-blue-600 text-white hover:bg-blue-500'>
                  <Link href='mailto:dicom@gouni.edu.ng'>
                    Let&apos;s partner
                  </Link>
                </Button>
              )}
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default GetInvolvedComponent;
