import type { Metadata } from "next";
import { CheckCircle2, CircleDot, Circle } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "What's shipped, what's in progress, and what's next for Rext.",
};

const phases = [
  {
    label: "Completed",
    icon: CheckCircle2,
    tone: "text-emerald-400",
    ring: "border-emerald-400/30",
    items: [
      { title: "Native iOS foundation", description: "The core Swift and SwiftUI app: navigation, player, library, and settings." },
      { title: "Extension architecture", description: "The sandboxed runtime that loads and executes extensions safely." },
      { title: "Repository system", description: "Add trusted repositories and install extensions with one tap." },
    ],
  },
  {
    label: "In Progress",
    icon: CircleDot,
    tone: "text-rext-blue",
    ring: "border-rext-blue/30",
    items: [
      { title: "Extension SDK", description: "A stable, documented API surface for search, metadata, playback, and library hooks." },
      { title: "Developer tools", description: "Local sideloading, live logs, and a template project for fast iteration." },
      { title: "Official repository", description: "A curated, reviewed index of community extensions." },
    ],
  },
  {
    label: "Planned",
    icon: Circle,
    tone: "text-faint",
    ring: "border-line-strong",
    items: [
      { title: "Cloud Sync", description: "Library, progress, and settings synced across devices." },
      { title: "macOS", description: "A native Mac app sharing the same extension ecosystem." },
      { title: "iPad", description: "A layout designed for the larger canvas." },
      { title: "Community marketplace", description: "Discover, rate, and share extensions inside the app." },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="wrap pb-24 pt-32">
      <Reveal>
        <p className="eyebrow">Roadmap</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
          Built in the open.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Where Rext is, and where it's going. Priorities are shaped with the
          community on GitHub.
        </p>
      </Reveal>

      <div className="mt-16 space-y-16">
        {phases.map((phase, pi) => (
          <Reveal key={phase.label} delay={pi * 0.05}>
            <section aria-label={phase.label}>
              <div className="flex items-center gap-3">
                <phase.icon size={20} className={phase.tone} />
                <h2 className="font-display text-xl font-semibold">{phase.label}</h2>
              </div>

              <ol className="mt-6 space-y-4 border-l border-line pl-8">
                {phase.items.map((item) => (
                  <li key={item.title} className="relative">
                    <span
                      className={`absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 bg-bg ${phase.ring}`}
                      aria-hidden="true"
                    />
                    <div className="card !p-5">
                      <h3 className="font-display font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
