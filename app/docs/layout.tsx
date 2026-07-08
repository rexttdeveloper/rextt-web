import type { Metadata } from "next";
import DocumentationSidebar from "@/components/DocumentationSidebar";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Guides for using Rext and building extensions with the Rext SDK.",
};

export default function DocsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="wrap grid gap-10 pb-24 pt-28 lg:grid-cols-[220px_minmax(0,1fr)]">
      <DocumentationSidebar />
      {children}
    </div>
  );
}
