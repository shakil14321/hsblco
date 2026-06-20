"use client";

export default function SectionBackground() {
  return (
    <>
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-[#0a0f1e] via-[#0d1535] to-[#0a0f1e]" />

      {/* GRID */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07]"
      />

      {/* GLOW */}
      <div className="absolute -top-20 left-1/3 w-125 h-125 bg-blue-700/15 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-20 right-1/4 w-100 h-100 bg-indigo-700/15 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 left-0 w-75 h-75 bg-cyan-700/10 rounded-full blur-3xl z-0" />
    </>
  );
}