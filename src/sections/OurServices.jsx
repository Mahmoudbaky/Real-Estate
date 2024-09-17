import React from "react";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { TbUserSearch } from "react-icons/tb";
import { LuFileSearch } from "react-icons/lu";

const OurServices = () => {
  return (
    <section
      id="OurServices"
      className="max-w-[1320px] flex flex-col justify-center items-center mx-auto"
    >
      <div id="OurServices" className="my-11 border-b-2 border-black">
        <h1 className="text-2xl font-semibold py-3">خدماتنا</h1>
      </div>
      <ul className=" my-10 flex sm:flex-row gap-28 mb-20 flex-col">
        <li className="flex flex-col items-center cursor-pointer hover:text-[#2cc3c3] transition-all">
          <div class="border-[#2cc3c3] border-4 rounded-full w-20 h-20 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-3xl hover:bg-white hover:text-[#2cc3c3]">
            <LuFileSearch />
          </div>
          <h1 className="mt-5"> التدقيق والمراجعة</h1>
        </li>
        <li className="flex flex-col items-center cursor-pointer hover:text-[#2cc3c3] transition-all">
          <div class="border-[#2cc3c3] border-4 rounded-full w-20 h-20 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-3xl hover:bg-white hover:text-[#2cc3c3]">
            <TbUserSearch />
          </div>
          <h1 className="mt-5"> الاستشارات </h1>
        </li>
        <li className="flex flex-col items-center cursor-pointer hover:text-[#2cc3c3] transition-all">
          <div class="border-[#2cc3c3] border-4 rounded-full w-20 h-20 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-3xl hover:bg-white hover:text-[#2cc3c3]">
            <MdOutlineContentPasteSearch />
          </div>
          <h1 className="mt-5">الدراسات العقارية</h1>
        </li>
        <li className="flex flex-col items-center cursor-pointer hover:text-[#2cc3c3] transition-all">
          <div class="border-[#2cc3c3] border-4 rounded-full w-20 h-20 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-3xl hover:bg-white hover:text-[#2cc3c3]">
            <MdOutlineRealEstateAgent />
          </div>
          <h1 className="mt-5">تقييم الأصول العقارية</h1>
        </li>
      </ul>
    </section>
  );
};

export default OurServices;
