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
            thumbnailSrc='https://dicom.gouni.edu.ng/stormy-light.jpg'
            thumbnailAlt='Hero Video'
          />
          <HeroVideoDialog
            className='hidden dark:block'
            animationStyle='top-in-bottom-out'
            videoSrc='https://www.youtube.com/embed/jXFx6Vl1RjA'
            thumbnailSrc='https://dicom.gouni.edu.ng/stormy-dark.jpg'
            thumbnailAlt='Hero Video'
          />
        </div>

        <div className='relative w-full sm:w-[450px] md:w-[350px]'>
          <HeroVideoDialog
            className='dark:hidden block'
            animationStyle='top-in-bottom-out'
            videoSrc='https://www.youtube.com/embed/jXFx6Vl1RjA'
            thumbnailSrc='https://startup-template-sage.vercel.app/hero-light.png'
            thumbnailAlt='Hero Video'
          />
          <HeroVideoDialog
            className='hidden dark:block'
            animationStyle='top-in-bottom-out'
            videoSrc='https://www.youtube.com/embed/jXFx6Vl1RjA'
            thumbnailSrc='https://startup-template-sage.vercel.app/hero-dark.png'
            thumbnailAlt='Hero Video'
          />
        </div>

        <div className='relative w-full sm:w-[450px] md:w-[350px]'>
          <HeroVideoDialog
            className='dark:hidden block'
            animationStyle='top-in-bottom-out'
            videoSrc='https://www.youtube.com/embed/jXFx6Vl1RjA'
            thumbnailSrc='https://startup-template-sage.vercel.app/hero-light.png'
            thumbnailAlt='Hero Video'
          />
          <HeroVideoDialog
            className='hidden dark:block'
            animationStyle='top-in-bottom-out'
            videoSrc='https://www.youtube.com/embed/jXFx6Vl1RjA'
            thumbnailSrc='https://startup-template-sage.vercel.app/hero-dark.png'
            thumbnailAlt='Hero Video'
          />
        </div>

        <div className='relative w-full sm:w-[450px] md:w-[350px]'>
          <HeroVideoDialog
            className='dark:hidden block'
            animationStyle='top-in-bottom-out'
            videoSrc='https://www.youtube.com/embed/jXFx6Vl1RjA'
            thumbnailSrc='https://startup-template-sage.vercel.app/hero-light.png'
            thumbnailAlt='Hero Video'
          />
          <HeroVideoDialog
            className='hidden dark:block'
            animationStyle='top-in-bottom-out'
            videoSrc='https://www.youtube.com/embed/jXFx6Vl1RjA'
            thumbnailSrc='https://startup-template-sage.vercel.app/hero-dark.png'
            thumbnailAlt='Hero Video'
          />
        </div>

        <div className='relative w-full sm:w-[450px] md:w-[350px]'>
          <HeroVideoDialog
            className='dark:hidden block'
            animationStyle='top-in-bottom-out'
            videoSrc='https://www.youtube.com/embed/jXFx6Vl1RjA'
            thumbnailSrc='https://startup-template-sage.vercel.app/hero-light.png'
            thumbnailAlt='Hero Video'
          />
          <HeroVideoDialog
            className='hidden dark:block'
            animationStyle='top-in-bottom-out'
            videoSrc='https://www.youtube.com/embed/jXFx6Vl1RjA'
            thumbnailSrc='https://startup-template-sage.vercel.app/hero-dark.png'
            thumbnailAlt='Hero Video'
          />
        </div>
      </div>
    </div>
  );
}
