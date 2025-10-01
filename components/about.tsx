"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { TextScramble } from "@/components/ui/text-scramble";

export default function About() {
  const { ref } = useSectionInView("About");
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="bg-white dark:bg-stone-950 relative min-h-screen w-full flex items-center pt-0 pb-20"
      id="about"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* About title */}
          <div className="section-title">
            <p>About</p>
          </div>

          {/* Main content - responsive */}
          <div ref={inViewRef} className="lg:col-span-9 text-black dark:text-gray-100">
            <TextScramble className="section-content-text mb-4" as="p" trigger={inView}>
              Hi, I'm Alex. Working at the intersection of software engineering
              and design. Currently based in New York City.
            </TextScramble>
            <TextScramble className="section-content-text mb-4" as="p" trigger={inView}>
              I have experience with software engineering and product design.
            </TextScramble>
            <TextScramble className="section-content-text" as="p" trigger={inView}>
              fashion and tech
            </TextScramble>
          </div>
        </div>
      </div>
    </section>
  );
}