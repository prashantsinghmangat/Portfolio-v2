"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/animations/SectionReveal";

type TabId = "about" | "skills" | "philosophy";

interface Tab {
  id: TabId;
  label: string;
  icon: string;
}

const tabs: Tab[] = [
  { id: "about", label: "about.ts", icon: "📄" },
  { id: "skills", label: "skills.ts", icon: "🔧" },
  { id: "philosophy", label: "philosophy.ts", icon: "💡" },
];

const sidebarFiles = [
  { name: "about.ts", icon: "📄" },
  { name: "skills.ts", icon: "🔧" },
  { name: "philosophy.ts", icon: "💡" },
  { name: "README.md", icon: "📖" },
  { name: "package.json", icon: "📦" },
];

const aboutCode = `<span class="code-kw">const</span> <span class="code-fn">developer</span> <span class="code-pun">=</span> <span class="code-pun">{</span>
  <span class="code-prop">name</span><span class="code-pun">:</span>       <span class="code-str">"Prashant Singh"</span><span class="code-pun">,</span>
  <span class="code-prop">title</span><span class="code-pun">:</span>      <span class="code-str">"Senior Frontend Architect"</span><span class="code-pun">,</span>
  <span class="code-prop">experience</span><span class="code-pun">:</span> <span class="code-str">"5+ years"</span><span class="code-pun">,</span>
  <span class="code-prop">location</span><span class="code-pun">:</span>   <span class="code-str">"India 🇮🇳"</span><span class="code-pun">,</span>
  <span class="code-prop">expertise</span><span class="code-pun">:</span> <span class="code-pun">[</span>
    <span class="code-str">"Frontend Architecture"</span><span class="code-pun">,</span>
    <span class="code-str">"React Ecosystems"</span><span class="code-pun">,</span>
    <span class="code-str">"AngularJS → React Migration"</span><span class="code-pun">,</span>
    <span class="code-str">"UI Performance Engineering"</span><span class="code-pun">,</span>
    <span class="code-str">"Enterprise Web Platforms"</span><span class="code-pun">,</span>
  <span class="code-pun">],</span>
  <span class="code-prop">achievements</span><span class="code-pun">:</span> <span class="code-pun">{</span>
    <span class="code-prop">lcpImproved</span><span class="code-pun">:</span>    <span class="code-str">"4.2s → 1.8s"</span><span class="code-pun">,</span>
    <span class="code-prop">bundleReduced</span><span class="code-pun">:</span>  <span class="code-str">"35% smaller"</span><span class="code-pun">,</span>
    <span class="code-prop">teamMentored</span><span class="code-pun">:</span>   <span class="code-num">4</span><span class="code-pun">,</span>
    <span class="code-prop">componentsBuilt</span><span class="code-pun">:</span> <span class="code-str">"60+"</span><span class="code-pun">,</span>
  <span class="code-pun">},</span>
  <span class="code-prop">openToWork</span><span class="code-pun">:</span> <span class="code-num">true</span><span class="code-pun">,</span>
<span class="code-pun">};</span>`;

const skillsCode = `<span class="code-kw">interface</span> <span class="code-fn">TechStack</span> <span class="code-pun">{</span>
  <span class="code-prop">frontend</span><span class="code-pun">:</span> <span class="code-fn">string</span><span class="code-pun">[];</span>
  <span class="code-prop">backend</span><span class="code-pun">:</span> <span class="code-fn">string</span><span class="code-pun">[];</span>
  <span class="code-prop">tools</span><span class="code-pun">:</span> <span class="code-fn">string</span><span class="code-pun">[];</span>
  <span class="code-prop">testing</span><span class="code-pun">:</span> <span class="code-fn">string</span><span class="code-pun">[];</span>
<span class="code-pun">}</span>

<span class="code-kw">const</span> <span class="code-fn">stack</span><span class="code-pun">:</span> <span class="code-fn">TechStack</span> <span class="code-pun">=</span> <span class="code-pun">{</span>
  <span class="code-prop">frontend</span><span class="code-pun">:</span> <span class="code-pun">[</span>
    <span class="code-str">"React"</span><span class="code-pun">,</span> <span class="code-str">"Next.js"</span><span class="code-pun">,</span> <span class="code-str">"Angular"</span><span class="code-pun">,</span>
    <span class="code-str">"TypeScript"</span><span class="code-pun">,</span> <span class="code-str">"Tailwind CSS"</span><span class="code-pun">,</span>
    <span class="code-str">"Framer Motion"</span><span class="code-pun">,</span> <span class="code-str">"GSAP"</span><span class="code-pun">,</span>
  <span class="code-pun">],</span>
  <span class="code-prop">backend</span><span class="code-pun">:</span> <span class="code-pun">[</span>
    <span class="code-str">"Node.js"</span><span class="code-pun">,</span> <span class="code-str">"Express"</span><span class="code-pun">,</span>
    <span class="code-str">"GraphQL"</span><span class="code-pun">,</span> <span class="code-str">"REST APIs"</span><span class="code-pun">,</span>
    <span class="code-str">"MongoDB"</span><span class="code-pun">,</span> <span class="code-str">"PostgreSQL"</span><span class="code-pun">,</span>
  <span class="code-pun">],</span>
  <span class="code-prop">tools</span><span class="code-pun">:</span> <span class="code-pun">[</span>
    <span class="code-str">"Docker"</span><span class="code-pun">,</span> <span class="code-str">"Git"</span><span class="code-pun">,</span> <span class="code-str">"CI/CD"</span><span class="code-pun">,</span>
    <span class="code-str">"Vite"</span><span class="code-pun">,</span> <span class="code-str">"Webpack"</span><span class="code-pun">,</span>
  <span class="code-pun">],</span>
  <span class="code-prop">testing</span><span class="code-pun">:</span> <span class="code-pun">[</span>
    <span class="code-str">"Jest"</span><span class="code-pun">,</span> <span class="code-str">"Vitest"</span><span class="code-pun">,</span>
    <span class="code-str">"Cypress"</span><span class="code-pun">,</span> <span class="code-str">"Testing Library"</span><span class="code-pun">,</span>
  <span class="code-pun">],</span>
<span class="code-pun">};</span>`;

