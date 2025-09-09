"use client";
import React from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";
import ProjectCard from "@/app/components/ProjectCard";

export default function Page() {
  const params = useParams();
  const rawCity = (params?.city || "all").toString().toLowerCase();

  const projectsByCity = {
    calgary: [
      {
        id: 1,
        img1: "/images/home.png",
        img2: "/images/kitchen.png",
        alt: "Window Well",
        title: "Window Well",
        subtitle: "Safety meets elegance for basement windows",
        desc: `Our Window Well combine structural integrity with modern aesthetics. Engineered to withstand heavy snow loads while providing unobstructed natural light and ventilation to basement spaces.`,
      },
      {
        id: 2,
        img1: "/images/home.png",
        img2: "/images/kitchen.png",
        alt: "Precast Concrete Steps",
        title: "Precast Concrete Steps",
        subtitle: "Durable steps for every entryway",
        desc: `Custom precast concrete steps designed for strength and longevity. Each piece is precision-cast for a perfect fit, offering a low-maintenance, high-impact entrance solution.`,
      },
    ],
    chesteremere: [
      {
        id: 3,
        img1: "/images/home.png",
        img2: "/images/kitchen.png",
        alt: "Foundation Wall Panels",
        title: "Foundation Wall Panels",
        subtitle: "Insulated and reinforced solutions",
        desc: `Superior insulated wall panels that streamline your build while enhancing energy efficiency. Reinforced steel cores ensure lasting support and peace of mind for any structure.`,
      },
      {
        id: 4,
        img1: "/images/home.png",
        img2: "/images/kitchen.png",
        alt: "Architectural Concrete Blocks",
        title: "Architectural Concrete Blocks",
        subtitle: "Aesthetic blocks with structural performance",
        desc: `Our architectural blocks combine form and function—available in a variety of textures and colors to suit your design while meeting rigorous load-bearing requirements.`,
      },
    ],
    strathmore: [
      {
        id: 3,
        img1: "/images/home.png",
        img2: "/images/kitchen.png",
        alt: "Foundation Wall Panels",
        title: "Foundation Wall Panels",
        subtitle: "Insulated and reinforced solutions",
        desc: `Superior insulated wall panels that streamline your build while enhancing energy efficiency. Reinforced steel cores ensure lasting support and peace of mind for any structure.`,
      },
      {
        id: 4,
        img1: "/images/home.png",
        img2: "/images/kitchen.png",
        alt: "Architectural Concrete Blocks",
        title: "Architectural Concrete Blocks",
        subtitle: "Aesthetic blocks with structural performance",
        desc: `Our architectural blocks combine form and function—available in a variety of textures and colors to suit your design while meeting rigorous load-bearing requirements.`,
      },
    ],
    highriver: [
      {
        id: 3,
        img1: "/images/home.png",
        img2: "/images/kitchen.png",
        alt: "Foundation Wall Panels",
        title: "Foundation Wall Panels",
        subtitle: "Insulated and reinforced solutions",
        desc: `Superior insulated wall panels that streamline your build while enhancing energy efficiency. Reinforced steel cores ensure lasting support and peace of mind for any structure.`,
      },
      {
        id: 4,
        img1: "/images/home.png",
        img2: "/images/kitchen.png",
        alt: "Architectural Concrete Blocks",
        title: "Architectural Concrete Blocks",
        subtitle: "Aesthetic blocks with structural performance",
        desc: `Our architectural blocks combine form and function—available in a variety of textures and colors to suit your design while meeting rigorous load-bearing requirements.`,
      },
    ],
    cochrane: [
      {
        id: 3,
        img1: "/images/home.png",
        img2: "/images/kitchen.png",
        alt: "Foundation Wall Panels",
        title: "Foundation Wall Panels",
        subtitle: "Insulated and reinforced solutions",
        desc: `Superior insulated wall panels that streamline your build while enhancing energy efficiency. Reinforced steel cores ensure lasting support and peace of mind for any structure.`,
      },
      {
        id: 4,
        img1: "/images/home.png",
        img2: "/images/kitchen.png",
        alt: "Architectural Concrete Blocks",
        title: "Architectural Concrete Blocks",
        subtitle: "Aesthetic blocks with structural performance",
        desc: `Our architectural blocks combine form and function—available in a variety of textures and colors to suit your design while meeting rigorous load-bearing requirements.`,
      },
    ],
    okotoks: [
      {
        id: 3,
        img1: "/images/home.png",
        img2: "/images/kitchen.png",
        alt: "Foundation Wall Panels",
        title: "Foundation Wall Panels",
        subtitle: "Insulated and reinforced solutions",
        desc: `Superior insulated wall panels that streamline your build while enhancing energy efficiency. Reinforced steel cores ensure lasting support and peace of mind for any structure.`,
      },
      {
        id: 4,
        img1: "/images/home.png",
        img2: "/images/kitchen.png",
        alt: "Architectural Concrete Blocks",
        title: "Architectural Concrete Blocks",
        subtitle: "Aesthetic blocks with structural performance",
        desc: `Our architectural blocks combine form and function—available in a variety of textures and colors to suit your design while meeting rigorous load-bearing requirements.`,
      },
    ],
  };

  // Helper: title-case city names for headings
  const titleCase = (s) =>
    s
      .split(/[\s-_]+/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  // Decide which cities to render
  const citiesToRender =
    rawCity === "all"
      ? Object.keys(projectsByCity)
      : Object.keys(projectsByCity).includes(rawCity)
      ? [rawCity]
      : []; // empty -> show not found

  return (
    <>
      <Breadcrumb name={"Our Projects"} />
      <div className="p-6 md:p-8 lg:p-12 2xl:p-20">
        {citiesToRender.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-semibold mb-4">No projects found</h2>
            <p className="text-sm text-muted-foreground">
              There are no projects for &quot;{rawCity}&quot;. Try &quot;all&quot; or another city.
            </p>
          </div>
        ) : (
          citiesToRender.map((cityKey, cityIndex) => {
            const cityProjects = projectsByCity[cityKey] || [];
            return (
              <section key={cityKey} className="mb-20">
                {/* City heading */}
                <h2 className="text-3xl font-bold mb-8 text-center text-primary">
                  {titleCase(cityKey)} Projects
                </h2>

                <div className="flex flex-col lg:flex-row items-center w-full">
                  {cityProjects.map((project, index) => (
                    <div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className={`service-card w-full`}
                    >
                      <ProjectCard
                        img1={project.img1}
                        img2={project.img2}
                        alt={project.alt}
                      />
                    </div>
                  ))}
                </div>
              </section>
            );
          })
        )}
      </div>
    </>
  );
}
