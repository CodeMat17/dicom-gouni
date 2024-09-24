import Events from "@/components/Events";
import { createClient } from "@/utils/supabase/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description:
    "Do not miss any of the upcoming events of the Directorate of Competitions, Godfrey Okoye University, Enugu.",
};

const UpcomingEvents = async () => {
  const supabase = createClient();

  const { data: events, error } = await supabase.from("events").select("*");

  return (
    <div className='w-full min-h-screen py-12 bg-gray-50 dark:bg-gray-950'>
      <Events events={events} />
    </div>
  );
};

export default UpcomingEvents;
