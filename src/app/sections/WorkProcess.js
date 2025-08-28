// components/WorkProcessSection.jsx
"use client";

import React from "react";
import { FileText, UserCheck, Image as ImageIcon } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Request Your Service",
    desc: "Tell us what you need and when. Provide details about the job, location and any special requirements — we’ll review and confirm availability promptly.",
    Icon: FileText,
  },
  {
    id: 2,
    title: "Meet with Our Experts",
    desc: "We’ll arrange a consultation to assess the scope, recommend materials and present a project plan — all tailored to your timeline and budget.",
    Icon: UserCheck,
  },
  {
    id: 3,
    title: "Enjoy Your New Wall Look",
    desc: "Our certified team completes the work with meticulous finishing and a post-installation walkthrough so you’re delighted with the results.",
    Icon: ImageIcon,
  },
];

export default function WorkProcessSection() {
  return (
    <section className="">
      <div className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-16">
        <div className="text-center">
          <p className="text-sm text-secondary uppercase tracking-wider ">
            3 EASY STEPS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight ">
            Our Work Process
          </h2>
          <div className="w-25 h-1 decor relative mx-auto"></div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-start mt-20">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* vertical decorative line (left) */}
              <div className="hidden md:block absolute -left-6 top-2 bottom-6 w-[4px] bg-primary rounded" />

              {/* number badge */}
              <div
                className={`absolute -top-10 left-4 md:-left-10 flex items-center justify-center w-16 h-16 rounded-md rounded-br-none bg-neutral-800 text-white font-semibold z-10 shadow`}
                aria-hidden
              >
                <span className="leading-none text-3xl">
                  {step.id < 10 ? `0${step.id}` : step.id}
                </span>
              </div>

              {/* small top ruler */}
              <div className="hidden md:block absolute -top-6 left-0 right-6 h-1 bg-primary/90" />

              {/* Card */}
              <div className="bg-primary/20 rounded-3xl p-8 py-14 min-h-[220px] relative overflow-hidden">
                {/* small decorative circle top-right */}
                <div className="absolute top-6 right-6 opacity-10 w-10 h-10 rounded-full border border-primary/40" />

                {/* icon top-right */}
                <div className="absolute top-6 right-6">
                  <step.Icon className="h-16 w-16 text-primary" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 max-w-[75%]">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
