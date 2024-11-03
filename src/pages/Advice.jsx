import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import { useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";

const Advice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageUrl =
    "https://img.freepik.com/free-photo/front-view-businessman-with-wooden-building-blocks_23-2148780640.jpg?t=st=1730325512~exp=1730329112~hmac=397356d392d8662f48e75b3cb175ead12d3e42e6b5d9c8d3e71407133e8ebaca&w=1060";

  return (
    <section id="Advice">
      <NavBar />
      <div
        className="flex flex-col justify-center items-center p-6 md:p-12 lg:p-36 max-w-[90%] mx-auto"
        dir="rtl"
      >
        {/* Title */}
        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-5 md:mb-8 lg:mb-10 border-b-4 border-brand-blue py-2 md:py-3">
          الاستشارات العقارية
        </span>

        {/* Image */}
        <img
          className="rounded-xl w-full md:max-w-[80%] lg:max-w-[70%]"
          src={imageUrl}
          alt="img"
        />

        {/* Text */}
        <div
          id="Text-detail"
          className="flex flex-col items-start mt-6 md:mt-8 lg:mt-11 w-full md:max-w-[80%] lg:max-w-[70%]"
        >
          <h1
            id="head"
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-4 md:mb-5 border-b-4 border-brand-blue py-2 md:py-3"
          >
            الاستشارات العقارية
          </h1>
          <div className="points space-y-4 md:space-y-6 lg:space-y-8">
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  استشارات شراء وبيع العقارات
                </h2>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  تقديم المشورة حول الاتجاهات العقارية المستقبلية
                </h2>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  استشارات حول تطوير المشاريع العقارية
                </h2>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  تقديم المشورة بشأن تحسين القيمة العقارية
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Advice;
