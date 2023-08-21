import React from "react";
import products from "../../Products.json";
import UseImg from "../UseImg/useImg";
import { Bounce, Fade } from "react-awesome-reveal";
function Products() {
  return (
    <section id="products" className="container || py-[100px]  || scrollEvent">
      <h1 className="text-[25px] || mb-10 || font-semibold || text-center">
        <Fade fraction={1} triggerOnce cascade damping={1e-1} duration={1500}>
          منتجاتنا
        </Fade>
      </h1>
      <div className="flex || gap-4 || flex-wrap">
        {products.map((product) => (
          <Bounce
            fraction={1}
            triggerOnce
            direction="up"
            duration="1500"
            key={product.id}
            className="md:w-[calc(100%/2-32px/2)]  lg:w-[calc(100%/3-32px/3)] w-full || boxShadowEdit || py-5 || px-4 || perentFeatuers"
          >
            <>
              <div className="w-full || relative || mb-4">
                <UseImg img={product.img} />
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
            </>
          </Bounce>
        ))}
      </div>
    </section>
  );
}

export default Products;
