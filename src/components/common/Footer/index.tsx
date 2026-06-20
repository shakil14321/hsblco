/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SOCIAL_ICONS_DATA } from "@/constant/footerData";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(
    () => {
      const links = document.querySelectorAll(".footer-link");

      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            x: 5,
            color: "#22d3ee",
            duration: 0.3,
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            x: 0,
            color: "#cbd5e1",
            duration: 0.3,
          });
        });
      });
    },
    { scope: footerRef },
  );

  if (!mounted) return null;

  return (
    <footer ref={footerRef} className="bg-white xl:px-12 py-3">
      <div className="footer-bg rounded-[40px] border border-[#1c2740] bg-gradient-to-br from-[#101827] via-[#0b1220] to-[#050816] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.35)]">

        <div className="relative text-white md:px-10 px-3 md:pt-20 md:pb-10 py-8 overflow-hidden">

          {/* TOP LIGHT */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12">

            {/* Newsletter */}
            <div className="xl:col-span-1 md:col-span-2 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Newsletter
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Subscribe to our newsletter and receive the latest news on
                products, services & more.
              </p>

              <div className="relative flex items-center mt-4">
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full bg-white/[0.04] border border-white/10 py-6 ps-3 pe-14 rounded-2xl outline-none focus:border-cyan-400 transition-all text-sm text-white placeholder:text-slate-500"
                />

                <button className="absolute right-2 bg-cyan-500 p-3 rounded-xl hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20">
                  <ArrowRight size={20} />
                </button>
              </div>

              <p className="text-[10px] text-slate-500">
                By subscribing, you accept the{" "}
                <span className="underline cursor-pointer hover:text-white transition-colors">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white border-l-2 border-cyan-400 pl-4">
                Company
              </h3>

              <ul className="space-y-4 text-slate-300 text-sm font-medium">
                <li className="footer-link cursor-pointer">
                  About Innovation
                </li>

                <li className="footer-link cursor-pointer">
                  Success Stories
                </li>

                <li className="footer-link cursor-pointer">
                  White Papers
                </li>

                <li className="footer-link cursor-pointer">
                  Global Partners
                </li>

                <li className="footer-link cursor-pointer">
                  Careers
                </li>
              </ul>
            </div>

            {/* Core Tech */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white border-l-2 border-cyan-400 pl-4">
                Core Tech
              </h3>

              <ul className="space-y-4 text-slate-300 text-sm font-medium">
                <li className="footer-link cursor-pointer">
                  Generative AI Models
                </li>

                <li className="footer-link cursor-pointer">
                  Blockchain Protocols
                </li>

                <li className="footer-link cursor-pointer">
                  IoT Grid Systems
                </li>

                <li className="footer-link cursor-pointer">
                  Edge Computing
                </li>

                <li className="footer-link cursor-pointer">
                  Custom ERPs
                </li>

                <li className="footer-link cursor-pointer">
                  Cyber Security
                </li>
              </ul>
            </div>

            {/* Governance */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white border-l-2 border-cyan-400 pl-4">
                Governance
              </h3>

              <ul className="space-y-4 text-slate-300 text-sm font-medium">
                <li className="footer-link cursor-pointer">
                  Privacy & Policy
                </li>

                <li className="footer-link cursor-pointer">
                  Terms & Conditions
                </li>

                <li className="footer-link cursor-pointer">
                  Service Level Agreement
                </li>

                <li className="footer-link cursor-pointer">
                  Information Security
                </li>

                <li className="footer-link cursor-pointer">
                  Compliance & Ethics
                </li>

                <li className="footer-link cursor-pointer">
                  Cookie Settings
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white border-l-2 border-cyan-400 pl-4">
                Global Reach
              </h3>

              <div className="space-y-5 text-slate-300 text-sm leading-relaxed">

                <div className="flex gap-3">
                  <MapPin
                    size={18}
                    className="text-cyan-400 shrink-0"
                  />

                  <p>
                    House-614 (3rd Floor), Road-08,
                    Avenue-6, Mirpur DOHS,
                    Dhaka-1216
                  </p>
                </div>

                <div className="flex gap-3">
                  <Mail
                    size={18}
                    className="text-cyan-400 shrink-0"
                  />

                  <p className="hover:text-white cursor-pointer transition-colors">
                    bizdev@hsblco.com
                  </p>
                </div>

                <div className="flex gap-3">
                  <Phone
                    size={18}
                    className="text-cyan-400 shrink-0"
                  />

                  <p className="text-white font-bold text-lg">
                    +1609-349-7127
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 md:my-0 mt-12 pb-24 lg:px-0 md:pl-14 lg:text-center md:text-start text-center border-t border-white/10">
          <p className="text-slate-400 text-xs">
            ©2025{" "}
            <span className="text-white">
              HSBLCO LLC.
            </span>
            , All Rights Reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="absolute xl:right-12 right-0 bottom-2">
          <div className="footer-social flex items-center md:gap-4 gap-2 bg-[#0f172a] border border-white/10 xl:pt-8 md:pt-4 pt-2 pb-2 xl:pl-8 md:pl-4 pl-2 xl:pr-0 md:pr-4 pr-2 rounded-none rounded-tl-4xl">

            {SOCIAL_ICONS_DATA.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                aria-label={item.label}
                className="relative z-2 md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center border border-white/10 text-white transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-400 hover:text-white"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}