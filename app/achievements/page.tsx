import { AchievementTimeline } from "@/components/AchievementsTimeline";
import HeaderTitle from "@/components/HeaderTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Achievements",
  description:
    "This is a selected achievement list of the Directorate of Competitions, Godfrey Okoye University, Enugu.",
};

const Achievements = () => {
  return (
    <div className='w-full'>

      <AchievementTimeline />
    </div>
  );
};

export default Achievements;
