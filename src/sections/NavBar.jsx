import React from "react";
import WhatsAppBtn from "../components/WhatsAppBtn";
import WhatsAppBtn2 from "../components/WhatsAppBtn2";
import Home_2 from "../assets/Home_2.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Madakheel from "../assets/Madakheel.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav
      className="h-[80px] flex  flex-row-reverse justify-between w-full items-center text-black py-14 border-b-[1px] border-gray-800 px-8 bg-transparent md:px-32 z-10 drop-shadow-md"
      dir="rtl"
    >
      <i
        className="xl:hidden block text-5xl cursor-pointer text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RxHamburgerMenu />
      </i>

      <div
        className={`absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform py-6 
          ${isOpen ? " block" : "-translate-y-full transition-all hidden"}`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <Link to="#AboutUs" smooth>
          <li className="list-none w-[250px] text-center p-4 hover:bg-[#2cc3c3] hover:text-white transition-all cursor-pointer rounded-md">
            اتصل بنا
          </li>
        </Link>
        <Link to="#RealEstate" smooth>
          <li className="list-none w-[250px] text-center p-4 hover:bg-[#2cc3c3] hover:text-white transition-all cursor-pointer rounded-md">
            التقييم العقاري
          </li>
        </Link>
        <Link to="#OurServices" smooth>
          <li className="list-none w-[250px] text-center p-4 hover:bg-[#2cc3c3] hover:text-white transition-all cursor-pointer rounded-md">
            خدماتنا
          </li>
        </Link>
        <Link to="#AbourUs" smooth>
          <li className="list-none w-[250px] text-center p-4 hover:bg-[#2cc3c3] hover:text-white transition-all cursor-pointer rounded-md">
            من نحن
          </li>
        </Link>
        <Link to="#MainPage" smooth>
          <li className="list-none w-[250px] text-center p-4 hover:bg-[#2cc3c3] hover:text-white transition-all cursor-pointer rounded-md">
            الصفحة الرئيسية
          </li>
        </Link>
        <WhatsAppBtn2 />
      </div>

      <div className="hidden xl:block">
        <WhatsAppBtn />
      </div>

      <ul
        className="hidden xl:flex xl:flex-row-reverse items-center gap-12 font-semibold text-base text-white"
        dir="rtl"
      >
        <Link to="/BlogList" smooth>
          <li className="p-3 hover:bg-[#2cc3c3] hover:text-white rounded-md transition-all cursor-pointer">
            بلوج
          </li>
        </Link>
        <Link to="#AboutUs" smooth>
          <li className="p-3 hover:bg-[#2cc3c3] hover:text-white rounded-md transition-all cursor-pointer">
            اتصل بنا
          </li>
        </Link>
        <Link to="#RealEstate" smooth>
          <li className="p-3 hover:bg-[#2cc3c3] hover:text-white rounded-md transition-all cursor-pointer">
            التقييم العقاري
          </li>
        </Link>
        {/* <Link to="#OurOffers" smooth>
          <li className="p-3 hover:bg-[#2cc3c3] hover:text-white rounded-md transition-all cursor-pointer">
            عروضنا
          </li>
        </Link> */}
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
          src={Madakheel}
          alt="home"
          className="w-[130px] h-[130px] hover:scale-75 transition-all"
        />
      </Link>
    </nav>
  );
};

export default NavBar;

//  opacity-0
