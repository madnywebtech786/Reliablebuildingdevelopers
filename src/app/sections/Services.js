import { Building, Car, DoorOpen, Footprints, Frame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Home,
  Layers,
  Hammer,
  UtensilsCrossed,
  Bath,
  Square,
  Paintbrush,
  Warehouse,
  Ruler,
  Zap,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      slug: "home-renovation",
      title: "Home Renovation",
      desc: "Transform outdated Calgary homes into modern, high-value spaces with full-service renovations.",
      img:"/images/services/home.webp",
      icon: Home,
    },
    {
      id: 2,
      slug: "basement-renovation",
      title: "Basement Renovation",
      desc: "Maximize square footage with cozy family areas, rental suites, or entertainment-ready basements.",
      img:"/images/services/basement.webp",
      icon: Layers,
    },
    {
      id: 4,
      slug: "kitchen-remodeling",
      title: "Kitchen Remodeling",
      desc: "Custom kitchens with smart layouts, cabinetry, countertops and modern appliances.",
      img:"/images/services/kitchen.webp",
      icon: UtensilsCrossed,
    },
    {
      id: 5,
      slug: "bathroom-remodeling",
      title: "Bathroom Remodeling",
      desc: "Upgrade bathrooms with waterproof finishes, heated floors, and elegant designs.",
      img:"/images/services/bathroom.webp",
      icon: Bath,
    },
    {
      id: 6,
      slug: "flooring",
      title: "Flooring",
      desc: "Hardwood, vinyl, tile and laminate flooring installed with precision and durability.",
      img:"/images/services/flooring.webp",
      icon: Hammer,
    },
    {
      id: 7,
      slug: "interior",
      title: "Interior Renovations",
      desc: "Painting, millwork, built-ins and trim for stylish and cohesive interiors.",
      img:"/images/services/interior.webp",
      icon: Paintbrush,
    },
    {
      id: 8,
      slug: "garage-development",
      title: "Garage Development",
      desc: "Convert garages into insulated, functional living or workspace with modern upgrades.",
      img:"/images/services/garage.webp",
      icon: Warehouse,
    },
    {
      id: 9,
      slug: "framing",
      title: "Framing",
      desc: "Precision structural framing for remodels, additions, and safe, long-lasting builds.",
      img:"/images/services/framing.webp",
      icon: Frame,
    },
    {
      id: 10,
      slug: "electrical",
      title: "Electrical",
      desc: "Licensed electrical services including wiring, lighting, panels, and smart systems.",
      img:"/images/services/electrical.webp",
      icon: Zap,
    },
    {
      id: 11,
      slug: "garage-pad",
      title: "Garage Pad",
      desc: "Durable concrete garage pads poured and finished to handle Calgary freeze-thaw cycles and vehicle loads.",
      img: "/images/services/garage-pad.webp",
      icon: Warehouse,
    },
    {
      id: 12,
      slug: "sidewalk",
      title: "Sidewalks",
      desc: "Concrete and paver sidewalks that boost curb appeal and meet code requirements.",
      img: "/images/services/side-walk.webp",
      icon: Footprints,
    },
    {
      id: 13,
      slug: "driveway",
      title: "Driveways",
      desc: "Full driveway services: new installs, resurfacing and repairs using asphalt, concrete or interlocking pavers.",
      img: "/images/services/driveway.webp",
      icon: Car,
    },
    {
      id: 14,
      slug: "side-entrance",
      title: "Side Entrance",
      desc: "Construct and finish side entrances with proper steps, landings, coverings and weatherproofing for safe access.",
      img: "/images/services/side-entrance.webp",
      icon: DoorOpen,
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-primary/5 dark:!bg-primary/5">
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
        {services.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-col group overflow-hidden rounded-xl"
            >
              <Image
                src={item.img}
                width={450}
                height={300}
                alt={item.title}
                className="max-h-[250] group-hover:scale-105 duration-300 relative z-0 rounded-xl mx-auto"
              />
              <div className="relative">
                <div className="absolute z-30 -top-9 left-10 bg-primary group-hover:bg-white  duration-300 p-2 w-max -mt-10 rounded-lg">
                  <Icon
                    size={40}
                    className="text-white group-hover:text-primary duration-300"
                  />
                </div>
                <div className="relative z-20 bg-white min-h-[200px] group-hover:bg-primary group-hover:text-white duration-300 serviceCard p-6 py-8 -mt-10 mx-3">
                  <h2 className="text-xl font-semibold  dark:text-black">{item.title}</h2>
                  <p className="text-sm my-3 dark:text-black">{item.desc}</p>
                  <Link
                    className="text-primary underline pb-1 text-sm group-hover:text-white duration-300"
                    href={`/services/${item.slug}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
