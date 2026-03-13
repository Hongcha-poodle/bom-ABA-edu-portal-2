type SectionHeaderProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "contrast";
  compact?: boolean;
};

export function SectionHeader({
  title,
  eyebrow,
  description,
  align = "left",
  tone = "default",
  compact = false
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  const eyebrowTone = tone === "contrast" ? "text-white/72" : "text-[color:var(--primary)]";
  const titleTone = tone === "contrast" ? "text-white" : "text-[color:var(--foreground)]";
  const descriptionTone =
    tone === "contrast" ? "text-white/80" : "text-[color:var(--muted-foreground)]";

  return (
    <div className={`max-w-3xl ${compact ? "space-y-2" : "space-y-3"} ${alignment}`}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${eyebrowTone}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`display-font balance-text font-semibold ${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"} ${titleTone}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-7 ${descriptionTone}`}>
          {description}
        </p>
      )}
    </div>
  );
}
