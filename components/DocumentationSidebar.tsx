"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { docGroups } from "@/lib/docs";

export default function DocumentationSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = (
    <nav aria-label="Documentation" className="space-y-7">
      {docGroups.map((group) => (
        <div key={group.title}>
          <h3 className="font-mono text-[11px] uppercase tracking-widest text-faint">
            {group.title}
          </h3>
          <ul className="mt-3 space-y-0.5 border-l border-line">
            {group.items.map((item) => {
              const href = `/docs/${item.slug}`;
              const active = pathname === href;
              return (
                <li key={item.slug}>
                  <Link
                    href={href}
                    className={`-ml-px block border-l py-1.5 pl-4 text-sm transition-colors ${
                      active
                        ? "border-rext-blue font-medium text-ink"
                        : "border-transparent text-muted hover:border-line-strong hover:text-ink"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* mobile toggle */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between rounded-xl border border-line bg-surface px-4 py-3 text-sm font-medium"
        >
          Documentation menu
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="mt-3 rounded-xl border border-line bg-surface p-5">
            {nav}
          </div>
        )}
      </div>

      {/* desktop sidebar */}
      <aside className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto pb-10 pr-4 lg:block">
        {nav}
      </aside>
    </>
  );
}
