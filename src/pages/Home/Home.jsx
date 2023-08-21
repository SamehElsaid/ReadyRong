import { IoLogoWhatsapp } from "react-icons/io5";
import {
  FaLocationDot,
  FaMobileButton,
  FaSquareFacebook,
} from "react-icons/fa6";
import AboutUs from "../../components/AboutUs/AboutUs";
import Feathers from "../../components/AboutUs/Feathers";
import Header from "../../components/Header";
import Products from "../../components/Products/Products";
import { GoDot } from "react-icons/go";

function Home() {
  return (
    <section className="">
      <Header />
      <div id="aboutUs" className="scrollEvent">
        <AboutUs />
        <Feathers />
      </div>
      <Products />
      <footer id="footer" className="scrollEvent">
        <div className=" items-center  boxShadowEdit || py-20  || bg-gray-100">
          <div className="container flex || gap-3 || flex-wrap || flex-col-reverse md:flex-row">
            <div className="w-full md:w-[calc(100%/2-12px/2)]">
              <div className="flex || gap-3">
                <h2>
                  <FaLocationDot className="text-[25px] || text-red-500" />
                </h2>
                <p>
                  الدقهليه-ميت غمر- الهيئه العامه للاستثمار والمناطق الحره قطعه
                  2ج
                </p>
              </div>
              <div className="flex || gap-3 ||  mt-5">
                <h2>
                  <FaMobileButton className="text-[25px] || text-red-500" />
                </h2>
                <p>
                  <span className="flex || items-center || gap-1">
                    <GoDot className="text-xs" /> 01276665149
                  </span>{" "}
                  <span className="flex || items-center || gap-1">
                    <GoDot className="text-xs" /> 01008859953
                  </span>{" "}
                  <span className="flex || items-center || gap-1">
                    <GoDot className="text-xs" /> 0504962661
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="w-[80%] md:w-[calc(100%/2-12px/2)] mx-auto">
              <img src="./img/logoFull.png" className="removeBg" alt="" />
            </div>
          </div>
        </div>
        <div className="py-5 || gap-3 || flex || items-center || justify-center || bg-[#30b1b1] || text-white">
          <a
            href="https://api.whatsapp.com/send?phone=201008859953&text=%D8%A7%D9%87%D9%84%D8%A7%20%D8%A8%D9%83%20%D9%81%D9%8A%20%D8%B1%D9%8A%D8%AF%D9%8A%20%D8%B1%D9%88%D9%86%D8%AC%20"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoWhatsapp className="text-3xl" />
          </a>
          <a
            href="https://www.facebook.com/Redy.Rong"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareFacebook className="text-[26px]" />
          </a>
          <a
            href="https://www.google.com/maps/place/30%C2%B041'58.7%22N+31%C2%B016'21.4%22E/@30.6996389,31.2726111,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.6996389!4d31.2726111?hl=en&entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            <FaLocationDot className="text-[25px]" />
          </a>
        </div>
        <div className="py-5 || text-center || text-sm">
          Created By{" "}
          <a
            href="https://wa.me/+201558290662"
            target="_blank"
            rel="noreferrer"
            className="text-[#30b1b1]"
          >
            Sameh Elsaid
          </a>{" "}
          & Design By{" "}
          <a
            href="https://wa.me/+201158575849"
            target="_blank"
            rel="noreferrer"
            className="text-[#30b1b1]"
          >
            Ahmed ELmasry
          </a>
        </div>
      </footer>
    </section>
  );
}

export default Home;
