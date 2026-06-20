/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Updated Marker Data with Dummy Clients
const markers = [
  {
    name: "USA",
    coordinates: [-100, 40] as [number, number],
    clients: ["TechNova Solutions", "Global Logix", "BlueWater Inc."],
    services: ["Cloud Infrastructure", "AI Consulting"],
  },
  {
    name: "Canada",
    coordinates: [-106, 56] as [number, number],
    clients: ["Maple Soft", "NorthStar Energy"],
    services: ["Data Analytics", "Cybersecurity"],
  },
  {
    name: "UAE",
    coordinates: [54, 24] as [number, number],
    clients: ["Desert Oasis Tech", "Emirates Trade"],
    services: ["Smart City Solutions", "IoT Development"],
  },
  {
    name: "Bangladesh",
    coordinates: [90.41, 23.81] as [number, number],
    clients: ["Dhaka Dynamics", "GreenField AgriTech", "Sylhet Systems"],
    services: ["Web Ecosystem", "Mobile App Development"],
  },
];

const ClientReach = () => {
  const countryCardsRef = useRef<HTMLDivElement>(null);
  const [selectedCountry, setSelectedCountry] = useState<
    (typeof markers)[0] | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleMarkerClick = (marker: (typeof markers)[0]) => {
    setSelectedCountry(marker);
    setIsDialogOpen(true);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".map-svg", {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: { trigger: ".map-svg", start: "top 80%" },
      });

      gsap.to(".map-marker", {
        scale: 1.8,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power2.out",
        transformOrigin: "center center",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-slate-50 text-secondary">
      <div className="container mx-auto px-6">
        {/* Map Container */}
        <div className="relative max-w-5xl mx-auto shadow-[0_0_15px_5px] shadow-black/20 rounded-3xl overflow-hidden">
          <div className="absolute top-4 left-4 z-10 backdrop-blur-md p-2 rounded-lg border text-xs shadow-sm">
            💡 Use mouse wheel to zoom | Drag to pan
          </div>

          <div className="map-svg max-h-155 bg-white rounded-2xl">
            <ComposableMap
              className="2xl:w-5xl max-h-155"
              projectionConfig={{ scale: 175 }}
            >
              <ZoomableGroup center={[20, 5]} zoom={1}>
                <Geographies geography={geoUrl}>
                  {({ geographies }: { geographies: any[] }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#f1f5f9"
                        stroke="#cbd5e1"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#e2e8f0", transition: "all 200ms" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {markers.map((marker) => (
                  <Marker
                    key={marker.name}
                    coordinates={marker.coordinates}
                    onClick={() => handleMarkerClick(marker)}
                    className="cursor-pointer"
                  >
                    {/* Inner Solid Dot */}
                    <circle r={4} className="fill-primary" />
                    {/* Pulsing Outer Ring */}
                    <circle
                      r={6}
                      className="map-marker stroke-primary/50 stroke-2 fill-transparent"
                    />
                    <text
                      textAnchor="middle"
                      y={-15}
                      className="fill-slate-700 font-bold text-[8px] pointer-events-none select-none"
                    >
                      {marker.name}
                    </text>
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>
          </div>
        </div>

        {/* Info Grid */}
        <div
          ref={countryCardsRef}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {markers.map((m) => (
            <div
              key={m.name}
              onClick={() => handleMarkerClick(m)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl  p-6 
                 border border-blue-400 shadow-sm transition-all duration-300 
                 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/20"
            >
              {/* Background Decorative Element */}
              <div
                className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/5 
                      transition-transform duration-500 group-hover:scale-150"
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      {m.name === "Bangladesh"
                        ? "Headquarters"
                        : "Global Branch"}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  </div>

                  <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {m.name}
                  </h4>
                </div>

                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-black text-blue-400 leading-none">
                      {m.clients.length.toString().padStart(2, "0")}
                    </p>
                    <p className="text-[11px] font-medium text-slate-500 mt-1 uppercase tracking-tight">
                      Active Clients
                    </p>
                  </div>

                  {/* Arrow Icon that appears on hover */}
                  <div className="translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Subtle Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 h-0.75 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* shadcn Dialog for Client Info */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <span className="text-primary">{selectedCountry?.name}</span>{" "}
              Operations
            </DialogTitle>
            <DialogDescription>
              Overview of clients and services provided by HSBLCO LLC in this
              region.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-6">
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3 border-b pb-1">
                Major Clients
              </h4>
              <ul className="grid grid-cols-1 gap-2">
                {selectedCountry?.clients.map((client) => (
                  <li
                    key={client}
                    className="text-sm bg-slate-50 p-2 roundedflex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {client}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3 border-b pb-1">
                Services Provided
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCountry?.services.map((service) => (
                  <Badge
                    key={service}
                    variant="secondary"
                    className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ClientReach;
