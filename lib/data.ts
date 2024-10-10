import React from "react";
import { FaReact } from "react-icons/fa";
import AInavigatorImg from "@/public/AI-navigator.png";
import CrikNetImg from "@/public/CrickNet.png";
import HealthImg from "@/public/Health.png";
import TravelAiImg from "@/public/Travel.png";
import AnalyticsDashboardImg from "@/public/Analytics.png";
import MetaImg from "@/public/verse.png";
import BrainImg from "@/public/brain.png";

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
    title: "Front-End Developer",
    location: "Delhi, India",
    description:
      "ed React integration for graphical analysis, improving accuracy by 25%. export process, reducing time by 50% and integrating with accounting tools.",
    icon: React.createElement(FaReact),
    date: "05/2023 - 08/2023",
  },
  {
    title: "SWE",
    location: "Remote,USA",
    description:
      "Developed and deployed five AI projects with React, Next.js, Firebase, Clerk, and Vercel, including a customer support agent using a RAG pipeline with Gemini 1.5 Flash and Pinecone. Launched a SaaS product for dynamic flashcard generation with a Stripe paywall and created a web scraper for Rate My Professor integrated with LangChain and OpenAI.",
    icon: React.createElement(FaReact),
    date: "07/2024 - 09/2024",
  },
] as const;

export const projectsData = [
  {
    title: "HealthPulse",
    description:
      "I used Created reusable React components and managed state using React Hooks for a dynamic admindashboard. Enhancing performance",
    tags: ["React", "TypeScript", "SQL", "Python", "Prisma"],
    imageUrl: HealthImg,
    link: "https://health-pulse-beta.vercel.app/",
  },

  {
    title: "MetaVerse",
    description:
      "While developing this app, I learnt React project architecture, Clean Code practices, and Next.js 13 structure. You'll also enhance your skills in CSS with Tailwind, creating smooth animations and gradients using Framer Motion.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    imageUrl: MetaImg,
    link: "https://meta-verse-flame.vercel.app/",
  },

  {
    title: "BrainNods",
    description:
      "Create websites with sleek parallax effects and bento box layouts",
    tags: ["React", "Tailwind.CSS", "Parallel Effects"],
    imageUrl: BrainImg,
    link: "https://brainnods.vercel.app/",
  },

  {
    title: "CrickNet",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "TailwindCSS"],
    imageUrl: CrikNetImg,
    link: "https://crick-net.vercel.app/",
  },
  {
    title: "AI-navigator",
    description:
      "I used React in the front-end. Used crew ai for building multiple AI agents and upstate API for generating responses. Firebase has been used for authentication",
    tags: ["React", "JavaScript", "SCSS", "HTML"],
    imageUrl: AInavigatorImg,
    link: "https://ai-career-navigator1-p28l.vercel.app/",
  },

  {
    title: "Travel-AI",
    description:
      "Place Suggestions: Provides famous places using JavaScript and TypeScript. Real-Time Data: Fetches live info using APIs and Node.js.",
    tags: ["React", "TypeScript", "APIs"],
    imageUrl: TravelAiImg,
    link: "https://travel-9wao37lkc-nehas-projects-5692135e.vercel.app/",
  },

  {
    title: "Analytics Dashboard",
    description:
      "Analytics Dashboard used UpStash to see how many users visits on your sites and showing by the Graph Representation",
    tags: ["TypeScript", "React", "Redis", "CSS"],
    imageUrl: AnalyticsDashboardImg,
    link: "https://drive.google.com/file/d/1za51S3aIFgG592uyHocPULSPoF8CKWwi/view?usp=drivesdk",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
] as const;
