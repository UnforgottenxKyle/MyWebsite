import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <>
      <section className="grid grid-rows-[140px,_1fr] h-[calc(100%-140px)] lg:h-[calc(100vh-140px)] px-[40px] lg:px-[100px] bg-[#0f0e17] lg:grid-rows-[180px,_1fr]">
        <div className="flex text-white text-3xl justify-center items-center font-bold lg:text-5xl">
          <h1>EDUCATION</h1>
        </div>
        <div className="">
          <ol className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-6 lg:gap-0">
            <motion.li
              initial={{ y: 350, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mb-6 sm:mb-0"
            >
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-900 ring-gray-900 sm:ring-8  shrink-0">
                  <FaGraduationCap className="text-white" />
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-2xl pb-5 font-semibold text-white">
                  Cavite State University - College
                </h3>
                <time className="block mb-5 italic text-sm font-normal leading-none text-[#FFC74D] ">
                  2020 - Present
                </time>
                <p className="text-base font-normal text-[#a7a9be]">
                  focused on software development, he continued to enhance his
                  skills. His academic journey from 2020 to 2024 involved a deep
                  dive into programming languages such as JavaScript, PHP, and
                  Python. He worked on multiple projects, including software and
                  web development, which honed his problem-solving skills and
                  teamwork abilities.
                </p>
              </div>
            </motion.li>
            <motion.li
              initial={{ y: 350, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative mb-6 sm:mb-0"
            >
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-900 ring-gray-900 rounded-full ring-0 sm:ring-8 shrink-0">
                  <FaGraduationCap className="text-white" />
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-2xl pb-5 font-semibold text-white">
                  Philippine Christian University - SHS
                </h3>
                <time className="block mb-5 italic text-sm font-normal leading-none text-[#FFC74D] ">
                  2018 - 2020
                </time>
                <p className="text-base font-normal text-[#a7a9be]">
                  My high school life taught me a lot of wisdom, faced a lot of
                  challenges, and learned new things. He faced a lot of
                  rejection, failed, and learned to accept to grow as a person.
                  At this point he prioritized his academic duties. In
                  graduation he has an honor medal graduating in 2020.
                </p>
              </div>
            </motion.li>
            <motion.li
              initial={{ y: 350, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="relative mb-6 sm:mb-0"
            >
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-900 ring-gray-900 sm:ring-8 rounded-full ring-0 shrink-0">
                  <FaGraduationCap className="text-white" />
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-2xl pb-5 font-semibold text-white ">
                  Sabang Elementary School
                </h3>
                <time className="block mb-5 italic text-sm font-normal leading-none text-[#FFC74D] ">
                  2007 - 2013
                </time>
                <p className="text-base font-normal text-[#a7a9be]">
                  In his early age I loves to draw I always participating in
                  poster maker contest that is why I have a medal called best of
                  arts and honors.
                </p>
              </div>
            </motion.li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Education;
