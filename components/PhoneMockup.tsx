import Image from "next/image";
import {
  Home,
  Search,
  Puzzle,
  Library,
  Play,
  Settings,
  Download,
  Star,
} from "lucide-react";

export type Screen =
  | "home"
  | "search"
  | "extensions"
  | "library"
  | "player"
  | "settings";

/* ---------- tiny building blocks ---------- */

function Row({ w = "100%" }: { w?: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="h-8 w-8 shrink-0 rounded-lg bg-white/[0.07]" />
      <div className="flex-1 space-y-1.5">
        <div className="h-2 rounded bg-white/[0.14]" style={{ width: w }} />
        <div className="h-2 w-1/2 rounded bg-white/[0.06]" />
      </div>
    </div>
  );
}

function Tile() {
  return <div className="aspect-[2/3] rounded-lg bg-gradient-to-br from-white/[0.1] to-white/[0.03]" />;
}

/* ---------- screens ---------- */

function ScreenBody({ screen }: { screen: Screen }) {
  switch (screen) {
    case "home":
      return (
        <>
          <div className="h-20 rounded-xl bg-rext-gradient opacity-80" />
          <p className="text-[9px] font-semibold text-white/70">Continue</p>
          <div className="grid grid-cols-3 gap-2">
            <Tile /> <Tile /> <Tile />
          </div>
          <p className="text-[9px] font-semibold text-white/70">Trending</p>
          <div className="grid grid-cols-3 gap-2">
            <Tile /> <Tile /> <Tile />
          </div>
        </>
      );
    case "search":
      return (
        <>
          <div className="flex h-8 items-center gap-2 rounded-lg bg-white/[0.07] px-2.5">
            <Search size={11} className="text-white/40" />
            <div className="h-2 w-16 rounded bg-white/[0.12]" />
          </div>
          <div className="space-y-2.5">
            <Row w="70%" /> <Row w="55%" /> <Row w="80%" /> <Row w="60%" />
          </div>
        </>
      );
    case "extensions":
      return (
        <>
          {["ExampleSource", "MetaFetch", "SyncBridge", "QuickTools"].map((n, i) => (
            <div
              key={n}
              className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] p-2.5"
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  i === 0 ? "bg-rext-gradient" : "bg-white/[0.08]"
                }`}
              >
                <Puzzle size={12} className="text-white/80" />
              </div>
              <div className="flex-1">
                <p className="text-[9px] font-semibold text-white/85">{n}</p>
                <p className="text-[8px] text-white/40">v1.{i}.0</p>
              </div>
              <div className="rounded-full bg-rext-blue/20 px-2 py-0.5 text-[8px] font-semibold text-rext-blue">
                {i === 0 ? "Installed" : "Install"}
              </div>
            </div>
          ))}
        </>
      );
    case "library":
      return (
        <>
          <p className="text-[9px] font-semibold text-white/70">Saved</p>
          <div className="grid grid-cols-3 gap-2">
            <Tile /> <Tile /> <Tile /> <Tile /> <Tile /> <Tile />
          </div>
        </>
      );
    case "player":
      return (
        <>
          <div className="aspect-video rounded-xl bg-gradient-to-br from-rext-blue/40 to-rext-violet/40" />
          <div className="h-2 w-3/4 rounded bg-white/[0.16]" />
          <div className="h-2 w-1/2 rounded bg-white/[0.07]" />
          <div className="mt-1 h-1 rounded-full bg-white/[0.1]">
            <div className="h-1 w-2/5 rounded-full bg-rext-gradient" />
          </div>
          <div className="flex items-center justify-center gap-5 pt-1">
            <div className="h-6 w-6 rounded-full bg-white/[0.08]" />
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
              <Play size={12} className="ml-0.5 text-black" />
            </div>
            <div className="h-6 w-6 rounded-full bg-white/[0.08]" />
          </div>
        </>
      );
    case "settings":
      return (
        <>
          <p className="text-[9px] font-semibold text-white/70">Repositories</p>
          <div className="space-y-2">
            {["official.rext.app", "community.rext.app"].map((r) => (
              <div
                key={r}
                className="flex items-center justify-between rounded-lg bg-white/[0.04] p-2.5"
              >
                <span className="font-mono text-[8px] text-white/60">{r}</span>
                <Star size={9} className="text-rext-blue" />
              </div>
            ))}
          </div>
          <p className="text-[9px] font-semibold text-white/70">General</p>
          <div className="space-y-2.5">
            <Row w="45%" /> <Row w="60%" />
          </div>
        </>
      );
  }
}

/* ---------- the device ---------- */

const tabs = [
  { icon: Home, id: "home" },
  { icon: Search, id: "search" },
  { icon: Puzzle, id: "extensions" },
  { icon: Library, id: "library" },
  { icon: Settings, id: "settings" },
] as const;

export default function PhoneMockup({
  screen = "home",
  className = "",
}: {
  screen?: Screen;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[9/19] w-[260px] rounded-[2.6rem] bg-[#0A0B10] p-2 shadow-phone ${className}`}
      aria-hidden="true"
    >
      {/* notch */}
      <div className="absolute left-1/2 top-4 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

      <div className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-[#07080D]">
        {/* status / header */}
        <div className="flex items-center justify-between px-4 pb-2 pt-8">
          <div className="flex items-center gap-1.5">
            <Image
              src="/logos/rext-logo.png"
              alt=""
              width={14}
              height={14}
              className="rounded"
            />
            <span className="text-[10px] font-semibold text-white/85 capitalize">
              {screen}
            </span>
          </div>
          <Download size={10} className="text-white/40" />
        </div>

        {/* body */}
        <div className="flex-1 space-y-2.5 overflow-hidden px-3.5">
          <ScreenBody screen={screen} />
        </div>

        {/* tab bar */}
        <div className="flex items-center justify-around border-t border-white/[0.06] bg-black/40 px-2 py-3">
          {tabs.map((t) => (
            <t.icon
              key={t.id}
              size={14}
              className={t.id === screen ? "text-rext-blue" : "text-white/30"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
