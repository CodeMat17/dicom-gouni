import { Meteors } from "@/components/ui/meteors";
import { createClient } from "@/utils/supabase/server";


const statements = [
  {
    id: 1,
    title: "Mission Statement",
    content:
      "Our mission is to foster a culture of intellectual engagement and competitive spirit among students at Godfrey Okoye University.",
  },
  {
    id: 2,
    title: "Vision",
    content:
      "To be the leading university in student competitions, recognized nationally and internationally for excellence",
  },
  {
    id: 3,
    title: "Core Values",
    content: "Excellence, Integrity, Innovation, Collaboration.",
  },
];

export async function AboutUsStatements() {
 const supabase = createClient();

 const { data: statements } = await supabase
   .from("aboutUs")
   .select("*")
   .order("created_at", { ascending: true });


  return (
    <div className='px-4'>
      <div className='mt-12 w-full relative max-w-6xl mx-auto'>
        <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl' />

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>
          {statements && statements.map((statement) => (
            <div
              key={statement.id}
              className='relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start items-start'>
              <h1 className='font-bold text-xl text-white mb-4 relative z-40'>
                {statement.title}
              </h1>

              <p className='font-normal text-base text-slate-500 relative z-40'>
               {statement.desc}
              </p>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
