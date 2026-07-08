import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Info,
  Play,
  Library,
  Github,
  ArrowRight,
  TerminalSquare,
  GitPullRequest,
  MessageSquare,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "Build extensions for Rext with the SDK: search, metadata, playback, and library APIs in a secure runtime.",
};

const surfaces = [
  { icon: Search, title: "Search", description: "Respond to user queries with results from your source." },
  { icon: Info, title: "Metadata", description: "Enrich items with details, artwork, and related content." },
  { icon: Play, title: "Playback", description: "Resolve items into playable streams the native player understands." },
  { icon: Library, title: "Library", description: "React when users save, tag, or download your items." },
];

const contribute = [
  {
    icon: TerminalSquare,
    title: "Build an extension",
    description: "Start from the template repo and ship to the official repository.",
    href: "/docs/developer-guide/creating-extensions",
  },
  {
    icon: GitPullRequest,
    title: "Contribute to core",
    description: "Rext is open source. Pick up an issue and open a pull request.",
    href: "https://github.com/rexttdeveloper",
    external: true,
  },
  {
    icon: MessageSquare,
    title: "Join the community",
    description: "Discuss ideas, get help, and share what you're building.",
    href: "https://discord.gg/rext",
    external: true,
  },
];

const snippet = `import RextSDK

struct ExampleExtension: RextExtension {

    let name = "Example"
    let capabilities: [Capability] = [.search, .metadata]

    func search(_ query: SearchQuery) async throws -> [Item] {
        let response = try await http.get("https://api.example.com/search",
                                          query: ["q": query.text])
        return response.items.map(Item.init)
    }
}`;

export default function DevelopersPage() {
  return (
    <div className="wrap pb-24 pt-32">
      <Reveal>
        <p className="eyebrow">Developers</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
          Build for <span className="gradient-text">Rext</span>.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Create extensions instead of rebuilding entire applications. Rext
          handles the app — you bring the capability.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/docs/developer-guide/creating-extensions" className="btn-primary">
            Start building <ArrowRight size={15} />
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

      {/* code + surfaces */}
      <div className="mt-20 grid items-start gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-line-strong bg-[#0A0B12] shadow-card">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-xs text-faint">
                ExampleExtension.swift
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-ink/90">
              <code>{snippet}</code>
            </pre>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {surfaces.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="card h-full">
                <s.icon size={19} className="text-rext-blue" />
                <h2 className="mt-3 font-display font-semibold">{s.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ways to contribute */}
      <Reveal className="mt-24">
        <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
          Three ways to contribute
        </h2>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {contribute.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            {c.external ? (
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group block h-full"
              >
                <c.icon size={20} className="text-rext-blue" />
                <h3 className="mt-4 font-display font-semibold">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {c.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-rext-blue">
                  Open <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            ) : (
              <Link href={c.href} className="card group block h-full">
                <c.icon size={20} className="text-rext-blue" />
                <h3 className="mt-4 font-display font-semibold">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {c.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-rext-blue">
                  Read the guide <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  );
}
