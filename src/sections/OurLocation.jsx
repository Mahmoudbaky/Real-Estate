import React from "react";

const AboutUs = () => {
  return (
    <section id="AbourUs" className="bg-white">
      <div className="flex flex-col justify-center items-center space-y-14 p-14 xl:flex-row xl:space-x-28 md:flex-row md:space-x-20">
        <div id="about-us-text" className="text-black flex flex-col" dir="rtl">
          <span className="text-4xl  py-3">العنوان الوطني</span>
          <span className="py-3 text-wrap">
            ولما كان تناسي حقوق الإنسان وازدراؤها قد أفضيا إلى أعمال همجية
          </span>
        </div>

        <div id="about-us-image" className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12689.328712973129!2d-122.008972!3d37.3346438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2ssa!4v1726831727317!5m2!1sen!2ssa"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
