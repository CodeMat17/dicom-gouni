import FeaturedSections from "@/components/FeaturedSections";
import { HeroPage } from "@/components/HeroPage";
import { createClient } from "@/utils/supabase/server";

const Home = async () => {
  const supabase = createClient();

  const { data } = await supabase.from("hero").select("*").single();

  return (
    <div className='w-full '>
      <HeroPage title={data.title} desc={data.desc} imgs={data.imgs} />

      {/* <pre>{ JSON.stringify(achievements, null, 2)}</pre> */}
      <FeaturedSections />
    </div>
  );
};

export default Home;
