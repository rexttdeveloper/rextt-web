"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Download,
  FolderPlus,
  Compass,
  PackageCheck,
  Sparkles,
} from "lucide-react";

const steps = [
  { icon: Download, title: "Download Rext", description: "Get the app on your iPhone." },
  { icon: FolderPlus, title: "Add Repository", description: "Point Rext at a trusted extension source." },
  { icon: Compass, title: "Browse Extensions", description: "Explore what the community has built." },
  { icon: PackageCheck, title: "Install", description: "One tap. No app update required." },
  { icon: Sparkles, title: "Enjoy", description: "Your media platform, your way." },
];

export default function Timeline() {
  const reduce = !!useReducedMotion();

  return (
    <ol className="relative mx-auto grid max-w-5xl gap-8 md:grid-cols-5 md:gap-4">
      {steps.map((step, i) => (
        <motion.li
          key={step.title}
          className="relative flex items-center gap-5 md:flex-col md:gap-0 md:text-center"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
        >
          {/* connector */}
          {i < steps.length - 1 && (
            <>
              {/* horizontal on desktop */}
              <motion.div
                className="absolute left-[calc(50%+2rem)] top-7 hidden h-px w-[calc(100%-4rem)] origin-left bg-gradient-to-r from-rext-indigo/60 to-rext-indigo/10 md:block"
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              />
              {/* vertical on mobile */}
              <div className="absolute left-7 top-14 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-rext-indigo/60 to-rext-indigo/10 md:hidden" />
            </>
          )}

          <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line-strong bg-surface-2 shadow-card">
            <step.icon size={20} className="text-rext-blue" />
          </div>
          <div className="md:mt-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-faint">
              Step {i + 1}
            </p>
            <h3 className="mt-0.5 font-display text-sm font-semibold">
              {step.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              {step.description}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
