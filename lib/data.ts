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
import SnapImg from "@/public/snap.png";
import ChatImg from "@/public/chat.png";
import cryptImg from "@/public/crypt.png";
import TymImg from "@/public/tym.png";

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
    title: "Front-End Developer at GSSOC",
    location: "Delhi, India",
    description:
      "Lead a team of 30+ volunteers to organise a 3 month long open-source program with 13000+ participants, 300+ mentors and 100+ projects Collaborated with senior guidance to raise awareness about our program on social expenses tracker using added new features to the project and automation The Application provides the functionality to export the transactions in Expense Tracker.",
    icon: React.createElement(FaReact),
    date: "05/2023 - 08/2023",
  },
  {
    title: "SWE at HeadStarter AI",
    location: "Remote,USA",
    description:
      "Built and deployed 5 AI projects using React, Next.js, Firebase, Clerk, and Vercel, incorporating best software engineering practices such as CI/CD for regression detection and iterative deployment. Collaborated with and led a team of 3 to build and deploy a SaaS product that generates flashcards based on a given topic using the OpenAI API. Developed a RAG-based project with a team of 3 using the OpenAI API and Pinecone that generates responses based on a provided dataset.",
    icon: React.createElement(FaReact),
    date: "07/2024 - 09/2024",
  },
] as const;

export const projectsData = [
  {
    title: "TimeBank",
    description:
      "TimeBank is a modern web application that enables users to exchange services and skills using time as currency. Users can offer their expertise, request services, and build a community based on mutual skill-sharing. ",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL (with Neon)",
    ],
    imageUrl: TymImg,
    link: "https://timebank-knhl.vercel.app/",
  },

  {
    title: "VocaVista",
    description:
      "This project is a Next.js web app featuring secure user authentication via Clerk and personalized AI using Google's Gemini. It uses a serverless PostgreSQL database (Neon) for secure, contextual user data storage.",
    tags: ["Next.js", "TypeScript", "React", "Gemini", "Prisma", "Inngest"],
    imageUrl: VocaImg,
    link: "https://vocavista.vercel.app/",
  },

  {
    title: "Vexora",
    description:
      "This project is a Document Q&A system using the Gemma 2 9B model (via Groq) to answer questions about US Census PDFs. It employs RAG with FAISS vector storage and Google's AI embeddings, featuring a sleek Streamlit UI.",
    tags: ["Python", "Groq", "Streamlit", "LLM"],
    imageUrl: ChatImg,
    link: "https://vexora-gdunc7gvtppuovsedw2g36.streamlit.app/",
  },

  {
    title: "Dwellex",
    description:
      "This is a decentralized real estate marketplace built on blockchain technology. The platform allows users to buy, sell, and manage real estate properties using cryptocurrency (ETH). The project features a modern",
    tags: ["React", "Solidity", "etherum"],
    imageUrl: cryptImg,
    link: "https://dwellex.vercel.app/",
  },

  {
    title: "SnapCart",
    description:
      "POSGRESTORE is a modern e-commerce platform with a React/TypeScript frontend and a Node.js/Express backend, using Zustand for state management, Neon PostgreSQL for data storage, and secure CRUD operations via a RESTful API.",
    tags: ["React", "TypeScript", "POSTMAN", "Zustand", "Neon", "Arcjet"],
    imageUrl: SnapImg,
    link: "https://snapcart-r2tx.onrender.com/",
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
    ],
    imageUrl: DataImg,
    link: "https://stackly-lsco.vercel.app/",
  },

  {
    title: "StreamiFy",
    description:
      "Streamify is a React-based music analytics dashboard showing total users, active users, total streams, revenue, and top artists. It includes charts for user growth, revenue sources, and top songs.",
    tags: ["React", "Next.js", "TypeScript", "Shadcn", "API Router", "Jest"],
    imageUrl: StreamImg,
    link: "https://streamify-1mgs.vercel.app/",
  },

  {
    title: "SuperTask",
    description:
      "Help users track tasks efficiently Provide meaningful organization tools Make task management enjoyable Keep interface simple but powerful The project combines modern React patterns with practical functionality. ",
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
      "This Next.js user profile feature uses server components for optimized data fetching and SEO, enhancing performance. Its modular design supports user-specific actions like follow status and liked posts.",
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
      "While developing this app, I learnt React project architecture, Clean Code practices, and Next.js 13 structure. You'll also enhance your skills in CSS with Tailwind, creating smooth animations.",
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
