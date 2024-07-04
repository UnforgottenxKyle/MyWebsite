import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex bg-[#2b2d42] h-[140px] justify-center items-center lg:px-[100px] sm:px-0 sm:pr-4">
        <div className="flex-1 text-white lg:text-5xl lg:text-start sm:text-7xl sm:text-center">
          Portfolio
        </div>
        <div className="">
          <ul className="lg:flex decoration-none text-white text-xl text-center gap-8 sm:hidden ">
            <li>
              <Link className="nav-link flex-col items-center hover:text-orange-300 after:content-[''] after:block after:h-[3px] after:w-[70px] after:bg-white after:rounded-3xl after:transition ease-in duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link flex-col items-center hover:text-orange-300 after:content-[''] after:block after:h-[3px] after:w-[70px] after:bg-white after:rounded-3xl after:transition ease-in duration-200">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link flex-col items-center hover:text-orange-300 after:content-[''] after:block after:h-[3px] after:w-[70px] after:bg-white after:rounded-3xl after:transition ease-in duration-200">
                Project
              </Link>
            </li>
            <li>
              <Link className="nav-link flex-col items-center hover:text-orange-300 after:content-[''] after:block after:h-[3px] after:w-[70px] after:bg-white after:rounded-3xl after:transition ease-in duration-200">
                Skills
              </Link>
            </li>
            <li>
              <Link className="nav-link flex-col items-center hover:text-orange-300 after:content-[''] after:block after:h-[3px] after:w-[70px] after:bg-white after:rounded-3xl after:transition ease-in duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex text-2xl text-white lg:hidden">
          <i className="cursor-pointer" class="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
