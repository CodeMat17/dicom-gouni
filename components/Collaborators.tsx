import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import HeaderTitle from "./HeaderTitle";
import Image from "next/image";

const reviews = [
  {
    name: "Rev. Fr. Prof. Christian Anieke",
    username: "VC GOUNI",
    img: "/vc.webp",
  },
  {
    name: "Directorate of Entrepreneurship",
    username: "GOUNI",
    img: "/doe.webp",
  },
  {
    name: "GOUNI Radio",
    username: "GOUNI",
    img: "/gouni_logo.jpg",
  },
  {
    name: "CodeMat Soft-lutions",
    username: "External Company",
    img: "/soft-lutions.webp",
  },
  {
    name: "Track I.T",
    username: "External Company",
    img: "/ti.png",
  },
  {
    name: "Computer Science Department",
    username: "GOUNI",
    img: "/gouni_logo.jpg",
  },
  {
    name: "COHON",
    username: "GOUNI",
    img: "/gouni_logo.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ name, username, img }: { name: string; username: string; img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-[280px] cursor-pointer overflow-hidden rounded-xl border p-4 shadow-md",
        // light styles
        `border-gray-950/[.1] ${
          name === "Rev. Fr. Prof. Christian Anieke"
            ? "bg-amber-200"
            : "bg-gray-950/[.01]"
        }  hover:bg-gray-950/[.05]`,
        // dark styles
        `dark:border-gray-50/[.1] ${
          name === "Rev. Fr. Prof. Christian Anieke"
            ? "bg-amber-200"
            : "dark:bg-gray-50/[.10]"
        }  dark:hover:bg-gray-50/[.15]`
      )}>
      <div className='flex items-center gap-2 text-sm'>
        <Image
          alt=''
          priority
          width={40}
          height={40}
          src={img}
          className='rounded-full'
        />
        <figcaption
          className={`${
            name === "Rev. Fr. Prof. Christian Anieke"
              ? "text-gray-900"
              : "dark:text-white"
          } font-medium  mb-1`}>
          {name}
        </figcaption>
        {/* <div className='flex flex-col'>
        
        </div> */}
      </div>
      <p
        className={`${
          name === "Rev. Fr. Prof. Christian Anieke" ? "text-gray-600" : "dark:text-white/40"
        } ml-[48px] text-sm text-gray-500 font-medium `}>
        {username}
      </p>
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
