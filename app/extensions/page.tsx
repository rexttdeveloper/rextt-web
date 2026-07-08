"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Puzzle, Download } from "lucide-react";

const categories = ["All", "Media", "Metadata", "Integrations", "Utilities", "Community"] as const;
type Category = (typeof categories)[number];

type Extension = {
  name: string;
  description: string;
  developer: string;
  version: string;
  category: Exclude<Category, "All">;
};

const extensions: Extension[] = [
  { name: "StreamSource", description: "Adds streaming media sources with adaptive quality selection.", developer: "Rext Team", version: "2.1.0", category: "Media" },
  { name: "LocalMedia", description: "Index and play media stored on your device or network shares.", developer: "Rext Team", version: "1.4.2", category: "Media" },
  { name: "MetaFetch", description: "Enriches items with artwork, descriptions, and related titles.", developer: "Community", version: "1.2.0", category: "Metadata" },
  { name: "TagMaster", description: "Automatic tagging and smart categorization for your library.", developer: "Community", version: "0.9.1", category: "Metadata" },
  { name: "SyncBridge", description: "Sync watch progress with third-party tracking services.", developer: "Community", version: "1.0.3", category: "Integrations" },
  { name: "CastConnect", description: "Send playback to AirPlay and cast-enabled devices.", developer: "Rext Team", version: "1.1.0", category: "Integrations" },
  { name: "QuickTools", description: "Batch actions, export, and library maintenance utilities.", developer: "Community", version: "0.8.0", category: "Utilities" },
  { name: "BackupKit", description: "Export and restore your library, tags, and settings.", developer: "Community", version: "1.0.0", category: "Utilities" },
  { name: "RextThemes", description: "Community-made accent palettes and app icons.", developer: "Community", version: "0.5.2", category: "Community" },
];

export default function ExtensionsPage() {
  const [active, setActive] = useState<Category>("All");
  const reduce = !!useReducedMotion();
  const visible =
    active === "All" ? extensions : extensions.filter((e) => e.category === active);

  return (
    <div className="wrap pb-24 pt-32">
      <p className="eyebrow">Extensions</p>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
        The <span className="gradient-text">ecosystem</span>, at a glance.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
        A preview of what the community is building. Install any of these from
        the official repository inside Rext.
      </p>

      {/* category filter */}
      <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Extension categories">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-2 text-sm transition-all ${
              active === c
                ? "border-transparent bg-rext-gradient text-white shadow-glow"
                : "border-line-strong bg-surface text-muted hover:border-white/25 hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* grid */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((ext, i) => (
          <motion.article
            key={ext.name}
            layout={!reduce}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="card flex flex-col"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rext-gradient">
                <Puzzle size={18} className="text-white" />
              </div>
              <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-faint">
                {ext.category}
              </span>
            </div>

            <h2 className="mt-4 font-display text-lg font-semibold">{ext.name}</h2>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
              {ext.description}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
              <div>
                <p className="text-xs text-muted">{ext.developer}</p>
                <p className="font-mono text-[11px] text-faint">v{ext.version}</p>
              </div>
              <button
                type="button"
                className="btn-secondary !px-4 !py-1.5 !text-xs"
                aria-label={`Install ${ext.name} (opens in the Rext app)`}
              >
                <Download size={13} /> Install
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="mt-10 text-sm text-faint">
        Extensions install inside the Rext app. This page is a preview of the
        official repository.
      </p>
    </div>
  );
}
