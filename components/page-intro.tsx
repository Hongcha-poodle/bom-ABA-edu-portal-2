import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  meta?: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
  meta,
  className,
  narrow = false
}: PageIntroProps) {
  return (
    <section className={["page-intro", className].filter(Boolean).join(" ")}>
      <div className={narrow ? "page-intro__inner narrow-reading-width" : "page-intro__inner"}>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="page-title">{title}</h1>
        <p className="page-description">{description}</p>
        {actions ? <div className="intro-actions">{actions}</div> : null}
        {meta ? <div className="meta-row">{meta}</div> : null}
      </div>
    </section>
  );
}
