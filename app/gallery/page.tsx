import { GalleryComponent } from '@/components/GalleryComponent';
import LetterPullup from "@/components/magicui/letter-pullup";

const Gallery = () => {
    return (
      <div className='px-4 py-12 w-full min-h-screen'>
        <LetterPullup words={"GALLERY"} delay={0.08} />

        <GalleryComponent />
      </div>
    );
}

export default Gallery