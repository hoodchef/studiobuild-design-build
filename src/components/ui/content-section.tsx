import { ReactNode } from "react";

type ContentSectionProps = {
  title: string;
  children: ReactNode;
};

export function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <section className="border-b border-[var(--line)]">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-12 md:grid-cols-[240px_1fr] md:py-16">
        <h2 className="font-[family-name:var(--font-label)] text-sm uppercase tracking-[0.16em] text-[var(--ink)]">
          {title}
        </h2>
        <div className="space-y-4 text-[15px] leading-8 text-[var(--ink-soft)] md:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}
