"use client";

import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import { Nerko_One } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";

const nerkoOne = Nerko_One({ subsets: ["latin"], weight: ["400"] });

type Props = {
  title: string;
  desc: string;
  imgs: string[];
};

export function HeroPage({ title, desc, imgs }: Props) {
 

  return (
    <ImagesSlider
      className='w-full h-[calc(100vh-7rem)] aspect-video'
      images={imgs}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className='px-4 z-50 flex flex-col justify-center items-center gap-3'>
        <motion.p
          className={` ${nerkoOne.className} font-bold text-4xl sm:text-5xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200`}>
          {title}
        </motion.p>
        <motion.p className='text-lg text-center font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300'>
          {desc}
        </motion.p>
        <Button
          asChild
          className='px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 hover:bg-[#179bd9] border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4'>
          <Link href='/about-us'>
            <span>Explore Opportunities →</span>
            <div className='absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#179bd7] to-transparent' />
          </Link>
        </Button>
      </motion.div>
    </ImagesSlider>
  );
}
