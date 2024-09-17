import React from "react";
import { TbHomeDollar } from "react-icons/tb";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { BsShieldPlus } from "react-icons/bs";
import { GoLaw } from "react-icons/go";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { TbFilter } from "react-icons/tb";
import { FaCalculator } from "react-icons/fa";

const RealEstate = () => {
  return (
    <section id="RealEstate" className="bg-[#2cc3c3]">
      <div className="max-w-[1320px] flex flex-col justify-center items-center mx-auto">
        <div id="OurServices" className="my-11 border-b-2 ">
          <h1 className="text-white text-2xl font-semibold py-3">
            أهم أغراض التقييم
          </h1>
        </div>
        <ul className="w-[800px] my-10 flex sm:flex-row gap-28 mb-20 flex-col flex-wrap justify-center">
          <li className="text-white flex flex-col items-center cursor-pointer  transition-all">
            <div class="border-white border-4 rounded-full w-20 h-20 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-3xl hover:bg-white hover:text-[#2cc3c3]">
              <FaCalculator />
            </div>
            <h1 className="mt-5"> أغراض محاسبية </h1>
          </li>
          <li className="text-white flex flex-col items-center cursor-pointer  transition-all">
            <div class="border-white border-4 rounded-full w-20 h-20 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-3xl hover:bg-white hover:text-[#2cc3c3]">
              <TbFilter />
            </div>
            <h1 className="mt-5"> التصفية </h1>
          </li>
          <li className="text-white flex flex-col items-center cursor-pointer  transition-all">
            <div class="border-white border-4 rounded-full w-20 h-20 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-3xl hover:bg-white hover:text-[#2cc3c3]">
              <FaMoneyBillTrendUp />
            </div>
            <h1 className="mt-5"> أغراض الاستشارات </h1>
          </li>
          <li className="text-white flex flex-col items-center cursor-pointer  transition-all">
            <div class="border-white border-4 rounded-full w-20 h-20 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-3xl hover:bg-white hover:text-[#2cc3c3]">
              <GoLaw />
            </div>
            <h1 className="mt-5"> الأغراض القانوية </h1>
          </li>
          <li className="text-white flex flex-col items-center cursor-pointer  transition-all">
            <div class="border-white  border-4 rounded-full w-20 h-20 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-3xl hover:bg-white hover:text-[#2cc3c3]">
              <BsShieldPlus />
            </div>
            <h1 className="mt-5"> التأمين</h1>
          </li>
          <li className="text-white flex flex-col items-center cursor-pointer transition-all">
            <div class="border-white border-4 rounded-full w-20 h-20 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-3xl hover:bg-white hover:text-[#2cc3c3]">
              <MdOutlineRealEstateAgent />
            </div>
            <h1 className="mt-5"> الرهن و التمويل </h1>
          </li>
          <li className="text-white flex flex-col items-center cursor-pointer  transition-all">
            <div class="border-white border-4 rounded-full w-20 h-20 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-3xl hover:bg-white hover:text-[#2cc3c3]">
              <TbHomeDollar />
            </div>
            <h1 className="mt-5"> الشراء و البيع </h1>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RealEstate;
