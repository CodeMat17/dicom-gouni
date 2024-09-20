"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignRightIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild className='lg:hidden'>
        <Button
          aria-label='Hamburger-link'
          size='icon'
          variant='ghost'
          className={`transition transform duration-300 ease-in-out bg-[#253680] hover:bg-[#253680]/80 ${
            open ? "rotate-[360deg]" : "-rotate-[360deg]"
          }`}>
          {open ? (
            <X className='w-6 h-6 text-red-400' />
          ) : (
            <AlignRightIcon className='w-6 h-6 text-[#179bd7]' />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mr-4 w-w-full max-w-[300px] lg:hidden text-lg'>
        <Link href='/' aria-label='home-link'>
          <DropdownMenuItem className='text-lg'>HOME</DropdownMenuItem>
        </Link>

        <Link href='/about-us' aria-label='about-us-link'>
          <DropdownMenuItem className='text-lg'>ABOUT US</DropdownMenuItem>
        </Link>

        <Link href='/achievements' aria-label='achievements-link'>
          <DropdownMenuItem className='text-lg'> ACHIEVEMENTS</DropdownMenuItem>
        </Link>

        <Link href='/upcoming-events' aria-label='events-link'>
          <DropdownMenuItem className='text-lg'>
            UPCOMING EVENTS
          </DropdownMenuItem>
        </Link>

        <Link href='/trainings-workshops' aria-label='trainings-link'>
          <DropdownMenuItem className='text-lg'>
            TRAININGS & WORKSHOPS
          </DropdownMenuItem>
        </Link>

        <Link href='/get-involved' aria-label='get-involved-link'>
          <DropdownMenuItem className='text-lg'>GET INVOLVED</DropdownMenuItem>
        </Link>

        <Link href='/contact-us' aria-label='contact-us-link'>
          <DropdownMenuItem className='text-lg'> CONTACT US</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Hamburger;
