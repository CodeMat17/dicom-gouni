"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/meteors";



type statement = {
   id: number
    title: string;
    desc: string;
}
  
type statementsProps = {
  statements: statement[];
}

// Variants for sliding up animation with stagger
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Adjust the delay between animations
    },
  },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export  function AboutUsStatements({ statements }: statementsProps) {
  const [visibleStates, setVisibleStates] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleStates((prev) => {
              const newVisibleStates = [...prev];
              newVisibleStates[index] = true; // Mark this index as visible
              return newVisibleStates;
            });
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% is in view
    );

    const cards = document.querySelectorAll(".statement-card");
    cards.forEach((card, index) => {
      card.setAttribute("data-index", index.toString()); // Set index for visibility tracking
      observer.observe(card); // Start observing the card
    });

    return () => {
      observer.disconnect(); // Clean up the observer
    };
  }, [statements]);

  return (
    <div className='px-4'>
      <div className='mt-12 w-full relative max-w-6xl mx-auto'>
        <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl' />

        <motion.div
          initial='hidden'
          animate={visibleStates.some(Boolean) ? "visible" : "hidden"}
          variants={containerVariants}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {statements &&
            statements.map((statement, index) => (
              <motion.div
                key={statement.id}
                className='statement-card relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start items-start'
                initial='hidden'
                animate={visibleStates[index] ? "visible" : "hidden"}
                variants={slideUpVariants}>
                <h1 className='font-bold text-xl text-white mb-4 relative z-40'>
                  {statement.title}
                </h1>

                <p className='font-normal text-base text-slate-500 relative z-40'>
                  {statement.desc}
                </p>

                {/* Meteor effect */}
                <Meteors number={20} />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
