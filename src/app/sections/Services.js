import { Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Services() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-primary/5">
      <div className="text-center">
        <p className="text-sm text-secondary uppercase tracking-wider ">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight ">
          We Offer Best Services.
        </h2>
        <div className="w-25 h-1 decor relative mx-auto"></div>
      </div>

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div className="flex flex-col group overflow-hidden rounded-xl">
            <Image
              src={"/images/Care.png"}
              width={450}
              height={300}
              className="max-h-[350] group-hover:scale-105 duration-300 relative z-0 rounded-xl mx-auto"
            />
            <div className="relative">
              <div className="absolute z-30 -top-9 left-10 bg-primary group-hover:bg-white  duration-300 p-2 w-max -mt-10 rounded-lg">
                <Building
                  size={40}
                  className="text-white group-hover:text-primary duration-300"
                />
              </div>
              <div className="relative z-20 bg-white group-hover:bg-primary group-hover:text-white duration-300 serviceCard p-6 py-8 -mt-10 mx-3">
                <h2 className="text-2xl font-semibold ">Room Wallpapers</h2>
                <p className="text-sm my-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum iusto labore sapiente debitis reprehenderit voluptates
                  atque adipisci, quasi laborum
                </p>
                <Link
                  className="text-primary underline pb-1 text-sm group-hover:text-white duration-300"
                  href={"#"}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
