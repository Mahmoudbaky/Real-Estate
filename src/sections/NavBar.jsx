import React from "react";
import WhatsAppBtn from "../components/WhatsAppBtn";
import Home_2 from "../assets/Home_2.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <nav className="flex justify-between items-center text-black py-6 px-8 bg-white md:px-32 drop-shadow-md sticky">
        <i
          className="xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RxHamburgerMenu />
        </i>

        <div
          className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform py-6
          ${isOpen ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <li className="list-none w-[250px] text-center p-4 hover:bg-[#2cc3c3] hover:text-white transition-all cursor-pointer rounded-md">
            اتصل بنا
          </li>
          <li className="list-none w-[250px] text-center p-4 hover:bg-[#2cc3c3] hover:text-white transition-all cursor-pointer rounded-md">
            التقييم العقاري
          </li>
          <li className="list-none w-[250px] text-center p-4 hover:bg-[#2cc3c3] hover:text-white transition-all cursor-pointer rounded-md">
            خدماتنا
          </li>
          <li className="list-none w-[250px] text-center p-4 hover:bg-[#2cc3c3] hover:text-white transition-all cursor-pointer rounded-md">
            من نحن
          </li>
          <li className="list-none w-[250px] text-center p-4 hover:bg-[#2cc3c3] hover:text-white transition-all cursor-pointer rounded-md">
            الصفحة الرئيسية
          </li>
        </div>

        <div className="hidden xl:block">
          <WhatsAppBtn />
        </div>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-[#2cc3c3] hover:text-white rounded-md transition-all cursor-pointer">
            اتصل بنا
          </li>

          <li className="p-3 hover:bg-[#2cc3c3] hover:text-white rounded-md transition-all cursor-pointer">
            التقييم العقاري
          </li>
          <Link to="#OurServices" smooth>
            <li className="p-3 hover:bg-[#2cc3c3] hover:text-white rounded-md transition-all cursor-pointer">
              خدماتنا
            </li>
          </Link>
          <Link to="#AbourUs" smooth>
            <li className="p-3 hover:bg-[#2cc3c3] hover:text-white rounded-md transition-all cursor-pointer">
              من نحن
            </li>
          </Link>
          <Link to="#MainPage" smooth>
            <li className="p-3 hover:bg-[#2cc3c3] hover:text-white rounded-md transition-all cursor-pointer">
              الصفحة الرئيسية
            </li>
          </Link>
        </ul>
        <Link to="#MainPage" smooth>
          <img
            src={Home_2}
            alt="home"
            className="w-[50px] h-[50px] hover:scale-75 transition-all"
          />
        </Link>
      </nav>
    </BrowserRouter>
  );
};

export default NavBar;
