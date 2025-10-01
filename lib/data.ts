import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import { LuGraduationCap } from "react-icons/lu";
import golfballdetect from "@/public/golfballdetect.png";
import smpic from "@/public/smpic.png";
import fruition from "@/public/fruition.png";
import cartage from "@/public/cartage.png";
import ideaslab from "@/public/ideaslab.png";
import constellation from "@/public/constellation.png";
import metlife from "@/public/metlife.png";
import timemachine from "@/public/timemachine.png";
import personalportfoliopic from "@/public/personalportfoliopic.png";
import { IoSchoolOutline, IoSchoolSharp } from "react-icons/io5";
import { MdOutlineGolfCourse } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { TiChartBar } from "react-icons/ti";
import { RiComputerFill } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    company: "Cartage (YC S24)",
    title: "Product Engineer",
    year: "2025",
    description:
      "Building AI-powered tools for modern development workflows. Working on core product features and infrastructure.",
    icon: React.createElement(RiComputerFill),
    date: "2025 - Present",
    color: "#F54927",
    textColor: "#ffffff",
    imageUrl: cartage,
  },
  {
    company: "Fruition (NYU Startup Accelerator)",
    title: "Product Engineer",
    year: "2025",
    description:
      "Worked in a team of 3 to build a project management platform supporting collaboration for 40+ research groups at NYU.",
    icon: React.createElement(RiComputerFill),
    date: "Jan 2025 - May 2025",
    color: "#ffffff",
    textColor: "#1640D9",
    imageUrl: fruition,
  },
  {
    company: "NYU Courant",
    title: "Researcher",
    year: "2025",
    description:
      "Awarded research grant by NYU to analyze complex behavioral patterns of CEFs. Designed and optimized PostgreSQL database schemas to store and query 20M+ rows of time-series financial data",
    icon: React.createElement(TiChartBar),
    date: "Oct 2024 - May 2025",
    color: "#57068c",
    textColor: "#ffffff",
    imageUrl: smpic,
  },
  {
    company: "MetLife",
    title: "Software Engineer",
    year: "2024",
    description:
      "Created a Python-based automation for configuration management and reduced latency by 200ms per task execution by implementing SSH key-based authentication",
    icon: React.createElement(IoAccessibility),
    date: "June 2024 - August 2024",
    color: "#ffffff",
    textColor: "#4CBB17",
    imageUrl: metlife,
  },
  {
    company: "Ideas Lab",
    title: "Software Engineer",
    year: "2023",
    description:
      "Creating an object detection algorithm using computer vision (YOLOv8) to track movements of a golf swing in a live video",
    icon: React.createElement(MdOutlineGolfCourse),
    date: "May 2023 - Aug 2023",
    color: "#7832ff",
    textColor: "#FFFFFF",
    imageUrl: ideaslab,
  },
  {
    company: "Constellation",
    title: "Data Science",
    year: "2022",
    description:
      "Designed a Python script using Selenium and Beautiful Soup 4 packages to automate the extraction of 5M+ points of data",
    icon: React.createElement(FaDatabase),
    date: "Jun. 2022 - Aug. 2022",
    color: "#ffffff",
    textColor: "#0A0212",
    imageUrl: constellation,
  },
] as const;

export const projectsData = [
  {
    title: "Golfball Pathfinder",
    description:
      "Trained YOLOv8's convolutional neural network (CNN) on 8000+ pieces of data to accurately detect & track the location/trajectory of a golf ball in any given video of a golf swing",
    tags: ["Computer Vision", "Python", "PyTorch", "OpenCV", "YOLOv8"],
    imageUrl: golfballdetect,
  },
  {
    title: "83SM Capital",
    description:
      "Building an automated pairs-trading algorithm to capitalize on the inefficiencies of closed-end funds. Research funded by NYU Dean Research Fund.",
    tags: [
      "Python",
      "PostgreSQL",
      "TimescaleDB",
      "IBKR",
      "yfinance",
      "backtrader",
    ],
    imageUrl: smpic,
  },
  {
    title: "Fruition (NYU Startup Accelerator Program) ",
    description:
      "Worked in a team of 3 to build a project management platform supporting collaboration for 40+ research groups at NYU.",
    tags: [
      "Node.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "Supabase",
    ],
    imageUrl: fruition,
  },
  {
    title: "Wayback Machine",
    description:
      "A full-stack web app, allowing users to capture website snapshots with recursive link crawling and view them later. Essentially a personal wayback machine for any website.",
    tags: [
      "Node.js",
      "React",
      "TailwindCSS",
      "DayJS",
    ],
    imageUrl: timemachine,
  },
  {
    title: "Personal Portfolio",
    description:
      "This website you are on serves to showcase my skills, projects, and professional experience. Contains a light/dark mode and an email feature.",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
      "Framer",
      "HTML",
      "CSS",
    ],
    imageUrl: personalportfoliopic,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "C",
  "LangChain",
  "Next.js",
  "Node.js",
  "Express.js",
  "React",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "TimescaleDB",
  "x86 Assembly",
  "PyTorch",
  "OpenCV",
  "Sci-kit Learn",
  "HTML/CSS",
  "Flask",
  "Framer Motion",
  "Tailwind",
  "Browserbase",
  "Selenium",
  "Beautiful Soup 4"


] as const;
