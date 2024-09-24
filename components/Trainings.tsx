"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Trainings = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [subtitleAnimationComplete, setSubtitleAnimationComplete] =
    useState(false);

  // Variants for the subtitle animation (letter by letter)
  const subtitleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // Adjust delay for each letter
        duration: 0.4,
      },
    }),
  };

  return (
    <div>
      {/* Subtitle animation */}
      <motion.h2
        className='text-4xl text-center font-bold text-black dark:text-gray-300 mb-12'
        initial='hidden'
        animate='visible'
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
        }}
        onAnimationComplete={() => setSubtitleAnimationComplete(true)}>
        {"TRAINING & WORKSHOPS".split("").map((char, i) => (
          <motion.span key={i} variants={subtitleVariants} custom={i}>
            {char}
          </motion.span>
        ))}
      </motion.h2>

      <motion.div
        ref={ref}
        initial='hidden'
        animate={subtitleAnimationComplete ? "visible" : "hidden"} // Animate when subtitle is done
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}>
        {/* Overview Section */}
        <div className='max-w-4xl mx-auto mb-12 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
            Overview
          </h2>
          <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
            We offer a range of training programs to help students excel in
            competitions.
          </p>
        </div>

        {/* Workshops Section */}
        <div className='max-w-4xl mx-auto mb-12 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
            Workshops
          </h2>
          <ul className='space-y-6'>
            {/* Workshop 1 */}
            <li>
              <h3 className='text-xl font-bold text-blue-600'>
                Debate Training
              </h3>
              <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                Skills development for upcoming debate tournaments.
              </p>
            </li>
            {/* Workshop 2 */}
            <li>
              <h3 className='text-xl font-bold text-blue-600'>
                Public Speaking
              </h3>
              <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                Workshops focused on improving oratory and presentation skills.
              </p>
            </li>
            {/* Workshop 3 */}
            <li>
              <h3 className='text-xl font-bold text-blue-600'>
                Hackathon Preparation
              </h3>
              <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                Coding and innovation sessions for tech competitions.
              </p>
            </li>
          </ul>
        </div>

        {/* Mock Competitions Section */}
        <div className='max-w-4xl mx-auto p-6 bg-white  dark:bg-gray-900 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
            Mock Competitions
          </h2>
          <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
            Join our mock sessions to get a feel of the real competition
            environment.
          </p>
          <Button asChild className='bg-blue-600 text-white hover:bg-blue-500'>
            <Link
              href='https://chat.whatsapp.com/CwjAibg6ZrnA42ph536W61'
              target='_blank'>
              Join Now
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Trainings;
