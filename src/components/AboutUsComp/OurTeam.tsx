/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import { TeamTypes } from "@/types";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  data: TeamTypes[];
}

const OurTeam = ({ data }: Props) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-header-item", {
        y: 40,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".team-card", {
        y: 90,
        opacity: 0,
        scale: 0.92,
        filter: "blur(14px)",
        duration: 1.25,
        stagger: 0.16,
        ease: "expo.out",
        clearProps: "transform,opacity,filter",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 82%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-3">
        <div className="text-center mb-20">
          <span className="team-header-item text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
            We're dedicated to your success!
          </span>

          <h2 className="team-header-item text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-secondary tracking-tighter max-w-3xl mx-auto leading-[1.1]">
            Let&apos;s meet our awesome world class team members.
          </h2>
        </div>

        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 max-w-6xl mx-auto">
          {data?.map((member, index) => (
            <div
              key={index}
              className="team-card group flex flex-col items-center cursor-pointer drop-shadow-lg"
            >
              <div className="relative w-full aspect-4/5 mb-6 overflow-hidden transition-all duration-700 ease-out group-hover:-translate-y-2">
                <div className="relative w-full h-full bg-slate-100 overflow-hidden our-team-clip">
                  <Image
                    width={500}
                    height={500}
                    src={member.image}
                    alt={member.name}
                    className="team-img w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-1000 ease-out"
                  />

                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <div className="flex gap-3 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                      <button className="w-10 h-10 rounded-full bg-white text-secondary flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
                        <Facebook size={18} />
                      </button>

                      <button className="w-10 h-10 rounded-full bg-white text-secondary flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
                        <Twitter size={18} />
                      </button>

                      <button className="w-10 h-10 rounded-full bg-white text-secondary flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
                        <Linkedin size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-black text-secondary group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>

                <p className="text-gray-400 font-medium mt-1 uppercase text-xs tracking-widest">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;