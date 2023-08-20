import React from "react";
import { SiInformatica } from "react-icons/si";
import { AiOutlineStar } from "react-icons/ai";
import { GoDot, GoListOrdered } from "react-icons/go";
import { BsCommand } from "react-icons/bs";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.section
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{
      type: "spring",
      duration: 2,
      bounce: 0.5,
    }}

    viewport={{ once: true, amount: 0 }} className="container || py-[100px] ">
      <h1 className="text-[25px] || mb-10 || font-semibold || text-center  ">
        عن الشركة
      </h1>
      <div className="flex || gap-3 || flex-wrap || flex-col-reverse lg:flex-row">
        <div className="lg:w-[calc(60%-12px)] || w-full">
          <div className="flex || items-start || gap-3">
            <div className="text-[#30b1b1]">
              <SiInformatica className="text-4xl" />
            </div>
            <div className="">
              <h2 className="text-[#30b1b1] || mb-2 || text-[18px]">
                شركة هنا للصناعات الكهربائية
              </h2>
              <p>
                شركة هنا للصناعات الكهربائية هى شركة مصريــــــة قائمة بمحافظة
                الشرقية مدينة الزقازيــــق وهى شركــة رائدة فــــــى
                صناعـــــــة اللـــيد , تــــــم تأسيــــــس الشــــــركة فى
                عـــام 2017 وتــــــم العمــــــل باســــــم منتجــــــات
                (هنــا) بضمــــــان عام للمنتجــــــات وتــــــم تطــوير
                المنتجـــات لتحمــــــــــــل اســــــــم RedyRong بضمـــــــان
                عامان للمنتجـــــــــــــــات المختلفة.
              </p>
            </div>
          </div>
          <div className="flex || items-start || gap-3 || mt-5">
            <div className="text-[#30b1b1]">
              <AiOutlineStar className="text-4xl" />
            </div>
            <div className="">
              <h2 className="text-[#30b1b1] || mb-2 || text-[18px]">
                الأنتاج والجودة والمتابعة
              </h2>
              <p>
                حيث يتولى العمل بالشركة فريق متميــز من المهندسين والمتخصصين
                المؤهليـن لتخطيط وتنفيذ مراحل الانتاج وضبــــــط جــــــودة
                الانتــــــاج ومتابعة احتياجات السوق المحــــــلى والخــــارجى.
              </p>
            </div>
          </div>
          <div className="flex || items-start || gap-3 || mt-5">
            <div className="text-[#30b1b1]">
              <BsCommand className="text-4xl" />
            </div>
            <div className="">
              <h2 className="text-[#30b1b1] || mb-2 || text-[18px]">
                الثقة لدي العملاء
              </h2>
              <p>
                تسعد الشركة بالثقة التى رُسخـــــــــت لدى عملائها فى المنتجات
                المختلفـــــــــــــة التى تستخدم فى اضاءة معظم الوحدات سواء
                السكنية اوالتجارية بوحــــدات الاضــــــــــــاءة المختلفة
              </p>
            </div>
          </div>
          <div className="flex || items-start || gap-3 || mt-5">
            <div className="text-[#30b1b1]">
              <GoListOrdered className="text-4xl" />
            </div>
            <div className="">
              <h2 className="text-[#30b1b1] || mb-2 || text-[18px]">
                تنقســــــــم منتجــــــات الشركة الى ثلاث اقسام
              </h2>
              <p className="flex || flex-col || gap-1">
                <span className="flex || items-center || gap-1">
                  <GoDot />
                  Indoor وتشمل (لمبات, بانلات, اسبوتات).
                </span>
                <span className="flex || items-center || gap-1">
                  <GoDot />
                  Indoor وتشمل (لمبات, بانلات, اسبوتات).
                </span>
                <span className="flex || items-center || gap-1">
                  <GoDot /> Decoration وتشمل ( اسبوتات ديكور, ابليك أب داون,
                  أعمدة الليد, شرائط الليد ).
                </span>
                <span className="flex || items-center || gap-1 || mt-3">
                  <button className="w-full || bg-[#30b1b1] || overflow-hidden || text-white || px-2 || py-3 || btn || relative">
                    <p className="absolute || inset-0 || bg-[#ef4545] || -translate-x-full"></p>
                    <span className="relative ">Open PDF File</span>
                  </button>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] || w-full">
          <img src="./img/phone.svg" className="h-full" alt="phone" />
        </div>
      </div>
    </motion.section>
  );
}

export default AboutUs;
