"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Download, BookOpen, Github, Puzzle, Shield, Zap } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

function FloatingCard({
  icon: Icon,
  title,
  sub,
  className,
  delay,
  reduce,
}: {
  icon: typeof Puzzle;
  title: string;
  sub: string;
  className: string;
  delay: number;
  reduce: boolean;
}) {
  return (
    <motion.div
      className={`absolute z-10 hidden items-center gap-3 rounded-2xl border border-line-strong bg-surface-2/90 p-3.5 pr-5 shadow-card backdrop-blur-md sm:flex ${className}`}
      initial={reduce ? false : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex items-center gap-3"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rext-gradient">
          <Icon size={16} className="text-white" />
        </div>
        <div>
          <p className="text-xs font-semibold">{title}</p>
          <p className="text-[11px] text-muted">{sub}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const reduce = !!useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-rext-indigo/10 blur-[120px]" />

      <div className="wrap relative grid items-center gap-16 lg:grid-cols-2">
        {/* left */}
        <div>
          <motion.p
            className="eyebrow"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            Extensible media platform for iOS
          </motion.p>

          <motion.h1
            className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            One App.
            <br />
            <span className="gradient-text">Infinite Possibilities.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-lg leading-relaxed text-muted"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            The extensible media platform for iOS. Install extensions,
            customize your experience, and build the future of media.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
          >
            <Link href="/#download" className="btn-primary">
              <Download size={16} /> Download Rext
            </Link>
            <Link href="/docs" className="btn-secondary">
              <BookOpen size={16} /> Documentation
            </Link>
            <a
              href="https://github.com/rexttdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github size={16} /> GitHub
            </a>
          </motion.div>
        </div>

        {/* right — product visualization */}
        <div className="relative mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup screen="home" className="mx-auto" />
            </motion.div>
          </motion.div>

          <FloatingCard
            icon={Puzzle}
            title="MetaFetch installed"
            sub="Extension · v1.2.0"
            className="-left-16 top-16 lg:-left-24"
            delay={0.7}
            reduce={reduce}
          />
          <FloatingCard
            icon={Shield}
            title="Secure runtime"
            sub="Sandboxed execution"
            className="-right-10 top-1/2 lg:-right-20"
            delay={0.9}
            reduce={reduce}
          />
          <FloatingCard
            icon={Zap}
            title="Repository synced"
            sub="12 extensions available"
            className="-bottom-4 left-0 lg:-left-10"
            delay={1.1}
            reduce={reduce}
          />
        </div>
      </div>
    </section>
  );
}
