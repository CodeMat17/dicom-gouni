"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect, useState } from "react";

// Variants for the title animation (letter by letter)
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

const subtitle = "OUR SERVICES";

const services = [
  {
    id: 1,
    img: "/calendar.gif",
    title: "Event Organization",
    desc: "Hosting and managing competitions, including debates, quizzes, hackathons, and more.",
  },
  {
    id: 2,
    img: "/training.gif",
    title: "Training Programs",
    desc: "Providing workshops, boot camps, and mock competitions to prepare students.",
  },
  {
    id: 3,
    img: "/mentoring.gif",
    title: "Student Support",
    desc: "Offering mentorship, resources, and guidance for students participating in competitions.",
  },
];

const Services = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [titleInView, setTitleInView] = useState(false); // Trigger animation only once

  useEffect(() => {
    if (inView) {
      setTitleInView(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className='w-full px-2'>
      <motion.h1
        className='text-4xl font-bold text-center dark:text-gray-300'
        initial='hidden'
        animate={titleInView ? "visible" : "hidden"}>
        {subtitle.split("").map((letter, index) => (
          <motion.span key={index} custom={index} variants={titleVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      <motion.div className='flex items-center justify-center bg-sky-50 dark:bg-gray-900 rounded-2xl p-12 w-full max-w-6xl mx-auto mt-12'>
        <motion.div
          initial='hidden'
          animate={titleInView ? "visible" : "hidden"}
          variants={contentVariants}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16'>
          {services.map((service) => (
            <div
              key={service.id}
              className='flex flex-col justify-center items-center p-7 bg-white dark:bg-black rounded-2xl max-w-xs mx-auto text-center shadow-md'>
              <Image
                alt='icon'
                priority
                width={80}
                height={80}
                src={service.img}
                className='dark:invert'
              />
              <p className='mt-4 text-lg uppercase font-medium text-[#179bd7]'>
                {service.title}
              </p>
              <p className='mt-1 leading-5 font-light'>{service.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
