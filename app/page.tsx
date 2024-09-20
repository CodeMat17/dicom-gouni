import Carousel from "@/components/Carousel";
import { Collaborators } from "@/components/Collaborators";
import FeaturedSections from "@/components/FeaturedSections";
// import { HeroPage } from "@/components/HeroPage";
import { createClient } from "@/utils/supabase/server";

const Home = async () => {
  const supabase = createClient();

  const { data } = await supabase.from("hero").select("*").single();

  return (
    <div className='w-full '>
      <Carousel title={data.title} desc={data.desc} imgs={data.imgs} />
      {/* <HeroPage title={data.title} desc={data.desc} imgs={data.imgs} /> */}

      <Collaborators />

      <FeaturedSections />
    </div>
  );
};

export default Home;
