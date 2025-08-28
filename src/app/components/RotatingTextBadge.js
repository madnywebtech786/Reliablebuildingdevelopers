"use client";

import React from "react";
import { Award } from "lucide-react";

/**
 * RotatingCurvedTextBadge
 *
 * Props:
 *  - size: number (px) default 220
 *  - text: string default "25 years of experience"
 *  - duration: number (seconds) for one full rotation default 12
 *  - ringColor: CSS color for icon (default "#21745a")
 *  - bg: background color of outer circle (default "transparent")
 */
export default function RotatingTextBadge({
  size = 220,
  text = "25 years of experience",
  duration = 12,
  ringColor = "#21745a",
  bg = "transparent",
}) {
  const center = size / 2;
  const radius = Math.round(size / 2 - 18); // radius for text path (tweak to bring text closer/further)
  const fontSize = Math.max(10, Math.round(size / 10));

  return (
    <div
      className="relative inline-block"
      style={{ width: size, height: size }}
      aria-hidden={false}
    >
      <style>{`
        @keyframes rotateText {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .rotating-text { 
          transform-origin: 50% 50%;
          animation: rotateText ${duration}s linear infinite;
        }
        /* curved text is white */
        .curved-text { font-weight: 600; fill: #ffffff; }
      `}</style>

      {/* Outer container (static) */}
      <div
        className="absolute inset-0 rounded-full flex items-center justify-center"
        style={{
          background: bg,
        }}
      >
        {/* center badge (static) */}
        <div
          className="flex items-center justify-center rounded-full z-10"
          style={{
            width: Math.round(size * 0.48),
            height: Math.round(size * 0.48),
            background: "#fff",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          <Award size={Math.round(size * 0.25)} className="text-primary" />
        </div>
      </div>

      {/* SVG with circular path and two textPaths (offset) that rotate */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 bg-primary rounded-full"
        style={{ overflow: "visible", pointerEvents: "none" }}
        aria-hidden
      >
        <defs>
          {/* whole circle path used by textPath */}
          <path
            id="rot-circle-path"
            d={`
              M ${center} ${center - radius}
              a ${radius} ${radius} 0 1 1 0 ${radius * 2}
              a ${radius} ${radius} 0 1 1 0 -${radius * 2}
            `}
            fill="none"
          />
        </defs>

        {/* rotating group containing two textPaths */}
        <g className="rotating-text">
          {/* First text (starts at 0%) */}
          <text className="curved-text" fontSize={fontSize}>
            <textPath
              href="#rot-circle-path"
              startOffset="0%"
              method="align"
              side="left"
            >
              {text} •
            </textPath>
          </text>

          {/* Second text offset by 50% (appears on the opposite side) */}
          <text className="curved-text" fontSize={fontSize}>
            <textPath
              href="#rot-circle-path"
              startOffset="50%"
              method="align"
              side="left"
            >
              {text} •
            </textPath>
          </text>
        </g>

        {/* optional thin guide circle (invisible) if you want to debug */}
        {/* <circle cx={center} cy={center} r={radius} stroke="rgba(0,0,0,0.05)" fill="none" /> */}
      </svg>
    </div>
  );
}
