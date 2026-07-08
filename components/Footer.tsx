import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Extensions", href: "/extensions" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Download", href: "/#download" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Developer Guide", href: "/docs/developer-guide/creating-extensions" },
      { label: "SDK Overview", href: "/docs/developer-guide/sdk-overview" },
      { label: "GitHub", href: "https://github.com/rexttdeveloper", external: true },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Reddit", href: "https://reddit.com/r/rext", external: true },
      { label: "Discord", href: "https://discord.gg/rext", external: true },
      { label: "Contribute", href: "/developers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/privacy#terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="wrap py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logos/rext-logo.png"
                alt="Rext logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-display text-lg font-semibold">Rext</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              The extensible media platform for iOS. Built in the open, powered
              by the community.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-faint">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) =>
                  "external" in link && link.external ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Rext. Open source, community driven.</p>
          <p className="font-mono">One App. Infinite Possibilities.</p>
        </div>
      </div>
    </footer>
  );
}
