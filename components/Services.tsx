import Image from "next/image";

const services = [
  {
    id: 1,
    img: "/calendar.gif",
    title: "Event Organization",
    desc: "Hosting and managing competitions, including debates, quizzes, hackathons, and more.",
  },
  {
    id: 2,
    img: "/training.gif",
    title: "Training Programs",
    desc: "Providing workshops, boot camps, and mock competitions to prepare students.",
  },
  {
    id: 3,
    img: "/mentoring.gif",
    title: "Student Support",
    desc: "Offering mentorship, resources, and guidance for students participating in competitions.",
  },
];

const Services = () => {
  return (
    <div className='w-full px-2'>
      <div className='flex items-center justify-center bg-sky-50 dark:bg-gray-900 rounded-2xl p-12 w-full max-w-6xl mx-auto'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16">
          {services.map((service) => (
            <div
              key={service.id}
              className='flex flex-col justify-center items-center p-7 bg-white dark:bg-black rounded-2xl max-w-xs mx-auto text-center shadow-md'>
              <Image
                alt='icon'
                priority
                width={80}
                height={80}
                src={service.img}
                className="dark:invert"
              />
              <p className='mt-4 text-lg uppercase font-medium text-[#179bd7]'>
              {service.title}
              </p>
              <p className='mt-1 leading-5 font-light'>
               {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
