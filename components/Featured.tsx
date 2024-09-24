import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


type AchievementContent = {
  desc: string;
  img: string[];
};

type Achievement = {
  id: string;
  title: string;
  content: AchievementContent[];
};

const Featured = () => {
  return (
 <p>Wait...</p>
  );
}

export default Featured