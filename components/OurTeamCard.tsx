"use client";

import OurTeamModal from "@/components/OurTeamModal";
import { createClient } from "@/utils/supabase/client";
import { AnimatePresence } from "framer-motion";
import { MinusIcon } from "lucide-react";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { toast } from "sonner";

interface User {
  name: string;
  position: string;
  bio: string;
  photo: string;
}

const users: User[] = [
  {
    name: "Mrs. Chukwu Uchanta",
    position: "Director, Directorate of Competitions",
    bio: "Mrs. Chukwu Uchanta is a seasoned director with over 20 years of experience in managing competitions at various levels. Her strategic vision and leadership have been instrumental in promoting talent and innovation.",
    photo: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
  },
  {
    name: "John Doe",
    position: "Head of Marketing",
    bio: "John Doe is an expert in digital marketing with a focus on social media strategy and content creation. He has helped numerous brands establish their online presence and reach a wider audience.",
    photo: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
  },
  {
    name: "Jane Smith",
    position: "Chief Technology Officer",
    bio: "Jane Smith is a technology enthusiast with a passion for building scalable and efficient software solutions. She leads a team of engineers dedicated to driving technological innovation.",
    photo: "https://assets.aceternity.com/demos/metallica.jpeg",
  },
];

const OurTeamCards: FC = () => {
  const supabase = createClient();

  const [team, setTeam] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Fetch team data from Supabase
  const fetchTeam = async () => {
    try {
      const { data, error } = await supabase
        .from("team")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching team data:", error);
        toast('ERROR!', {
          description: `${error.message}`
        })
      } else {
        setTeam(data || []); // Set the fetched team data
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  const openModal = (user: User) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

   if (loading) {
     return <div className="flex items-center justify-center gap-4 px-4 text-center py-32"><MinusIcon className="animate-spin" /> <p>Loading team data...</p></div>;
   }

  return (
    <div className='container max-w-6xl mx-auto p-6 bg-gray-50 dark:bg-gray-950'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {team.map((user) => (
          <div
            key={user.name}
            className='w-full mx-auto border dark:border-none rounded-xl p-4 shadow-md hover:shadow-lg bg-white dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-slate-800 cursor-pointer'
            onClick={() => openModal(user)}>
            <Image
              priority
              width={200}
              height={200}
              src={user.photo}
              alt={user.name}
              className='w-full max-w-[250px] mx-auto aspect-square object-cover mb-4 rounded-full'
            />
            <div className='text-center'>
              <h2 className='text-xl text-[#179bd9] font-bold mb-1'>
                {user.name}
              </h2>
              <p className='text-gray-400'>{user.position}</p>
              <div className=' flex items-center justify-center '>
                <p className='mt-3 border shadow-md p-2 rounded-lg bg-white dark:bg-slate-900 text-[#179bd9] '>
                  See More
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animate the presence of the modal */}
      <AnimatePresence>
        {selectedUser && (
          <OurTeamModal
            isOpen={!!selectedUser}
            onClose={closeModal}
            name={selectedUser.name}
            position={selectedUser.position}
            bio={selectedUser.bio}
            photo={selectedUser.photo}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurTeamCards;
