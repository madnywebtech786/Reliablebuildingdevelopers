import React from "react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const services = [
  {
    slug: "home-renovation",
    img: "/images/services/home.webp",
    name: "Home Renovation",
    desc:
      "Full-service home renovation in Calgary and surrounding communities  transforming dated spaces into high-value, modern living areas with craftsmanship that lasts.",
    additional_desc:
      "From concept to completion, our Calgary home renovation team handles permits, design coordination, structural updates and finishing touches. We specialize in energy-efficient upgrades, open-plan conversions, and high-return improvements tailored to Alberta homes, delivering projects on time and on budget. Get a free on-site estimate and a clear project timeline for your next home remodel.",
    features: [
      "Free on-site estimate & transparent quotes",
      "Design + build  drawings, permits and execution",
      "Energy-efficient upgrades & insulation improvements",
      "Licensed, insured crews with Calgary building code experience",
      "Project management with clear milestone communication",
      "High-quality finishes with local warranty options",
    ],
  },
  {
    slug: "basement-renovation",
    img: "/images/services/basement.webp",
    name: "Basement Renovation",
    desc:
      "Professional basement renovations in Calgary that convert underused basements into comfortable family spaces, suites or rental units  maximizing usable square footage and home value.",
    additional_desc:
      "We handle every stage of basement remodels: damp-proofing and waterproofing prep, framing, electrical, plumbing rough-ins, insulation, drywall, flooring choices, and custom trim. Whether you want a home theatre, nanny suite, or income-producing rental, our team ensures code compliance and efficient use of space for Calgary and nearby neighbourhoods.",
    features: [
      "Moisture mitigation & waterproofing prep",
      "Basement layout design for function and code compliance",
      "Separate HVAC and ventilation solutions",
      "Option for legal secondary suite conversion",
      "Soundproofing options for multi-use rooms",
      "Turnkey finishing: paint, trim, cabinetry and lighting",
    ],
  },
  {
    slug: "basement-lamination",
    img: "/images/services/basement-lamination.webp",
    name: "Basement Lamination (Laminate Flooring for Basements)",
    desc:
      "Basement laminate flooring solutions designed for Calgary’s below-grade conditions  stylish wood looks with practical installation methods for cooler, humid spaces.",
    additional_desc:
      "Laminate can be an attractive, cost-effective basement finish when installed with appropriate moisture barriers, underlayment and subfloor prep. Modern waterproof or water-resistant laminate products and proper installation practices reduce the risk of swelling or damage, but careful moisture testing and floor preparation are essential for long life in below-grade environments. (Note: traditional laminate has moisture sensitivity  we’ll recommend the best product and installation strategy for your basement.)",
    features: [
      "Moisture testing and vapor barrier installation",
      "Floating floor installation with underlayment suited for basements",
      "Advice on waterproof vs. water-resistant laminate options",
      "Transition solutions to main floor finishes",
      "Warranty guidance and manufacturer-approved installation",
      "Cost comparison vs. luxury vinyl and engineered hardwood",
    ],
  },
  {
    slug: "kitchen-remodeling",
    img: "/images/services/kitchen.webp",
    name: "Kitchen Remodeling",
    desc:
      "Custom kitchen remodeling in Calgary  from design and cabinetry to plumbing, appliances and lighting for functional, beautiful kitchens that boost resale value.",
    additional_desc:
      "We create kitchens that match your lifestyle: chef-style workspaces, family kitchens with island seating, or compact efficient layouts for infill homes. Our services include custom cabinetry, quartz and butcher-block countertops, high-efficiency appliances, modern lighting plans, and plumbing moves handled by certified trades. Detailed selection guidance and 3D mockups help you visualize the end result before construction begins.",
    features: [
      "Custom cabinetry and efficient storage solutions",
      "Countertop selection: quartz, granite, solid surface",
      "Full plumbing and electrical upgrades",
      "Appliance integration and ventilation solutions",
      "Lighting plans: task, ambient and accent lighting",
      "Finish carpentry and long-term warranty support",
    ],
  },
  {
    slug: "bathroom-remodeling",
    img: "/images/services/bathroom.webp",
    name: "Bathroom Remodeling",
    desc:
      "Calgary bathroom remodeling with durable materials, water-smart installation and elegant finishes  from powder rooms to luxurious master ensuites.",
    additional_desc:
      "We specialize in waterproofing, tile installation, shower and tub systems, heated floors, and accessibility upgrades. Whether you want a spa-style ensuite or a compact, efficient guest bathroom, our team uses materials and techniques suited for Calgary indoor climate and long-term durability. We focus on fast, clean projects and clear communication during every renovation phase.",
    features: [
      "Waterproofing and tile backer systems",
      "Custom showers, steam and tub installations",
      "Heated flooring options (hydronic & electric)",
      "Accessibility and aging-in-place upgrades",
      "Low-flow fixtures and water-efficient plumbing",
      "Full coordination with trades & city inspections",
    ],
  },
  {
    slug: "flooring",
    img: "/images/services/flooring.webp",
    name: "Flooring",
    desc:
      "Comprehensive flooring services in Calgary  supply and installation of hardwood, engineered wood, luxury vinyl plank (LVP), laminate, and tile to suit style and budget.",
    additional_desc:
      "We evaluate subfloor conditions and recommend the best product for each space: engineered hardwood for warmth, LVP for moisture-prone areas, and tile for bathrooms and entries. Our installers follow manufacturer recommendations for warranties and work with you to choose colour, finish and board patterns that complement your home and Calgary climate.",
    features: [
      "Subfloor inspection and moisture testing",
      "Hardwood, engineered, vinyl plank and tile installations",
      "Manufacturer-approved installation & warranty support",
      "Staircase, thresholds and trim finishing",
      "Sanding & refinishing services for existing hardwood",
      "Advice on best flooring options for basements and high-traffic areas",
    ],
  },
  {
    slug: "interior",
    img: "/images/services/interior.webp",
    name: "Interior",
    desc:
      "Interior renovation and finishing services for Calgary homes  painting, millwork, trim, closet systems, built-ins and modern open-plan transformations.",
    additional_desc:
      "Our interior specialists focus on cohesive design language, durable finishes and smart storage solutions. We deliver precise trim and millwork, custom built-ins, closet systems, and painting with premium products that stand up to Alberta’s seasonal humidity and temperature fluctuations. Work with our design team to match finishes across rooms for a seamless, polished look.",
    features: [
      "Custom millwork and finish carpentry",
      "Premium painting and texture finishes",
      "Built-in storage and custom closet systems",
      "Open-plan conversions and partition removal",
      "Lighting and trim coordination",
      "Final cleaning and punch-list completion",
    ],
  },
  {
    slug: "garage-development",
    img: "/images/services/garage.webp",
    name: "Garage Development",
    desc:
      "Garage conversions and development  transform an underused garage into a workspace, suite, or high-performing insulated room suitable for Calgary weather.",
    additional_desc:
      "We provide garage insulation, drywall, new electrical circuits, heated floors, storage systems and exterior upgrades to integrate the space with your home. Whether building a heated workshop, storage lift system, or a garage-to-living conversion, our team ensures proper insulation, fire separation and code compliance for safe, comfortable spaces.",
    features: [
      "Insulation & thermal upgrades for cold-climate performance",
      "Electrical upgrades and dedicated circuits",
      "Floor coatings, drains and ventilation options",
      "Storage systems, lofts and bespoke cabinetry",
      "Garage door and exterior trim integration",
      "Permit handling and code-compliant conversions",
    ],
  },
  {
    slug: "framing",
    img: "/images/services/framing.webp",
    name: "Framing",
    desc:
      "Structural framing services for renovations and additions  precision framing that creates the backbone for safe, long-lasting remodels across Calgary and nearby towns.",
    additional_desc:
      "Our framing crews support interior remodels, basement builds and home additions, using engineered solutions when needed for load-bearing changes. We coordinate with engineers and inspectors and provide clear documentation so your project progresses smoothly from foundation to drywall.",
    features: [
      "Interior and exterior load-bearing framing",
      "Engineered beam & header installation",
      "Wall builds, partitions and soffit framing",
      "Coordination with engineers & inspections",
      "Precision framing for straight walls and tight tolerances",
      "Framing for window/door modifications and additions",
    ],
  },
  {
    slug: "electrical",
    img: "/images/services/electrical.webp",
    name: "Electrical",
    desc:
      "Licensed electrical services for renovations  panel upgrades, new circuits, lighting design and code-compliant installations across Calgary and surrounding communities.",
    additional_desc:
      "Our certified electricians deliver safe, up-to-date electrical work including kitchen and bathroom circuits, EV charger prep, panel upgrades, recessed lighting and smart home integrations. All electrical work is performed to Alberta Electrical Code standards and coordinated with renovation schedules to minimize downtime and rework.",
    features: [
      "Licensed electricians and code-compliant work",
      "Panel upgrades & load calculations",
      "Dedicated circuits for appliances and EV chargers",
      "LED & recessed lighting installation",
      "Smart home wiring, speakers and data lines",
      "Coordination with inspections and renovation timeline",
    ],
  },
];

export default function Page({ params }) {
  const serviceNameParam = params?.serviceName ?? "";
  const decodedServiceName = decodeURIComponent(serviceNameParam);
  const service = services.find((s) => s.slug === decodedServiceName);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Breadcrumb name={service.name} />
      <div className="p-6 md:p-8 lg:p-12 2xl:p-20 bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-12">
          <div className="w-full lg:w-1/2">
            <Image
              src={service.img}
              width={900}
              height={600}
              alt={service.name}
              className="rounded-lg object-cover w-full h-auto shadow-md serviceImg max-h-[500px]"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div>
              <h2 className="text-4xl font-semibold uppercase dark:text-black">{service.name}</h2>
              <div className="w-20 h-1 bg-primary my-4 rounded"></div>
            </div>

            <div className="prose max-w-none dark:text-black">
              <p>
                {service.desc}
                <br />
                <br />
                {service.additional_desc}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mt-2 dark:text-black">Features</h3>
              <ul className="mt-4 space-y-3 dark:text-black">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 text-primary mt-1" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
