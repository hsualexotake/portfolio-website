"use client";
import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { TextScramble } from "@/components/ui/text-scramble";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  // Filter links to show only specific ones (exclude Home and Skills)
  const navLinks = links.filter(link =>
    ["About", "Projects", "Experience", "Contact"].includes(link.name)
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-white/80 dark:bg-stone-950/80 backdrop-blur-md">
      <nav className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-12 py-6">
        <div className="flex items-center justify-between pl-3 sm:pl-4 md:pl-5 lg:pl-8">
          {/* Left: Name/Logo */}
          <Link
            href="/#home"
            className="text-[16px] font-normal text-[#1e1e1e] dark:text-white hover:opacity-70 transition-opacity"
            onClick={() => {
              setActiveSection("Home");
              setTimeOfLastClick(Date.now());
            }}
          >
            <TextScramble
              as="span"
              duration={1.2}
              speed={0.03}
              trigger={true}
            >
              Alex Hsu
            </TextScramble>
          </Link>

          {/* Right: Navigation Links */}
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={link.hash}>
                <Link
                  className="hover:opacity-70 transition-opacity"
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  <TextScramble
                    as="span"
                    duration={1.2}
                    speed={0.03}
                    trigger={true}
                    className={clsx(
                      "text-[14px] font-light lowercase",
                      {
                        "text-[#1e1e1e] dark:text-white opacity-60": activeSection !== link.name,
                        "text-[#1e1e1e] dark:text-white opacity-100": activeSection === link.name,
                      }
                    )}
                  >
                    {link.name.toLowerCase()}
                  </TextScramble>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full">
        {/* Gray baseline */}
        <div className="absolute left-0 bottom-0 h-[1px] w-full bg-gray-200 dark:bg-gray-800" />
        {/* Progress indicator */}
        <ScrollProgress
          className="absolute bottom-0 h-[1px] bg-white dark:bg-white"
        />
      </div>
    </header>
  );
}
