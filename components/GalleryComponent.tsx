import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function GalleryComponent() {
  return (
    <div className='flex items-center justify-center w-full  max-w-7xl mx-auto mt-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        <div className='relative w-full sm:w-[450px] md:w-[350px]'>
          <HeroVideoDialog
            className='dark:hidden block'
            animationStyle='top-in-bottom-out'
            videoSrc='https://www.youtube.com/embed/jXFx6Vl1RjA'
            thumbnailSrc='https://wweuxvuqgqaqfwbpoivy.supabase.co/storage/v1/object/public/dicom/video-image/2.jpg?t=2024-09-26T18%3A46%3A58.769Z'
            thumbnailAlt='Hero Video'
          />
          <HeroVideoDialog
            className='hidden dark:block'
            animationStyle='top-in-bottom-out'
            videoSrc='https://www.youtube.com/embed/jXFx6Vl1RjA'
            thumbnailSrc='https://wweuxvuqgqaqfwbpoivy.supabase.co/storage/v1/object/public/dicom/video-image/3.jpg?t=2024-09-26T18%3A47%3A28.087Z'
            thumbnailAlt='Hero Video'
          />
        </div>
      </div>
    </div>
  );
}
