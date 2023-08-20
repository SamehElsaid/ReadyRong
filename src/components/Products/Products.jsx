import React from "react";
import { motion } from "framer-motion";
import products from "../../Products.json";
function Products() {
  return (
    <section id="products" className="container || py-[100px]  || scrollEvent">
      <motion.h1
        initial={{ translateX: "100%", opacity: 0 }}
        whileInView={{ translateX: "0", opacity: 1 }}
        transition={{
          type: "spring",
          duration: 2,
          bounce: 0.5,
        }}
        viewport={{ once: true, amount: 0 }}
        className="text-[25px] || mb-10 || font-semibold || text-center"
      >
        منتجاتنا
      </motion.h1>
      <div className="flex || gap-4 || flex-wrap">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ translateY: "50%" }}
            whileInView={{ translateY: "0" }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0.5,
            }}
            viewport={{ once: true, amount: 0 }}
            className="md:w-[calc(100%/2-32px/2)] lg:w-[calc(100%/3-32px/3)] w-full || boxShadowEdit || py-5 || px-4 || perentFeatuers"
          >
            <div className="w-full || mb-4">
              <img
                src={product.img ? product.img : "./img/pro5.png"}
                className="h-[300px] object-contain object-bottom mx-auto"
                alt=""
              />
            </div>
            <h2 className="text-[#30b1b1] || font-bold || mb-4 || text-[18px] || text-center">
              {product.category}
            </h2>
            {product.warranty && (
              <p>
                <span className="font-semibold">الضمان: </span>
                {product.warranty}
              </p>
            )}
            {product.operationalLifespan && (
              <p>
                <span className="font-semibold">عمر التشغيل: </span>
                {product.operationalLifespan}
              </p>
            )}
            {product.color && (
              <p>
                <span className="font-semibold">اللون: </span>
                {product.color}
              </p>
            )}
            {product.size && (
              <p>
                <span className="font-semibold">المقاس: </span>
                {product.size}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Products;
