import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import { useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";

const AccountantServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageUrl =
    "https://img.freepik.com/free-photo/front-view-businessman-with-wooden-building-blocks_23-2148780640.jpg?t=st=1730325512~exp=1730329112~hmac=397356d392d8662f48e75b3cb175ead12d3e42e6b5d9c8d3e71407133e8ebaca&w=1060";

  return (
    <section id="ManageServices">
      <NavBar />
      <div
        className="flex flex-col justify-center items-center p-6 md:p-12 lg:p-24 max-w-[90%] mx-auto"
        dir="rtl"
      >
        {/* Title */}
        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-5 md:mb-8 lg:mb-10 border-b-4 border-brand-blue py-2 md:py-3">
          الخدمات المحاسبية
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
            className="text-xl md:text-2xl font-semibold text-gray-700 mb-3 md:mb-4 lg:mb-5 border-b-4 border-brand-blue py-2 md:py-3"
          >
            خدمة إعداد الموازنة السنوية
          </h1>
          <div className="points space-y-4 md:space-y-6 lg:space-y-8">
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  تحليل الوضع المالي الحالي
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 md:space-y-3">
                <p>
                  <span className="ml-1"> تقييم الأداء المالي :</span>
                  مراجعة وتحليل البيانات المالية الحالية لتحديد الأداء المالي
                  للسنوات السابقة، بما في ذلك الإيرادات المصروفات، والأرباح
                </p>
                <p>
                  <span className="ml-1"> تحديد الأهداف المالية : </span>
                  تحديد الأهداف المالية للعام المقبل بناءً على رؤية المنشأة
                  وأهدافها الاستراتيجية
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  تطوير خطة الموازنة
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 md:space-y-3">
                <p>
                  <span className="ml-1"> إعداد مسودة الموازنة :</span>
                  وضع مسودة أولية للموازنة تشمل تقديرات الإيرادات المصروفات،
                  والموارد المالية المتاحة.
                </p>
                <p>
                  <span className="ml-1"> تحديد المصادر والتكاليف : </span>
                  تصنيف وتحديد مصادر الإيرادات وتفصيل التكاليف الثابتة
                  والمتغيرة، بما في ذلك الرواتب النفقات التشغيلية، والاستثمارات
                  الرأسمالية
                </p>
                <p>
                  <span className="ml-1"> تخصيص الموارد : </span>
                  توزيع الموارد المالية على المشاريع والأقسام المختلفة وفقاً
                  للأولويات الاستراتيجية
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  مراجعة وتدقيق الموازنة
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 md:space-y-3">
                <p>
                  <span className="ml-1"> مراجعة داخلية : </span> إجراء مراجعة
                  داخلية للموازنة للتأكد من دقتها وتوافقها مع الأهداف المالية
                  والتوقعات المستقبلية
                </p>
                <p>
                  <span className="ml-1">مراجعة مع الإدارة : </span>
                  عرض الموازنة على الإدارة العليا للحصول على تعليقات وتوصيات،
                  وضمان توافقها مع الاستراتيجيات العامة للمنشأة
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  تنفيذ الموازنة
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 md:space-y-3">
                <p>
                  <span className="ml-1"> إصدار الموازنة النهائية : </span>
                  إعداد وتوزيع النسخة النهائية من الموازنة على جميع الأقسام
                  والأطراف المعنية
                </p>
                <p>
                  <span className="ml-1"> تطوير خطط التنفيذ : </span>
                  إعداد خطط تنفيذية لضمان تنفيذ الموازنة بكفاءة، بما في ذلك وضع
                  آليات لمراقبة النفقات والإيرادات.
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  مراقبة الأداء والتعديل
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 md:space-y-3">
                <p>
                  <span className="ml-1"> مراقبة الأداء المالي : </span>
                  تتبع الأداء المالي الفعلي مقارنة بالموازنة، وتحليل الانحرافات
                  لتحديد الأسباب واتخاذ إجراءات تصحيحية.
                </p>
                <p>
                  <span className="ml-1"> تعديل الموازنة : </span> تقديم إجراء
                  تعديلات على الموازنة إذا لزم الأمر بناءً على التغيرات في
                  الظروف المالية أو الاقتصادية.
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  إعداد تقارير مالية
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 md:space-y-3">
                <p>
                  <span className="ml-1"> تقارير دورية : </span>
                  تقديم تقارير دورية عن الأداء المالي مقارنة بالموازنة، بما في
                  ذلك تحليلات الانحرافات والتوصيات لتحسين الأداء.
                </p>
                <p>
                  <span className="ml-1"> مراجعة سنوية : </span> تطوير خطط إجراء
                  مراجعة سنوية شاملة للموازنة لتقييم النتائج والتخطيط للسنة
                  المالية القادمة
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

export default AccountantServices;
