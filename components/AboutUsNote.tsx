"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const AboutUsNote = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [titleInView, setTitleInView] = useState(false); // Trigger animation only once

  useEffect(() => {
    if (inView) {
      setTitleInView(true);
    }
  }, [inView]);

  // Variants for the title animation (letter by letter)
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05, // Adjust delay for each letter
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
        delay: 1, // Wait until the title animation completes
      },
    },
  };

  const subtitle = "ABOUT US";

  return (
    <section
      ref={ref}
      className='w-full flex flex-col items-center justify-center'>
      {/* Subtitle animation */}
      <motion.h1
        className='text-4xl font-bold text-center'
        initial='hidden'
        animate={titleInView ? "visible" : "hidden"}>
        {subtitle.split("").map((letter, index) => (
          <motion.span key={index} custom={index} variants={titleVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Content sliding up */}
      <motion.div
        className='px-4 space-y-3 max-w-2xl mx-auto dark:text-gray-400 mt-8'
        initial='hidden'
        animate={titleInView ? "visible" : "hidden"}
        variants={contentVariants}>
        <h1 className='text-xl font-medium text-center'>
          Empowering Students Through Competition and Excellence
        </h1>
        <p>
          We provide platforms that allow students to compete, learn, and foster
          an environment that challenges them to improve beyond their limits as
          they journey into spheres unknown.
        </p>
        <p>
          Join us on this transformational journey, where competition sparks
          growth and excellence is a pursuit for the rest of life.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUsNote;
