import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import { useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";

const ManageServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageUrl =
    "https://img.freepik.com/free-photo/front-view-businessman-with-wooden-building-blocks_23-2148780640.jpg?t=st=1730325512~exp=1730329112~hmac=397356d392d8662f48e75b3cb175ead12d3e42e6b5d9c8d3e71407133e8ebaca&w=1060";

  return (
    <section id="ManageServices">
      <NavBar />
      <div
        className="flex flex-col justify-center items-center p-36 max-w-[90% fasdf] mx-auto"
        dir="rtl"
      >
        {/* Title */}
        <span className="text-4xl font-semibold text-gray-700 mb-10 border-b-4 border-brand-blue py-3 ">
          الخدمات الادارية
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
            خدمة الاستشارات الإدارية
          </h1>
          <div className="points space-y-8">
            <div id="point">
              <div className="flex items-center mb-3">
                <RxDotFilled className="text-4xl text-brand-blue" />
                <h2 className="text-xl text-gray-700  ">
                  تحليل وتخطيط استراتيجي
                </h2>
              </div>
              <div className="point-detail max-w-[90%] m-auto space-y-3">
                <p className=" ">
                  <span className="ml-1"> تحليل الوضع الحالي :</span>
                  إجراء تقييم شامل للهيكل التنظيمي العمليات، والموارد الحالية
                  للمنشأة لفهم التحديات والفرص
                </p>
                <p className=" ">
                  <span className="ml-1"> تطوير استراتيجيات نمو : </span>
                  صياغة استراتيجيات نمو طويلة الأجل تتماشى مع أهداف المنشأة، بما
                  في ذلك التوسع في الأسواق الجديدة، الابتكار، والتحسين التشغيلي.
                </p>
                <p className=" ">
                  <span className="ml-1"> تخطيط الموارد : </span>
                  تقديم استشارات حول تخصيص الموارد بكفاءة، بما في ذلك إدارة
                  الميزانيات الموارد البشرية والمعدات.
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-3">
                <RxDotFilled className="text-4xl text-brand-blue" />
                <h2 className="text-xl text-gray-700  ">
                  تحسين العمليات والأنظمة
                </h2>
              </div>
              <div className="point-detail max-w-[90%] m-auto space-y-3">
                <p className=" ">
                  <span className="ml-1"> تحليل العمليات :</span>
                  مراجعة وتحليل العمليات التشغيلية لتحديد نقاط الضعف وفرص
                  التحسين.
                </p>
                <p className=" ">
                  <span className="ml-1"> إعادة تصميم العمليات : </span>
                  تقديم توصيات لإعادة تصميم العمليات لتقليل التكاليف، تحسين
                  الكفاءة، وتسريع العمليات
                </p>
                <p className=" ">
                  <span className="ml-1">تنفيذ نظم المعلومات : </span>
                  مساعدة في اختيار وتطبيق نظم إدارة المعلومات المناسبة لتحسين
                  سير العمل ودعم اتخاذ القرارات.
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-3">
                <RxDotFilled className="text-4xl text-brand-blue" />
                <h2 className="text-xl text-gray-700  ">إدارة التغيير</h2>
              </div>
              <div className="point-detail max-w-[90%] m-auto space-y-3">
                <p className=" ">
                  <span className="ml-1"> استراتيجيات إدارة التغيير : </span>
                  تطوير استراتيجيات لإدارة التغيير لضمان انتقال سلس وفعال خلال
                  الفترات الانتقالية.
                </p>
                <p className=" ">
                  <span className="ml-1"> تدريب الموظفين : </span>
                  تقديم برامج تدريبية لإعداد الموظفين للتكيف مع التغييرات
                  التنظيمية
                </p>
                <p className=" ">
                  <span className="ml-1"> التواصل الداخلي : </span>
                  تطوير خطط للتواصل الداخلي لضمان مشاركة جميع الأطراف المعنية
                  وفهمهم للتغييرات
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-3">
                <RxDotFilled className="text-4xl text-brand-blue" />
                <h2 className="text-xl text-gray-700  ">
                  {" "}
                  تطوير القيادة وإدارة الفرق
                </h2>
              </div>
              <div className="point-detail max-w-[90%] m-auto space-y-3">
                <p className=" ">
                  <span className="ml-1"> تقييم الأداء القيادي : </span>
                  تقديم تقييمات لأداء القادة والمديرين وتحديد مجالات التحسين
                </p>
                <p className=" ">
                  <span className="ml-1"> تطوير مهارات القيادة : </span>
                  تصميم برامج تدريبية لتطوير مهارات القيادة والإدارة لدى الفرق
                  الإدارية.
                </p>
                <p className=" ">
                  <span className="ml-1"> بناء فرق عمل فعالة : </span>
                  تقديم استشارات حول كيفية بناء فرق عمل قوية ومتعاونة، وتعزيز
                  التواصل بين الأعضاء
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-3">
                <RxDotFilled className="text-4xl text-brand-blue" />
                <h2 className="text-xl text-gray-700  ">
                  إدارة الأداء والقياس
                </h2>
              </div>
              <div className="point-detail max-w-[90%] m-auto space-y-3">
                <p className=" ">
                  <span className="ml-1"> تطوير مؤشرات الأداء : </span>
                  مساعدة في تطوير مؤشرات أداء رئيسية (KPIS) لقياس تقدم المنشأة
                  نحو أهدافها الاستراتيجية.
                </p>
                <p className=" ">
                  <span className="ml-1"> تحليل الأداء : </span> تقديم استشارات
                  لتحليل الأداء وتحديد المجالات التي تحتاج إلى تحسين.
                </p>
                <p className=" ">
                  <span className="ml-1"> تقييم الأداء التنظيمي : </span> إجراء
                  مراجعات دورية للأداء التنظيمي وتقديم توصيات لتحسين الكفاءة
                  والفعالية.
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-3">
                <RxDotFilled className="text-4xl text-brand-blue" />
                <h2 className="text-xl text-gray-700  ">
                  استشارات إدارة المخاطر
                </h2>
              </div>
              <div className="point-detail max-w-[90%] m-auto space-y-3">
                <p className=" ">
                  <span className="ml-1"> تقييم المخاطر : </span>
                  إجراء تحليل شامل للمخاطر المحتملة التي قد تواجه المنشأة وتقديم
                  استراتيجيات لإدارتها
                </p>
                <p className=" ">
                  <span className="ml-1"> خطة إدارة الأزمات : </span> تطوير خطط
                  لإدارة الأزمات والتعامل مع التهديدات غير المتوقعة
                </p>
                <p className=" ">
                  <span className="ml-1">تحليل المخاطر المالية : </span> تقديم
                  استشارات حول كيفية إدارة المخاطر المالية وضمان استقرار الأداء
                  المالي للمنشأة
                </p>
              </div>
            </div>
            <div id="point">
              <div className="flex items-center mb-3">
                <RxDotFilled className="text-4xl text-brand-blue" />
                <h2 className="text-xl text-gray-700  ">
                  استشارات لتحسين الثقافة التنظيمية
                </h2>
              </div>
              <div className="point-detail max-w-[90%] m-auto space-y-3">
                <p className=" ">
                  <span className="ml-1"> تحليل الثقافة : </span>
                  تقييم الثقافة التنظيمية الحالية وفهم تأثيرها على الأداء العام.
                </p>
                <p className=" ">
                  <span className="ml-1"> استراتيجيات التحسين : </span> تطوير
                  استراتيجيات لتعزيز الثقافة التنظيمية، وتحفيز الموظفين، وبناء
                  بيئة عمل إيجابية.
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

export default ManageServices;
