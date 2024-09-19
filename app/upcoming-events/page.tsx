// "use client";

// import CollaboForm from "@/components/CollaboForm";
import {createClient} from '@/utils/supabase/server'
import HeaderTitle from "@/components/HeaderTitle";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Metadata } from 'next';
// import { useState } from "react";


export const metadata: Metadata = {
  title: "Upcoming Events",
  description:
    "Do not miss any of the upcoming events of the Directorate of Competitions, Godfrey Okoye University, Enugu.",
};

const events = [
  { id: 1, title: "DebateCoolit Competition", date: "August - October" },
  {
    id: 2,
    title: "National Intercollegiate Public Speaking Contest",
    date: "August 22-30",
  },
  { id: 3, title: "Lavida Opens Debate", date: "September 6-8 on Discord" },
  { id: 4, title: "Hackathon Competition", date: "Date TBD" },
];

const UpcomingEvents = async () => {
  // const [collabo, setCollabo] = useState(false);
  const supabase = createClient()

  const {data: events, error} = await supabase.from('events').select('*') 

  return (
    <div className='w-full min-h-screen py-12 bg-gray-50 dark:bg-gray-950'>
      <HeaderTitle title='Upcoming Events' align='center' />

      <div className='mt-12 w-full max-w-4xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 py-8 gap-4 md:gap-6 w-full px-4'>
          {events && events.map((event) => (
            <div
              key={event.id}
              className='flex flex-col bg-white dark:bg-black/70 p-6 rounded-2xl shadow-md border dark:border-gray-900'>
              <div className='flex items-center gap-5 mb-2'>
                <Image
                  alt=''
                  priority
                  width={50}
                  height={50}
                  src='/balloons.gif'
                  className="dark:invert"
                />
                <div className='relative divide-y'>
                  <h3 className='text-xl sm:text-2xl font-medium pb-4'>
                    {event.title}
                  </h3>
                  <p className='pt-2'>{event.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className='mt-8 px-2'>
          {collabo ? (
            <div className='bg-[#179bd9]/10 rounded-2xl overflow-hidden max-w-xl mx-auto border'>
              <div className='flex items-center justify-center p-3 bg-white shadow-md'>
                <Image
                  alt=''
                  priority
                  width={80}
                  height={80}
                  src='/handshake.gif'
                />
                <h3 className='text-2xl font-semibold'>
                  Let&apos;s Collaborate!
                </h3>
              </div>
              <div className='p-4 sm:p-8'>
                <CollaboForm />
              </div>
            </div>
          ) : (
            <div className='flex flex-col justify-center items-center max-w-xs mx-auto'>
              <p className='text-xl text-center'>You want to collaborate with us?</p>
              <Button
                onClick={() => setCollabo(true)}
                className='mt-4 bg-[#179bd7]'>
                Let&apos;s Collaborate
              </Button>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default UpcomingEvents;
