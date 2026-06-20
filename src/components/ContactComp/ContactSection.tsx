"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomButton from "../common/CustomButton";
import { SOCIAL_ICONS_DATA } from "@/constant/footerData";
import Link from "next/link";

const ContactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side entrance
      gsap.from(".info-item", {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      });

      // Form card entrance
      gsap.from(".form-card", {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-16 lg:gap-6 md:gap-12 gap-6 items-center">
          {/* Left Side: Information */}
          <div className="space-y-12">
            <div className="info-item">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-secondary leading-[1.1] tracking-tighter mb-6">
                Embrace the future of
                <span className="text-primary capitalize"> artificial intelligence!</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Artificial Intelligence refers to the development of computer
                systems that possess the ability to perform activities typically
                requiring human intelligence.
              </p>
            </div>

            {/* Quick Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-10 gap-6">
              <div className="info-item space-y-3">
                <h4 className="font-bold text-secondary text-lg">
                  Quick Contact
                </h4>
                <p className="text-primary font-medium hover:underline cursor-pointer">
                  bizdev@hsblco.com
                </p>
                <p className="text-gray-600">+1609-349-7127</p>
              </div>

              <div className="info-item space-y-3">
                <h4 className="font-bold text-secondary text-lg">Address</h4>
                <p className="text-gray-600 leading-relaxed">
                  House-614 (3rd Floor), Road-08, Avenue-6, Mirpur DOHS,
                  Dhaka-1216
                </p>
              </div>

              <div className="info-item space-y-3">
                <h4 className="font-bold text-secondary text-lg">
                  Support Hours
                </h4>
                <p className="text-gray-600">Sat-Fri 10:00am – 6:00pm</p>
                <p className="text-orange-500 text-sm font-medium">
                  *Excludes Holidays
                </p>
              </div>

              <div className="info-item space-y-4">
                <h4 className="font-bold text-secondary text-lg">
                  Social Media
                </h4>
                <div className="flex gap-4">
                  {SOCIAL_ICONS_DATA.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      aria-label={item.label}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer"
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className="form-card relative p-1 bg-linear-to-b from-gray-100 to-white rounded-[2.5rem] shadow-2xl">
            <div className="bg-white p-4 md:p-6 xl:p-8 2xl:p-12 rounded-[2.4rem] space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-secondary mb-2">
                  Get in touch
                </h3>
                <p className="text-gray-500">
                  Just fill out the form and our global experts will be in touch
                  right away.
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Your Name"
                    className="bg-slate-50 border-none h-14 rounded-xl focus-visible:ring-primary"
                  />
                  <Input
                    placeholder="Email Address"
                    className="bg-slate-50 border-none h-14 rounded-xl focus-visible:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Company Name"
                    className="bg-slate-50 border-none h-14 rounded-xl focus-visible:ring-primary"
                  />
                  <Input
                    placeholder="Phone Number"
                    className="bg-slate-50 border-none h-14 rounded-xl focus-visible:ring-primary"
                  />
                </div>

                <Textarea
                  placeholder="Tell us about your project..."
                  className="bg-slate-50 border-none min-h-40 rounded-2xl p-6 focus-visible:ring-primary"
                />

                <CustomButton
                  title="Submit Request"
                  className="bg-primary hover:bg-secondary text-white w-full md:w-auto"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
