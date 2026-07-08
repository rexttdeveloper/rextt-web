"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import PhoneMockup, { type Screen } from "./PhoneMockup";

const screens: { id: Screen; title: string; description: string }[] = [
  { id: "home", title: "Home", description: "Your dashboard. Pick up where you left off and see what's trending across your sources." },
  { id: "search", title: "Search", description: "Discover content across every installed extension from a single search bar." },
  { id: "extensions", title: "Extensions", description: "Browse repositories, install extensions, and manage updates in one place." },
  { id: "library", title: "Library", description: "Save anything. Your library is organized, synced, and always yours." },
  { id: "player", title: "Player", description: "A native media player built for smooth playback and gesture control." },
  { id: "settings", title: "Settings", description: "Add repositories, tune the experience, and make Rext your own." },
];

export default function ScreenshotShowcase() {
  const [active, setActive] = useState<Screen>("home");
  const reduce = !!useReducedMotion();
  const current = screens.find((s) => s.id === active)!;

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* selector */}
      <div className="order-2 lg:order-1">
        <div className="flex flex-col gap-2" role="tablist" aria-label="App screens">
          {screens.map((s) => {
            const selected = s.id === active;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(s.id)}
                className={`rounded-2xl border p-5 text-left transition-all duration-200 ${
                  selected
                    ? "border-rext-indigo/40 bg-surface-2 shadow-glow"
                    : "border-transparent hover:border-line hover:bg-surface"
                }`}
              >
                <h3 className={`font-display font-semibold ${selected ? "text-ink" : "text-muted"}`}>
                  {s.title}
                </h3>
                <AnimatePresence initial={false}>
                  {selected && (
                    <motion.p
                      initial={reduce ? false : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 block">{s.description}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>

      {/* device */}
      <div className="relative order-1 flex justify-center lg:order-2">
        <div className="pointer-events-none absolute inset-0 m-auto h-72 w-72 rounded-full bg-rext-indigo/15 blur-[100px]" />
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <PhoneMockup screen={active} />
            <p className="mt-6 text-center font-mono text-xs uppercase tracking-widest text-faint">
              {current.title}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
