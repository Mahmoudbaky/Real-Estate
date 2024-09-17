import React from "react";
import real_estate from "../assets/real_estate.jpg";

const AboutUs = () => {
  return (
    <section id="AbourUs" className="bg-[#2cc3c3] ">
      <div className="md:py-[80] py-16 flex mx-auto sm:flex-row flex-col p-5">
        <div id="about-us-image" className="basis-[45%] flex justify-center">
          <img
            src={real_estate}
            alt="about us"
            className="rounded-lg w-[450px]"
          />
        </div>

        <div
          id="about-us-text"
          className="basis-[55%] px-10 py-5 flex flex-col justify-center items-center xl:items-start md:items-start sm:items-start gap-5"
          dir="rtl"
        >
          <span className="text-white border-b-2 border-white py-3">
            من نحن{" "}
          </span>
          <h1 className="text-white text-2xl font-semibold py-1 text-pretty">
            خبراء الأصول العقارية يقدمون لكم أفضل الخدمات في فاليو كود
          </h1>

          <p className="text-white py-2 text-pretty">
            "فاليو كود" على الرغم من حداثتها الا أنها استطاعت كسب ثقة عملائها
            لتصبح رائدة في مجال تقييم الأصول العقارية والدراسات في المملكة وذلك
            لأننا نعتمد على نخبة من المتخصصين في مجال التقييم والدراسات ذوي خبرة
            عريقة و مستوى رفيع من الكفاءة و المصداقية قادرين على خدمة العملاء
            بطريقة تلبي احتياجاتهم و طموحاتهم .​
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
