import React from "react";
import real_estate from "../assets/real_estate.jpg";
import city from "../assets/city.webp";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Set this to false to animate every time the section comes into view
    threshold: 0.1, // Adjust this threshold to suit your needs
  });

  return (
    <section id="AbourUs" className="bg-[#2cc3c3]">
      <div
        // initial={{ opacity: 0 }}
        // animate={{
        //   opacity: inView ? 1 : 0, // Animation trigger based on visibility
        //   x: inView ? 0 : -100, // Slide in from the left when in view
        //   transition: { duration: 1 }, // Duration of animation
        // }}
        className="md:py-[80] py-16 flex mx-auto sm:flex-row flex-col p-5"
        ref={ref}
      >
        {/* photo section */}
        <motion.div
          // initial={{ opacity: 0, x: -50 }}
          // animate={inView ? { x: 0 } : { x: "-100vw" }}
          // transition={{
          //   type: "spring",
          //   stiffness: 30,
          //   damping: 20,
          //   duration: 2,
          // }}
          id="about-us-image"
          className="basis-[45%] flex justify-center"
        >
          <img src={city} alt="about us" className="rounded-lg w-[450px]" />
        </motion.div>

        {/* text section */}
        <motion.div
          // initial={{ opacity: 0, x: 50 }}
          // animate={inView ? { x: 0 } : { x: "100vw" }}
          // transition={{
          //   type: "spring",
          //   stiffness: 30,
          //   damping: 20,
          //   duration: 2,
          // }}
          id="about-us-text"
          className="basis-[55%] px-10 py-5 flex flex-col justify-center items-center xl:items-start md:items-start sm:items-start gap-5"
          dir="rtl"
        >
          <span className="text-white border-b-2  border-white py-3">
            من نحن
          </span>
          <h1 className="text-white text-2xl font-semibold py-1 text-pretty">
            خبراء الأصول العقارية يقدمون لكم أفضل الخدمات في مداخيل
          </h1>

          <p className="text-white py-2 text-justify max-w-[90%]">
            "مداخيل" على الرغم من حداثتها الا أنها استطاعت كسب ثقة عملائها لتصبح
            رائدة في مجال تقييم الأصول العقارية والدراسات في المملكة وذلك لأننا
            نعتمد على نخبة من المتخصصين في مجال التقييم والدراسات ذوي خبرة عريقة
            و مستوى رفيع من الكفاءة و المصداقية قادرين على خدمة العملاء بطريقة
            تلبي احتياجاتهم و طموحاتهم .​
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
