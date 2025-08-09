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
        In high school, I was passionate about reselling sneakers. What started as a side hustle quickly showed me how much time repetitive, manual work—like tracking inventory and managing orders—could take.
        I began tinkering with small tools to automate parts of the process, sparking my interest in computer science and the idea that technology could make work easier and more efficient.
        <br /><br />Since then, I’ve worked across both startups and large companies—developing web scraping pipelines at Constellation, building machine learning systems at Hawkeye, and creating computer vision tools for athletes at Ideas Lab.
        At MetLife, I built automation for DevOps processes, and at Cartage (YC S24), I developed AI agents that handled hundreds of freight orders daily, reinforcing my love for fast-paced, impactful work.<br /><br />

        When I’m not coding, you’ll usually find me studying fashion, playing basketball, or hanging out with my bunny, Ollie. I also love picking up new skills. Right now, I’m learning French. I’m always happy to connect and chat—whether it’s about tech, startups, or anything in between.
      </p>
    </motion.section>
  );
}
