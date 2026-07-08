import type { LucideIcon } from "lucide-react";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="card group">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-strong bg-surface-2 transition-colors group-hover:border-rext-indigo/50">
        <Icon size={19} className="text-rext-blue" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
