import React from "react";
import makkah from "../assets/makkah.jpg";

import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ContactUs = () => {
  return (
    <section id="AboutUs" className="bg-white text-black">
      <div className="md:py-[80] py-16 flex mx-auto sm:flex-row flex-col p-5 xl:flex-row gap-9">
        <div
          id="about-us-text"
          className="basis-[55%] px-10 py-5 flex flex-col justify-center items-center lg:items-center xl:items-start md:items-start sm:items-start gap-5"
          dir="rtl"
        >
          <span className=" border-b-2 border-black py-3"> تواصل معنا </span>
          <h1 className=" text-2xl font-semibold py-1 text-pretty">
            اطلب خدماتنا
          </h1>

          <p className=" py-2 text-pretty">
            نسعد بتقديم أفضل الخدمات اليكم من خلال الاتصال بنا على الرقم الموحد
            <br />
            او عن طريق الايميل او من خلال نموذج الطلب ونعدكم بتجربة مميزة
          </p>

          <ul className="flex flex-row gap-12 flex-wrap items-center">
            <li className="flex items-center gap-4">
              <div class="border-[#2cc3c3] border-4 rounded-full w-12 h-12 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-xl hover:bg-white hover:text-[#2cc3c3]">
                <FaPhone />
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <span>رقم الهاتف: </span>
                <span> 920000000</span>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div class="border-[#2cc3c3] border-4 rounded-full w-12 h-12 transition-all text-white bg-[#2cc3c3] flex items-center justify-center text-xl hover:bg-white hover:text-[#2cc3c3]">
                <IoMdMail />
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <span>البريد الالكتروني: </span>
                <span> madakheel@gamil.com </span>
              </div>
            </li>
          </ul>
        </div>

        <div id="about-us-image" className="basis-[45%] flex justify-center">
          <img src={makkah} alt="about us" className="rounded-lg w-[450px]" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
