"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Code2,
  Rocket,
  Star,
  ArrowUpRight,
  CircleDot,
} from "lucide-react";

type ProjectProps = (typeof projectsData)[number];

const FloatingElement = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.5, 1, 0.5],
        y: [0, -10, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className={`absolute ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 perspective-1000"
      initial={{ rotateY: 720 }}
      animate={{ rotateY: 0 }}
      transition={{
        duration: 1.2,
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 1,
      }}
    >
      <Link href={link}>
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          {/* Decorative Elements */}
          <FloatingElement className="top-4 left-4 text-blue-500">
            <Sparkles size={20} />
          </FloatingElement>

          <FloatingElement
            className="top-4 right-4 text-purple-500"
            delay={0.5}
          >
            <Code2 size={20} />
          </FloatingElement>

          <FloatingElement className="bottom-4 left-4 text-green-500" delay={1}>
            <Rocket size={20} />
          </FloatingElement>

          <FloatingElement
            className="bottom-4 right-4 text-yellow-500"
            delay={1.5}
          >
            <Star size={20} />
          </FloatingElement>

          {/* Animated Corner Lines */}
          <motion.div
            className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main Content */}
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <CircleDot size={16} className="text-blue-500" />
              </motion.div>
            </div>

            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>

            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 hover:bg-black/[0.8] transition-colors"
                >
                  {tag}
                </motion.li>
              ))}
            </ul>

            {/* View Project Link */}
            <motion.div
              className="absolute bottom-4 right-4 flex items-center gap-1 text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.05 }}
            >
              View Project
              <ArrowUpRight size={16} />
            </motion.div>
          </div>

          {/* Project Image */}
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
              transition
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2
              group-hover:shadow-[0_20px_80px_rgba(0,0,0,0.3)]
              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2
              group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </Link>
    </motion.div>
  );
}
