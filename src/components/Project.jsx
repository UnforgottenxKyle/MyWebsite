import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <section className="grid grid-rows-4 h-[calc(100%-140px)] lg:grid-rows-2 lg:grid-cols-2 lg:h-[calc(100vh-140px)] bg-[#0f0e17] lg:py-5  lg:px-[100px] gap-4 pb-9 ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-rows-2 grid-cols-1git lg:grid-cols-[379px,1fr] lg:grid-rows-1 rounded-lg border-[3px] border-white shadow-[rgba(0,0,0,0.56)_0px_22px_70px_4px]"
        >
          <div className="lg:border-r-[4px] lg:border-white">
            <img src="AAPG.png" alt="capstone" width={375} />
          </div>
          <div className="flex flex-col justify-center text-white gap-y-4 lg:gap-y-8">
            <Link
              to="https://github.com/UnforgottenxKyle/Automated-Assessment-Question-Generator"
              className=" mt-[-5px] lg:mt-[-20px] flex justify-end pr-[20px]"
            >
              <button className="">
                <FaGithubSquare className="flex place-content-end text-3xl lg:text-4xl" />
              </button>
            </Link>
            <div className="flex justify-center items-center font-bold text-center">
              AUTOMATED ASSESSMENT PAPER GENERATOR
            </div>
            <div className="font-light text-justify px-5">
              This capstone project assists faculties, teachers, and mentors in
              generating question papers for their classes. The system allows
              users to store questions at any time and randomly generates a
              question paper when needed.
            </div>
            <div className="flex gap-x-3 justify-center ">
              <button className="px-[7px] p-1 lg:p-1 lg:px-5 bg-[#FFC74D] rounded-2xl">
                PHP
              </button>
              <button className="px-[7px] p-1 lg:p-1 lg:px-5 bg-[#FFC74D] rounded-2xl">
                JS
              </button>
              <button className="px-[7px] p-1 lg:p-1 lg:px-5 bg-[#FFC74D] rounded-2xl">
                HTML5
              </button>
              <button className="px-[7px] p-1 lg:p-1 lg:px-5 bg-[#FFC74D] rounded-2xl">
                CSS3
              </button>
              <button className="px-[7px] p-1 lg:p-1 lg:px-5 bg-[#FFC74D] rounded-2xl">
                MYSQL
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-rows-2 lg:grid-cols-[379px,1fr] lg:grid-rows-1 rounded-lg border-[3px] border-white "
        >
          <div className="lg:border-r-[4px] lg:border-white ">
            <img src="localreel.png" alt="e-commers" width={375} />
          </div>
          <div className="flex flex-col justify-center  text-white gap-y-8">
            <Link
              to="https://github.com/UnforgottenxKyle/ITEC106_project"
              className=" mt-[-5px] lg:mt-[-20px] flex justify-end pr-[20px]"
            >
              <button className="">
                <FaGithubSquare className="flex place-content-end text-3xl lg:text-4xl" />
              </button>
            </Link>
            <div className="font-bold text-center ">Local Reel</div>
            <div className="text-justify px-5 font-light">
              Created a web application that allows users to browse, search, and
              filter movies. Designed the frontend to be fully responsive,
              ensuring optimal user experience across different devices and
              screen sizes. Utilized the TMDB API to fetch movie data, including
              titles, descriptions, ratings, and images.
            </div>
            <div className="flex gap-x-3 justify-center">
              <button className="px-[7px] p-1 lg:p-1 lg:px-5 bg-[#FFC74D] rounded-2xl">
                LARAVEL
              </button>
              <button className="px-[7px] p-1 lg:p-1 lg:px-5 bg-[#FFC74D] rounded-2xl">
                TAILWINDCSS
              </button>
              <button className="px-[7px] p-1 lg:p-1 lg:px-5 bg-[#FFC74D] rounded-2xl">
                API
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-rows-2 lg:grid-cols-[379px,1fr] lg:grid-rows-1 rounded-lg border-[3px] border-white"
        >
          <div className="lg:border-r-[4px] lg:border-white">
            <img src="Gym.png" alt="StaticWEB" width={375} />
          </div>
          <div className="flex flex-col justify-center text-white gap-y-8">
            <Link
              to="https://github.com/UnforgottenxKyle/Gym-using-laravel"
              className=" mt-[-5px] lg:mt-[-20px] flex justify-end pr-[20px]"
            >
              <button className="">
                <FaGithubSquare className="flex place-content-end text-3xl lg:text-4xl" />
              </button>
            </Link>
            <div className="font-bold text-center">ECG GYM</div>
            <div className="text-justify px-5 font-light">
              To support the newly established gym near my house, I created a
              website called ECG GYM. The website serves as a comprehensive
              digital platform for the gym, providing information about its
              facilities. I ensured that the site is user-friendly.
            </div>
            <div className="flex gap-x-3 justify-center">
              <button className="px-[7px] p-1 lg:p-1 lg:px-5 bg-[#FFC74D] rounded-2xl">
                LARAVEL
              </button>
              <button className="px-[7px] p-1 lg:p-1 lg:px-5 bg-[#FFC74D] rounded-2xl">
                HTML5
              </button>
              <button className="px-[7px] p-1 lg:p-1 lg:px-5 bg-[#FFC74D] rounded-2xl">
                CSS3
              </button>
              <button className="px-[7px] p-1 lg:p-1 lg:px-5 bg-[#FFC74D] rounded-2xl">
                MYSQL
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-rows-2 lg:grid-cols-[379px,1fr] lg:grid-rows-1 rounded-lg border-[3px] border-white"
        >
          <div className="lg:border-r-[4px] lg:border-white">
            <img src="portfolio.png" alt="portfolio" width={375} />
          </div>
          <div className="flex flex-col justify-center text-white gap-y-8">
            <Link
              to="https://github.com/UnforgottenxKyle/MyWebsite"
              className=" mt-[-5px] lg:mt-[-20px] flex justify-end pr-[20px]"
            >
              <button className="">
                <FaGithubSquare className="flex place-content-end text-3xl lg:text-4xl" />
              </button>
            </Link>
            <div className="font-bold text-center">PORTFOLIO</div>
            <div className="text-justify px-5 font-light">
              Personal Portfolio Website to showcase and highlights my skills,
              projects, accomplishments, and experience. Developing a responsive
              and interactive.
            </div>
            <div className="flex gap-x-3 justify-center">
              <button className="px-[7px] p-1 lg:p-1 lg:px-5 bg-[#FFC74D] rounded-2xl">
                REACTJS
              </button>
              <button className="px-[7px] p-1 lg:p-1 lg:px-5 bg-[#FFC74D] rounded-2xl">
                TAILWINDCSS
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Project;
