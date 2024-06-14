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
        From a young age, my passion for online gaming fueled a curiosity about the technology 
        that powered my gaming experiences. Initially, I focused on upgrading my computer's hardware 
        to gain a competitive edge. As I began assembling my own machines, this fascination only grew. 
        However, when financial constraints limited further hardware upgrades, I turned to software 
        solutions. I learned to maximize performance through software solutions like GPU overclocking and 
        driver optimization. This shift towards harnessing software’s full potential deepened my appreciation 
        for its capabilities, inspiring me to pursue a degree in Computer Science at NYU.
        
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="font-medium">love</span> the
        satisfaction of finally figuring out a solution to a problem. I mostly
        work with{" "}
        <span className="font-medium">Python, JavaScript, and Java</span>. I am
        also familiar with C and x86 Assembly. I am always looking
        to learn. I am currently looking for an{" "}
        <span className="font-medium">internship</span> as a software engineer.

        
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
