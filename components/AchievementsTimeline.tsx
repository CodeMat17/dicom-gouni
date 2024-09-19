import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";



type AchievementContent = {
  desc: string;
  img: string[];
};

type Achievement = {
  id: string;
  title: string;
  content: AchievementContent[];
};


export async function AchievementTimeline() {
  const supabase = createClient();

  const { data: achievementsData, error } = await supabase
    .from("achievements")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching achievements: ", error);
    return null;
  }

  // Parse the content array for each achievement
  const achievements = achievementsData?.map((achievement: any) => {
    const parsedContent = achievement.content.map((contentString: string) =>
      JSON.parse(contentString)
    );
    return {
      ...achievement,
      content: parsedContent,
    };
  });

   const data = achievements?.map((achievement: Achievement) => ({
     title: achievement.title,
     content: (
       <div>
         <p className='text-neutral-800 dark:text-neutral-200 font-normal mb-8'>
           {achievement.content[0]?.desc}
         </p>
         <div className='grid grid-cols-2 gap-4'>
           {achievement.content[0]?.img.map((imageSrc, index) => (
             <Image
               key={index}
               src={imageSrc}
               alt={`Achievement ${achievement.title} image ${index + 1}`}
               width={500}
               height={500}
               className='rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
             />
           ))}
         </div>
       </div>
     ),
   }));


  return (
    <div className='w-full'>
      <Timeline data={data || []} />
    </div>
  );
}
