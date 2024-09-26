import Image from "next/image";

const Loading = () => {
  return (
    <div className='w-full px-4 py-32 flex flex-col justify-center items-center gap-4'>
      <Image
        alt=''
        priority
        width={55}
        height={55}
        src='/dicom_logo.webp'
        className='rounded-full'
      />
      <p>Please wait</p>
    </div>
  );
};

export default Loading;
