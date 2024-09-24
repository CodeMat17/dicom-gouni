"use client";

import OurTeamModal from "@/components/OurTeamModal";
import { createClient } from "@/utils/supabase/client";
import { AnimatePresence, motion } from "framer-motion";
import { MinusIcon } from "lucide-react";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { toast } from "sonner";

// Variants for the title animation (letter by letter)
const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1, // Adjust delay for each letter
    },
  }),
};

  // Variants for the content sliding up
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.5, // Wait until the title animation completes
      },
    },
  };

const subtitle = "OUR TEAM";

interface User {
  name: string;
  position: string;
  bio: string;
  photo: string;
}

const OurTeamCards: FC = () => {
  const supabase = createClient();

  const { ref, inView } = useInView({ threshold: 0.2 });
  const [titleInView, setTitleInView] = useState(false); // Trigger animation only once

  const [team, setTeam] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const { data, error } = await supabase
          .from("team")
          .select("*")
          .order("created_at", { ascending: true });

        if (error) {
          toast("ERROR!", { description: error.message });
        } else {
          setTeam(data || []);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  useEffect(() => {
    if (inView) {
      setTitleInView(true);
    }
  }, [inView]);

  const openModal = (user: User) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center gap-4 px-4 text-center py-32'>
        <MinusIcon className='animate-spin' /> <p>Loading team data...</p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className='container max-w-6xl mx-auto p-6 bg-gray-50 dark:bg-gray-950'>
      {/* Subtitle animation */}
      <motion.h1
        className='text-4xl font-bold text-center dark:text-gray-300'
        initial='hidden'
        animate={titleInView ? "visible" : "hidden"}>
        {subtitle.split("").map((letter, index) => (
          <motion.span key={index} custom={index} variants={titleVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Body content animation */}
      <motion.div
        initial='hidden'
        animate={titleInView ? "visible" : "hidden"}
        variants={contentVariants}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
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
              <div className='flex items-center justify-center'>
                <p className='mt-3 border shadow-md p-2 rounded-lg bg-white dark:bg-slate-900 text-[#179bd9]'>
                  See More
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Modal for selected user */}
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
