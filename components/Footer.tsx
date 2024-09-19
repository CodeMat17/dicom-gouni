"use client";


import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import GoogleMapButton from "./GoogleMapButton";

const Footer = () => {
  // Function to handle button click
  

  return (
    <div className='bg-slate-900 text-gray-300'>
      <div className='flex items-center gap-2 pt-8 px-4 xl:px-0 max-w-6xl mx-auto'>
        <Link href='/'>
          <Image
            alt=''
            priority
            width={55}
            height={55}
            src='/gouni_logo.jpg'
            className='rounded-full'
          />
        </Link>
        <div className='text-white leading-4'>
          <p className='font-semibold tracking-wider text-lg'>
            Godfrey Okoye University
          </p>
          <p className=''>Directorate of Competitions</p>
        </div>
      </div>
      <div className='w-full max-w-6xl mx-auto px-4 xl:px-0 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        <div>
          <p className='text-lg'>Quick Links:</p>
          <div className='flex flex-col text-sm text-sky-500 gap-3 mt-3'>
            <Link
              href='/'
              className='w-fit transition duration-500 ease-in-out hover:scale-110 hover:text-gray-400'>
              Home
            </Link>
            <Link
              href='/'
              className='w-fit transition duration-300 ease-in-out hover:scale-110 hover:text-gray-400'>
              About Us
            </Link>
            <Link
              href='/'
              className='w-fit transition duration-500 ease-in-out hover:scale-110 hover:text-gray-400'>
              Achievements
            </Link>
            <Link
              href='/'
              className='w-fit transition duration-500 ease-in-out hover:scale-110 hover:text-gray-400'>
              Upcoming Events
            </Link>
            <Link
              href='/'
              className='w-fit transition duration-500 ease-in-out hover:scale-110 hover:text-gray-400'>
              Training & Workshops
            </Link>
            <Link
              href='/'
              className='w-fit transition duration-500 ease-in-out hover:scale-110 hover:text-gray-400'>
              Get Involved
            </Link>
            <Link
              href='/'
              className='w-fit transition duration-500 ease-in-out hover:scale-110 hover:text-gray-400'>
              Contact Us
            </Link>
          </div>
        </div>

        <div>
          <p className='text-lg'>Address:</p>
          <div className='flex flex-col text-sm gap-3 mt-3'>
            <p>
              Directorate of Competitions <br /> Within the Faculty
              of Computer Science <br /> IECE.
            </p>
            <GoogleMapButton />
          </div>
        </div>
      </div>
      <p className='text-center p-4 mt-6 bg-slate-950'>
        &copy; 2024 Directorate of Competitions, Godfrey Okoye University. All
        rights reserved.
      </p>
    </div>
  );
};

export default Footer;
