import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import { useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";

const TechServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageUrl =
    "https://img.freepik.com/free-photo/front-view-businessman-with-wooden-building-blocks_23-2148780640.jpg?t=st=1730325512~exp=1730329112~hmac=397356d392d8662f48e75b3cb175ead12d3e42e6b5d9c8d3e71407133e8ebaca&w=1060";

  return (
    <section id="TechServices">
      <NavBar />
      <div
        className="flex flex-col justify-center items-center p-6 md:p-12 lg:p-36 max-w-[90%] mx-auto"
        dir="rtl"
      >
        {/* Title */}
        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-5 md:mb-8 lg:mb-10 border-b-4 border-brand-blue py-2 md:py-3">
          خدمات تقنية
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
            خدمة تحليل بيانات الشركات وتطوير أعمال الشركات
          </h1>
          <div className="points space-y-4 md:space-y-6 lg:space-y-8">
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  تحليل بيانات الشركات
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 md:space-y-3">
                <p>
                  <span className="ml-1"> جمع البيانات :</span>
                  جمع البيانات المالية، التشغيلية، والتسويقية من مصادر مختلفة
                  مثل أنظمة المعلومات، التقارير المالية، واستطلاعات السوق
                </p>
                <p>
                  <span className="ml-1"> تنظيف البيانات : </span>
                  مراجعة وتنظيم البيانات للتأكد من دقتها واكتمالها، وإزالة أي
                  بيانات غير متسقة أو غير دقيقة.
                </p>
                <p>
                  <span className="ml-1"> تحليل البيانات : </span>
                  استخدام أدوات التحليل المتقدمة مثل التحليل الإحصائي والذكاء
                  الاصطناعي لاستخراج رؤى قيمة من البيانات، بما في ذلك تحديد
                  الأنماط والاتجاهات والفرص
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  تطوير استراتيجيات التحليل
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 md:space-y-3">
                <p>
                  <span className="ml-1"> تطوير مؤشرات الأداء :</span>
                  تحديد مؤشرات الأداء الرئيسية (KPIs) التي تتناسب مع أهداف
                  الشركة وتساعد في قياس النجاح وتحديد مجالات التحسين.
                </p>
                <p>
                  <span className="ml-1"> إنشاء لوحات معلومات : </span>
                  تصميم لوحات معلومات تفاعلية لتوفير رؤى فورية حول الأداء، تساعد
                  في اتخاذ قرارات مدروسة بناءً على البيانات.
                </p>
                <p>
                  <span className="ml-1">تحليل الاتجاهات : </span>
                  تحليل الاتجاهات السوقية والتجارية لتحديد الفرص والتهديدات
                  المحتملة، مما يساعد في توجيه استراتيجيات النمو والتطوير
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  تطوير أعمال الشركات
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 md:space-y-3">
                <p>
                  <span className="ml-1"> تحديد الفرص الجديدة : </span>إجراء
                  تحليل للسوق لتحديد فرص التوسع والنمو، بما في ذلك دخول أسواق
                  جديدة أو تطوير منتجات وخدمات جديدة
                </p>
                <p>
                  <span className="ml-1"> تحليل التنافس : </span>
                  دراسة المنافسين وتحديد نقاط القوة والضعف لديهم، وتقديم توصيات
                  استراتيجية لمواجهة المنافسة وتحقيق ميزة تنافسية
                </p>
                <p>
                  <span className="ml-1"> تطوير استراتيجيات النمو : </span>
                  صياغة استراتيجيات نمو تشمل التوسع الجغرافي، الشراكات
                  الاستراتيجية، أو تحسين العروض الحالية بناءً على تحليل البيانات
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  تحسين العمليات التشغيلية
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 md:space-y-3">
                <p>
                  <span className="ml-1"> تحليل العمليات : </span>
                  تقييم العمليات التشغيلية الحالية لتحديد inefficiencies
                  والعقبات التي قد تؤثر على الأداء
                </p>
                <p>
                  <span className="ml-1"> تطوير حلول : </span>
                  تقديم حلول لتحسين الكفاءة التشغيلية، بما في ذلك إعادة تصميم
                  العمليات، تبسيط الإجراءات واستخدام التكنولوجيا لتحسين الأداء.
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  تقديم توصيات وتنفيذ الخطط
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 md:space-y-3">
                <p>
                  <span className="ml-1"> تقديم توصيات : </span>
                  تقديم توصيات مبنية على التحليل لتحسين الأداء وتطوير الأعمال،
                  بما في ذلك استراتيجيات التسويق تحسين المنتجات، وزيادة الكفاءة.
                </p>
                <p>
                  <span className="ml-1"> تنفيذ الاستراتيجيات : </span> دعم
                  الشركات في تنفيذ التوصيات والخطط الاستراتيجية، بما في ذلك
                  تحديد الموارد المطلوبة وتدريب الفرق، وإدارة التغيير
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-2 md:mb-3">
                <RxDotFilled className="text-3xl md:text-4xl text-brand-blue" />
                <h2 className="text-lg md:text-xl text-gray-700">
                  مراقبة الأداء وتقييم النتائج
                </h2>
              </div>
              <div className="point-detail w-full space-y-2 md:space-y-3">
                <p>
                  <span className="ml-1"> تقييم الأداء : </span>
                  متابعة نتائج تنفيذ الاستراتيجيات والتأكد من تحقيق الأهداف
                  المرجوة
                </p>
                <p>
                  <span className="ml-1"> تعديل الاستراتيجيات : </span> إجراء
                  تعديلات على الاستراتيجيات بناءً على تحليل الأداء والنتائج
                  المستمرة لتحسين الأداء العام.
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

export default TechServices;
