import HeaderTitle from '@/components/HeaderTitle';
import Trainings from '@/components/Trainings';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Training and Workshops",
  description:
    "The Directorate of Competitions, Godfrey Okoye University, Enugu, engages in series of trainings and workshops. Visit this page or the Directorate physically to learn more.",
};

const TrainingsWorkshops = () => {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-950 px-4 py-12'>
      {/* Section Title */}

  <Trainings />

     
    </div>
  );
}

export default TrainingsWorkshops