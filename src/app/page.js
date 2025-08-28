import Image from "next/image";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import WorkProcessSection from "./sections/WorkProcess";
import StatsSection from "./sections/StatsSection";
import Testimonials from "./sections/Testimonials";
import ModernContactSection from "./sections/ContactUs";
import WorkingAreas from "./sections/WorkingAreas";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WorkProcessSection />
      <StatsSection />
<WorkingAreas />
      <Testimonials />
      <ModernContactSection />
    </>
  );
}
