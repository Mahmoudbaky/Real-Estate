import React from "react";
import { Link } from "react-router-dom";

import { GrUserManager } from "react-icons/gr";
import { BsPersonGear } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { PiBagSimpleBold } from "react-icons/pi";

const OtherServices = () => {
  return (
    <section
      id="OtherServices"
      className="max-w-[1320px] flex flex-col justify-center items-center mx-auto"
    >
      <div id="OtherServices" className="my-11 border-b-2 border-gray-700">
        <h1 className="text-gray-700 text-2xl font-semibold py-3">
          خدمات اخري
        </h1>
      </div>
      <ul className="text-gray-700 max-w-[900px] my-10 flex sm:flex-row gap-28 mb-20 flex-col flex-wrap justify-center ">
        <Link to="/DevWork">
          <li className="flex flex-col items-center cursor-pointer hover:text-[#2cc3c3] transition-all">
            <div class="border-[#2cc3c3] border-4 rounded-full w-20 h-20 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-3xl hover:bg-white hover:text-[#2cc3c3]">
              <PiBagSimpleBold />
            </div>
            <h1 className="mt-5 "> تطوير اعمال</h1>
          </li>
        </Link>
        <Link to="/AccountantServices">
          <li className="flex flex-col items-center cursor-pointer hover:text-[#2cc3c3] transition-all">
            <div class="border-[#2cc3c3] border-4 rounded-full w-20 h-20 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-3xl hover:bg-white hover:text-[#2cc3c3]">
              <CiMoneyBill />
            </div>
            <h1 className="mt-5 ">خدمات محاسبية </h1>
          </li>
        </Link>
        <Link to="/TechServices">
          <li className="flex flex-col items-center cursor-pointer hover:text-[#2cc3c3] transition-all">
            <div class="border-[#2cc3c3] border-4 rounded-full w-20 h-20 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-3xl hover:bg-white hover:text-[#2cc3c3]">
              <BsPersonGear />
            </div>
            <h1 className="mt-5 "> خدمات تقنية</h1>
          </li>
        </Link>
        <Link to="/ManageServices">
          <li className="flex flex-col items-center cursor-pointer hover:text-[#2cc3c3] transition-all">
            <div class="border-[#2cc3c3] border-4 rounded-full w-20 h-20 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-3xl hover:bg-white hover:text-[#2cc3c3]">
              <GrUserManager />
            </div>
            <h1 className="mt-5"> خدمات أدارية </h1>
          </li>
        </Link>
      </ul>
    </section>
  );
};

export default OtherServices;
