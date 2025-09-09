"use client";
import { Aperture } from "lucide-react";
import React, { useState } from "react";

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqsData = [
    {
      question: "How do I get started with a renovation project in Calgary?",
      answer:
        "Reach out for a free consultation — we’ll discuss your goals, budget and timeline, perform a site assessment, and provide a detailed written estimate. From there we’ll propose a scope of work, preliminary design options, and an expected schedule tailored to Calgary permitting and seasonal considerations.",
    },
    {
      question:
        "Do you handle permits, inspections and City of Calgary requirements?",
      answer:
        "Yes — we manage permit applications, coordinate inspections, and ensure work complies with City of Calgary and Alberta building codes (including egress windows, fire separations for suites, and structural changes). We include permit coordination in our project management so you don’t have to deal with red tape.",
    },
    {
      question: "What is included in your written estimate and contract?",
      answer:
        "Our estimates provide a transparent breakdown of materials, labour, permit fees, project management and applicable trades. Contracts outline payment milestones, a change-order process, warranty terms and an estimated schedule; we also recommend a contingency (typically 10–15%) for unforeseen issues in older homes.",
    },
    {
      question:
        "How do you protect my home and minimize disruption during work?",
      answer:
        "We use dust containment, floor protection, and staged workflows to keep your home livable and safe. For larger projects we phase work, maintain clear communication about noisy or disruptive stages, and assign a project supervisor to coordinate schedules and on-site cleanliness.",
    },
    {
      question:
        "Can you make my basement a legal secondary suite or rental unit?",
      answer:
        "Yes — we design and build basement suites to meet Alberta and City of Calgary requirements for legal secondary suites, including proper egress, sound separation, ventilation, separate utilities when required, and required fire-rated assemblies. We’ll review zoning and code constraints during the estimate phase.",
    },
    {
      question: "What flooring options are best for Calgary basements and why?",
      answer:
        "For basements we recommend moisture-tolerant options like luxury vinyl plank (LVP) or engineered hardwood with proper vapor barriers; modern water-resistant laminate can be an option if subfloor prep and moisture mitigation are addressed. We conduct moisture testing and recommend the best product for longevity and comfort in below-grade conditions.",
    },
    {
      question:
        "Are your trades licensed, insured and bonded for Calgary projects?",
      answer:
        "All trades we use are licensed and carry proper insurance and WSIB/CRA coverage where applicable. Our company also maintains liability insurance and provides proof of coverage upon request, ensuring your project is protected and professionally managed.",
    },
    {
      question: "How long will my project take and how do you handle delays?",
      answer:
        "Timelines depend on scope — small remodels often take 2–6 weeks, kitchens 4–8 weeks, basements 6–10 weeks, and whole-home renovations several months. We build realistic schedules that factor Calgary weather and permit timelines; when delays occur (materials, inspections, weather) we update you immediately and revise milestones with transparency.",
    },
    {
      question:
        "What payment schedule do you require and do you offer financing?",
      answer:
        "Typical payment schedules include a deposit to secure dates, progress payments tied to milestones, and final payment at project completion. We can outline options and work with third-party financing partners or local lenders if you’d like to spread costs — financing availability depends on credit and lender terms.",
    },
    {
      question: "Do you offer warranties and post-project support?",
      answer:
        "Yes — we provide a workmanship warranty (commonly 1–2 years depending on scope) plus any applicable manufacturer warranties for products and appliances. After handover we address warranty issues promptly and provide maintenance guidance to help protect your investment.",
    },
    {
      question:
        "Can you help with energy-efficiency upgrades and insulation for Calgary’s climate?",
      answer:
        "Absolutely — we specialize in insulation upgrades, air-sealing, energy-efficient windows and HVAC improvements that reduce heating costs and improve comfort during Calgary’s cold months. We can recommend cost-effective upgrades and provide ROI estimates to prioritize work that delivers the best long-term savings.",
    },
    {
      question:
        "What happens if I want to change the design or add work mid-project?",
      answer:
        "We handle changes through a formal change-order process that documents scope adjustments, cost impacts and revised timelines. Minor adjustments may be approved quickly, but larger changes will be quoted and scheduled — we aim to be flexible while protecting both the project budget and the schedule.",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full flex flex-col lg:flex-row  gap-5">
        <div className="w-full flex flex-col px-3">
          <div className="w-24 bg-primary-gradient rounded-lg flex py-1 px-2 gap-2 items-center">
            <Aperture size={20} color="white" />
            <span className="rounded-lg text-white font-semibold">FAQs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500 mt-4">
            Proactively answering FAQs boosts user confidence and cuts down on
            support tickets.
          </p>
          <div className="w-full mt-6 flex flex-col gap-4 items-start text-left">
            {faqsData.map((faq, index) => (
              <div
                key={index}
                className="flex flex-col items-start w-full border border-indigo-100 rounded-lg"
              >
                <div
                  className="flex items-center justify-between w-full cursor-pointer  p-4 "
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h2 className="text-sm font-semibold">{faq.question}</h2>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      openIndex === index ? "rotate-180" : ""
                    } transition-all duration-500 ease-in-out`}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#1D293D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className={`text-sm text-slate-600 px-4 transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "opacity-100 max-h-[300px] translate-y-0 p-4 pt-0"
                      : "opacity-0 max-h-0 -translate-y-2"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
     
      </div>
    </div>
  );
}
