import { motion } from "framer-motion";
import "../index.css";
import Resume from "../assets/Resume.pdf";


const Hero = () => {
  return (
    <>
      <section className="grid grid-row-[1fr,1fr] h-[calc(100vh-140px)] bg-[#0f0e17] lg:grid lg:grid-cols-2 lg:px-[100px] box-border sm:px-0">
        <div className="flex text-white lg:flex flex-col justify-center lg:items-start  gap-8 sm:w-fit sm:items-center">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-3xl lg:text-6xl font-semibold	text-start"
          >
            GRIFIN KYLE C. <span>ASA</span>
          </motion.h1>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-[#FFC74D] lg:text-start font-semibold text-xl italic"
          >
            Aspiring web developer
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-justify px-[40px] lg:text-justify lg:px-0"
          >
            Performance-driven strategic thinker who possesses excellent
            decision-making skills, initiative, and creativity. Eager to learn
            new technologies and techniques to provide solutions to improve
            customer experience.
          </motion.p>
          <a href={Resume} download="Resume">
            <motion.button
              initial={{ x: -100, opacity: 0, rotate: -2 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex justify-center p-[.08rem_.50rem] bg-[#FFC74D] border-[0_solid_black] font-bold text-xl rounded-sm box-border cursor-pointer -rotate-2 lg:p-[.75rem_1.65rem] text-center text-black leading-10  no-underline decoration-[none_black_solid] relative touch-manipulation focus:outline-0  after:content-[''] after:absolute after:border-[3px] after:border-white after:bottom-[7px] after:left-[7px] after:w-[calc(100%-1px)] after:h-[calc(100%-1px)] hover:after:left-[2px] hover:after:bottom-[2px]"
            >
              Download CV
            </motion.button>
          </a>
        </div>
        <div className="flex justify-center text-center items-center lg:items-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="h-[250px] w-[250px] img-profile rounded-[50%] border-4 border-white mt-[-30px] lg:h-[475px] lg:w-[475px]"
            src="9R.JPG"
            alt="profile"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
