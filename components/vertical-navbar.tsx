"use client";

import React from "react";
import { links } from "@/lib/data";
import { TextScramble } from "@/components/ui/text-scramble";

export default function VerticalNavbar() {
  // Filter to show only the navigation items (exclude "Home")
  const navLinks = links.filter(link =>
    ["About", "Experience", "Projects", "Skills", "Contact"].includes(link.name)
  );

  return (
    <div className="intro-nav lg:mt-3">
      {navLinks.map((link, index) => (
        <a
          key={link.hash}
          href={link.hash}
          className="relative shrink-0 hover:opacity-70 dark:hover:opacity-80 transition-opacity"
        >
          <TextScramble
            as="span"
            duration={1.2}
            speed={0.03}
            trigger={true}
          >
            {link.name}
          </TextScramble>
        </a>
      ))}
    </div>
  );
}