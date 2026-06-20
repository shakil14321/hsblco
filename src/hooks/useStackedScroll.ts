"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useStackedScroll() {
  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>(
      "#stacked-sections > section",
    );
   
    panels.forEach((panel, index) => {
      const fromVars: gsap.TweenVars = {
        opacity: 0,
      };

      // direction logic
      if (index % 3 === 0) {
        fromVars.x = 200; // right
      } else if (index % 3 === 1) {
        fromVars.x = -200; // left
      } else {
        fromVars.y = 200; // bottom
      }

      gsap.from(panel, {
        ...fromVars,
        scrollTrigger: {
          trigger: panel,
          start: "top bottom",
          end: "top center",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });
    });
  });
}
