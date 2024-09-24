// components/FeaturedSections.tsx
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import React from "react";
import HeaderTitle from "./HeaderTitle";
import { Button } from "./ui/button";
import Image from "next/image";


type AchievementContent = {
  desc: string;
  img: string[];
};

type Achievement = {
  id: string;
  title: string;
  content: AchievementContent[];
};

const FeaturedSections: React.FC = async () => {
  const supabase = createClient();

  const { data: achievementsData, error } = await supabase
    .from("achievements")
    .select("*")
    .order("created_at", { ascending: true })
    .limit(2);

  if (error) {
    console.error("Error fetching achievements: ", error);
    return null;
  }

 

  // Parse the content array for each achievement
  const achievements = achievementsData?.map((achievement: any) => {
    const parsedContent = achievement.content.map((contentString: string) =>
      JSON.parse(contentString)
    );
    // console.log("Parsed content for achievement:", parsedContent);
    return {
      ...achievement,
      content: parsedContent,
    };
  });

    const { data: events, error: eventsError } = await supabase
      .from("events")
      .select("*")
      .order("created_at", { ascending: true })
      .limit(2);

 

  return (
   
    <section className='py-16 bg-gray-100 dark:bg-gray-950'>
      <div className='container mx-auto px-3 space-y-12 max-w-6xl'>
        {/* Latest Achievements Section */}
        <div>
          <HeaderTitle title='Latest Achievements' align='center' />
         

          <Link href='/achievements' className="border">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {achievements?.map((achievement: Achievement) => (
                <div
                  key={achievement.id}
                  className='flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden'>
                  <div className='px-6 p-6'>
                    <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-400'>
                      {achievement.title}
                      <hr className='mt-2' />
                    </h3>
                    <p className='mt-2 text-gray-600 dark:text-gray-500'>
                      {achievement.content[0]?.desc}
                    </p>
                  </div>
                  {/* Loop through and display images */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 p-2'>
                    {achievement.content[0]?.img
                      .slice(0, 2)
                      .map((img: string, i: number) => (
                        <Image
                          key={i}
                          priority
                          width={150}
                          height={80}
                          src={img}
                          alt={`Image ${i + 1} for ${achievement.title}`}
                          className='object-top w-full  rounded-lg border'
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </Link>

          <Link
            href='/achievements'
            className='mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium'>
            See All Achievements
          </Link>
        </div>

        {/* Upcoming Events Section */}
        <div>
          <HeaderTitle title='Upcoming Events' align='left' />

          <div className='bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden p-6'>
            <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
              {events && events.map((event) => (
                <li key={event.id} className='py-4 flex justify-between'>
                  <span className='text-lg text-gray-800 dark:text-gray-400'>
                    {event.title}
                  </span>
                  <span className='text-gray-600 dark:text-gray-500'>
                    {event.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href='/upcoming-events'
            className='mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium'>
            View Full events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSections;
