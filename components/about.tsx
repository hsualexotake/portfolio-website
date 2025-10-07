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
      className="bg-white dark:bg-stone-950 relative min-h-screen w-full flex items-center pt-36 pb-44"
      id="about"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 pl-3 sm:pl-4 md:pl-5 lg:pl-8">
          {/* About title */}
          <div className="section-title">
            <p>About</p>
          </div>

          {/* Main content - responsive */}
          <div ref={inViewRef} className="lg:col-span-9 text-gray-200">
            <p className="text-2xl mb-6">
            Before I ever wrote a line of code, I was 13 and obsessed with trying to score the rarest sneakers. Every Saturday morning felt like a high-stakes race. I'd refresh pages, fill carts, and rush to check out before every pair sold out. But no matter how fast I clicked, I was always one step behind the bots that could grab ten pairs while I was left empty-handed.
            </p>
            <p className="text-2xl mb-6">
              That frustration turned into fascination. I wanted to understand what gave them their edge and how I could build something of my own. Naturally, that curiosity led me to study how to code.
            </p>
            <p className="text-2xl">
              Since then, I've graduated from <span className="text-violet-500">New York University</span> with a B.A. in <span className="text-yellow-400">Computer Science</span> and am currently based in New York City. When I'm not coding, I enjoy studying fashion, playing basketball, and spending time with my bunny, Ollie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}