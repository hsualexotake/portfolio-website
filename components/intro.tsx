"use client";

import React from "react";
import { Component as AnimatedBackground } from "@/components/ui/open-ai-codex-animated-background";
import { TextScramble } from "@/components/ui/text-scramble";
import VerticalNavbar from "@/components/vertical-navbar";

export default function Intro() {
  return (
    <div className="bg-white dark:bg-gray-900 relative min-h-screen w-full">
      {/* Responsive layout */}
      <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-12 lg:gap-8 min-h-screen px-6 md:px-10 lg:max-w-[1440px] lg:mx-auto lg:px-12 lg:pt-0 lg:items-start lg:content-center">
        {/* Name */}
        <div className="lg:col-span-5">
          <div className="intro-name">
            <TextScramble
              as="p"
              duration={1.2}
              speed={0.03}
              trigger={true}
            >
              Alex Otake Hsu
            </TextScramble>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-8 lg:mb-0 lg:col-span-4 lg:col-start-9">
          <VerticalNavbar />
        </div>

        {/* Animated background */}
        <div className="lg:col-span-10 lg:col-start-2 lg:-mt-12">
          <div className="relative w-full max-w-[808px] lg:max-w-none h-[350px] md:h-[450px] lg:h-[550px] lg:w-[650px] overflow-hidden">
            <AnimatedBackground />
          </div>
        </div>
      </div>
    </div>
  );
}