export type DocSection = {
  id: string;
  title: string;
  body: string[];
  code?: { filename: string; content: string };
};

export type Doc = {
  slug: string; // e.g. "getting-started/introduction"
  title: string;
  description: string;
  sections: DocSection[];
};

export type DocGroup = {
  title: string;
  items: { slug: string; title: string }[];
};

export const docs: Doc[] = [
  {
    slug: "getting-started/introduction",
    title: "Introduction",
    description: "What Rext is, how it's structured, and where to start.",
    sections: [
      {
        id: "what-is-rext",
        title: "What is Rext?",
        body: [
          "Rext is an extensible media platform for iOS. Instead of building every feature directly into the application, Rext provides a flexible extension ecosystem where developers create modules that expand the platform.",
          "The core app handles the experience: navigation, playback, your library, downloads, and settings. Extensions handle capability: where content comes from, how metadata is enriched, and which services Rext talks to.",
        ],
      },
      {
        id: "how-its-structured",
        title: "How it's structured",
        body: [
          "There are three layers. The app is the native Swift and SwiftUI shell you interact with. Repositories are curated indexes of extensions you choose to trust. Extensions are the installable modules themselves, executed inside a secure sandboxed runtime.",
          "Because these layers are separate, new functionality never requires an app update. Install an extension and the capability is live immediately.",
        ],
      },
      {
        id: "where-to-start",
        title: "Where to start",
        body: [
          "If you're a user, continue to Installing Rext. If you're a developer, jump to the Developer Guide to learn the SDK, manifest format, and runtime API.",
        ],
      },
    ],
  },
  {
    slug: "getting-started/installing-rext",
    title: "Installing Rext",
    description: "Get Rext running on your iPhone.",
    sections: [
      {
        id: "requirements",
        title: "Requirements",
        body: [
          "Rext requires iOS 16 or later. iPad and macOS support are on the roadmap.",
        ],
      },
      {
        id: "install",
        title: "Install the app",
        body: [
          "Download the latest release from the GitHub releases page and install it on your device. Each release ships with signed builds and full release notes.",
          "Once installed, open Rext. The onboarding flow will walk you through adding your first repository.",
        ],
      },
      {
        id: "updating",
        title: "Updating",
        body: [
          "App updates are published on GitHub. Extension updates are delivered through repositories and appear in the Extensions tab automatically — no app update needed.",
        ],
      },
    ],
  },
  {
    slug: "getting-started/adding-repositories",
    title: "Adding repositories",
    description: "Connect Rext to sources of extensions you trust.",
    sections: [
      {
        id: "what-is-a-repository",
        title: "What is a repository?",
        body: [
          "A repository is a hosted index of extensions: a JSON manifest that lists each extension, its version, and where to fetch it. You decide which repositories to trust — Rext never adds one without your action.",
        ],
      },
      {
        id: "adding",
        title: "Adding a repository",
        body: [
          "Open Settings → Repositories → Add Repository, then paste the repository URL. Rext validates the manifest and lists its extensions in the Extensions tab.",
        ],
        code: {
          filename: "repository.json",
          content: `{
  "name": "Official Rext Repository",
  "url": "https://repo.rext.app",
  "extensions": [
    {
      "id": "com.rext.example",
      "name": "Example",
      "version": "1.2.0",
      "download": "https://repo.rext.app/example-1.2.0.rextx"
    }
  ]
}`,
        },
      },
      {
        id: "managing",
        title: "Managing repositories",
        body: [
          "Repositories can be refreshed, disabled, or removed at any time from Settings. Removing a repository does not uninstall extensions you've already installed from it.",
        ],
      },
    ],
  },
  {
    slug: "getting-started/installing-extensions",
    title: "Installing extensions",
    description: "Add capability to Rext with one tap.",
    sections: [
      {
        id: "browse",
        title: "Browse",
        body: [
          "The Extensions tab lists everything available from your repositories, with name, developer, version, and a short description. Use categories and search to narrow the list.",
        ],
      },
      {
        id: "install",
        title: "Install",
        body: [
          "Tap Install on any extension. Rext downloads the package, verifies it against the repository manifest, and loads it into the secure runtime. The extension is active immediately.",
        ],
      },
      {
        id: "permissions",
        title: "Permissions & safety",
        body: [
          "Extensions run sandboxed: they cannot read your library, other extensions' data, or anything outside the APIs the runtime exposes. Network access is declared in the extension manifest and shown before install.",
        ],
      },
    ],
  },
  {
    slug: "user-guide/library",
    title: "Library",
    description: "Save, collect, and revisit your media.",
    sections: [
      {
        id: "saving",
        title: "Saving items",
        body: [
          "Tap the bookmark on any item to add it to your library. Saved items persist even if the extension that provided them is later removed.",
        ],
      },
      {
        id: "collections",
        title: "Collections",
        body: [
          "Group saved items into collections. Collections support custom names, cover art, and manual ordering.",
        ],
      },
    ],
  },
  {
    slug: "user-guide/downloads",
    title: "Downloads",
    description: "Take your media offline.",
    sections: [
      {
        id: "downloading",
        title: "Downloading",
        body: [
          "Any playable item can be downloaded for offline use from its detail page. Downloads run in the background and survive app restarts.",
        ],
      },
      {
        id: "storage",
        title: "Storage management",
        body: [
          "Settings → Storage shows space used per extension and per collection, with one-tap cleanup for watched or stale downloads.",
        ],
      },
    ],
  },
  {
    slug: "user-guide/organization",
    title: "Organization",
    description: "Tags, filters, and smart sorting.",
    sections: [
      {
        id: "tags",
        title: "Tags",
        body: [
          "Apply your own tags to anything in your library. Tags are searchable and can drive smart filters.",
        ],
      },
      {
        id: "filters",
        title: "Filters & sorting",
        body: [
          "Filter the library by source extension, tag, download state, or progress. Sort by recency, title, or manual order per collection.",
        ],
      },
    ],
  },
  {
    slug: "user-guide/settings",
    title: "Settings",
    description: "Repositories, appearance, and customization.",
    sections: [
      {
        id: "repositories",
        title: "Repositories",
        body: [
          "Add, refresh, disable, or remove repositories. See Adding repositories in Getting Started for details.",
        ],
      },
      {
        id: "appearance",
        title: "Appearance",
        body: [
          "Choose app icon, accent color, and layout density. Rext follows the system light/dark setting by default.",
        ],
      },
    ],
  },
  {
    slug: "developer-guide/creating-extensions",
    title: "Creating extensions",
    description: "From empty folder to installable extension.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "An extension is a bundle containing a manifest and your compiled module. The manifest declares identity and capabilities; the module implements the runtime API.",
        ],
      },
      {
        id: "scaffold",
        title: "Scaffold a project",
        body: [
          "The quickest start is the template repository, which includes a manifest, a working search implementation, and a build script that produces a .rextx package.",
        ],
        code: {
          filename: "ExampleExtension.swift",
          content: `extension ExampleExtension {

    let name = "Example"

    func search() {
        // implementation
    }

}`,
        },
      },
      {
        id: "test-locally",
        title: "Test locally",
        body: [
          "Enable Developer Mode in Rext settings to sideload a local .rextx package over your network and see logs from your extension in real time.",
        ],
      },
    ],
  },
  {
    slug: "developer-guide/sdk-overview",
    title: "SDK overview",
    description: "The APIs available to every extension.",
    sections: [
      {
        id: "surfaces",
        title: "API surfaces",
        body: [
          "The SDK exposes four surfaces. Search lets your extension respond to user queries. Metadata enriches items with details, artwork, and related content. Playback resolves an item into a playable stream. Library hooks let you react when users save or download your items.",
        ],
      },
      {
        id: "lifecycle",
        title: "Lifecycle",
        body: [
          "Extensions are loaded on demand and suspended when idle. Keep implementations stateless where possible; persistent state should use the scoped storage API.",
        ],
      },
    ],
  },
  {
    slug: "developer-guide/manifest-format",
    title: "Manifest format",
    description: "Every field in rext.json, explained.",
    sections: [
      {
        id: "structure",
        title: "Structure",
        body: [
          "The manifest is a JSON file at the root of your extension bundle. It declares identity, version, capabilities, and any network hosts your extension needs.",
        ],
        code: {
          filename: "rext.json",
          content: `{
  "id": "com.example.myextension",
  "name": "My Extension",
  "version": "1.0.0",
  "developer": "Your Name",
  "capabilities": ["search", "metadata", "playback"],
  "hosts": ["api.example.com"],
  "minRuntime": "1.0"
}`,
        },
      },
      {
        id: "versioning",
        title: "Versioning",
        body: [
          "Use semantic versioning. Repositories use the version field to surface updates to users; breaking runtime changes are gated by minRuntime.",
        ],
      },
    ],
  },
  {
    slug: "developer-guide/runtime-api",
    title: "Runtime API",
    description: "How extensions execute inside Rext.",
    sections: [
      {
        id: "sandbox",
        title: "The sandbox",
        body: [
          "Extensions run in an isolated runtime with no direct filesystem or device access. All I/O goes through capability-checked APIs: network requests are restricted to hosts declared in the manifest, and storage is scoped per extension.",
        ],
      },
      {
        id: "requests",
        title: "Handling requests",
        body: [
          "Rext invokes your extension with typed requests — a search query, a metadata lookup, a playback resolution — and expects typed responses. Long-running work should report progress so the UI stays responsive.",
        ],
      },
      {
        id: "errors",
        title: "Errors",
        body: [
          "Throw structured errors with a user-presentable message. Rext surfaces them inline and never crashes the host app because of an extension failure.",
        ],
      },
    ],
  },
  {
    slug: "developer-guide/publishing-extensions",
    title: "Publishing extensions",
    description: "Ship your extension to users through a repository.",
    sections: [
      {
        id: "package",
        title: "Package",
        body: [
          "Run the build script to produce a signed .rextx package. The package embeds your manifest and a checksum that repositories and clients verify on install.",
        ],
      },
      {
        id: "publish",
        title: "Publish to a repository",
        body: [
          "Host the package anywhere reachable by URL and add an entry to your repository manifest. To submit to the official repository, open a pull request against the repository index on GitHub — submissions are reviewed for safety and manifest correctness.",
        ],
      },
      {
        id: "updates",
        title: "Shipping updates",
        body: [
          "Bump the version in your manifest, rebuild, and update the repository entry. Users see the update in their Extensions tab within the next repository refresh.",
        ],
      },
    ],
  },
];

