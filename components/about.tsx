"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "linear",
        delay: 1.75,
        duration: 1.5,
      }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Despite intially planning to study{" "}
        <span className="font-medium">economics</span>, I found my true passion
        after a friend introduced me to the endless potential of programming.
        Ever since, I have been on a mission to constantly challenge myself and
        learn new technologies.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="font-medium">love</span> the
        satisfaction of finally figuring out a solution to a problem. I mostly
        work with{" "}
        <span className="font-medium">Python, TypeScript, and Java</span>. I am
        also familiar with JavaScript, C and x86 Assembly. I am always looking
        to learn. I am currently looking for an{" "}
        <span className="font-medium">internship</span> as a software developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy studying
        fashion, playing basketball, and hanging out with my bunny Ollie. I also
        enjoy <span className="font-medium">learning new things</span>. I am
        currently learning how to{" "}
        <span className="font-medium">speak French</span>.
      </p>
    </motion.section>
  );
}
