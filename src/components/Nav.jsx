import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import { motion } from "framer-motion";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollPar, setScrollPar] = useState(0);
  const menuRef = useRef();
  const [fix, setFix] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const setFixed = () => {
    document.querySelectorAll(".scrollEvent").forEach((ele, i) => {
      if (
        ele.getBoundingClientRect().top <= window.innerHeight / 2 &&
        ele.getBoundingClientRect().bottom >= window.innerHeight / 2
      ) {
        if (activeLink !== ele.id) {
          setActiveLink(ele.id);
        }
      }
    });
    const winScroll = document.documentElement.scrollTop;
    const hight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / hight) * 100;
    setScrollPar(scrolled);
    if (window.scrollY >= 200) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  const style = {
    link: ` colorWrite ${
      fix ? `text-[16px]` : `text-[21px]`
    } hover:text-[#FF4C5F] || transition-colors || duration-200`,
    linkMenu: `text-white || text-[21px]`,
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 991) {
        setOpenMenu(false);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeLink]);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);
  return (
    <>
      <div
        className={` ${
          fix
            ? `fixed || mainBg boxShadowWhiteMode || z-10 || py-[10px]`
            : `absolute || py-[30px]`
        } || transitionAnimation || bg-transparent  || left-0 || right-0 || top-0 || hidden || lg:block`}
      >
        <div className="items-center || justify-between || container || mx-auto  || max-w-[1200px] || flex">
          <div
            style={{ width: scrollPar + "%" }}
            className="bgMainGradirnt || transitionWidth || h-[1px] || absolute || bottom-0  || left-0"
          ></div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "keyframes", delay: 1.2, duration: 2 }}
            viewport={{ once: true, amount: 0 }}
          >
            <Link
              style={{
                color: activeLink === "home" ? "#e11f28" : "#333",
              }}
              className={style.link}
              onClick={() => {
                document
                  .querySelector("body")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              to="/"
            >
              الرئيسية
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "keyframes", delay: 1.2, duration: 2 }}
            viewport={{ once: true, amount: 0 }}
          >
            <Link
              style={{
                color: activeLink === "aboutUs" ? "#e11f28" : "#333",
              }}
              onClick={() => {
                document
                  .getElementById("aboutUs")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className={style.link}
              to="/"
            >
              عن الشركة
            </Link>
          </motion.div>
          <div>
            <Link className={style.link} to="/">
              <motion.img
                initial={{ scale: 4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 2.5, bounce: 0.6 }}
                viewport={{ once: true, amount: 0 }}
                className={`${fix ? "w-[90px]" : "w-[120px]"}`}
                alt="logo"
                src={`./img/logo.png`}
              />
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "keyframes", delay: 1.2, duration: 2 }}
            viewport={{ once: true, amount: 0 }}
          >
            <Link
              style={{
                color: activeLink === "products" ? "#e11f28" : "#333",
              }}
              className={style.link}
              onClick={() => {
                document
                  .getElementById("products")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              to="/"
            >
              منتجاتنا
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "keyframes", delay: 1.2, duration: 2 }}
            viewport={{ once: true, amount: 0 }}
          >
            <Link
              style={{
                color: activeLink === "footer" ? "#e11f28" : "#333",
              }}
              onClick={() => {
                document
                  .getElementById("footer")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className={style.link}
              to="/"
            >
              تواصل معنا
            </Link>
          </motion.div>
        </div>
      </div>
      <div
        className={` ${
          fix
            ? `fixed || mainBg || boxShadowWhiteMode || py-[10px]`
            : `absolute || py-[30px]`
        } || transitionAnimation  || z-10 || bg-transparent  || left-0 || right-0 || top-0 || block || lg:hidden`}
      >
        <div className="items-center || justify-between  || container || mx-auto  || max-w-[1200px] || flex">
          <div
            style={{ width: scrollPar + "%" }}
            className="bgMainGradirnt || transitionWidth || h-[1px] || absolute || bottom-0  || left-0"
          ></div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "keyframes", delay: 1.2, duration: 2 }}
            viewport={{ once: true, amount: 0 }}
            className=""
          ></motion.div>

          <div>
            <Link className={style.link} to="/">
              <motion.img
                initial={{ scale: 3.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 2.5, bounce: 0.6 }}
                viewport={{ once: true, amount: 0 }}
                className="w-[120px]"
                alt="logo"
                src={`./img/logo.png`}
              />
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "keyframes", delay: 1.2, duration: 2 }}
            viewport={{ once: true, amount: 0 }}
          >
            <div
              className="menu || cursor-pointer || select-none"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.div>
        </div>
      </div>

      {/*  */}
      <div
        ref={menuRef}
        className={`${
          !openMenu ? "translate-x-[103%]" : "translate-x-0"
        } || transition-transform || duration-500 || bg-btn || z-10 || fixed || w-full || md:w-[50%] || h-full || right-0 || top-0 || rounded-s-none || md:rounded-s-[50PX] || flex || flex-col || justify-center || items-center || gap-10`}
      >
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="absolute || top-[3%] || right-[3%] || text-3xl || text-white || cursor-pointer || select-none"
        >
          <RiCloseFill />
        </div>
        <div>
          <Link
            style={{
              color: activeLink === "home" ? "#ffc107" : "#fff",
            }}
            onClick={() => {
              document
                .querySelector("body")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className={style.linkMenu}
            to="/"
          >
            الرئيسية
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: activeLink === "aboutUs" ? "#ffc107" : "#fff",
            }}
            onClick={() => {
              document
                .getElementById("aboutUs")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className={style.linkMenu}
            to="/"
          >
            عن الشركة
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: activeLink === "products" ? "#ffc107" : "#fff",
            }}
            onClick={() => {
              document
                .getElementById("products")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className={style.linkMenu}
            to="/"
          >
            منتجاتنا
          </Link>
        </div>
        <div>
          {console.log(activeLink)}
          <Link
            style={{
              color: activeLink === "footer" ? "#ffc107" : "#fff",
            }}
            onClick={() => {
              document
                .getElementById("footer")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className={style.linkMenu}
            to="/"
          >
            تواصل معنا
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
