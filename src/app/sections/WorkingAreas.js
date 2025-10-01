"use client";
import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function WorkingAreas() {
  const centerCity = {
    name: "Calgary",
    desc: "128+ Full Renovations",
    img: "/images/cities/Calgary.webp",
  };
  const surroundingCities = [
    {
      name: "Airdrie",
      desc: "45+ Home Upgrades",
      img: "/images/cities/Airdrie.webp",
    },
    {
      name: "Okotoks",
      desc: "30+ Basement Makeovers",
      img: "/images/cities/okotoks.webp",
    },
    {
      name: "Cochrane",
      desc: "25+ Kitchen Remodels",
      img: "/images/cities/Cochrane.webp",
    },
    {
      name: "Chestermere",
      desc: "20+ Flooring Installs",
      img: "/images/cities/Chesteremere.webp",
    },
    {
      name: "Strathmore",
      desc: "15+ Roofing Services",
      img: "/images/cities/Strathmore.webp",
    }, {
      name: "Lethbridge",
      desc: "8+ Framing Services",
      img: "/images/cities/Strathmore.webp",
    },
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
          <div className="group relative bg-white shadow-lg rounded-2xl px-6 py-8 overflow-hidden">
            {/* image (hidden initially) */}
            <div className="absolute inset-0">
              <Image
                src={centerCity.img}
                alt={centerCity.name}
                fill
                className="object-cover opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />
            </div>

            {/* content (above image) */}
            <div className="relative z-10 flex flex-col items-center">
              <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
              <h3 className="text-lg font-bold mt-2 text-gray-900 group-hover:text-white transition-colors duration-500">
                {centerCity.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1 group-hover:text-white transition-colors duration-500">
                {centerCity.desc}
              </p>
            </div>
          </div>

          {surroundingCities.map((city) => (
            <div
              key={city.name}
              className="group relative bg-white shadow-md rounded-xl p-5 py-8 overflow-hidden"
            >
              {/* image (hidden initially) */}
              <div className="absolute inset-0">
                <Image
                  src={city.img}
                  alt={city.name}
                  fill
                  className="object-cover opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />
              </div>

              {/* content */}
              <div className="relative z-10 flex flex-col items-center">
                <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
                <h4 className="font-semibold text-gray-800 mt-1 group-hover:text-white transition-colors duration-500">
                  {city.name}
                </h4>
                <p className="text-gray-500 text-xs text-center group-hover:text-white transition-colors duration-500">
                  {city.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Radial Layout */}
        <div className="hidden lg:flex justify-center items-center mt-20 relative">
          {/* Center City */}
          <div className="relative z-20 bg-white shadow-lg rounded-2xl px-8 py-6 w-56 overflow-hidden group">
            <div className="absolute inset-0">
              <Image
                src={centerCity.img}
                alt={centerCity.name}
                fill
                className="object-cover opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out"
                sizes="(max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />
            </div>

            <div className="relative z-10 text-center">
              <MapPin className="w-6 h-6 text-primary mx-auto group-hover:text-white transition-colors duration-500" />
              <h3 className="text-xl font-bold text-gray-800 mt-2 group-hover:text-white transition-colors duration-500">
                {centerCity.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1 group-hover:text-white transition-colors duration-500">
                {centerCity.desc}
              </p>
            </div>
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
                /* ADDED `group` here so group-hover works for each card */
                className="group absolute w-40 lg:w-44 bg-white shadow-md rounded-xl p-4 text-sm flex flex-col items-center hover:shadow-lg transition"
                style={{
                  left: `calc(50% + ${x}px - 88px)`,
                  top: `calc(50% + ${y}px - 40px)`,
                }}
              >
                {/* image wrapper (hidden initially) */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <Image
                    src={city.img}
                    alt={city.name}
                    fill
                    className="object-cover opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out"
                    sizes="(max-width: 1024px) 50vw, 200px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />
                </div>

                {/* content on top */}
                <div className="relative z-10 flex flex-col items-center">
                  <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
                  <h4 className="font-semibold text-gray-800 mt-1 group-hover:text-white transition-colors duration-500">
                    {city.name}
                  </h4>
                  <p className="text-gray-500 text-xs text-center group-hover:text-white transition-colors duration-500">
                    {city.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center lg:block lg:absolute bottom-10 left-[30%] lg:left-[43%] mt-16">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
        >
          Explore All Areas →
        </a>
      </div>
    </section>
  );
}
