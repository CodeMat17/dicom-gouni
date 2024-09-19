import HeaderTitle from '@/components/HeaderTitle';
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

      <HeaderTitle title='Training & Workshops' align='center' />

      {/* Overview Section */}
      <div className='max-w-4xl mx-auto mb-12 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
          Overview
        </h2>
        <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
          We offer a range of training programs to help students excel in
          competitions.
        </p>
      </div>

      {/* Workshops Section */}
      <div className='max-w-4xl mx-auto mb-12 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
          Workshops
        </h2>
        <ul className='space-y-6'>
          {/* Workshop 1 */}
          <li>
            <h3 className='text-xl font-bold text-blue-600'>Debate Training</h3>
            <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
              Skills development for upcoming debate tournaments.
            </p>
          </li>
          {/* Workshop 2 */}
          <li>
            <h3 className='text-xl font-bold text-blue-600'>Public Speaking</h3>
            <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
              Workshops focused on improving oratory and presentation skills.
            </p>
          </li>
          {/* Workshop 3 */}
          <li>
            <h3 className='text-xl font-bold text-blue-600'>
              Hackathon Preparation
            </h3>
            <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
              Coding and innovation sessions for tech competitions.
            </p>
          </li>
        </ul>
      </div>

      {/* Mock Competitions Section */}
      <div className='max-w-4xl mx-auto p-6 bg-white  dark:bg-gray-900 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
          Mock Competitions
        </h2>
        <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
          Join our mock sessions to get a feel of the real competition
          environment.
        </p>
      </div>
    </div>
  );
}

export default TrainingsWorkshops