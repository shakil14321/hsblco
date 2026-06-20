"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Props {
  title: string;
  description: string;
  bgBanner?: string;
}

const SubBanner = ({ title, description, bgBanner }: Props) => {
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clean staggered entrance
      const tl = gsap.timeline();

      tl.fromTo(
        ".reveal-item",
        { y: 40, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
        },
      );

      // Mouse parallax effect for blobs
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40;
        const yPos = (clientY / window.innerHeight - 0.5) * 40;

        gsap.to(".bg-blob-parallax", {
          x: xPos,
          y: yPos,
          duration: 2,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className=" w-full flex items-center justify-center overflow-hidden border-b border-white/5">
      <div>
        <div className="absolute left-0 -bottom-1 right-0 z-20">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1520 87"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#fff"
              d="M0.00964355 0H0V87H54.155C41.7623 86.0581 32 75.709 32 63.0698V31.4399C32 22.6099 24.8365 15.4399 16 15.4399C7.35083 15.4399 0.304565 8.58008 0.00964355 0Z"
            ></path>
            <path
              fill="#fff"
              d="M1428.84 87H1520V7.06982C1520 20.3301 1509.25 31.0698 1496 31.0698H1475C1461.75 31.0698 1451 41.8198 1451 55.0698V63.0698C1451 75.709 1441.23 86.0581 1428.84 87Z"
            ></path>
          </svg>
        </div>
        {/* Large Primary Blob */}
        <div className="bg-blob-parallax absolute top-[-20%] left-[-10%] w-150 h-150 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        {/* Secondary Accents */}
        <div className="bg-blob-parallax absolute bottom-[-10%] right-[0%] w-125 h-125 bg-blue-600/10 rounded-full blur-[100px]"></div>

        {/* Noise Texture Overlay (The 'Premium' Secret) */}
        <div className="absolute inset-0 opacity-[0.03] contrast-150 brightness-100 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-grid-white/[0.02] mask-[radial-gradient(white,transparent_85%)]"></div>
      </div>

      <div className="container py-50 mx-auto px-6 relative z-10 text-center">
        <div ref={textRef} className="flex flex-col items-center">
          {/* Badge */}
          <div className="reveal-item inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300">
              HSBLCO LLC • Global Reach
            </span>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="reveal-item text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-white/50 tracking-tighter mb-8"
          >
            {title}
          </h1>

          {/* Description */}
          <p className="reveal-item text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubBanner;
