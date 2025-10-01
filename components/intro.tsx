"use client";

import React, { useState } from "react";
import { TextScramble } from "@/components/ui/text-scramble";
import { Typewriter } from "@/components/ui/typewriter";

export default function Intro() {
  const [secondScrambleComplete, setSecondScrambleComplete] = useState(false);

  return (
    <div className="bg-white dark:bg-stone-950 relative w-full">
      {/* Responsive layout */}
      <div className="flex flex-col px-4 md:px-10 lg:max-w-[1440px] lg:mx-auto lg:px-12">
        {/* Greeting */}
        <div className="pt-8 lg:pt-12">
          <p className="intro-greeting">Oh, Hello there!</p>
        </div>

        {/* Main content area */}
        <div className="flex flex-col text-center lg:text-left pt-32 pb-16 pl-3 sm:pl-4 md:pl-5 lg:pl-8">
          {/* Main Text */}
          <div>
            {/* First line */}
            <div className="intro-name">
              <TextScramble
                as="h1"
                duration={1.2}
                speed={0.03}
                trigger={true}
              >
                {"I'm Alex, a Software Engineer"}
              </TextScramble>
            </div>

            {/* Second line */}
            <div className="intro-name">
              <TextScramble
                as="span"
                duration={1.2}
                speed={0.03}
                trigger={true}
                onScrambleComplete={() => setSecondScrambleComplete(true)}
              >
                {"specializing in"}
              </TextScramble>
              {" "}
              {secondScrambleComplete && (
                <Typewriter
                  text={["UI/UX Design", "Web Development", "AI Agents"]}
                  speed={100}
                  deleteSpeed={50}
                  waitTime={2000}
                  loop={true}
                  showCursor={true}
                  cursorChar="_"
                  className="text-indigo-500"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}