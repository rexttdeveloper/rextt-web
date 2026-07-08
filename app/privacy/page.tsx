import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Terms",
  description: "How Rext handles your data, and the terms of use.",
};

export default function PrivacyPage() {
  return (
    <div className="wrap max-w-3xl pb-24 pt-32">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
        Privacy & Terms
      </h1>
      <p className="mt-3 text-sm text-faint">Last updated: July 2026</p>

      <div className="mt-12 space-y-12">
        <section id="privacy" className="scroll-mt-28">
          <h2 className="font-display text-2xl font-semibold">Privacy Policy</h2>

          <h3 className="mt-6 font-display text-lg font-semibold">Data we collect</h3>
          <p className="mt-2 leading-relaxed text-muted">
            None. Rext does not operate accounts, analytics, or tracking. Your
            library, settings, downloads, and repository list live on your
            device.
          </p>

          <h3 className="mt-6 font-display text-lg font-semibold">Extensions and network access</h3>
          <p className="mt-2 leading-relaxed text-muted">
            Extensions may connect to the network hosts declared in their
            manifest to fetch content and metadata. Those connections go
            directly from your device to the third-party service — Rext does
            not proxy, log, or inspect them. Review an extension's declared
            hosts before installing, and only add repositories you trust.
          </p>

          <h3 className="mt-6 font-display text-lg font-semibold">This website</h3>
          <p className="mt-2 leading-relaxed text-muted">
            This site sets no cookies and runs no third-party trackers. Standard
            server logs may be retained briefly by the hosting provider for
            security and reliability.
          </p>
        </section>

        <section id="terms" className="scroll-mt-28">
          <h2 className="font-display text-2xl font-semibold">Terms of Use</h2>

          <h3 className="mt-6 font-display text-lg font-semibold">The software</h3>
          <p className="mt-2 leading-relaxed text-muted">
            Rext is open-source software provided "as is", without warranty of
            any kind. The full license is available in the GitHub repository.
          </p>

          <h3 className="mt-6 font-display text-lg font-semibold">Extensions</h3>
          <p className="mt-2 leading-relaxed text-muted">
            Extensions are created by third-party developers. You are
            responsible for the repositories you add, the extensions you
            install, and your use of the content they provide. Use Rext and its
            extensions only in ways that comply with the laws of your
            jurisdiction and the terms of the services you access.
          </p>

          <h3 className="mt-6 font-display text-lg font-semibold">Changes</h3>
          <p className="mt-2 leading-relaxed text-muted">
            These terms may be updated as the project evolves. Material changes
            will be noted in the repository changelog.
          </p>
        </section>
      </div>
    </div>
  );
}
