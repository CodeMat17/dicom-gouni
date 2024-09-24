'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";


// Define the event type
interface Event {
  id: string;
  title: string;
  date: string;
}

const Events = ({ events }: { events: Event[] | null }) => {
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

  const subtitle = "UPCOMING EVENTS";


  // // Variants for the card animation (slide up when in view)
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

  return (
    <div
      ref={ref}
      className='w-full min-h-screen py-6 bg-gray-50 dark:bg-gray-950'>
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

    

      {/* Events Grid */}
      <motion.div
        initial='hidden'
        animate={titleInView ? "visible" : "hidden"}
        variants={contentVariants}
        className='mt-8 w-full max-w-4xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 py-8 gap-4 md:gap-6 w-full px-4'>
          {events &&
            events.map((event, index) => (
              <motion.div
                key={event.id}
                className='flex flex-col bg-white dark:bg-black/70 p-6 rounded-2xl shadow-md border dark:border-gray-900'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }} // Animate when 20% in view
                custom={index}
                variants={cardVariants}>
                <div className='flex items-center gap-5 mb-2'>
                  <Image
                    alt=''
                    priority
                    width={50}
                    height={50}
                    src='/balloons.gif'
                    className='dark:invert'
                  />
                  <div className='relative divide-y'>
                    <h3 className='text-xl sm:text-2xl font-medium pb-4'>
                      {event.title}
                    </h3>
                    <p className='pt-2'>{event.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Events;