const philosophyCode = `<span class="code-cmt">/**
 * My Development Philosophy
 * ========================
 * Building software that scales, performs,
 * and delights users.
 */</span>

<span class="code-kw">const</span> <span class="code-fn">principles</span> <span class="code-pun">=</span> <span class="code-pun">{</span>
  <span class="code-prop">architecture</span><span class="code-pun">:</span> <span class="code-str">"Component-driven, composable, testable"</span><span class="code-pun">,</span>
  <span class="code-prop">performance</span><span class="code-pun">:</span> <span class="code-str">"Measure first, optimize with intent"</span><span class="code-pun">,</span>
  <span class="code-prop">dx</span><span class="code-pun">:</span>          <span class="code-str">"Great DX leads to great UX"</span><span class="code-pun">,</span>
  <span class="code-prop">learning</span><span class="code-pun">:</span>    <span class="code-str">"Stay curious, ship consistently"</span><span class="code-pun">,</span>
<span class="code-pun">};</span>

<span class="code-kw">const</span> <span class="code-fn">beliefs</span> <span class="code-pun">=</span> <span class="code-pun">[</span>
  <span class="code-str">"Clean code is a love letter to the next developer"</span><span class="code-pun">,</span>
  <span class="code-str">"Ship fast, iterate faster"</span><span class="code-pun">,</span>
  <span class="code-str">"Every pixel matters"</span><span class="code-pun">,</span>
  <span class="code-str">"Accessibility is not optional"</span><span class="code-pun">,</span>
  <span class="code-str">"The best code is the code you don't write"</span><span class="code-pun">,</span>
<span class="code-pun">];</span>`;

const codeMap: Record<TabId, string> = {
  about: aboutCode,
  skills: skillsCode,
  philosophy: philosophyCode,
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabId>("about");

  const lineCount = codeMap[activeTab].split("\n").length;

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">
            Get to know me
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black mt-2 mb-12">
            About <span className="text-gradient-accent">Me</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="rounded-2xl border border-white/10 overflow-hidden" style={{ background: "#1e1e2e" }}>
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5" style={{ background: "#181825" }}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-zinc-500 ml-2">Visual Studio Code</span>
            </div>

            {/* Tab bar */}
            <div className="flex border-b border-white/5" style={{ background: "#181825" }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-xs font-mono flex items-center gap-1.5 border-r border-white/5 transition-colors ${
                    activeTab === tab.id
                      ? "text-white bg-[#1e1e2e] border-t-2 border-t-accent"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="hidden sm:block w-48 border-r border-white/5 py-2" style={{ background: "#181825" }}>
                <div className="px-3 py-1 text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Explorer
                </div>
                <div className="mt-1">
                  {sidebarFiles.map((file) => {
                    const isActive = tabs.find((t) => t.label === file.name)?.id === activeTab;
                    return (
                      <button
                        key={file.name}
                        onClick={() => {
                          const tab = tabs.find((t) => t.label === file.name);
                          if (tab) setActiveTab(tab.id);
                        }}
                        className={`w-full text-left px-4 py-1 text-xs font-mono flex items-center gap-2 transition-colors ${
                          isActive ? "text-white bg-white/5" : "text-zinc-500 hover:text-zinc-300 hover:bg-white/3"
                        }`}
                        style={{ cursor: "pointer" }}
                      >
                        <span>{file.icon}</span>
                        {file.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Editor */}
              <div className="flex-1 overflow-x-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    {/* Line numbers */}
                    <div className="py-4 px-3 text-right select-none border-r border-white/5 min-w-[3rem]">
                      {Array.from({ length: lineCount }, (_, i) => (
                        <div key={i} className="text-xs font-mono text-zinc-600 leading-6">
                          {i + 1}
                        </div>
                      ))}
                    </div>

                    {/* Code */}
                    <pre className="py-4 px-4 text-sm font-mono leading-6 overflow-x-auto">
                      <code dangerouslySetInnerHTML={{ __html: codeMap[activeTab] }} />
                    </pre>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between px-4 py-1 text-xs font-mono bg-accent text-white/80">
              <div className="flex items-center gap-3">
                <span>⎇ main</span>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-3">
                <span>UTF-8</span>
                <span>Ln {lineCount}</span>
                <span>Col 1</span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
