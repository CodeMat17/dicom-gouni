import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import HeaderTitle from "./HeaderTitle";

const reviews = [
  {
    name: "Rev. Fr. Prof. Christian Anieke",
    username: "VC GOUNI",
  },
  {
    name: "Directorate of Entrepreneurship",
    username: "GOUNI",
  },
  {
    name: "GOUNI Radio",
    username: "GOUNI",
  },
  {
    name: "CodeMat Soft-lutions",
    username: "External Company",
  },
  {
    name: "Track I.T",
    username: "External Company",
  },
  {
    name: "Computer Science Department",
    username: "GOUNI",
  },
  {
    name: "COHON",
    username: "GOUNI",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  username,
}: {
  name: string;
  username: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border py-4 px-5",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}>
      <div className='flex flex-row items-center gap-2'>
       
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white mb-1'>
            {name}
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40'>{username}</p>
        </div>
      </div>
    </figure>
  );
};

export function Collaborators() {
  return (
    <div className='relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
      <div className='px-4'>
        <HeaderTitle title='Collaborators so far' align='center' />
      </div>

      <Marquee pauseOnHover className='[--duration:20s]'>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
    </div>
  );
}
