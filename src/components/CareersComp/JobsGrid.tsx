"use client";

import { ArrowUpRight, BriefcaseBusiness, Clock, MapPin } from "lucide-react";

import CustomButton from "../common/CustomButton";

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { JobListingTypes } from "@/types";
import { motion } from "framer-motion";

interface Props {
  data: JobListingTypes[];
}

const JobsGrid = ({ data }: Props) => {
  return (
    <section className="-mt-24 overflow-hidden px-4 py-24">
      {/* Background Glow */}

      <div className="relative z-10 container mx-auto">
        {/* Heading */}
        <div className="text-center -mt-24">
          <span className="text-cyan-400 font-black text-xs uppercase tracking-[0.35em] mb-5 block">
            Build the Future of Cognitive Tech
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-[1.1]">
            We’re looking for visionaries{" "}
            <span className="text-cyan-300">and creative minds to join us</span>
          </h2>

          <p className="mt-7 max-w-3xl mx-auto text-slate-400 text-base md:text-lg leading-8">
            Explore exciting career opportunities and work with a team building
            modern digital products, AI systems, and scalable technology
            solutions.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {data.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="
                group overflow-hidden rounded-[2rem]

                bg-linear-to-br from-[#0f172a] via-[#132238] to-[#0b1120]

                backdrop-blur-xl

                hover:bg-[#162742]

                shadow-[0_10px_30px_rgba(0,0,0,0.18)]
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.22)]

                transition-all duration-500 ease-out
                hover:-translate-y-2
                "
            >
              {/* Soft Glow */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-cyan-400/8 blur-3xl opacity-40 transition duration-700 group-hover:opacity-60" />

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.04),transparent_55%)]" />

              <CardHeader className="relative z-10 pb-4">
                {/* Top */}
                <div className="flex justify-between items-start mb-5">
                  <span className="px-4 py-1.5 bg-cyan-400/10 text-cyan-300 text-[10px] font-black rounded-full uppercase tracking-[0.15em]">
                    {job.department}
                  </span>

                  <div className="p-2 rounded-full bg-cyan-400/10 text-cyan-300 transition-all duration-500 group-hover:bg-cyan-300 group-hover:text-[#050816] group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <CardTitle className="text-2xl font-black text-white mb-3 leading-tight group-hover:text-cyan-300 transition-colors duration-500">
                  {job.title}
                </CardTitle>

                {/* Description */}
                <CardDescription className="text-slate-300 text-sm font-medium line-clamp-2 leading-relaxed">
                  {job.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 pb-8">
                <div className="grid grid-cols-1 gap-4">
                  {/* Stack */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] transition-all">
                    <div className="p-2 bg-cyan-400/10 rounded-xl text-cyan-300">
                      <BriefcaseBusiness size={16} />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-slate-500 font-black tracking-wider">
                        Tech Stack
                      </span>

                      <span className="text-sm text-slate-100 font-bold">
                        {job.stack}
                      </span>
                    </div>
                  </div>

                  {/* Location + Type */}
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2 text-slate-300">
                      <MapPin size={14} className="text-cyan-300" />

                      <span className="text-xs font-semibold">
                        {job.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-300">
                      <Clock size={14} className="text-cyan-300" />

                      <span className="text-xs font-semibold">{job.type}</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="relative z-10 pt-0">
                <CustomButton
                  title="Apply Now"
                  className="
                    w-full py-7 rounded-2xl font-bold

                    bg-cyan-400
                    text-[#050816]

                    hover:bg-white
                    hover:text-[#050816]

                    transition-all duration-300

                    shadow-lg shadow-cyan-400/10
                    group-hover:shadow-cyan-400/20
                  "
                  fn={() => window.open(`/careers/${job.id}`, "_blank")}
                />
              </CardFooter>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsGrid;
