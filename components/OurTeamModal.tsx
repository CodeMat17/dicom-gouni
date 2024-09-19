import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  position: string;
  bio: string;
  photo: string;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const OurTeamModal: FC<ModalProps> = ({
  isOpen,
  onClose,
  name,
  position,
  bio,
  photo,
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
      variants={backdropVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      onClick={onClose}>
      <motion.div
        className='bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg w-96 relative'
        variants={modalVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        onClick={(e) => e.stopPropagation()}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}>
        <button
          className='font-bold text-red-500 hover:text-red-700 text-3xl absolute -top-1 right-2'
          onClick={onClose}>
          &times;
        </button>
        <div className="flex justify-center pt-6">
           <Image
          priority
          width={130}
          height={130}
          src={photo}
          alt={name}
          className='w-[130px] h-[130px]  object-cover rounded-full'
        />
        </div>
       
        <div className='px-6 pb-6 pt-3'>
          <h2 className='text-lg font-bold'>{name}</h2>
          <p className='text-gray-600 mb-4 dark:text-gray-400'>{position}</p>
          <p className='text-gray-700 dark:text-gray-400'>{bio}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OurTeamModal;
