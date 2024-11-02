import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import { useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";

const DevWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageUrl =
    "https://img.freepik.com/free-photo/front-view-businessman-with-wooden-building-blocks_23-2148780640.jpg?t=st=1730325512~exp=1730329112~hmac=397356d392d8662f48e75b3cb175ead12d3e42e6b5d9c8d3e71407133e8ebaca&w=1060";

  return (
    <section id="DevWork">
      <NavBar />
      <div
        className="flex flex-col justify-center items-center p-4 sm:p-6 md:p-12 lg:p-24 xl:p-36 max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] mx-auto"
        dir="rtl"
      >
        {/* Title */}
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-4 sm:mb-5 md:mb-7 lg:mb-10 border-b-4 border-brand-blue py-1 sm:py-2 md:py-3">
          تطوير الاعمال
        </span>

        {/* Image */}
        <img
          className="rounded-xl w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%]"
          src={imageUrl}
          alt="img"
        />

        {/* Text */}
        <div
          id="Text-detail"
          className="flex flex-col items-start mt-4 sm:mt-6 md:mt-8 lg:mt-11 w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%]"
        >
          <h1
            id="head"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-3 sm:mb-4 md:mb-5 border-b-4 border-brand-blue py-1 sm:py-2 md:py-3"
          >
            تقديم المشورة في مجال تطوير وتأسيس المنشآت
          </h1>
          <div className="points space-y-2 sm:space-y-3">
            <div id="point">
              <div className="flex items-center mb-2 sm:mb-3">
                <RxDotFilled className="text-2xl sm:text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-base sm:text-lg md:text-xl text-gray-700">
                  استشارات تطوير الأعمال
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 sm:space-y-3">
                <p>
                  <span className="ml-1">
                    إجراء دراسة شاملة للسوق لتحديد الفرص :
                  </span>
                  تحليل الفرص السوقية التجارية المناسبة وتقديم توصيات حول كيفية
                  استغلالها.
                </p>
                <p>
                  <span className="ml-1">إعداد خطط العمل :</span>
                  تحليل الفرص السوقية التجارية المناسبة وتقديم توصيات حول كيفية
                  استغلالها.
                </p>
                <p>
                  <span className="ml-1">تطوير استراتيجيات النمو :</span>
                  تقديم استراتيجيات نمو مبتكرة تتناسب مع أهداف المنشأة، مثل
                  التوسع الجغرافي، إدخال منتجات جديدة، أو دخول أسواق جديدة
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 sm:mb-3">
                <RxDotFilled className="text-2xl sm:text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-base sm:text-lg md:text-xl text-gray-700">
                  استشارات تأسيس المنشآت
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 sm:space-y-3">
                <p>
                  <span className="ml-1">تخطيط المنشأة :</span>
                  تقديم مشورة متكاملة حول كيفية بدء وتأسيس منشأة جديدة، بما في
                  ذلك اختيار الموقع، تصميم الهيكل التنظيمي، وتطوير استراتيجية
                  الأعمال
                </p>
                <p>
                  <span className="ml-1"> الامتثال القانوني : </span>
                  مساعدة المنشآت في فهم المتطلبات القانونية والتشريعات المحلية
                  المتعلقة بتأسيس وتشغيل الأعمال، بما في ذلك التراخيص والتسجيلات
                </p>
                <p>
                  <span className="ml-1"> إعداد الوثائق الرسمية : </span>
                  تقديم الدعم في إعداد الوثائق الرسمية المطلوبة لتأسيس المنشأة
                  مثل عقود التأسيس مذكرات التفاهم، واتفاقيات الشراكة
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 sm:mb-3">
                <RxDotFilled className="text-2xl sm:text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-base sm:text-lg md:text-xl text-gray-700">
                  استشارات تحسين الأداء
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 sm:space-y-3">
                <p>
                  <span className="ml-1"> تحليل الأداء الداخلي : </span>
                  تقييم الأداء الداخلي للمنشأة وتقديم توصيات لتحسين الكفاءة
                  التشغيلية، وزيادة الإنتاجية وتقليل التكاليف
                </p>
                <p>
                  <span className="ml-1"> تطوير الإجراءات : </span>
                  مساعدة المنشآت في تطوير وتحسين الإجراءات الإدارية والتشغيلية
                  لضمان التشغيل السلس والفعال
                </p>
                <p>
                  <span className="ml-1"> تقييم نظم المعلومات : </span>
                  تقديم مشورة حول كيفية تحسين نظم المعلومات والإدارة لتسهيل
                  العمليات وزيادة الفعالية
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 sm:mb-3">
                <RxDotFilled className="text-2xl sm:text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-base sm:text-lg md:text-xl text-gray-700">
                  استشارات مالية واستثمارية
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 sm:space-y-3">
                <p>
                  <span className="ml-1">
                    {" "}
                    إعداد الميزانيات والتوقعات المالية :{" "}
                  </span>
                  تقديم دعم في إعداد الميزانيات، التوقعات المالية، وتحليل الجدوى
                  الاقتصادية للمشاريع.
                </p>
                <p>
                  <span className="ml-1"> تقديم المشورة في التمويل : </span>
                  مساعدة المنشآت في تحديد مصادر التمويل المناسبة وتقديم الدعم في
                  التفاوض مع المستثمرين والبنوك
                </p>
                <p>
                  <span className="ml-1"> إدارة المخاطر المالية : </span>: تقديم
                  استشارات حول إدارة المخاطر المالية والتأمين لضمان استقرار
                  المنشأة وحمايتها من المخاطر المحتملة
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 sm:mb-3">
                <RxDotFilled className="text-2xl sm:text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-base sm:text-lg md:text-xl text-gray-700">
                  استشارات تسويقية وتجارية
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 sm:space-y-3">
                <p>
                  <span className="ml-1"> استراتيجيات التسويق : </span>
                  تطوير استراتيجيات تسويقية فعالة تشمل استهداف الأسواق المناسبة،
                  تحسين العلامة التجارية، وتطوير حملات ترويجية
                </p>
                <p>
                  <span className="ml-1"> تحليل السوق والمنافسين : </span>:
                  تقديم مشورة حول تحليل السوق والمنافسين لفهم الاتجاهات والفرص،
                  وتطوير استراتيجيات للتفوق على المنافسين
                </p>
                <p>
                  <span className="ml-1"> تطوير علاقات العملاء : </span>: تقديم
                  : تقديم استشارات حول كيفية تحسين العلاقات مع العملاء وزيادة
                  ولائهم من خلال برامج وخدمات مخصصة
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 sm:mb-3">
                <RxDotFilled className="text-2xl sm:text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-base sm:text-lg md:text-xl text-gray-700">
                  تطوير القدرات البشرية
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 sm:space-y-3">
                <p>
                  <span className="ml-1"> تدريب وتطوير الموظفين : </span>
                  تقديم برامج تدريبية متخصصة لتطوير مهارات وقدرات الموظفين،
                  وتعزيز الكفاءة في العمل.
                </p>
                <p>
                  <span className="ml-1"> استشارات التوظيف : </span> تقديم
                  مساعدة المنشآت في استراتيجيات التوظيف، بما في ذلك استقطاب
                  واختيار وتوظيف أفضل الكفاءات
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

export default DevWork;
