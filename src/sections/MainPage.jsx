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
        <div className="flex items-start justify-center h-screen mx-10 text-white ">
          <div
            className=" flex flex-col  mt-[300px] xl:items-center md:items-center"
            dir="rtl"
          >
            <span className=" text-2xl">
              مرحبا بكم في شركة مداخيل للأصول العقارية
            </span>
            <br />
            <h1 className="text-6xl font-semibold  xl:items-center md:items-center sm:items-end  text-wrap">
              مداخيل مرجعك للتقييم العقاري
            </h1>
            <br />
            <p className="flex flex-col  mt-5 xl:items-center md:items-center sm:items-end">
              <span className="text-justify">
                المملكة العربية السعودية ذات تاريخ عريق قديم الأزل قدمها
                وعراقتها لا تلغي أنها تتمتع بتطور وحداثة وتجدد يقوم على رؤية
                واضحة تعكس
              </span>
              مقوماتها المتعددة الاقتصادية والبيئية والثروات النفطية و التقدم
              العمراني والسكاني
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
