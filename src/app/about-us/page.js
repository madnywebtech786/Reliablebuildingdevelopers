import Image from "next/image";
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import About from "../sections/About";

export default function page() {
  return (
    <>
      <Breadcrumb name={"Mission & Vission"} />
        <About />
      <section className="p-6 md:p-8 lg:p-12 2xl:p-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Top-left: MISSION (bg-white) */}
            <div className="relative order-1 md:order-1">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-semibold uppercase text-primary-dark mb-3 dark:text-black">
                  Our Mission
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  At YYC Precast, our mission is to provide Calgary and
                  surrounding communities with top-quality precast concrete
                  products that stand the test of time. Whether it’s durable
                  steps, secure window wells, or reliable parking curbs, every
                  product we manufacture is built with precision, strength, and
                  attention to detail.
                  <br />
                  <br />
                  Our mission is to design, manufacture, and deliver
                  high-quality precast concrete steps that exceed industry
                  standards for safety, durability, and aesthetics while
                  providing exceptional service, on-time delivery, and
                  long-lasting value to builders, contractors, and property
                  owners. <br />
                  <br />
                  We are committed to delivering more than just concrete we
                  deliver solutions. From the first consultation to final
                  installation, our team works closely with customers to
                  understand their needs, offer expert guidance, and ensure
                  every project is completed on time and to the highest
                  standards. Our local manufacturing process allows us to
                  respond quickly to orders, reduce transportation time, and
                  maintain consistent quality control.
                  <br />
                  <br />
                  Through exceptional craftsmanship, sustainable practices, and
                  dedicated service, we aim to make every YYC Precast
                  installation a long-lasting improvement to homes, businesses,
                  and public spaces across our region.
                </p>
              </div>
            </div>

            {/* Top-right: Illustration (target) */}
            <div className="flex items-center justify-center order-2 md:order-2">
              <Image
                src={"/images/home.png"}
                width={600}
                height={600}
                className="rounded-xl max-h-[500px]"
              />
            </div>

            {/* Bottom-left: small illustration / tools */}
            <div className="flex items-center justify-center order-4 md:order-3">
              <Image
                src={"/images/kitchen.png"}
                width={600}
                height={600}
                className="rounded-xl max-h-[500px]"
              />
            </div>

            {/* Bottom-right: VISION (bg-primary) */}
            <div className="order-3 md:order-4">
              <div className="bg-primary text-white rounded-lg shadow-lg p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-semibold uppercase text-white mb-3">
                  Our Vision
                </h3>
                <p className="text-sm leading-relaxed">
                  Our vision is to become Calgary’s most trusted and recognized
                  name in precast concrete manufacturing and installation. We
                  strive to set the benchmark for quality, innovation, and
                  reliability in the industry, earning the loyalty of customers
                  through our consistent results and unmatched service.
                  <br />
                  <br />
                  We envision a future where our products are the go-to choice
                  for builders, contractors, and property owners who value
                  durability, safety, and efficiency. By investing in advanced
                  manufacturing technology, adopting eco-friendly processes, and
                  continually improving our designs, we aim to contribute to a
                  stronger, safer, and more sustainable community.
                  <br />
                  <br />
                  To be the leading provider of durable, innovative, and
                  architecturally refined precast concrete products setting the
                  standard for safety, strength, and style in residential and
                  commercial construction across North America.
                  <br />
                  <br />
                  YYC Precast is not just building concrete structures we are
                  building trust, reliability, and long-term value for every
                  client we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
