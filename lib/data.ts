import React from "react";
import { FaReact } from "react-icons/fa";
import AInavigatorImg from "@/public/AI-navigator.png";
import CrikNetImg from "@/public/CrickNet.png";
import HealthImg from "@/public/Health.png";

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
    title: "AI-navigator",
    description:
      "I used React in the front-end. Used crew ai for building multiple AI agents and upstate API for generating responses. Firebase has been used for authentication",
    tags: ["React", "JavaScript", "SCSS", "HTML"],
    imageUrl: AInavigatorImg,
  },
  {
    title: "CrickNet",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "TailwindCSS"],
    imageUrl: CrikNetImg,
  },
  {
    title: "HealthPulse",
    description:
      "I used Created reusable React components and managed state using React Hooks for a dynamic admindashboard. Enhancing performance",
    tags: ["React", "TypeScript", "SQL", "Python", "Prisma"],
    imageUrl: HealthImg,
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
