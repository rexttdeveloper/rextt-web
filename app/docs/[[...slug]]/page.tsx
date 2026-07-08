import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, Code2, User } from "lucide-react";
import { docs, docGroups, getDoc, getAdjacentDocs } from "@/lib/docs";

type Params = Promise<{ slug?: string[] }>;

export function generateStaticParams() {
  return docs.map((d) => ({ slug: d.slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  if (!slug || slug.length === 0) {
    return { title: "Documentation" };
  }
  const doc = getDoc(slug.join("/"));
  if (!doc) return { title: "Documentation" };
  return { title: doc.title, description: doc.description };
}

function CodeBlock({ filename, content }: { filename: string; content: string }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-line-strong bg-[#0A0B12]">
      <div className="border-b border-line px-4 py-2.5 font-mono text-xs text-faint">
        {filename}
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-ink/90">
        <code>{content}</code>
      </pre>
    </div>
  );
}

function DocsIndex() {
  const groupIcons = [BookOpen, User, Code2];
  return (
    <div className="min-w-0">
      <p className="eyebrow">Documentation</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">
        Learn Rext.
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        Everything you need to use Rext and build for it — from your first
        install to publishing an extension.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {docGroups.map((group, gi) => {
          const Icon = groupIcons[gi] ?? BookOpen;
          return (
            <div key={group.title} className="card">
              <Icon size={20} className="text-rext-blue" />
              <h2 className="mt-4 font-display text-lg font-semibold">
                {group.title}
              </h2>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/docs/${item.slug}`}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default async function DocsPage({ params }: { params: Params }) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return <DocsIndex />;
  }

  const doc = getDoc(slug.join("/"));
  if (!doc) notFound();

  const { prev, next } = getAdjacentDocs(doc.slug);

  return (
    <div className="grid min-w-0 gap-10 xl:grid-cols-[minmax(0,1fr)_200px]">
      {/* main content */}
      <article className="min-w-0">
        <p className="eyebrow">
          {doc.slug.split("/")[0].replace(/-/g, " ")}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">
          {doc.title}
        </h1>
        <p className="mt-3 text-lg text-muted">{doc.description}</p>

        <div className="mt-10 space-y-12">
          {doc.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                {section.title}
              </h2>
              {section.body.map((para, i) => (
                <p key={i} className="mt-4 leading-relaxed text-muted">
                  {para}
                </p>
              ))}
              {section.code && <CodeBlock {...section.code} />}
            </section>
          ))}
        </div>

        {/* prev / next */}
        <nav className="mt-16 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:justify-between">
          {prev ? (
            <Link
              href={`/docs/${prev.slug}`}
              className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
              {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/docs/${next.slug}`}
              className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink sm:ml-auto"
            >
              {next.title}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </nav>
      </article>

      {/* right table of contents */}
      <aside className="sticky top-24 hidden max-h-[calc(100vh-8rem)] self-start overflow-y-auto xl:block">
        <h3 className="font-mono text-[11px] uppercase tracking-widest text-faint">
          On this page
        </h3>
        <ul className="mt-3 space-y-2 border-l border-line">
          {doc.sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="-ml-px block border-l border-transparent py-0.5 pl-4 text-sm text-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
