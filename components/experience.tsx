"use client";
import React from "react";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { ExperienceScrollingAnimation } from "@/components/ui/images-scrolling-animation";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.05);

  // Transform experiencesData to match the component's expected format
  const experiences = experiencesData.map((item) => ({
    company: item.company,
    title: item.title,
    year: item.year,
    description: item.description,
    date: item.date || "",
    color: item.color,
    textColor: item.textColor,
    imageUrl: item.imageUrl,
  }));

  return (
    <section
      ref={ref}
      className="bg-white dark:bg-stone-950 relative min-h-screen w-full"
      id="experience"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-12 pt-24 pb-20">
        {/* Scrolling Animation */}
        <ExperienceScrollingAnimation experiences={experiences} />
      </div>
    </section>
  );
}