import Link from "next/link";
import {
  Smartphone,
  Puzzle,
  Users,
  Layers,
  FolderGit2,
  ShieldCheck,
  Library,
  Code2,
  Download,
  BookOpen,
  Github,
  ArrowRight,
} from "lucide-react";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import FeatureCard from "@/components/FeatureCard";
import ScreenshotShowcase from "@/components/ScreenshotShowcase";
import Timeline from "@/components/Timeline";

const pillars = [
  {
    icon: Smartphone,
    title: "Native",
    description:
      "Built with Swift and SwiftUI. A fast, beautiful iOS experience that feels at home on your device.",
  },
  {
    icon: Puzzle,
    title: "Extensions",
    description:
      "Install functionality without waiting for app updates. New capabilities are one tap away.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "A platform powered by developers and contributors, built in the open.",
  },
];

const features = [
  {
    icon: Smartphone,
    title: "Native Experience",
    description:
      "Designed specifically for iOS with fluid gestures, sharp typography, and instant response.",
  },
  {
    icon: Layers,
    title: "Extension Ecosystem",
    description:
      "Expand Rext with installable modules that add sources, tools, and integrations.",
  },
  {
    icon: FolderGit2,
    title: "Repository System",
    description:
      "Discover trusted extensions through repositories you choose and control.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Runtime",
    description:
      "Extensions execute safely in a sandboxed runtime, isolated from your data.",
  },
  {
    icon: Library,
    title: "Personal Library",
    description:
      "Organize your media with collections, tags, and offline downloads.",
  },
  {
    icon: Code2,
    title: "Open Platform",
    description:
      "Build with the Rext SDK. Clear APIs, real documentation, and an open roadmap.",
  },
];

const sdkSnippet = `extension ExampleExtension {

    let name = "Example"

    func search() {
        // implementation
    }

}`;

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* WHAT IS REXT */}
      <section className="wrap py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">What is Rext?</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
            A platform, <span className="gradient-text">not just an app.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Rext separates the core experience from the extensions that power
            it. Users customize their experience. Developers build the
            ecosystem.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <FeatureCard {...p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="border-y border-line bg-surface/50 py-24 md:py-32">
        <div className="wrap">
          <Reveal className="mb-14 text-center">
            <p className="eyebrow">The app</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Every screen, considered.
            </h2>
          </Reveal>
          <ScreenshotShowcase />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="wrap scroll-mt-24 py-24 md:py-32">
        <Reveal className="text-center">
          <p className="eyebrow">Features</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Everything a platform needs.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.1}>
              <FeatureCard {...f} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-line bg-surface/50 py-24 md:py-32">
        <div className="wrap">
          <Reveal className="mb-16 text-center">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              From download to done in minutes.
            </h2>
          </Reveal>
          <Timeline />
        </div>
      </section>

      {/* DEVELOPERS */}
      <section className="wrap py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">For developers</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Build for Rext.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Create extensions instead of rebuilding entire applications. The
              Rext SDK gives you search, metadata, playback, and library APIs
              out of the box.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/docs/developer-guide/creating-extensions" className="btn-primary">
                Developer Docs <ArrowRight size={15} />
              </Link>
              <Link href="/docs/developer-guide/sdk-overview" className="btn-secondary">
                SDK Reference
              </Link>
              <a
                href="https://github.com/rexttdeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-line-strong bg-[#0A0B12] shadow-card">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-3 font-mono text-xs text-faint">
                  ExampleExtension.swift
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-ink/90">
                <code>{sdkSnippet}</code>
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section id="download" className="wrap scroll-mt-24 pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-line-strong bg-surface p-10 text-center md:p-16">
            <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
            <h2 className="relative font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Ready to try <span className="gradient-text">Rext</span>?
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-muted">
              Download the app, add a repository, and see what the ecosystem
              can do.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://github.com/rexttdeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Download size={16} /> Download Rext
              </a>
              <Link href="/docs" className="btn-secondary">
                <BookOpen size={16} /> Read the docs
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
