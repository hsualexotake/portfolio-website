import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import { LuGraduationCap } from "react-icons/lu";
import golfballdetect from "@/public/golfballdetect.png";
import smpic from "@/public/smpic.png";
import personalportfoliopic from "@/public/personalportfoliopic.png";
import { IoSchoolOutline, IoSchoolSharp} from "react-icons/io5";
import { MdOutlineGolfCourse } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { TiChartBar } from "react-icons/ti";
import { RiComputerFill } from "react-icons/ri";


export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "New York University",
    location: "Major: Computer Science",
    description:
      "Expected Graduation: Spring 2025",
    icon: React.createElement(IoSchoolSharp),
    date: "Sep. 2021 - May 2025",
  },
  {
    title: "Constellation",
    location: "Data Science Intern",
    description:
      "Designed a Python script using Selenium and Beautiful Soup 4 packages to automate the extraction of 5M+ points of data",
    icon: React.createElement(FaDatabase),
    date: "Jun. 2022 - Aug. 2022",
  },
  {
    title: "Hawkeye Investment Management",
    location: "Software Engineer Intern, Machine Learning",
    description:
      "Developed an ML model in high dimensional space to identify optimal pairings for hedge",
    icon: React.createElement(TiChartBar),
    date: "Jan. 2023 - May 2023",
  },
  {
    title: "Ideas Lab",
    location: "Software Engineer Intern, Machine Learning",
    description:
      "Creating an object detection algorithm using computer vision (YOLOv8) to track movements of a golf swing in a live video",
    icon: React.createElement(MdOutlineGolfCourse),
    date: "May 2023 - Aug 2023",
  },
  {
    title: "83SM Capital",
    location: "Co-Founder",
    description:
      "Building a Python-based pairs trading algorithm to conduct statistical arbitrage on 400+ closed-end funds using time series analysis",
    icon: React.createElement(RiComputerFill),
    date: "May 2023 - Present",
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
      "Currently building an automated pairs-trading algorithm to capitalize on the inefficiencies of closed-end funds.",
    tags: ["Python", "IBKR", "yfinance", "backtrader", "selenium", "bs4"],
    imageUrl: smpic,
  },
  {
    title: "Personal Portfolio",
    description:
      "This website you are on serves to showcase my skills, projects, and professional experience. Contains a light/dark mode and an email feature.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind", "Framer", "HTML", "CSS"],
    imageUrl: personalportfoliopic,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "C",
  "x86 Assembly",
  "PyTorch",
  "OpenCV",
  "Sci-kit Learn",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Node.js",
  "Framer Motion",
  "Tailwind",
  "Django",
  "Git", 
  "Selenium",
  "Beautiful Soup 4",
  "R"
] as const;