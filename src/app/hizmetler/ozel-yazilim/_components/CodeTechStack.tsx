"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const row1 = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "Redis", "Docker", "Kafka", "Elasticsearch",
];

const row2 = [
  "GraphQL", "Tailwind", "Prisma", "MongoDB", "Kubernetes",
  "Go", "Rust", "Firebase", "Terraform", "AWS",
];

function MarqueeRow({ items, direction, speed }: { items: string[]; direction: "left" | "right"; speed: number }) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#1A0A0A] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#1A0A0A] to-transparent" />

      <div
        className="flex w-max gap-4"
        style={{ animation: `marquee-${direction} ${speed}s linear infinite` }}
      >
        {repeated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 cursor-default select-none whitespace-nowrap rounded-full border border-white/15 bg-[#1A0A0A] px-6 py-2.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-[#FF3B30]/60 hover:text-white hover:shadow-[0_0_15px_rgba(255,59,48,0.2)] hover:bg-[#FF3B30]/5"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CodeTechStack() {
  return (
    <section className="relative z-10 py-12 lg:py-16 bg-[#1A0A0A] overflow-hidden">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-4 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl text-[#FEF2F2]">
            Teknoloji Yığınımız
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-center text-white/50">
            Projenizin ihtiyacına en uygun teknolojiyi seçiyor, en güncel araçlarla geliştiriyoruz.
          </p>
        </ScrollReveal>
      </Container>

      <div className="space-y-3">
        <MarqueeRow items={row1} direction="left" speed={35} />
        <MarqueeRow items={row2} direction="right" speed={40} />
      </div>
    </section>
  );
}
