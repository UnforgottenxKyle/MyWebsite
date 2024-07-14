import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaLaravel,
  FaReact,
  FaGitSquare,
  FaGitAlt,
} from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { SiClickup } from "react-icons/si";
import GoHighLevel from "../assets/GoHighLevel.png";
import python from "../assets/python.png";
import Fma from "../assets/Fma.png";
import { Scale } from "lucide-react";

const Skills = () => {
  return (
    <>
      <section className="grid grid-rows-[140px,1fr] pb-20 px-[40px] h-[calc(100%-140px)] lg:h-[calc(100vh-140px)] lg:px-[100px] bg-[#0f0e17] lg:pb-0">
        <div className="flex justify-center items-center text-4xl lg:text-6xl text-white font-bold ">
          <h1>SKILLS</h1>
        </div>
        <div className="grid grid-cols-2 auto-rows-auto	gap-6 gap-y-6 lg:grid lg:grid-cols-7 lg:grid-rows-[200px,200px] lg:px-[100px] text-white justify-items-center lg:gap-y-10">
          <div className="flex flex-col">
            <motion.div
              className="flex flex-1 text-6xl place-center items-center"
              whileHover={{ scale: 1.5 }}
            >
              <FaHtml5 className="text-[#e44c25]" />
            </motion.div>
            <div className="flex justify-center items-center text-md">
              HTML5
            </div>
          </div>
          <div className="flex flex-col">
            <motion.div
              className="flex flex-1 text-6xl justify-center items-center"
              whileHover={{ scale: 1.5 }}
            >
              <FaCss3Alt className="text-[#34AADD]" />
            </motion.div>
            <div className="flex justify-center items-center text-md">CSS3</div>
          </div>
          <div className="flex flex-col">
            <motion.div
              className="flex flex-1 text-6xl justify-center items-center"
              whileHover={{ scale: 1.5 }}
            >
              <IoLogoJavascript className="text-[#f7df1e]" />
            </motion.div>
            <div className="flex justify-center items-center text-md">
              JavaScript
            </div>
          </div>
          <div className="flex flex-col">
            <motion.div
              className="flex flex-1 text-6xl justify-center items-center"
              whileHover={{ scale: 1.5 }}
            >
              <FaPhp className="text-[#8A94BF]" />
            </motion.div>
            <div className="flex justify-center items-center text-md">PHP</div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-1 text-6xl justify-center items-center">
              <motion.img
                src={python}
                alt="python"
                width={110}
                whileHover={{ scale: 1.5 }}
              />
            </div>
            <div className="flex justify-center items-center text-md">
              Python
            </div>
          </div>
          <div className="flex flex-col">
            <motion.div
              className="flex flex-1 text-6xl justify-center items-center"
              whileHover={{ scale: 1.5 }}
            >
              <FaLaravel className="text-[#FF2919]" />
            </motion.div>
            <div className="flex justify-center items-center text-md">
              Laravel
            </div>
          </div>
          <div className="flex flex-col">
            <motion.div
              className="flex flex-1 text-6xl justify-center items-center"
              whileHover={{ scale: 1.5 }}
            >
              <DiCodeigniter className="text-[#EB4120]" />
            </motion.div>
            <div className="flex justify-center items-center text-md">
              CodeIgniter
            </div>
          </div>
          <div className="flex flex-col">
            <motion.div
              className="flex flex-1 text-6xl justify-center items-center"
              whileHover={{ scale: 1.5 }}
            >
              <SiMysql className="text-[#3563ae]" />
            </motion.div>
            <div className="flex justify-center items-center text-md">
              MySQL
            </div>
          </div>
          <div className="flex flex-col">
            <motion.div
              className="flex flex-1 text-6xl justify-center items-center"
              whileHover={{ scale: 1.5 }}
            >
              <FaReact className="text-cyan-400" />
            </motion.div>
            <div className="flex justify-center items-center text-md">
              ReactJS
            </div>
          </div>
          <div className="flex flex-col">
            <motion.div
              className="flex flex-1 text-6xl justify-center items-center"
              whileHover={{ scale: 1.5 }}
            >
              <RiTailwindCssFill className="text-[#38bdf8]" />
            </motion.div>
            <div className="flex justify-center items-center text-md">
              TailwindCSS
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-1 text-6xl justify-center items-center">
              <motion.img
                src={Fma}
                alt="Figma"
                width={60}
                whileHover={{ scale: 1.5 }}
              />
            </div>
            <div className="flex justify-center items-center text-md">
              Figma
            </div>
          </div>
          <div className="flex flex-col">
            <motion.div
              className="flex flex-1 text-6xl justify-center items-center"
              whileHover={{ scale: 1.5 }}
            >
              <VscVscode className="text-[#1e9bef]" />
            </motion.div>
            <div className="flex justify-center items-center text-md">
              VS Code
            </div>
          </div>
          <div className="flex flex-col">
            <motion.div
              className="flex flex-1 text-6xl justify-center items-center"
              whileHover={{ scale: 1.5 }}
            >
              <FaGitAlt className="text-[#f34b27]" />
            </motion.div>
            <div className="flex justify-center items-center text-md">Git</div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-1 text-6xl justify-center items-center">
              <motion.img
                src={GoHighLevel}
                alt="gohighlevel"
                width={140}
                whileHover={{ scale: 1.5 }}
              />
            </div>
            <div className="flex justify-center items-center text-md">
              GoHighLevel
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
