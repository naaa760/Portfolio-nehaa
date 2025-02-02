import React from "react";
import { FaReact } from "react-icons/fa";
import HealthImg from "@/public/Health.png";
import TravelAiImg from "@/public/Travel.png";
import MetaImg from "@/public/verse.png";
import DataImg from "@/public/data.png";
import TaskImg from "@/public/task.png";
import AskImg from "@/public/askany.png";
import SearchImg from "@/public/Search.png";
import IDEImg from "@/public/IDE.png";
import ThreadImg from "@/public/thread.png";
import VocaImg from "@/public/voca.png";
import StreamImg from "@/public/strm.png";

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
    name: "Video",
    hash: "#video",
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
    title: "VocaVista",
    description:
      "This project is a Next.js web app featuring secure user authentication via Clerk and personalized AI using Google's Gemini. It uses a serverless PostgreSQL database (Neon) for secure, contextual user data storage. A custom onboarding flow and enterprise-grade security enable scalable, private AI-human collaboration.",
    tags: ["Next.js", "TypeScript", "React", "Gemini", "Prisma", "Inngest"],
    imageUrl: VocaImg,
    link: "https://vocavista.vercel.app/",
  },

  {
    title: "DataCrew",
    description:
      "The client handles UI and user interactions, making API calls to the server. The server processes requests, manages business logic, and interacts with the database.",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Nest.js",
      "Shadcn",
      "Prisma",
      "postgres",
      "framer-motion",
      "lottie.json",
    ],
    imageUrl: DataImg,
    link: "https://stackly-lsco.vercel.app/",
  },

  {
    title: "StreamiFy",
    description:
      "Streamify is a React-based music analytics dashboard showing total users, active users, total streams, revenue, and top artists. It includes charts for user growth, revenue sources, and top songs, plus a sortable and filterable table for recent streams.",
    tags: ["React", "Next.js", "TypeScript", "Shadcn", "API Router", "Jest"],
    imageUrl: StreamImg,
    link: "https://streamify-1mgs.vercel.app/",
  },

  {
    title: "SuperTask",
    description:
      "Help users track tasks efficiently Provide meaningful organization tools Make task management enjoyable Keep interface simple but powerful The project combines modern React patterns with practical functionality to create a productive task management experience. ",
    tags: ["Next.js", "TypeScript", "React", "Shadcn", "Prisma", "postgres"],
    imageUrl: TaskImg,
    link: "https://tasktrek-mki2.vercel.app/",
  },

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
    title: "ThreadLink",
    description:
      "This Next.js user profile feature uses server components for optimized data fetching and SEO, enhancing performance. Its modular design supports user-specific actions like follow status and liked posts, ensuring scalability and a seamless experience.",
    tags: ["Next.js", "TypeScript", "React", "Shadcn", "Prisma", "postgres"],
    imageUrl: ThreadImg,
    link: "https://threadlink-6b9f.vercel.app/",
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
    title: "Travel-AI",
    description:
      "Place Suggestions: Provides famous places using JavaScript and TypeScript. Real-Time Data: Fetches live info using APIs and Node.js.",
    tags: ["React", "TypeScript", "APIs"],
    imageUrl: TravelAiImg,
    link: "https://travel-9wao37lkc-nehas-projects-5692135e.vercel.app/",
  },
] as const;

export const skillsData = [
  "Next.js",
  "JavaScript",
  "React",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "TRPC",
  "ShadcnUI",
  "MongoDB",
  "Prisma",
  "Docker",
  "CI/CD",
  "Astro",
  "Framer Motion",
] as const;
