"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function VideoSection() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="video"
    >
      <SectionHeading>Featured Video</SectionHeading>
      <div className="relative aspect-video">
        <iframe
          src="https://www.loom.com/embed/c7453e34ae9d47c3840aa187f926a6ed?sid=51a68db9-ca89-4b24-959d-75de1f2b1866"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>

      <br />

      <div className="relative aspect-video">
        <iframe
          src="https://www.canva.com/design/DAGehQWtulM/fWM667t88eUpk71PuILgOQ/watch?utm_content=DAGehQWtulM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbd052478ae"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
    </motion.section>
  );
}
