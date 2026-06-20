"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Direction = "down" | "left" | "right";

type Props = {
  children: React.ReactNode[];
  direction?: Direction;
};

export default function PinnedSections({
  children,
  direction = "down",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const panels = gsap.utils.toArray<HTMLElement>(
      containerRef.current.querySelectorAll("section"),
    );

    panels.pop();

    panels.forEach((panel) => {
      const innerPanel = panel.querySelector<HTMLElement>(".section-inner");
      if (!innerPanel) return;

      const panelHeight = innerPanel.offsetHeight;
      const windowHeight = window.innerHeight;
      const difference = panelHeight - windowHeight;

      const fakeScrollRatio =
        difference > 0 ? difference / (difference + windowHeight) : 0;

      if (fakeScrollRatio) {
        panel.style.marginBottom = panelHeight * fakeScrollRatio + "px";
      }

      const moveConfig =
        direction === "down"
          ? { yPercent: -100, y: windowHeight }
          : direction === "left"
            ? { xPercent: -100, x: window.innerWidth }
            : { xPercent: 100, x: -window.innerWidth };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "bottom bottom",
          end: fakeScrollRatio ? `+=${innerPanel.offsetHeight}` : "bottom top",
          pin: true,
          scrub: true,
          pinSpacing: false,
        },
      });

      if (fakeScrollRatio) {
        tl.to(innerPanel, {
          ...moveConfig,
          duration: 1 / (1 - fakeScrollRatio) - 1,
          ease: "none",
        });
      }

      tl.fromTo(
        panel,
        { scale: 1, opacity: 1 },
        { scale: 0.7, opacity: 0.5, duration: 0.9 },
      ).to(panel, { opacity: 0, duration: 0.1 });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [direction]);

  // return <div ref={containerRef}>{children}</div>;
  return <div ref={null}>{children}</div>;
}
