"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Copy, Check, ExternalLink } from "lucide-react";
import SectionReveal from "@/components/animations/SectionReveal";

const codeLines = [
  { text: '<span class="code-kw">import</span> <span class="code-fn">TraceBug</span> <span class="code-kw">from</span> <span class="code-str">\'tracebug-sdk\'</span><span class="code-pun">;</span>' },
  { text: "" },
  { text: '<span class="code-fn">TraceBug</span><span class="code-pun">.</span><span class="code-fn">init</span><span class="code-pun">({</span>' },
  { text: '  <span class="code-prop">apiKey</span><span class="code-pun">:</span>      <span class="code-str">\'your-api-key\'</span><span class="code-pun">,</span>' },
  { text: '  <span class="code-prop">environment</span><span class="code-pun">:</span> <span class="code-str">\'production\'</span><span class="code-pun">,</span>' },
  { text: '  <span class="code-prop">version</span><span class="code-pun">:</span>     <span class="code-str">\'1.0.0\'</span><span class="code-pun">,</span>' },
  { text: '<span class="code-pun">});</span>' },
  { text: "" },
  { text: '<span class="code-fn">TraceBug</span><span class="code-pun">.</span><span class="code-fn">capture</span><span class="code-pun">(</span><span class="code-str">\'ButtonClicked\'</span><span class="code-pun">, {</span>' },
  { text: '  <span class="code-prop">userId</span><span class="code-pun">:</span> <span class="code-fn">user</span><span class="code-pun">.</span><span class="code-prop">id</span><span class="code-pun">,</span>' },
  { text: '  <span class="code-prop">component</span><span class="code-pun">:</span> <span class="code-str">\'CheckoutForm\'</span><span class="code-pun">,</span>' },
  { text: '<span class="code-pun">});</span>' },
];

export default function OpenSourceSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npm install tracebug-sdk");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="opensource"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "#0a0a12" }}
    >
      {/* Spinning conic gradient */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full animate-spin-slow opacity-20"
          style={{
            background:
              "conic-gradient(from 0deg, #7c6cfc, #22d3ee, #7c6cfc)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">
              Open Source
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black mt-2">
              npm <span className="text-gradient-accent">Spotlight</span>
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div
            className="rounded-2xl p-6 sm:p-8 hover:shadow-[0_0_40px_rgba(124,108,252,0.15)] transition-shadow duration-500"
            style={{
              background: "linear-gradient(135deg, rgba(124,108,252,0.08), rgba(34,211,238,0.04))",
              border: "1px solid rgba(124,108,252,0.3)",
            }}
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-5">
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs font-mono">
                <Package size={12} />
                npm
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              tracebug-sdk
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Lightweight, production-ready debugging SDK for modern web
              applications. Capture, track, and resolve bugs with zero
              configuration. Built for React, Vue, Angular, and vanilla JS.
            </p>

            {/* Install command */}
            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-black/40 border border-white/5 mb-6">
              <code className="text-sm font-mono">
                <span className="text-green-400">$</span>{" "}
                <span className="text-white">npm install tracebug-sdk</span>
              </code>
              <button
                onClick={handleCopy}
                className="text-zinc-400 hover:text-white transition-colors"
                style={{ cursor: "pointer" }}
              >
                {copied ? (
                  <Check size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            {/* Code snippet */}
            <div className="rounded-xl bg-black/40 border border-white/5 p-4 overflow-x-auto mb-6">
              <pre className="text-sm font-mono leading-7">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    dangerouslySetInnerHTML={{ __html: line.text || "&nbsp;" }}
                  />
                ))}
              </pre>
            </div>

            {/* Footer */}
            <a
              href="https://www.npmjs.com/package/tracebug-sdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-2 transition-colors font-mono"
              style={{ cursor: "pointer" }}
            >
              <Package size={14} />
              View on npm
              <ExternalLink size={12} />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
