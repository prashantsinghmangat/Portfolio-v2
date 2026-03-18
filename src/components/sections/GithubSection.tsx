"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import SectionReveal from "@/components/animations/SectionReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/SectionReveal";
import { generateContributionData, getIntensityColor } from "@/lib/github";
import { githubStats, featuredRepos } from "@/data/portfolio";

const statItems = [
  { label: "Contributions", value: githubStats.contributions },
  { label: "Repositories", value: githubStats.repositories },
  { label: "Stars Earned", value: githubStats.stars },
  { label: "PRs Merged", value: githubStats.prs },
];

export default function GithubSection() {
  const contributions = useMemo(() => generateContributionData(), []);

  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">
            Activity
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black mt-2 mb-12">
            GitHub <span className="text-gradient-accent">Activity</span>
          </h2>
        </SectionReveal>

        {/* Stats grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {statItems.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="p-4 rounded-2xl border border-white/8 bg-white/[0.03] text-center">
                <div className="text-2xl sm:text-3xl font-display font-black text-gradient-accent">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500 font-mono mt-1">
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Contribution heatmap */}
        <SectionReveal delay={0.2}>
          <div className="p-5 rounded-2xl border border-white/8 bg-white/[0.03] mb-12 overflow-x-auto">
            <h3 className="text-sm font-mono text-zinc-400 mb-4">
              Contribution Activity
            </h3>
            <div className="flex gap-[3px] min-w-fit">
              {contributions.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day, di) => (
                    <motion.div
                      key={`${wi}-${di}`}
                      className={`w-[10px] h-[10px] sm:w-3 sm:h-3 rounded-sm ${getIntensityColor(day)} hover:scale-150 transition-transform`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: (wi * 7 + di) * 0.002,
                        duration: 0.2,
                      }}
                      title={`${day} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 mt-4 justify-end">
              <span className="text-xs text-zinc-500">Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm ${getIntensityColor(level)}`}
                />
              ))}
              <span className="text-xs text-zinc-500">More</span>
            </div>
          </div>
        </SectionReveal>

        {/* Featured repos */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {featuredRepos.map((repo) => (
            <StaggerItem key={repo.name}>
              <motion.a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-accent/20 transition-all group"
                whileHover={{ y: -3 }}
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-accent group-hover:text-accent-2 transition-colors">
                    {repo.name}
                  </h4>
                  <ExternalLink size={12} className="text-zinc-500" />
                </div>
                <p className="text-xs text-zinc-400 mb-3 line-clamp-2">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: repo.languageColor }}
                    />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={12} />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} />
                    {repo.forks}
                  </span>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
