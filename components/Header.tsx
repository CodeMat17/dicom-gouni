'use client'

import { MoonIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { ModeToggle } from "./ModeToggle";
import {usePathname} from 'next/navigation'

const Header = () => {

  const pathname = usePathname()
  
  return (
    <header className='w-full sticky top-0 z-50 '>
      <div className='w-full px-4 py-2 bg-[#253b80]/90 backdrop-filter backdrop-blur-md'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center gap-2'>
           
            <Link href='/'>
              <div className="border-4 rounded-full border-[#179bd7]">
              <Image
                alt=''
                priority
                width={55}
                height={55}
                src='/dicom_logo.webp'
                className='rounded-full'
              /> 
           </div>
            </Link>
            <div className='text-white leading-4'>
              <p className='font-semibold tracking-wider text-lg'>
                Directorate of Competitions
              </p>
              <p className=''>Godfrey Okoye University</p>
            </div>
          </div>
          <div className='hidden lg:flex'>
            <ModeToggle />
          </div>
        </div>
      </div>

      <div className='px-4 py-1.5 bg-[#179bd7] z-50'>
        <nav className='hidden lg:flex items-center justify-center lg:gap-2 text-purple-950 '>
          <Link
            aria-label='home-link'
            href='/'
            className={`transition duration-500 font-medium px-3 py-1 rounded-lg hover:text-white hover:bg-[#253680]/20 hover:shadow whitespace-nowrap ${
              pathname === "/" ? "text-white bg-[#253680]/20" : ""
            } `}>
            Home
          </Link>
          <Link
            aria-label='about-us-link'
            href='/about-us'
            className={`transition duration-500 font-medium px-3 py-1 rounded-lg hover:text-white hover:bg-[#253680]/20 hover:shadow whitespace-nowrap  ${
              pathname === "/about-us" ? "text-white bg-[#253680]/20" : ""
            } `}>
            About Us
          </Link>
          <Link
            aria-label='achievements-link'
            href='/achievements'
            className={`transition duration-500 font-medium px-3 py-1 rounded-lg hover:text-white hover:bg-[#253680]/20 hover:shadow whitespace-nowrap  ${
              pathname === "/achievements" ? "text-white bg-[#253680]/20" : ""
            }`}>
            Achievements
          </Link>
          <Link
            aria-label='events-link'
            href='/upcoming-events'
            className={`transition duration-500 font-medium px-3 py-1 rounded-lg hover:text-white hover:bg-[#253680]/20 hover:shadow whitespace-nowrap  ${
              pathname === "/upcoming-events"
                ? "text-white bg-[#253680]/20"
                : ""
            }`}>
            Upcoming Events
          </Link>
          <Link
            aria-label='gallery-link'
            href='/gallery'
            className={`transition duration-500 font-medium px-3 py-1 rounded-lg hover:text-white hover:bg-[#253680]/20 hover:shadow whitespace-nowrap  ${
              pathname === "/gallery"
                ? "text-white bg-[#253680]/20"
                : ""
            }`}>
            Gallery
          </Link>
          <Link
            aria-label='trainings-link'
            href='/trainings-workshops'
            className={`transition duration-500 font-medium px-3 py-1 rounded-lg hover:text-white hover:bg-[#253680]/20 hover:shadow whitespace-nowrap  ${
              pathname === "/trainings-workshops"
                ? "text-white bg-[#253680]/20"
                : ""
            }`}>
            Trainings & Workshops
          </Link>
          <Link
            aria-label='get-involved-link'
            href='/get-involved'
            className={`transition duration-500 font-medium px-3 py-1 rounded-lg hover:text-white hover:bg-[#253680]/20 hover:shadow whitespace-nowrap  ${
              pathname === "/get-involved" ? "text-white bg-[#253680]/20" : ""
            }`}>
            Get Involved
          </Link>
          <Link
            aria-label='contact-us-link'
            href='/contact-us'
            className={`transition duration-500 font-medium px-3 py-1 rounded-lg hover:text-white hover:bg-[#253680]/20 hover:shadow whitespace-nowrap  ${
              pathname === "/contact-us" ? "text-white bg-[#253680]/20" : ""
            }`}>
            Contact Us
          </Link>
        </nav>

        <div className='lg:hidden py-0.5 flex items-center justify-between'>
          <ModeToggle />
          <Hamburger />
        </div>
      </div>
    </header>
  );
};

export default Header;
