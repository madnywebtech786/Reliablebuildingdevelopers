"use client";
import React from "react";
import { MapPin } from "lucide-react";

export default function WorkingAreas() {
  const centerCity = { name: "Calgary", desc: "128+ Full Renovations" };
  const surroundingCities = [
    { name: "Airdrie", desc: "45+ Home Upgrades" },
    { name: "Okotoks", desc: "30+ Basement Makeovers" },
    { name: "Cochrane", desc: "25+ Kitchen Remodels" },
    { name: "Chestermere", desc: "20+ Flooring Installs" },
    { name: "Strathmore", desc: "15+ Roofing Services" },
  ];

  return (
    <section className="relative bg-gray-50 pt-16 pb-8 lg:pb-44 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      <div className="text-center">
        <p className="text-sm text-secondary uppercase tracking-wider ">
          Our Working Areas
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight ">
          Areas We Provide Excellent Services.
        </h2>
        <div className="w-25 h-1 decor relative mx-auto"></div>
      </div>
      <div className="py-0 lg:py-44 text-center">
        {/* Mobile Layout */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {/* Calgary first */}
          <div className="bg-white shadow-lg rounded-2xl px-6 py-5">
            <MapPin className="w-6 h-6 text-primary mx-auto" />
            <h3 className="text-lg font-bold text-gray-800 mt-2">
              {centerCity.name}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{centerCity.desc}</p>
          </div>
          {surroundingCities.map((city) => (
            <div
              key={city.name}
              className="bg-white shadow-md rounded-xl p-5 flex flex-col items-center"
            >
              <MapPin className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-gray-800 mt-1">{city.name}</h4>
              <p className="text-gray-500 text-xs text-center">{city.desc}</p>
            </div>
          ))}
        </div>

        {/* Desktop Radial Layout */}
        <div className="hidden lg:flex justify-center items-center mt-20 relative">
          {/* Center City */}
          <div className="relative z-20 bg-white shadow-lg rounded-2xl px-8 py-6 w-56">
            <MapPin className="w-6 h-6 text-primary mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mt-2">
              {centerCity.name}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{centerCity.desc}</p>
          </div>

          {/* Ring */}
          <div className="absolute w-[450px] h-[450px] lg:w-[550px] lg:h-[550px] rounded-full border border-dashed border-primary/30"></div>

          {/* Surrounding Cities */}
          {surroundingCities.map((city, i) => {
            const angle = (i / surroundingCities.length) * 2 * Math.PI;
            const radius = 250; // distance from center
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <div
                key={city.name}
                className="absolute w-40 lg:w-44 bg-white shadow-md rounded-xl p-4 text-sm flex flex-col items-center hover:shadow-lg transition"
                style={{
                  left: `calc(50% + ${x}px - 88px)`,
                  top: `calc(50% + ${y}px - 40px)`,
                }}
              >
                <MapPin className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-gray-800 mt-1">
                  {city.name}
                </h4>
                <p className="text-gray-500 text-xs text-center">{city.desc}</p>
              </div>
            );
          })}
        </div>

      
      </div>
        {/* CTA */}
        <div className="flex justify-center lg:block lg:absolute bottom-10 left-[30%] lg:left-[43%] mt-16">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-emerald-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
          >
            Explore All Areas →
          </a>
        </div>
    </section>
  );
}
