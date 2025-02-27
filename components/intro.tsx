"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import {
  PencilLine,
  StickyNote,
  Code,
  Laptop,
  Coffee,
  Star,
  Lightbulb,
  Rocket,
} from "lucide-react";

interface FloatingElementProps {
  children: React.ReactNode;
  delay: number;
  yOffset?: number;
  rotationDirection?: 1 | -1;
}

const FloatingElement = ({
  children,
  delay,
  yOffset = 20,
  rotationDirection = 1,
}: FloatingElementProps) => {
  return (
    <motion.div
      animate={{
        y: [0, yOffset, 0],
        rotate: [0, rotationDirection * 10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
      whileHover={{
        scale: 1.1,
        rotate: 360,
        transition: { duration: 0.5 },
      }}
      className="absolute"
    >
      {children}
    </motion.div>
  );
};

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] relative"
    >
      {/* Original Floating Elements */}
      <FloatingElement delay={0} yOffset={15} rotationDirection={-1}>
        <div className="absolute -left-16 top-20">
          <PencilLine
            size={32}
            className="text-blue-500 transform -rotate-45"
          />
        </div>
      </FloatingElement>

      <FloatingElement delay={1.5} yOffset={25}>
        <div className="absolute -right-16 top-40">
          <StickyNote size={32} className="text-yellow-500" />
        </div>
      </FloatingElement>

      <FloatingElement delay={0.8} yOffset={20} rotationDirection={-1}>
        <div className="absolute left-16 top-60">
          <PencilLine
            size={28}
            className="text-green-500 transform rotate-45"
          />
        </div>
      </FloatingElement>

      <FloatingElement delay={2} yOffset={18}>
        <div className="absolute right-16 top-20">
          <StickyNote size={28} className="text-pink-500" />
        </div>
      </FloatingElement>

      {/* New Floating Elements */}
      <FloatingElement delay={1.2} yOffset={22}>
        <div className="absolute -left-24 top-40">
          <Code size={24} className="text-purple-500" />
        </div>
      </FloatingElement>

      <FloatingElement delay={2.5} yOffset={18} rotationDirection={-1}>
        <div className="absolute -right-24 top-60">
          <Laptop size={28} className="text-indigo-500" />
        </div>
      </FloatingElement>

      <FloatingElement delay={0.5} yOffset={25}>
        <div className="absolute left-24 top-20">
          <Coffee size={24} className="text-orange-500" />
        </div>
      </FloatingElement>

      <FloatingElement delay={1.8} yOffset={20} rotationDirection={-1}>
        <div className="absolute right-24 top-40">
          <Star size={24} className="text-yellow-400" />
        </div>
      </FloatingElement>

      <FloatingElement delay={1} yOffset={16}>
        <div className="absolute -left-8 top-80">
          <Lightbulb size={24} className="text-amber-500" />
        </div>
      </FloatingElement>

      <FloatingElement delay={2.2} yOffset={22} rotationDirection={-1}>
        <div className="absolute -right-8 top-80">
          <Rocket size={24} className="text-red-500" />
        </div>
      </FloatingElement>

      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/user.png"
              alt="Neha Prasad"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-25 w-25 rounded-full object-cover border-[0.35rem]"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-lg font-nunito">
          Hello, I am Neha Prasad. a software developer based in India. Next.js
          developer. I like to work on building epic stuffs to explore more
          about Next.Js and JavaScript. I'm all about exploring new tech and
          creating impact.
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://drive.google.com/file/d/15zXM1kcbQ6ykIXU1ypkP8mt6W_0JHArt/view?usp=drivesdk"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/neha-prasad-92499821b/"
          target="_blank"
        >
          {" "}
          Linkdln
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/naaa760"
          target="_blank"
        >
          {" "}
          Github
          <FaGithubSquare />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://x.com/nehaaaa_6"
          target="_blank"
        >
          {" "}
          Twitter
          <FaXTwitter />
        </a>
      </motion.div>
    </section>
  );
}
