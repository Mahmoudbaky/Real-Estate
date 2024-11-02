import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import { useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";

const Auctions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageUrl =
    "https://img.freepik.com/free-photo/front-view-businessman-with-wooden-building-blocks_23-2148780640.jpg?t=st=1730325512~exp=1730329112~hmac=397356d392d8662f48e75b3cb175ead12d3e42e6b5d9c8d3e71407133e8ebaca&w=1060";

  return (
    <section id="TechServices">
      <NavBar />
      <div
        className="flex flex-col justify-center items-center p-36 max-w-[90% fasdf] mx-auto"
        dir="rtl"
      >
        {/* Title */}
        <span className="text-4xl font-semibold text-gray-700 mb-10 border-b-4 border-brand-blue py-3 ">
          خدمة المزادات العقارية
        </span>

        {/* Image */}
        <img className="rounded-xl max-w-[70%]" src={imageUrl} alt="img" />

        {/* Text */}
        <div
          id="Text-detail"
          className="flex flex-col items-start mt-11 max-w-[70%]"
        >
          <h1
            id="head"
            className="text-2xl font-semibold text-gray-700 mb-5 border-b-4 border-brand-blue py-3 "
          >
            خدمة المزادات العقارية
          </h1>
          <div className="points space-y-8">
            <div id="point">
              <div className="flex items-center mb-3">
                <RxDotFilled className="text-4xl text-brand-blue" />
                <h2 className="text-xl text-gray-700  ">تنظيم المزادات</h2>
              </div>
              <div className="point-detail max-w-[90%] m-auto space-y-3">
                <p className=" ">
                  <span className="ml-1"> إعداد وتنظيم المزادات :</span>
                  تنظيم مزادات عقارية متكاملة تشمل تحديد التواريخ والمواقع
                  المناسبة للمزادات، وتجهيز أماكن العرض وإعداد الكتيبات
                  والمستندات الضرورية
                </p>
                <p className=" ">
                  <span className="ml-1"> اختيار وتقييم العقارات : </span>
                  اختيار العقارات المناسبة للمزاد بناءً على تقييم شامل يشمل
                  القيمة السوقية والحالة القانونية والمالية.
                </p>
                <p className=" ">
                  <span className="ml-1"> الترويج للمزاد : </span>
                  إنشاء حملات ترويجية فعالة لجذب المشترين المحتملين عبر وسائل
                  الإعلام المختلفة، بما في ذلك الإعلانات الرقمية والمطبوعات.
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-3">
                <RxDotFilled className="text-4xl text-brand-blue" />
                <h2 className="text-xl text-gray-700 ">
                  تقديم المشورة لبيع وشراء العقارات
                </h2>
              </div>
              <div className="point-detail max-w-[90%] m-auto space-y-3">
                <p className=" ">
                  <span className="ml-1"> استشارات للمشترين :</span>
                  تقديم استشارات للمشترين حول كيفية المشاركة في المزادات، وتقديم
                  المشورة بشأن تقييم العقارات والأسعار المناسبة
                </p>
                <p className=" ">
                  <span className="ml-1"> استشارات للبائعين : </span>
                  تقديم استشارات للبائعين حول كيفية تقديم عقاراتهم بشكل أفضل في
                  المزادات، بما في ذلك تحسين العرض وتجهيز العقارات للعرض
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-3">
                <RxDotFilled className="text-4xl text-brand-blue" />
                <h2 className="text-xl text-gray-700"> إدارة عمليات المزاد</h2>
              </div>
              <div className="point-detail max-w-[90%] m-auto space-y-3">
                <p className=" ">
                  <span className="ml-1"> تجهيز المستندات القانونية : </span>
                  التأكد من تجهيز جميع المستندات القانونية المطلوبة للمزاد، بما
                  في ذلك العقود والمستندات القانونية المتعلقة بالعقارات.
                </p>
                <p className=" ">
                  <span className="ml-1"> إدارة العطاءات : </span>
                  تنظيم عملية تقديم العطاءات وتقييمها، والتأكد من سير المزاد
                  بشكل شفاف وعادل
                </p>
                <p className=" ">
                  <span className="ml-1"> تنظيم الدفع والنقل : </span>
                  إدارة إجراءات الدفع من قبل المشترين وترتيب عمليات النقل
                  للملكية، وضمان تنفيذ جميع الشروط المتفق عليها.
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-3">
                <RxDotFilled className="text-4xl text-brand-blue" />
                <h2 className="text-xl text-gray-700  ">
                  الترويج والتسويق للمزادات
                </h2>
              </div>
              <div className="point-detail max-w-[90%] m-auto space-y-3">
                <p className=" ">
                  <span className="ml-1"> التسويق الرقمي : </span>
                  استخدام استراتيجيات التسويق الرقمي للترويج للمزادات، بما في
                  ذلك الإعلانات عبر الإنترنت والتسويق عبر وسائل التواصل
                  الاجتماعي، والبريد الإلكتروني.
                </p>
                <p className=" ">
                  <span className="ml-1"> التسويق التقليدي : </span>
                  استخدام الوسائل التقليدية مثل الإعلانات في الصحف والمجلات،
                  وتنظيم فعاليات ترويجية لجذب المشترين المحتملين
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-3">
                <RxDotFilled className="text-4xl text-brand-blue" />
                <h2 className="text-xl text-gray-700  ">خدمات ما بعد المزاد</h2>
              </div>
              <div className="point-detail max-w-[90%] m-auto space-y-3">
                <p className=" ">
                  <span className="ml-1">خدمات العملاء : </span>
                  تقديم خدمات دعم العملاء بعد المزاد لضمان رضا العملاء وحل أي
                  مشكلات قد تطرأ
                </p>
                <p className=" ">
                  <span className="ml-1"> تحليل الأداء : </span> تقديم تقارير
                  تحليلية حول أداء المزاد وتقييم النتائج لتحقيق تحسينات في
                  المستقبل.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Auctions;
