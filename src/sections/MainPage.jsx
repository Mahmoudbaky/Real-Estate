import React from "react";
import luxury_home from "../assets/luxury_home.jpg";
import { NavBar } from "../sections";
import { motion } from "framer-motion";

const MainPage = () => {
  const parentStyle = {
    backgroundImage: `url(${luxury_home})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // Adjust as needed (cover, contain, etc.)
    backgroundColor: "black", // Fallback color if the image doesn't load
    minHeight: "100vh", // Ensure the background covers the entire viewport
  };

  const overLay = {
    minHeight: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity of the overlay
  };

  return (
    <section id="MainPage" style={parentStyle}>
      <div style={overLay} className="">
        <NavBar />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className=" flex flex-col  mt-[250px] xl:items-start xl:max-w-[90%] md:items-start md:max-w-[90%] max-w-[90%] text-white "
          dir="rtl"
        >
          {/* <span className=" text-2xl">
              مرحبا بكم في شركة مداخيل للأصول العقارية
            </span> */}

          <h1 className="text-6xl font-semibold  xl:items-center md:items-center sm:items-end  text-wrap">
            مداخيل مرجعك للتقييم العقاري
          </h1>
          <br />
          <p className="flex flex-col mt-5 sm:items-end xl:max-w-[1000px] md:max-w-[1000px] xl:text-justify">
            المملكة العربية السعودية ذات تاريخ عريق قديم الأزل قدمها وعراقتها لا
            تلغي أنها تتمتع بتطور وحداثة وتجدد يقوم على رؤية واضحة تعكس مقوماتها
            المتعددة الاقتصادية والبيئية والثروات النفطية و التقدم العمراني
            والسكاني
          </p>
          <div className="flex mt-8 gap-5">
            <button className="bg-brand-blue px-8 py-3 rounded-full border-brand-blue border-2 hover:bg-transparent transition-all">
              أكتشف الان
            </button>
            <button className="bg-brand-blue px-8 py-3 rounded-full border-brand-blue border-2 hover:bg-transparent transition-all">
              أتصل بنا
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainPage;
