"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import ProjectCard from "@/components/project/project-card";
import { ProjectCardList } from "@/components/project/project-card";
import { Grid2X2, Menu } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  containerVariants,
  gridItemVariants,
  listItemVariants,
} from "@/helpers/project-animation";

const GUTTER = "max-w-8xl px-6 md:px-8 lg:px-10";

const projects = [
  {
    title: "CCTV Face Recognition",
    image: "/images/cctv.png",
    category: "Computer Vision",
  },
  {
    title: "Pasient Tracker",
    image: "/images/patient-tracker.png",
    category: "Landing Page",
  },
  { title: "Medistaff", image: "/images/medistaff.png", category: "Web App" },
  { title: "Schetelebot", image: "/images/schetelebot.png", category: "Bot" },
];

export default function Work() {
  const [listView, setListView] = useState(false);

  return (
    <Section className="pt-24 pb-6 sm:pt-0 sm:pb-8 md:pt-0 md:pb-8 lg:pt-8 lg:pb-10">
      <Container className={GUTTER}>
        <div>
          <h1 className="text-balance self-start text-4xl font-light sm:text-6xl lg:text-[80px]">
            My Work
          </h1>
          <p className="mt-4 max-w-4xl text-pretty text-[15px] leading-7 [word-spacing:0.25em] text-surface/60 sm:text-base">
            Discover my latest projects where design, technology, and creativity
            come together to craft engaging digital experiences. Below is a
            collection of my favourites.
          </p>
        </div>

        <div className="flex items-center gap-x-1 mt-8 justify-end">
          <button
            onClick={() => setListView(false)}
            className={`p-2 flex items-center justify-center rounded-[8px] transition-colors duration-300 ${
              !listView ? "bg-surface" : ""
            }`}
          >
            <Grid2X2
              className={!listView ? "text-gray-100" : "text-surface"}
              size={16}
            />
          </button>
          <button
            onClick={() => setListView(true)}
            className={`p-2 flex items-center justify-center rounded-[8px] transition-colors duration-300 ${
              listView ? "bg-surface" : ""
            }`}
          >
            <Menu
              className={listView ? "text-gray-100" : "text-surface"}
              size={16}
            />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!listView ? (
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="mt-8 grid grid-cols-1 gap-y-8 justify-between sm:grid-cols-2 md:gap-y-6 md:gap-x-8"
            >
              {projects.map((p) => (
                <motion.div key={p.title} variants={gridItemVariants}>
                  <ProjectCard
                    title={p.title}
                    category={p.category}
                    image={p.image}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="mt-8"
            >
              {projects.map((p) => (
                <motion.div key={p.title} variants={listItemVariants}>
                  <ProjectCardList
                    title={p.title}
                    category={p.category}
                    image={p.image}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
