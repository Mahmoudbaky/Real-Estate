import React from "react";

// swiper stuff
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// icons
import { BsBuildings } from "react-icons/bs";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { LiaBuildingSolid } from "react-icons/lia";
import { PiFarm } from "react-icons/pi";
import { GiFamilyHouse } from "react-icons/gi";
import { FaHotel } from "react-icons/fa6";
import { FaMapLocation } from "react-icons/fa6";

const RealEstateTypes = () => {
  return (
    <div className="bg-white h-[500px] flex flex-col space-y-14 justify-center items-center ">
      <h1 className="text-2xl border-b-2 border-black py-3">
        انواع الأصول العقارية المتخصصون بها
      </h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[310px] max-w-[1000px] cursor-pointer"
      >
        <SwiperSlide className="flex">
          <div className="flex justify-center items-center flex-col transition-all space-y-5 border-[#2cc3c3] border-[3px] hover:bg-white hover:text-[#2cc3c3] bg-[#2cc3c3] w-[250px] h-[250px] rounded-2xl text-white">
            <BsBuildings className="text-7xl" />
            <span className="text-2xl">Commercial</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-row space-y-3">
          <div className="flex justify-center items-center flex-col transition-all space-y-5 border-[#2cc3c3] border-[3px] hover:bg-white hover:text-[#2cc3c3] bg-[#2cc3c3] w-[250px] h-[250px] rounded-2xl text-white">
            <HiOutlineBuildingStorefront className="text-7xl" />
            <span className="text-2xl">Commercial</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-row space-y-3">
          <div className="flex justify-center items-center flex-col transition-all space-y-5 border-[#2cc3c3] border-[3px] hover:bg-white hover:text-[#2cc3c3] bg-[#2cc3c3] w-[250px] h-[250px] rounded-2xl text-white">
            <LiaBuildingSolid className="text-7xl" />
            <span className="text-2xl " dir="rtl">
              العقارات التجارية
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-row space-y-3">
          <div className="flex justify-center items-center flex-col transition-all space-y-5 border-[#2cc3c3] border-[3px] hover:bg-white hover:text-[#2cc3c3] bg-[#2cc3c3] w-[250px] h-[250px] rounded-2xl text-white">
            <PiFarm className="text-7xl" />
            <span className="text-2xl"> المزارع </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-row ">
          <div className="flex justify-center items-center flex-col transition-all space-y-5 border-[#2cc3c3] border-[3px] hover:bg-white hover:text-[#2cc3c3] bg-[#2cc3c3] w-[250px] h-[250px] rounded-2xl text-white">
            <GiFamilyHouse className="text-7xl" />
            <span className="text-2xl">الفلل</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-row space-y-3">
          <div className="flex justify-center items-center flex-col transition-all space-y-5 border-[#2cc3c3]border-[3px] hover:bg-white hover:text-[#2cc3c3] bg-[#2cc3c3] w-[250px] h-[250px] rounded-2xl text-white">
            <FaHotel className="text-7xl" />
            <span className="text-2xl"> الفنادق </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-row space-y-3">
          <div className="flex justify-center items-center flex-col transition-all space-y-5 border-[#2cc3c3] border-[3px] hover:bg-white hover:text-[#2cc3c3] bg-[#2cc3c3] w-[250px] h-[250px] rounded-2xl text-white">
            <FaMapLocation className="text-7xl" />
            <span className="text-2xl"> الاراضي </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-row space-y-3">
          <div className="flex justify-center items-center flex-col transition-all space-y-5 border-[#2cc3c3] border-[3px] hover:bg-white hover:text-[#2cc3c3] bg-[#2cc3c3] w-[250px] h-[250px] rounded-2xl text-white">
            <BsBuildings className="text-7xl" />
            <span className="text-2xl">Commercial</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RealEstateTypes;
