import React from "react";
import Swal from "sweetalert2";
import Madakheel_croped from "../assets/Madakheel_croped.png";

import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import { FaSnapchatGhost } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const ContactInfo = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bd2d7837-c323-4b65-900e-ee938863d1c0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "شكرا لتواصلك معنا",
        text: "سنقوم بالرد عليك في أقرب وقت ممكن",
        icon: "success",
      });
    }
  };

  return (
    <section
      id="AboutUs"
      className="bg-[#2cc3c3] text-black flex w-full min-h-screen justify-center items-center "
      dir="rtl"
    >
      {/* <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={Madakheel_croped}
          alt="Madakheel"
          className="object-cover w-[100px] h-[100px] self-start"
        />
      </div> */}
      <div className="flex flex-col md:flex-row md:space-x-6 md:justify-between space-y-6 w-full max-w-6xl p-8 text-white mt-20">
        <div
          id="contactus-text"
          className="flex flex-col justify-center space-y-6 xl:space-y-20 md:space-y-20 "
        >
          <div>
            <h1 className="font-bold text-4xl ">تواصل معنا </h1>
            <p className="pt-2 text-sm">
              للطلب أو الاستفسار يمكنك التواصل معنا عبر الهاتف أو البريد
              الإلكتروني
            </p>
          </div>
          <div className="space-y-5 text-base">
            <div className="flex flex-row gap-x-7 items-center">
              <FaPhone />
              <span className="">+966 55 555 5555</span>
            </div>
            <div className="flex flex-row gap-x-7 items-center">
              <IoMdMail />
              <span className="">Madakheel@gmail.com</span>
            </div>
            <div className="flex flex-row gap-x-7 items-center">
              <FaLocationDot />
              <span className="">Madakheel@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-row gap-6 text-xl">
            <a href="#">
              <FaSnapchatGhost />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="">
              <FaXTwitter />
            </a>
            <a href="">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div
          id="contactus-form"
          className="bg-white rounded-xl p-8 text-gray-600 md:w-[400px] xl:w-[400px]"
        >
          <form onSubmit={onSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name">الاسم</label>
              <input
                type="text"
                name="name"
                placeholder="الاسم"
                className="mt-3 w-full ring-1 ring-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-700"
                required
              />
            </div>

            <div>
              <label htmlFor="email"> البريد الإلكتروني </label>
              <input
                type="text"
                name="email"
                placeholder="البريد الإلكتروني"
                className="mt-3 w-full ring-1 ring-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-700"
                required
              />
            </div>

            <div>
              <label htmlFor="phone"> رقم الهاتف </label>
              <input
                type="text"
                name="phone"
                placeholder="رقم الهاتف"
                className="mt-3 w-full ring-1 ring-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-700"
                required
              />
            </div>
            <div>
              <label htmlFor="message"> تفاصيل طلبك </label>
              <textarea
                name="message"
                rows={4}
                className="mt-3 w-full ring-1 ring-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-700"
              />
            </div>
            <button className="inline-block self-start bg-teal-700 text-white font-bold rounded-lg px-6 py-2 text-sm">
              ارسل
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
