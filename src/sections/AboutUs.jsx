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
    <section className="overflow-hidden pt-20 pb-12 py-10 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="md:5/12 lg:w-5/12">
            <img
              src={city}
              alt="image"
              loading="lazy"
              width="500px"
              height=""
              className="rounded-lg"
            />
          </div>
          <div class="md:7/12 lg:w-6/12" dir="rtl">
            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
              خبراء الأصول العقارية يقدمون لكم أفضل الخدمات في مداخيل
            </h2>
            <p class="mt-6 text-gray-600">
              "مداخيل" على الرغم من حداثتها الا أنها استطاعت كسب ثقة عملائها
              لتصبح رائدة في مجال تقييم الأصول العقارية والدراسات في المملكة
              وذلك لأننا نعتمد على نخبة من المتخصصين في مجال التقييم والدراسات
              ذوي خبرة عريقة و مستوى رفيع من الكفاءة و المصداقية قادرين على خدمة
              العملاء بطريقة تلبي احتياجاتهم و طموحاتهم .​
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

// <div
// // initial={{ opacity: 0 }}
// // animate={{
// //   opacity: inView ? 1 : 0, // Animation trigger based on visibility
// //   x: inView ? 0 : -100, // Slide in from the left when in view
// //   transition: { duration: 1 }, // Duration of animation
// // }}
// className="md:py-[80] py-16 flex mx-auto sm:flex-row flex-col p-5"
// ref={ref}
// >
// {/* photo section */}
// <motion.div
//   // initial={{ opacity: 0, x: -50 }}
//   // animate={inView ? { x: 0 } : { x: "-100vw" }}
//   // transition={{
//   //   type: "spring",
//   //   stiffness: 30,
//   //   damping: 20,
//   //   duration: 2,
//   // }}
//   id="about-us-image"
//   className="basis-[45%] flex justify-center"
// >
//   <img src={city} alt="about us" className="rounded-lg w-[450px]" />
// </motion.div>

// {/* text section */}
// <motion.div
//   // initial={{ opacity: 0, x: 50 }}
//   // animate={inView ? { x: 0 } : { x: "100vw" }}
//   // transition={{
//   //   type: "spring",
//   //   stiffness: 30,
//   //   damping: 20,
//   //   duration: 2,
//   // }}
//   id="about-us-text"
//   className="basis-[55%] px-10 py-5 flex flex-col justify-center items-center xl:items-start md:items-start sm:items-start gap-5"
//   dir="rtl"
// >
//   <span className="text-white border-b-2  border-white py-3">
//     من نحن
//   </span>
//   <h1 className="text-white text-2xl font-semibold py-1 text-pretty">
//     خبراء الأصول العقارية يقدمون لكم أفضل الخدمات في مداخيل
//   </h1>

//   <p className="text-white py-2 text-justify max-w-[90%]">
//     "مداخيل" على الرغم من حداثتها الا أنها استطاعت كسب ثقة عملائها لتصبح
//     رائدة في مجال تقييم الأصول العقارية والدراسات في المملكة وذلك لأننا
//     نعتمد على نخبة من المتخصصين في مجال التقييم والدراسات ذوي خبرة عريقة
//     و مستوى رفيع من الكفاءة و المصداقية قادرين على خدمة العملاء بطريقة
//     تلبي احتياجاتهم و طموحاتهم .​
//   </p>
// </motion.div>
// </div>

// <div class="py-16 ">
//         <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//           <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//             <div class="md:5/12 lg:w-5/12">
//               <img
//                 src={city}
//                 alt="image"
//                 loading="lazy"
//                 width="500px"
//                 height=""
//                 className="rounded-lg"
//               />
//             </div>
//             <div class="md:7/12 lg:w-6/12" dir="rtl">
//               <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
//                 خبراء الأصول العقارية يقدمون لكم أفضل الخدمات في مداخيل
//               </h2>
//               <p class="mt-6 text-gray-600">
//                 "مداخيل" على الرغم من حداثتها الا أنها استطاعت كسب ثقة عملائها
//                 لتصبح رائدة في مجال تقييم الأصول العقارية والدراسات في المملكة
//                 وذلك لأننا نعتمد على نخبة من المتخصصين في مجال التقييم والدراسات
//                 ذوي خبرة عريقة و مستوى رفيع من الكفاءة و المصداقية قادرين على
//                 خدمة العملاء بطريقة تلبي احتياجاتهم و طموحاتهم .​
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

// <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//           <div class="max-w-lg text-white">
//             <h2 class="text-3xl font-extrabold  sm:text-4xl">من نحن</h2>
//             <p class="mt-4 text-gray-200 text-lg">
//               "مداخيل" على الرغم من حداثتها الا أنها استطاعت كسب ثقة عملائها
//               لتصبح رائدة في مجال تقييم الأصول العقارية والدراسات في المملكة
//               وذلك لأننا نعتمد على نخبة من المتخصصين في مجال التقييم والدراسات
//               ذوي خبرة عريقة و مستوى رفيع من الكفاءة و المصداقية قادرين على خدمة
//               العملاء بطريقة تلبي احتياجاتهم و طموحاتهم .​
//             </p>
//             {/* <div class="mt-8">
//               <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">
//                 Learn more about us
//                 <span class="ml-2">&#8594;</span>
//               </a>
//             </div> */}
//           </div>
//           <div class="mt-12 md:mt-0">
//             <img
//               src={city}
//               alt="About Us Image"
//               class="object-cover rounded-lg shadow-md"
//             />
//           </div>
//         </div>
//       </div>
