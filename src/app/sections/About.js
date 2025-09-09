import {
  CircleStar,
  Handshake,
  BrickWallShield,
  PencilRuler,
  Disc2,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import RotatingTextBadge from "../components/RotatingTextBadge";

// About.jsx  Optimized for Calgary Renovation Company
// Tailwind CSS required. Image paths should point to your actual renovation project photos.

export default function About() {
  return (
    <>
      <div className="w-full lg:w-[93%] mx-auto bg-primary  lg:p-12 py-6 lg:py-16 rounded-b-2xl gap-5 flex flex-col lg:flex-row justify-center ">
        <div className="flex gap-5 w-full lg:w-1/3 px-12 md:justify-center items-center  group">
          <div className="bg-white p-4 rounded-xl group-hover:bg-primary border-2 border-transparent group-hover:border-white duration-500">
            <BrickWallShield
              size={65}
              className="text-primary group-hover:text-white group-hover:scale-90 duration-500 text-4xl md:text-5xl lg:text-6xl"
            />
          </div>
          <div className="flex flex-col gap-2 text-white ">
            <p className="text-base opacity-70">01</p>
            <h2 className="text-xl font-bold">
              Premium <br />
              Build Materials
            </h2>
          </div>
        </div>
        <div className="flex gap-5 border-y-2 lg:border-y-0 lg:border-x-2 items-center border-white/50 w-full py-6 lg:w-1/3 px-12 md:justify-center group">
          <div className="bg-white p-4 rounded-xl group-hover:bg-primary border-2 border-transparent group-hover:border-white duration-500">
            <CircleStar
              size={65}
              className="text-primary group-hover:text-white group-hover:scale-90 duration-500 text-4xl md:text-5xl lg:text-6xl"
            />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <p className="text-base opacity-70">02</p>
            <h2 className="text-xl font-bold">
              Precision <br />
              Craftsmanship
            </h2>
          </div>
        </div>
        <div className="flex gap-5 w-full items-center lg:w-1/3 px-12 md:justify-center group">
          <div className="bg-white p-4 rounded-xl group-hover:bg-primary border-2 border-transparent group-hover:border-white duration-500">
            <PencilRuler
              size={65}
              className="text-primary group-hover:text-white group-hover:scale-90 duration-500 text-xl md:text-5xl lg:text-6xl"
            />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <p className="text-base opacity-70">03</p>
            <h2 className="text-xl font-bold">
              Calgary <br />
              Trained Pros
            </h2>
          </div>
        </div>
      </div>
      <section className=" px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 lg:py-40 ">
          {/* Left: image composition */}
          <div className="relative w-full h-full flex justify-center md:justify-center">
            {/* decorative dot-grid like in the design (subtle) */}
            <div className="hidden lg:block absolute -left-20 top-0 z-10 transform translate-x-8 -translate-y-8">
              <svg
                width="300"
                height="300"
                viewBox="0 0 24 24"
                fill="none"
                className="zoom-effect"
              >
                <defs>
                  <pattern
                    id="p"
                    x="0"
                    y="0"
                    width="6"
                    height="6"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="1" cy="1" r="0.6" fill="#1471ba" />
                  </pattern>
                </defs>
                <rect width="24" height="24" fill="url(#p)" />
              </svg>
            </div>

            <div className="hidden lg:block relative z-20 w-full h-full">
              {/* Main photo */}

              <Image
                src="/images/about1.webp"
                width={700}
                height={700}
                alt="Calgary kitchen renovation in progress"
                className="w-[300px] h-[320px] rounded-tl-[15%] rounded-br-[15%] absolute -top-[15%] right-0 border-4 border-primary"
              />
              <Image
                src="/images/about3.webp"
                width={700}
                height={700}
                alt="Calgary basement renovation team at work"
                className="w-[300px] h-[400px] rounded-tl-[15%] rounded-br-[15%] absolute top-1/4 left-[6%] border-4 border-primary"
              />
              <Image
                src="/images/about2.webp"
                width={700}
                height={700}
                alt="Finished Calgary bathroom renovation"
                className="w-[300px] h-[320px] rounded-tl-[15%] rounded-br-[15%] absolute -bottom-[15%] right-0 border-4 border-primary"
              />

              <div className="absolute -bottom-[15%] right-[30%]">
                <RotatingTextBadge
                  size={150}
                  text="Calgary Since 2005"
                  duration={14}
                />
              </div>
            </div>

            <div className="lg:hidden relative ">
              <Image
                src="/images/about3.webp"
                width={700}
                height={700}
                alt="Calgary renovation team at work"
                className="w-full h-[400px] rounded-tl-[15%] rounded-br-[15%]  border-4 border-primary"
              />
              <div className="absolute -bottom-[15%] right-[0%]">
                <RotatingTextBadge
                  size={150}
                  text="Calgary Since 2005"
                  duration={14}
                />
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="relative py-10">
            <div className="">
              <p className="text-sm text-primary uppercase tracking-wider ">
                About our company
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight ">
                Calgary Renovations Trusted From Start to Finish
              </h2>
              <div className="w-full h-1 decor relative"></div>
              <p className="text-primary my-6 text-lg">
                Serving Calgary homeowners since 2005 we handle design, permits,
                and construction with licensed, insured crews trained in
                Alberta’s building codes and climate.
                <br className="hidden md:block" />
                <br className="hidden md:block" />
                From basement suites to kitchen remodels, we deliver
                stress-free, on-budget projects with city inspection support,
                clear timelines, and 5-year craftsmanship warranties.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Disc2 size={16} className="text-primary" />
                  <div>
                    <p className="text-gray-800 font-semibold text-base">
                      Free on-site quotes with no hidden fees
                    </p>
                  </div>
                </li>

                <li className="flex items-center gap-2">
                  <Disc2 size={16} className="text-primary" />

                  <div>
                    <p className="text-gray-800 font-semibold text-base">
                      Licensed, insured & Calgary code compliant
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Disc2 size={16} className="text-primary" />
                  <div>
                    <p className="text-gray-800 font-semibold text-base">
                      Project managers for clear communication
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Disc2 size={16} className="text-primary" />
                  <div>
                    <p className="text-gray-800 font-semibold text-base">
                      5-year workmanship warranty on all projects
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex gap-5">
                <button className="bg-primary text-white p-3 rounded-xl">
                  View Projects
                </button>
                <button className="border border-primary text-primary p-3 rounded-xl">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
