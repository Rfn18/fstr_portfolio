"use client";

import { About } from "@/components/about/about";
import { Hero } from "@/components/hero/hero";
import ExperienceList from "@/components/experience/experience-list";
import Project from "@/components/project/project";
import Journey from "@/components/journey/journey";
import Preloader from "@/components/ui/preloader";
import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <div className="relative overflow-clip">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={handleComplete} />}
      </AnimatePresence>
      <Hero />
      <About />
      <ExperienceList />
      <Project />
      <Journey />
    </div>
  );
}