export const docGroups: DocGroup[] = [
  {
    title: "Getting Started",
    items: [
      { slug: "getting-started/introduction", title: "Introduction" },
      { slug: "getting-started/installing-rext", title: "Installing Rext" },
      { slug: "getting-started/adding-repositories", title: "Adding repositories" },
      { slug: "getting-started/installing-extensions", title: "Installing extensions" },
    ],
  },
  {
    title: "User Guide",
    items: [
      { slug: "user-guide/library", title: "Library" },
      { slug: "user-guide/downloads", title: "Downloads" },
      { slug: "user-guide/organization", title: "Organization" },
      { slug: "user-guide/settings", title: "Settings" },
    ],
  },
  {
    title: "Developer Guide",
    items: [
      { slug: "developer-guide/creating-extensions", title: "Creating extensions" },
      { slug: "developer-guide/sdk-overview", title: "SDK overview" },
      { slug: "developer-guide/manifest-format", title: "Manifest format" },
      { slug: "developer-guide/runtime-api", title: "Runtime API" },
      { slug: "developer-guide/publishing-extensions", title: "Publishing extensions" },
    ],
  },
];

export function getDoc(slug: string): Doc | undefined {
  return docs.find((d) => d.slug === slug);
}

export function getAdjacentDocs(slug: string): {
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
} {
  const flat = docGroups.flatMap((g) => g.items);
  const i = flat.findIndex((d) => d.slug === slug);
  return {
    prev: i > 0 ? flat[i - 1] : undefined,
    next: i >= 0 && i < flat.length - 1 ? flat[i + 1] : undefined,
  };
}
