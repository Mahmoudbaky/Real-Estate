import React from "react";
import luxury_home from "../assets/luxury_home.jpg";
import { NavBar } from "../sections";

const MainPage = () => {
  const parentStyle = {
    backgroundImage: `url(${luxury_home})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // Adjust as needed (cover, contain, etc.)
    backgroundColor: "black", // Fallback color if the image doesn't load
    minHeight: "100vh", // Ensure the background covers the entire viewport
    // // opacity: 0.9, // Adjust the opacity of the background image
  };

  const overLay = {
    minHeight: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity of the overlay
  };

  return (
    <section id="MainPage" style={parentStyle}>
      <div style={overLay}>
        <NavBar />
        <div
          className="flex flex-col gap-5 text-white  justify-center items-center mt-[200px] max-w-[95%] xl:max-w-[95%] xl:mt-[200px] md:max-w-[95%] md:mt-[200px] xl:justify-center xl:items-start md:items-center "
          dir="rtl"
        >
          <h1 className="text-6xl font-semibold xl:items-center md:items-center sm:items-end text-wrap ">
            مداخيل مرجعك للتقييم العقاري
          </h1>
          <p className="flex flex-col  mt-5 xl:items-center md:items-center sm:items-end max-w-[800px] text-justify text-wrap">
            المملكة العربية السعودية ذات تاريخ عريق قديم الأزل قدمها وعراقتها لا
            تلغي أنها تتمتع بتطور وحداثة وتجدد يقوم على رؤية واضحة تعكس مقوماتها
            المتعددة الاقتصادية والبيئية والثروات النفطية و التقدم العمراني
            والسكاني
          </p>
          <div className="flex gap-3">
            <button className="bg-brand-blue px-7 py-3 rounded-full border-2 border-brand-blue hover:bg-transparent transition-colors">
              اكتشف الان
            </button>
            <button className="">اتصل بنا</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
