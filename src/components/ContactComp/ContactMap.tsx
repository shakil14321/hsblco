"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MapPin, Navigation } from "lucide-react";
import CustomButton from "../common/CustomButton";

gsap.registerPlugin(ScrollTrigger);

const ContactMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Map Zoom Entrance
      gsap.from(mapRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
        },
      });

      // Floating Card Slide-up
      gsap.from(cardRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="pb-24 pt-10 bg-white">
      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Visit Our HQ
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter">
              Find us{" "}
              <span className="text-primary text-outline-2">here</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm">
            Our doors are always open for a cup of coffee and a talk about the
            future of AI.
          </p>
        </div>

        {/* Map Wrapper */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-125 md:h-160 group">
          {/* Animated Background Placeholder (Visible while loading) */}
          <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center -z-10">
            <MapPin className="text-slate-300 animate-bounce" size={48} />
          </div>

          <div ref={mapRef} className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.477847523568!2d90.37223460000001!3d23.8371598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c117e90eb7e7%3A0x8f1e094f962b3c40!2sHSBLCO%20LLC!5e0!3m2!1sen!2sbd!4v1769857536708!5m2!1sen!2sbd"
              width="100%"
              height="640"
              loading="lazy"
            />
          </div>

          {/* Floating Action Card */}
          <div
            ref={cardRef}
            className="absolute bottom-6 left-6 right-6 md:left-10 md:bottom-10 md:right-auto max-w-sm"
          >
            <div className="bg-white p-6 rounded-[2rem] shadow-2xl max-w-75">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-2xl">
                  <Navigation className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">
                    Main Headquarters
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    House-614 (3rd Floor), Road-08, Avenue-6, Mirpur DOHS,
                    Dhaka-1216
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <CustomButton
                  title="Get Directions"
                  className="bg-primary hover:bg-secondary text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
