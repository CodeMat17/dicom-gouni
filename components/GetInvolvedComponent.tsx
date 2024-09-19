"use client";

import HeaderTitle from "@/components/HeaderTitle";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { MinusIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type Props = {
  id: string;
  title: string;
  desc: string;
};

const GetInvolvedComponent = () => {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Props[]>([]);

  const fetchData = async () => {
    try {
      const { data } = await supabase.from("getInvolved").select("*");

      if (data) {
        setData(data || []);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch data from the server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='w-full py-32 flex items-center justify-center gap-4'>
        <MinusIcon className='animate-spin' />
        <p>Please wait...</p>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-950 px-6 py-10'>
      {/* Page Section Title */}
      <HeaderTitle title='Get Involved' align='center' />

      <div className='max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {/* Join the Club Section */}
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className='bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow'>
              <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4'>
                {item.title}
              </h2>
              <p className='text-gray-600 dark:text-gray-400 mb-6'>
                {item.desc}
              </p>
              {item.title === "Join the Club" && (
                <Button
                  asChild
                  className='bg-blue-600 text-white hover:bg-blue-500'>
                  <Link
                    href='https://chat.whatsapp.com/CwjAibg6ZrnA42ph536W61'
                    target='_blank'>
                    Join Now
                  </Link>
                </Button>
              )}

              {item.title === "Volunteer Opportunities" && (
                <Button
                  asChild
                  className='bg-blue-600 text-white hover:bg-blue-500'>
                  <Link href='mailto:dicom@gouni.edu.ng'>Volunteer</Link>
                </Button>
              )}
              {item.title === "Partnerships" && (
                <Button
                  asChild
                  className='bg-blue-600 text-white hover:bg-blue-500'>
                  <Link href='mailto:dicom@gouni.edu.ng'>
                    Let&apos;s partner
                  </Link>
                </Button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default GetInvolvedComponent;
