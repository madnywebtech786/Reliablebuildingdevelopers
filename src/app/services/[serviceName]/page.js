"use client";
import React from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";

export default function page() {
  const params = useParams();
  const name = params.serviceName;

  return (
    <>
      <Breadcrumb name={name.replace("-", " ")} />
      <div className=" p-6 md:p-8 lg:p-12 2xl:p-20 bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-20">
          <Image
            src={"/images/home.png"}
            width={500}
            height={500}
            className="serviceImg"
          />

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h2 className="text-4xl font-semibold uppercase">{name} Service</h2>
              <div className="w-full h-1 decor relative"></div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              voluptatem perferendis provident, culpa perspiciatis doloremque
              deserunt amet vel voluptatum fuga dicta delectus, odit dolorem
              magnam quidem id ipsa soluta necessitatibus? Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Est voluptatem perferendis
              provident, culpa perspiciatis doloremque deserunt amet vel
              voluptatum fuga dicta delectus, odit dolorem magnam quidem id ipsa
              soluta necessitatibus? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Est voluptatem perferendis provident, culpa
              perspiciatis doloremque deserunt amet vel voluptatum fuga dicta
              delectus, odit dolorem magnam quidem id ipsa soluta
              necessitatibus?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
