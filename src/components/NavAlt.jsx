import React from "react";
import Madakheel from "../assets/Madakheel.png";
import WhatsAppBtn from "./WhatsAppBtn";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const NavAlt = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
    // const navLinks = document.querySelector(".nav-links");
    // navLinks.classList.toggle("top-[9%]");
  };

  return (
    <nav className="flex items-center justify-between p-3 mx-3">
      <div className="flex items-center gap-6">
        {isOpen ? (
          <IoClose
            className="md:hidden block text-black text-3xl cursor-pointer "
            onClick={handleMenu}
          />
        ) : (
          <HiOutlineMenu
            className="md:hidden block text-black text-3xl cursor-pointer "
            onClick={handleMenu}
          />
        )}
        <WhatsAppBtn />
      </div>

      <div
        className={`md:static absolute md:min-h-fit bg-white min-h-[60vh] md:w-auto left-0 ${
          isOpen ? "top-[9%]" : "top-[-100%]"
        }  w-full flex items-center`}
      >
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <a className="hover:text-gray-500" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Our Services
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Real Estate
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="w-16">
        <img src={Madakheel} alt=".." />
      </div>
    </nav>
  );
};

export default NavAlt;
