// components/Carousel.tsx

"use client";

import { Nerko_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const nerkoOne = Nerko_One({ subsets: ["latin"], weight: ["400"] });

type CarouselProps = {
  title: string;
  desc: string;
  imgs: string[];
};

interface Slide {
  id: number;
  image: string;
  alt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/hero1.jpg", // Replace with your actual image paths
    alt: "Empowering Students Through Competition",
  },
  {
    id: 2,
    image: "/hero2.jpg",
    alt: "Opportunities for Growth",
  },
  {
    id: 3,
    image: "/hero3.jpg",
    alt: "Excellence at Godfrey Okoye University",
  },
];

const Carousel: React.FC<CarouselProps> = ({title, desc, imgs}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideInterval = 5000; // 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imgs.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [imgs.length]);

  return (
    <div className='relative w-full h-[calc(100vh-7rem)]  aspect-video overflow-hidden'>
      {imgs.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-full scale-110"
          }`}>
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            priority={index === 0}
            className='object-cover w-full h-full'
          />
        </div>
      ))}
      {/* Static Content */}
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4'>
        <h2
          className={` ${nerkoOne.className} font-bold text-4xl sm:text-5xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200`}>
          Empowering Students Through Competition and Excellence.
        </h2>
        <p className='text-lg text-center font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 mb-6'>
          Discover opportunities to compete, learn, and grow with the
          Directorate of Competitions at Godfrey Okoye University, Enugu.
        </p>
        <Button
          aria-label='Explore Opportunities'
          asChild
          className='bg-transparent border border-white text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 hover:bg-white hover:text-black'>
          <Link href='/about-us' aria-label='Explore Opportunities link'>
            Explore Opportunities
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
