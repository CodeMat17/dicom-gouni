import { GalleryComponent } from '@/components/GalleryComponent';
import LetterPullup from "@/components/magicui/letter-pullup";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Have a look at some of the student videos and photos while in action.",
};

const Gallery = () => {
    return (
      <div className='px-4 py-12 w-full min-h-screen'>
        <LetterPullup words={"GALLERY"} delay={0.08} />

        <GalleryComponent />
      </div>
    );
}

export default Gallery