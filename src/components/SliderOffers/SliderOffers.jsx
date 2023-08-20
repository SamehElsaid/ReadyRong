import React, { useEffect, useRef, useState } from "react";

function SliderOffers() {
  const [length, setLength] = useState(0);
  const slide = useRef();
  const [loading, setloading] = useState(false);
  const repo = [
    {
      id: 1,
      img: `./img/1.png`,
    },
    {
      id: 2,
      img: `./img/2.png`,
    },
    {
      id: 3,
      img: `./img/3.png`,
    },
    {
      id: 4,
      img: `./img/4.png`,
    },
    {
      id: 5,
      img: `./img/5.png`,
    },
    {
      id: 6,
      img: `./img/6.png`,
    },
    {
      id: 7,
      img: `./img/7.png`,
    },
  ];

  useEffect(() => {
    setloading(true);
  }, []);
  useEffect(() => {
    const slideAnimation = setInterval(() => {
      if (length === slide.current.querySelectorAll(".slide").length - 1) {
        slide.current.querySelectorAll(".slide").forEach((sli) => {
          sli.classList.remove("active");
        });
        slide.current.querySelectorAll(".slide")[0].classList.add("active");

        setLength(0);
      } else {
        slide.current.querySelectorAll(".slide").forEach((sli) => {
          sli.classList.remove("active");
        });
        slide.current
          .querySelectorAll(".slide")
          [length + 1].classList.add("active");
        setLength(length + 1);
      }
    }, 5000);
    return () => {
      clearInterval(slideAnimation);
    };
  }, [length]);
  const changeIndex = (i) => {
    if (i !== length) {
      slide.current.querySelectorAll(".slide").forEach((sli) => {
        sli.classList.remove("active");
      });
      slide.current.querySelectorAll(".slide")[i].classList.add("active");
      setLength(i);
    }
  };
  return (
    <div
      style={{ padding: 0 }}
      className={`select-none || container || rounded-md || duration-500 || transition-opacity  ${
        loading ? "opacity-100 || visible" : "opacity-0 || invisible"
      } 
   `}
    >
      <div className="relative || overflow-hidden || rounded-md">
        <div
          ref={slide}
          className="h-[135px] md:h-[400px] || lg:h-[427px] || relative"
        >
          <div className="absolute || glassDivImg || px-2 || py-2 || right-[10px] || z-10 || top-1/2 || -translate-y-1/2 || flex || flex-col || gap-2 || items-center">
            {repo.map((slide, i) => (
              <div
                onClick={() => {
                  changeIndex(i);
                }}
                className={`${
                  i === length ? "glassDivActive || scale-150" : "glassDiv"
                } transition-all || duration-700 || rounded-full || cursor-pointer  || w-[10px] || h-[10px]`}
                key={slide.id}
              ></div>
            ))}
          </div>
          {repo.map((slide) => (
            <div
              key={slide.id}
              className={`${
                slide.id === 1 && "active"
              } slide || absolute ||  inset-0 || flex || items-center`}
            >
              <img
                id={`${slide.id}13`}
                alt={slide.id}
                className="h-full || flex-1 || object-contain"
                src={slide.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SliderOffers;
