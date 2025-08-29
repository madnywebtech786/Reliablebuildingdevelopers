import React from "react";
import ModernContactCreative from "../sections/ContactUs";
import Breadcrumb from "../components/Breadcrumb";

export default function page() {
  return (
    <div>
      <Breadcrumb name={"Contact Us"} />
      <section className=" bg-white">
        <ModernContactCreative />
      </section>
    </div>
  );
}
