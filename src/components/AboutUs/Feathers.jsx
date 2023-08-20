import { motion } from "framer-motion";

function Feathers() {
  return (
    <motion.section
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        type: "spring",
        duration: 2,
        bounce: 0.5,
      }}
      viewport={{ once: true, amount: 0 }}
      className="container || py-[100px]"
    >
      <h1 className="text-[25px] || mb-10 || font-semibold || text-center">
        العديد من المميزات التى نتميز بها
      </h1>
      <div className="flex || gap-4 || flex-wrap || justify-center">
        <div className="md:w-[calc(100%/2-32px/2)] lg:w-[calc(100%/3-32px/3)] || boxShadowEdit || py-5 || px-4 || perentFeatuers">
          <div className="w-full || mb-4">
            <img
              src="./img/1.svg"
              className="h-[300px] object-contain object-bottom mx-auto"
              alt=""
            />
          </div>
          <h2 className="text-red-500 || font-bold || mb-2 || text-[18px] || text-center">
            تمتاز الشركة
          </h2>
          <p>
            وتمتاز الشركة بانها تسيـــــر وفق جـــــدول محدد فى انتاج
            الثـــــلاث اقســـــام على حــــــــدٍ سواء كما أن الشركة تسير فى
            انتاجها على أحدث المعايير والمواصفات القياسية المصرية والعالمية.
            تتأخذ الشركة فى نهجها وتوقن أن الجودة هى العامل الاساسى فى مراحل
            عمليـــــة الانتـــــاج. تمتاز الشـــركة وتحـــــرص على خـــــروج
            منتجات آمنـــــة وموثـــــوقة وعاليـــــة الدقـــــة والكفاءة. تعد
            الشركة حتى الآن من الشركات الرائدة فى السوق المصرى فى هذا القطاع.
          </p>
        </div>
        <div className="md:w-[calc(100%/2-32px/2)] lg:w-[calc(100%/3-32px/3)] || boxShadowEdit || py-5 || px-4 || perentFeatuers">
          <div className="w-full || mb-4">
            <img
              src="./img/2.svg"
              className="h-[300px] object-contain object-bottom mx-auto"
              alt=""
            />
          </div>
          <h2 className="text-red-500 || font-bold || mb-2 || text-[18px] || text-center">
            قوتنا في جودتنا
          </h2>
          <p>
            تحرص ادارة الشركة على الالتزام الدائم والمستمر لتطــــبيق معــــايير
            الجــــودة وتحقيق التطوير والتحسين المستمر. تعتمد الشركة على مبادئ
            التخطــيط العلــــمى بشكــــل فعال بما يضمن تنظيــــم العمل ورفع
            مستوى الجودة من خلال معدات وخطــــوط انتاج حديثة بالاضـــافة الى
            معامل اختبار متخصصة بما يحقق ويحافظ على مطابقة كل المنتجات
            للمواصفــــــات العالميــــة لمعاييــــر الجودة لرفع كفاءة العاملين
            وتحقيق أعلى مستويات الجودة.
          </p>
        </div>
        <div className="md:w-[calc(100%/2-32px/2)] lg:w-[calc(100%/3-32px/3)] || boxShadowEdit || py-5 || px-4 || perentFeatuers">
          <div className="w-full || mb-4">
            <img
              src="./img/3.svg"
              className="h-[300px] object-contain object-bottom mx-auto"
              alt=""
            />
          </div>
          <h2 className="text-red-500 || font-bold || mb-2 || text-[18px] || text-center">
            رضاء العملاء
          </h2>
          <p>
            فضلاُ عن رضاء العملاء والذى تعتبره ادارة الشــــركة هدفهــــا الأسمى
            لــــرفع معــــدلات الانتــــاج. كما تلتزم الشركة بالقوانين
            والتشريعات التى تنطبق على نشاط الشركة.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Feathers;
