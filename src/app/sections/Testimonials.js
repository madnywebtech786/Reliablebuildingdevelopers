const CreateCard = ({ card }) => (
  <div className="p-4 rounded-lg mx-2 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">
    <div className="flex gap-2">
      <img className="size-11 rounded-full" src={card.image} alt="User Image" />
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <p>{card.name}</p>
        </div>
        <span className="text-xs text-slate-500">{card.handle}</span>
      </div>
    </div>
    <p className="text-sm py-4 text-gray-800">
      Radiant made undercutting all of our competitors an absolute breeze.
    </p>
  </div>
);

import React from "react";

export default function Testimonials() {
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "Happy Client",
      date: "April 20, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "Happy Client",
      date: "May 10, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "Happy Client",
      date: "June 5, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Avery Johnson",
      handle: "Happy Client",
      date: "May 10, 2025",
    },
  ];

  return (
    <>
      <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>

      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-16">
        <div className="text-center">
          <p className="text-sm text-secondary uppercase tracking-wider ">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight ">
            What Our Clients Says
          </h2>
          <div className="w-25 h-1 decor relative mx-auto"></div>
        </div>

        <div className="marquee-row w-full  overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-10 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-10 md:w-2 0 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
        </div>

        <div className="marquee-row w-full  overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-10 md:w-2 0 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </>
  );
}
