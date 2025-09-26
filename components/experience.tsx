"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      className="bg-white dark:bg-gray-900 relative min-h-screen w-full flex items-center py-20"
      id="experience"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Experience title */}
          <div className="section-title">
            <p>Experience</p>
          </div>

          {/* Experience table - responsive */}
          <div
            className="lg:col-span-9 text-black dark:text-gray-100 font-medium"
          >
            {experiencesData.map((item, index) => (
              <div key={index} className="mb-1">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full text-left cursor-pointer transition-opacity hover:opacity-80"
                  style={{ lineHeight: "1.2" }}
                >
                  <div className="flex flex-row items-center gap-2 md:gap-4">
                    <div className="w-[35%] md:flex-1 section-content-text truncate">
                      {item.company}
                    </div>
                    <div className="flex-1 section-content-text text-black dark:text-gray-100">
                      {item.title}
                    </div>
                    <div className="section-content-text text-black dark:text-gray-500">
                      {item.year}
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="py-4 pr-0 md:pr-12">
                        <p className="section-content-text text-gray-600 dark:text-gray-400 font-normal leading-relaxed"
                           style={{ letterSpacing: "-0.02em" }}>
                          {item.description}
                        </p>
                        {item.date && (
                          <p className="section-content-text text-gray-500 dark:text-gray-500 mt-4"
                             style={{ letterSpacing: "-0.02em" }}>
                            {item.date}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}