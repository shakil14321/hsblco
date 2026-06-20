'use client'

import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const btnRef = useRef<HTMLButtonElement | null>(null);
    const svgRef = useRef<SVGCircleElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate scroll percentage
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setProgress(currentProgress);

            // Visibility toggle
            if (window.scrollY > 400) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // GSAP Animation for visibility
    useEffect(() => {
        if (!btnRef.current) return;

        if (visible) {
            gsap.to(btnRef.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
                pointerEvents: "auto",
            });
        } else {
            gsap.to(btnRef.current, {
                y: 50,
                opacity: 0,
                scale: 0.8,
                duration: 0.4,
                ease: "power2.in",
                pointerEvents: "none",
            });
        }
    }, [visible]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Circle Math
    const radius = 24;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <button
            ref={btnRef}
            onClick={scrollToTop}
            aria-label="Back to top"
            className={cn(
                "cursor-pointer fixed bottom-20 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center",
                "bg-white  backdrop-blur-md shadow-2xl border border-zinc-200 ",
                "group transition-all duration-300 hover:border-primary/50"
            )}
            style={{ opacity: 0, transform: 'translateY(50px) scale(0.8)' }}
        >
            {/* SVG Progress Circle */}
            <svg className="absolute w-full h-full -rotate-90 pointer-events-none">
                <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="transparent"
                    className="text-zinc-200 "
                />
                <circle
                    ref={svgRef}
                    cx="28"
                    cy="28"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="transparent"
                    strokeDasharray={circumference}
                    style={{ strokeDashoffset: offset, transition: 'stroke-dashoffset 0.1s' }}
                    className="text-primary"
                />
            </svg>

            {/* Icon and Tooltip */}
            <div className="relative flex flex-col items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
                <ArrowUp size={20} className="text-zinc-700  group-hover:text-primary" />
                <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-300 bg-zinc-900 text-white text-[10px] py-1 px-2 rounded font-bold whitespace-nowrap">
                    TOP
                </span>
            </div>
        </button>
    );
};

export default BackToTop;