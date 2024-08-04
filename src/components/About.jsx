import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="grid grid-cols-1 h-[calc(100%-140px)] sm:pb-10 lg:h-[calc(100vh-140px)] px-[40px] lg:px-[100px] bg-[#0f0e17] lg:grid lg:grid-cols-[400px,1fr]">
        <div className="hidden lg:flex justify-center items-center">
          <motion.img
            className="hidden lg:block border-2 border-white rounded-lg "
            initial={{ x: -120, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.6 }}
            src="8R.JPG"
            alt="aboutPic"
            width={400}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="flex flex-col justify-start pt-14 lg:pl-6 text-[#a7a9be] gap-3"
        >
          <motion.h1 className="text-3xl text-center lg:text-5xl lg:text-start text-white font-bold ">
            ABOUT ME
          </motion.h1>
          <hr className="h-[4px] w-[100%]" />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="text-2xl"
          >
            Hi there, I'm glad to have you here!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="text-md text-justify leading-8"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My
            name is Grifin Kyle Casiano Asa, and I am an aspiring Web Developer.
            My passion for web development ignited in 2021 when I began building
            websites from the ground up. Since then, I have been relentlessly
            advancing and broadening my expertise in this field. Driven by a
            deep desire to delve further into web development, I learned coding,
            utilizing HTML, CSS, JavaScript, and React.js for the front end. For
            the back end, I employed PHP, CodeIgniter, and Laravel. With each
            project, I aim to craft unique and impactful solutions while
            incorporating the latest web technologies. As a dedicated student, I
            am committed to honing my skills and evolving as a proficient web
            developer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="flex flex-col gap-4 lg:flex lg:flex-row lg:justify-between"
          >
            <motion.p whileHover={{ scale: 1.2 }} className="flex">
              <FaPhoneAlt className="text-3xl pr-2" />
              Phone: +63 993-352-8562
            </motion.p>
            <motion.p whileHover={{ scale: 1.2 }} className="flex">
              <MdOutlineMailOutline className="text-3xl pr-2" />
              Email: grifin4kyle@gmail.com
            </motion.p>
            <motion.p whileHover={{ scale: 1.2 }} className="flex">
              <FaCity className="text-3xl pr-2" />
              City: General Trias, Cavite
            </motion.p>
          </motion.div>
          <br />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="text-2xl text-white font-semibold"
          >
            GOAL
          </motion.h2>
          <hr className="h-[4px] w-[100%]" />
          <p className="leading-8 text-justify">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            My primary objective is to work on a diverse array of projects,
            which will allow me to gain practical experience and showcase my
            skills. I am eager to learn a multitude of programming languages and
            frameworks to stay current and versatile in the rapidly evolving
            tech industry. Additionally, I recognize the value of teamwork and
            collaboration. By working closely with others, I aim to develop
            effective communication and interpersonal skills, which are
            essential for any successful developer. Improving my soft skills,
            such as problem-solving, time management, and adaptability, is also
            a priority, as these are crucial for professional growth and
            leadership. Ultimately, my goal is to become a Senior Web Developer.
            I aspire to reach a level of expertise where I can lead projects,
            mentor junior developers, and contribute to innovative solutions.
            Through dedication, continuous learning, and collaboration, I am
            committed to achieving this goal and making a meaningful impact in
            the field of web development.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default About;
