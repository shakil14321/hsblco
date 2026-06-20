/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Boxes,
  BriefcaseMedical,
  ChartLine,
  Handshake,
  Laptop,
  Lightbulb,
  Shield,
  Truck,
  Globe,
  ShoppingCart,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const IntegrationEcosystem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(SVGPathElement | null)[]>([]);

  const integrations = [
    { name: "Manufacturing", icon: Laptop, color: "text-blue-400" },
    { name: "Consulting", icon: Handshake, color: "text-emerald-400" },
    { name: "Requests", icon: Boxes, color: "text-amber-400" },
    { name: "Analytics", icon: ChartLine, color: "text-purple-400" },
    { name: "Cybersecurity", icon: Shield, color: "text-rose-400" },
    { name: "Healthcare", icon: BriefcaseMedical, color: "text-indigo-400" },
    { name: "Innovation", icon: Lightbulb, color: "text-orange-400" },
    { name: "Logistics", icon: Truck, color: "text-teal-400" },
    { name: "Global Ops", icon: Globe, color: "text-sky-400" },
    { name: "eCommerce", icon: ShoppingCart, color: "text-cyan-400" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Center Node Pulse & Entrance
      tl.fromTo(
        centerRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.75)" },
      );

      // 2. Lines Drawing
      lineRefs.current.forEach((line) => {
        if (line) {
          const length = line.getTotalLength();
          gsap.fromTo(
            line,
            { strokeDasharray: length, strokeDashoffset: length },
            { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" },
          );
        }
      });

      // 3. Icons Popping
      tl.fromTo(
        iconRefs.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(2)",
        },
        "-=1",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pb-24  overflow-hidden -mt-26">
      <div className="container mx-auto px-6">
        <div className="text-center ">
          <h2 className="text-4xl md:text-6xl font-black  mb-4">
            <span className="text-secondary">Unified</span>{" "}
            <span className="text-primary">Ecosystem</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            HSBLCO LLC acts as the central hub connecting diverse industries
            through seamless technological integration.
          </p>
        </div>

        {/* Central Hub Area */}
        <div
          ref={containerRef}
          className="
          group relative overflow-hidden rounded-[34px]
          border-2 border-cyan-300/40
          bg-linear-to-r from-gray-200/5 via-blue-200/10 to-gray-200/5
          backdrop-blur-2xl p-8
          shadow-[0_0_0_1px_rgba(103,232,249,0.15)]
          hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
          transition-all duration-500 ease-out philosophy-bg w-full max-w-5xl mx-auto aspect-square md:aspect-video flex items-center justify-center">
          {/* SVG Connector Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 600" // Larger coordinate system for better precision
            style={{ overflow: "visible" }}
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  stopColor="var(--color-primary)"
                  stopOpacity="0.2"
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-primary)"
                  stopOpacity="1"
                />
              </linearGradient>
            </defs>
            {integrations.map((_, index) => {
              const angle = (index / integrations.length) * 2 * Math.PI;
              // Precise line coordinates from center (500, 300)
              const targetX = 500 + 350 * Math.cos(angle);
              const targetY = 300 + 220 * Math.sin(angle);

              return (
                <path
                  key={index}
                  ref={(el: any) => (lineRefs.current[index] = el)}
                  d={`M 500 300 L ${targetX} ${targetY}`}
                  stroke="url(#lineGrad)"
                  strokeWidth="1.5"
                  fill="none"
                  className="opacity-40"
                />
              );
            })}
          </svg>

          {/* Central Hub Node */}
          <div
            ref={centerRef}
            className="relative z-30 w-32 h-32 md:w-44 md:h-44 bg-primary rounded-full flex items-center justify-center text-center p-4 shadow-[0_0_50px_rgba(59,130,246,0.5)] border-4 border-white/10"
          >
            <div className="absolute inset-0 rounded-full animate-ping bg-primary opacity-20"></div>
            <span className="text-lg md:text-2xl font-black text-white tracking-tighter leading-none">
              HSBLCO LLC.
            </span>
          </div>

          {/* Satellite Integration Nodes */}
          {integrations.map((item, index) => {
            const angle = (index / integrations.length) * 2 * Math.PI;
            // Radius matches the SVG line targets
            const x = 50 + 35 * Math.cos(angle);
            const y = 50 + 36 * Math.sin(angle);

            return (
              <div
                key={item.name}
                ref={(el: any) => (iconRefs.current[index] = el)}
                className="absolute z-20 group -translate-x-1/2 -translate-y-1/2"
                style={{ top: `${y}%`, left: `${x}%` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl flex items-center justify-center mb-2 shadow-2xl group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                    <item.icon
                      className={`w-6 h-6 md:w-10 md:h-10 ${item.color}`}
                    />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-secondary transition-colors">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IntegrationEcosystem;
