import React from "react";
import { FaReact } from "react-icons/fa";
import AInavigatorImg from "@/public/AI-navigator.png";
import CrikNetImg from "@/public/CrickNet.png";
import HealthImg from "@/public/Health.png";
import TravelAiImg from "@/public/Travel.png";
// import AnalyticsDashboardImg from "@/public/Analytics.png";
import MetaImg from "@/public/verse.png";
import BrainImg from "@/public/brain.png";
import AskImg from "@/public/askany.png";
import SearchImg from "@/public/Search.png";
import IDEImg from "@/public/IDE.png";

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
    title: "SearchLio",
    description:
      "SearchEngine enables you to find clarity and significant results on a large scale by linking queries and results to the overarching objectives of your search.",
    tags: ["React", "JavaScript", "Shadcn"],
    imageUrl: SearchImg,
    link: "https://searchlio.vercel.app/",
  },

  {
    title: "RefactorRealm",
    description:
      "**Refactor Realm** is an online IDE with multi-language support, customizable themes, smart output handling, webhook integration, and Free & Pro plans, built with Next.js 15, Convex, and Clerk.",
    tags: ["Next.js", "TypeScript", "Convex", "Shadcn"],
    imageUrl: IDEImg,
    link: "https://refactor-realm-egpp.vercel.app/",
  },

  {
    title: "HealthPulse",
    description:
      "I used Created reusable React components and managed state using React Hooks for a dynamic admindashboard. Enhancing performance",
    tags: ["React", "TypeScript", "SQL", "Python", "Prisma"],
    imageUrl: HealthImg,
    link: "https://health-pulse-beta.vercel.app/",
  },

  {
    title: "AskAway",
    description:
      "I built AskAway, an AI-powered survey platform that transforms data into insights, enabling data-driven decisions for growth in sectors like healthcare and business.",
    tags: ["React", "TypeScript", "Shadcn", "Claude AI"],
    imageUrl: AskImg,
    link: "https://market-research-survey-tool.vercel.app/",
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
] as const;

export const skillsData = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "TRPC",
  "ShadcnUI",
  "MongoDB",
  "Prisma",
  "Docker",
  "Kubernetes",
  "CI/CD",
] as const;
