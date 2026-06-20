/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactPlayer from "react-player";
import CustomButton from "../common/CustomButton";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const unifiedTitleRef = useRef<HTMLSpanElement>(null);
  const edgeTitleRef = useRef<HTMLSpanElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(unifiedTitleRef.current, {
        x: -140,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          edgeTitleRef.current,
          {
            x: 140,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.75",
        )
        .from(
          imageRef.current,
          {
            x: -160,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.65",
        )
        .from(
          textContentRef.current?.children || [],
          {
            x: 160,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.85",
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="solutions"
      ref={container}
      className="hero-shape py-25 overflow-hidden font-sans text-white"
    >
      <div className="container relative z-10 mx-auto px-8 xl:px-16">
        {/* Title */}
        <div className="mb-16 overflow-hidden">
          <h2 className="xl:text-9xl lg:text-7xl md:text-5xl text-3xl font-semibold text-white">
            <span ref={unifiedTitleRef} className="inline-block">
              Unified Tech
            </span>

            <br />

            <span ref={edgeTitleRef} className="block text-end text-white py-5">
              at Edge Scale.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 items-start relative">
          {/* IMAGE */}
          <div className="relative flex justify-center lg:justify-start">
            <div
              ref={imageRef}
              className="relative rounded-3xl overflow-hidden z-10 cursor-pointer w-full solutions-clip lg:translate-y-37.5 scale-50 lg:scale-100 xl:shadow-2xl lg:shadow-none md:shadow-2xl shadow-none -mt-35 border border-white/10"
              onClick={() => setIsOpen(true)}
            >
              <Image
                width={1024}
                height={1024}
                src="/image/solutions/img-3.png"
                alt="HSBLCO AI Solutions"
                className="w-full aspect-4/3 object-cover hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute xl:bottom-8 xl:left-8 lg:bottom-3 lg:left-11 md:bottom-6 md:left-6 bottom-4 left-12 bg-red-500 hover:bg-red-700 text-white 2xl:p-6 lg:p-2 md:p-6 p-1.5 2xl:rounded-2xl xl:rounded-xl lg:rounded-lg md:rounded-2xl rounded-sm flex items-center justify-center transition-all duration-300 group shadow-2xl">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div ref={textContentRef} className="text-content space-y-8 mt-10 lg:mt-0">
            <div className="space-y-6">
              <span className="text-sky-400 uppercase tracking-widest text-xs">
                Next-Gen Ecosystem
              </span>

              <h3 className="text-2xl md:text-5xl lg:text-4xl text-white leading-tight">
                Architecting the backbone of autonomous enterprises.
              </h3>

              <p className="text-slate-300 2xl:text-xl text-lg leading-relaxed">
                We don't believe in isolated tools. Our ecosystem merges
                <strong className="text-white"> Generative AI</strong> with{" "}
                <strong className="text-white">IoT Mesh Networks</strong> and
                <strong className="text-white"> Blockchain security</strong> to
                create a living, breathing digital infrastructure that thinks
                and reacts in real-time.
              </p>
            </div>

            <div className="space-y-6 border-l-2 border-sky-400 pl-8">
              <p className="text-slate-400 text-lg leading-relaxed italic">
                "Modern scalability isn't about adding more servers; it's about
                embedding intelligence into every node of your network."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-0.5 bg-sky-400" />

                <span className="text-sm uppercase tracking-widest text-slate-500">
                  Technical Strategy 2026
                </span>
              </div>
            </div>

            <div className="pt-4">
              <CustomButton
                title="Explore Our Ecosystem"
                fn={() => router.push("/solutions")}
                className="md:w-auto w-full px-10 py-4 text-lg bg-white hover:bg-sky-500 text-black hover:text-white transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <ReactPlayer
              src="/video/vid-1.mp4"
              playing
              controls
              width="100%"
              height="100%"
            />

            <button
              className="absolute cursor-pointer md:top-6 md:right-6 top-2 right-2 text-red-500 hover:text-red-700 transition-colors bg-white/75 md:w-10 md:h-10 h-6 w-6 rounded-full flex items-center justify-center backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}