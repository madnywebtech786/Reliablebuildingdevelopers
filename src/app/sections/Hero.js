"use client";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
export default function Hero() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop
        className="h-[500px] lg:h-screen"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex h-auto lg:h-screen slide1Bg ">
            <div className="min-h-[500px] w-11/12 lg:w-8/12   text-white h-full p-4 py-16 lg:p-20 flex items-center">
              <div className="w-11/12 lg:w-4/5 flex flex-col gap-5 lg:gap-4">
                <p className="text-lg">Calgary’s Top-Rated Renovation Pros</p>
                <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold">
                  Stress-Free Calgary Renos  Done Right
                </h2>
                <p className="text-sm lg:text-lg">
                  We remodel Calgary homes with precision  energy upgrades, open layouts, and finishes built to last Alberta’s seasons.
                </p>
                <div className="flex gap-4">
                  <Link href={"/contact"}>
                    <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer">
                      Get Free Calgary Quote
                    </button>
                  </Link>
                  <Link href={"/services/home-renovation"}>
                    <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-white bg-primary rounded-2xl font-semibold cursor-pointer">
                      View Calgary Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/12 lg:w-4/12"></div>
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex h-auto lg:h-screen slide2Bg ">
            <div className="min-h-[500px] w-11/12 lg:w-8/12   text-white h-full p-4 py-16 lg:p-20 flex items-center">
              <div className="w-11/12 lg:w-4/5 flex flex-col gap-5 lg:gap-4">
                <p className="text-lg">Unlock Hidden Value Below</p>
                <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold">
                  Dry, Warm Calgary Basements  Guaranteed
                </h2>
                <p className="text-sm lg:text-lg">
                  Turn cold basements into legal suites, gyms or theaters  with moisture control, proper insulation, and Calgary permits handled.
                </p>
                <div className="flex gap-4">
                  <Link href={"/projects"}>
                    <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer">
                      See Calgary Projects
                    </button>
                  </Link>
                  <Link href={"/contact"}>
                    <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-white bg-primary rounded-2xl font-semibold cursor-pointer">
                      Book Free Estimate
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/12 lg:w-4/12"></div>
          </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex h-auto lg:h-screen slide3Bg ">
            <div className="min-h-[500px] w-11/12 lg:w-8/12   text-white h-full p-4 py-16 lg:p-20 flex items-center">
              <div className="w-11/12 lg:w-4/5 flex flex-col gap-5 lg:gap-4">
                <p className="text-lg">Kitchens Built for Alberta Life</p>
                <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold">
                  Smart, Stylish Calgary Kitchens
                </h2>
                <p className="text-sm lg:text-lg">
                  Custom storage, quartz counters, chef layouts  designed for Calgary families and resale appeal in every neighborhood.
                </p>
                <div className="flex gap-4">
                  <Link href={"/contact"}>
                    <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer">
                      Get Qoute
                    </button>
                  </Link>
                  <Link href={"tel:+15874377707"}>
                    <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-white bg-primary rounded-2xl font-semibold cursor-pointer">
                      Request a Call
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/12 lg:w-4/12"></div>
          </div>
        </SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide>
          <div className="flex h-auto lg:h-screen slide4Bg ">
            <div className="min-h-[500px] w-11/12 lg:w-8/12   text-white h-full p-4 py-16 lg:p-20 flex items-center">
              <div className="w-11/12 lg:w-4/5 flex flex-col gap-5 lg:gap-4">
                <p className="text-lg">Floors That Handle Calgary Winters</p>
                <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold">
                  Calgary Flooring  Installed Right
                </h2>
                <p className="text-sm lg:text-lg">
                  Moisture-tested, warranty-backed floors for basements & main levels  installed by local experts who know Alberta homes.
                </p>
                <div className="flex gap-4">
                  <Link href={"/services/flooring"}>
                    <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer">
                      Explore Flooring
                    </button>
                  </Link>
                  <Link href={"/contact"}>
                    <button className="text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-white bg-primary rounded-2xl font-semibold cursor-pointer">
                      Get a Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/12 lg:w-4/12"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}