import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const OpenMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex px-[40px] bg-[#0f0e17] h-[140px] justify-center items-center lg:px-[100px]">
        <div className=" text-5xl lg:flex flex-1 text-white lg:text-5xl lg:text-start">
          <h1 className="font-extrabold	hover:text-[#FFC74D] cursor-pointer">
            Kyle{" "}
            <span className="text-[#FFC74D] ml-[-16px] hover:text-white">
              .
            </span>
          </h1>
        </div>
        <div className="">
          <ul className="hidden lg:flex decoration-none text-white text-xl text-center gap-8 ">
            <li>
              <NavLink
                to="/"
                className="nav-link flex-col items-center hover:text-[#FFC74D] after:content-[''] after:block after:h-[3px] after:w-[70px] after:bg-[#FFC74D] after:rounded-3xl after:transition ease-in duration-200"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className="nav-link flex flex-col items-center hover:text-[#FFC74D] after:content-[''] after:block after:h-[3px] after:w-[70px] after:bg-[#FFC74D] after:rounded-3xl after:transition ease-in duration-200"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Education"
                className="nav-link flex flex-col items-center hover:text-[#FFC74D] after:content-[''] after:block after:h-[3px] after:w-[80px] after:bg-[#FFC74D] after:rounded-3xl after:transition ease-in duration-200"
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Project"
                className="nav-link flex flex-col items-center hover:text-[#FFC74D] after:content-[''] after:block after:h-[3px] after:w-[70px] after:bg-[#FFC74D] after:rounded-3xl after:transition ease-in duration-200"
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Skills"
                className="nav-link flex flex-col items-center hover:text-[#FFC74D] after:content-[''] after:block after:h-[3px] after:w-[70px] after:bg-[#FFC74D] after:rounded-3xl after:transition ease-in duration-200"
              >
                Skills
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex text-2xl text-white lg:hidden">
          <button onClick={OpenMenu}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <motion.div className="fixed bg-[#2e2f3e] flex flex-col justify-center items-center w-full z-20 lg:hidden">
        {isOpen && (
          <motion.ul className="flex flex-col decoration-none text-black text-xl text-center gap-8 p-10 lg:hidden ">
            <li>
              <NavLink
                to="/"
                className="nav-link flex flex-col items-center hover:text-[#FFC74D] after:content-[''] after:block after:h-[3px] after:w-[70px] after:bg-[#FFC74D] after:rounded-3xl after:transition ease-in duration-200"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className="nav-link flex flex-col items-center hover:text-[#FFC74D]  after:content-[''] after:block after:h-[3px] after:w-[70px] after:bg-[#FFC74D] after:rounded-3xl after:transition ease-in duration-200"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Education"
                className="nav-link flex flex-col items-center hover:text-[#FFC74D] after:content-[''] after:block after:h-[3px] after:w-[70px] after:bg-[#FFC74D] after:rounded-3xl after:transition ease-in duration-200"
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link flex flex-col items-center hover:text-[#FFC74D] after:content-[''] after:block after:h-[3px] after:w-[70px] after:bg-[#FFC74D] after:rounded-3xl after:transition ease-in duration-200">
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Skills"
                className="nav-link flex flex-col items-center hover:text-[#FFC74D] after:content-[''] after:block after:h-[3px] after:w-[70px] after:bg-[#FFC74D] after:rounded-3xl after:transition ease-in duration-200"
              >
                Skills
              </NavLink>
            </li>
          </motion.ul>
        )}
      </motion.div>
    </>
  );
};

export default Navbar;
