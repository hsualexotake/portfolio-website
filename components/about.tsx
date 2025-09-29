"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { Typewriter } from "@/components/ui/typewriter";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className="bg-white dark:bg-gray-900 relative min-h-screen w-full flex items-center py-20"
      id="about"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* About title */}
          <div className="section-title">
            <p>About</p>
          </div>

          {/* Main content - responsive */}
          <div className="lg:col-span-9 text-black dark:text-gray-100">
            <p className="section-content-text mb-4">
              Hi, I'm Alex. Working at the intersection of software engineering
              and design. Currently based in New York City.
            </p>
            <p className="section-content-text mb-4">
              I have experience with{" "}
              <Typewriter
                text={["software engineering", "product design"]}
                speed={70}
                className="text-yellow-500"
                waitTime={1500}
                deleteSpeed={40}
                cursorChar="_"
                cursorClassName="ml-1"
              />
            </p>
            <p className="section-content-text">
              fashion and tech
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}