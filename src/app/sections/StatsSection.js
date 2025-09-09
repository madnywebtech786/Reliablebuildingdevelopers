"use client";
import React, { useEffect, useRef, useState } from "react";
import Counter from "./CounterPart"; // Import the Counter component

const StatsSection = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const stats = [
    {
      value: 1200,
      label: "Calgary Projects",
      symbol: "+",
      animation: "fade-up",
    },
    {
      value: 15,
      label: "Years Serving YYC",
      symbol: "+",
      animation: "fade-down",
    },
    {
      value: 98,
      label: "Client Satisfaction",
      symbol: "%",
      animation: "fade-up",
    },
    {
      value: 265,
      label: "Inspections Passed",
      symbol: "+",
      animation: "fade-down",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 bg-primary my-16 py-16 shadow-xl rounded-2xl"
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 ">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-8 flex flex-col items-center text-center  border-r-2 border-gray-200 ${
              index === 0 ? "rounded-tl-xl rounded-bl-xl" : ""
            } ${
              index === stats.length - 1
                ? "rounded-tr-xl rounded-br-xl  !border-r-0"
                : ""
            }`}
            data-aos={stat.animation}
            data-aos-delay={index * 100}
          >
            <h3 className="text-4xl font-bold text-white">
              {stat.prefix || ""}
              <Counter endValue={stat.value} start={startCounting} />
              {stat.symbol || ""}
            </h3>
            <p className="mt-2 text-white font-bold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;