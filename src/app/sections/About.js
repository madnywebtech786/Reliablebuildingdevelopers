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

// ImmigrationHero.jsx
// Tailwind CSS required in your project (postcss or CDN). Replace the image imports
// with your actual image paths. This is a single-file React component.

export default function About() {
  return (
    <section className=" px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
      <div className="w-full mx-auto bg-primary p-12 py-16 rounded-b-2xl gap-5 flex justify-center ">
        <div className="flex gap-5 w-full lg:w-1/3 justify-center items-center  group">
          <div className="bg-white p-4 rounded-xl group-hover:bg-primary border-2 border-transparent group-hover:border-white duration-500">
            <BrickWallShield
              size={65}
              className="text-primary group-hover:text-white group-hover:scale-90 duration-500"
            />
          </div>
          <div className="flex flex-col gap-2 text-white ">
            <p className="text-base opacity-70">01</p>
            <h2 className="text-xl font-bold">
              Best Quality <br /> Material Standard
            </h2>
          </div>
        </div>
        <div className="flex gap-5 border-x-2 items-center border-white/50 w-full lg:w-1/3 justify-center group">
          <div className="bg-white p-4 rounded-xl group-hover:bg-primary border-2 border-transparent group-hover:border-white duration-500">
            <CircleStar
              size={65}
              className="text-primary group-hover:text-white group-hover:scale-90 duration-500"
            />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <p className="text-base opacity-70">02</p>
            <h2 className="text-xl font-bold">
              Smart &<br />
              Unique WallWork
            </h2>
          </div>
        </div>
        <div className="flex gap-5 w-full items-center lg:w-1/3 justify-center group">
          <div className="bg-white p-4 rounded-xl group-hover:bg-primary border-2 border-transparent group-hover:border-white duration-500">
            <PencilRuler
              size={65}
              className="text-primary group-hover:text-white group-hover:scale-90 duration-500"
            />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <p className="text-base opacity-70">03</p>
            <h2 className="text-xl font-bold">
              Skilled and
              <br />
              TrainedExperts
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-40 ">
        {/* Left: image composition */}
        <div className="relative w-full h-full flex justify-center md:justify-start">
          {/* decorative dot-grid like in the design (subtle) */}
          <div className="hidden md:block absolute -left-20 top-0 z-10 transform translate-x-8 -translate-y-8">
            <svg
              width="300"
              height="300"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-20"
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
                  <circle cx="1" cy="1" r="0.6" fill="#9CA3AF" />
                </pattern>
              </defs>
              <rect width="24" height="24" fill="url(#p)" />
            </svg>
          </div>
          <div className="relative z-20 w-full h-full">
            {/* Main photo */}

            <Image
              src="/images/about1.png"
              width={700}
              height={700}
              alt="Person on airplane using phone"
              className="w-[300px] h-[320px] rounded-tl-[15%] rounded-br-[15%] absolute -top-[15%] right-0 border-4 border-primary"
            />
            <Image
              src="/images/about3.png"
              width={700}
              height={700}
              alt="Person on airplane using phone"
              className="w-[300px] h-[400px] rounded-tl-[15%] rounded-br-[15%] absolute top-1/4 left-[6%] border-4 border-primary"
            />
            <Image
              src="/images/about2.png"
              width={700}
              height={700}
              alt="Person on airplane using phone"
              className="w-[300px] h-[320px] rounded-tl-[15%] rounded-br-[15%] absolute -bottom-[15%] right-0 border-4 border-primary"
            />

            <div className="absolute -bottom-[15%] right-[30%]">
              <RotatingTextBadge
                size={150}
                text="25 years of experience"
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
              We Help you from Start to End Immigration.
            </h2>
            <div className="w-full h-1 decor relative"></div>

            <p className="text-primary my-6 text-xl">
              Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              lonm andhn. Aenean tincidunt id mauris id auctor donec at ligula
              lacus.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Disc2 size={16} className="text-primary" />
                <div>
                  <p className="text-gray-800 font-semibold text-base">
                    Lorem Ipsum is not simply random text
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-2">
                <Disc2 size={16} className="text-primary" />

                <div>
                  <p className="text-gray-800 font-semibold text-base">
                    Making this the first true generator on the Internet
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Disc2 size={16} className="text-primary" />
                <div>
                  <p className="text-gray-800 font-semibold text-base">
                    Lorem Ipsum is not simply random text
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Disc2 size={16} className="text-primary" />
                <div>
                  <p className="text-gray-800 font-semibold text-base">
                    Lorem Ipsum is not simply random text
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
  );
}
