import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Sirdaryo blog - Dijital dönüşüm, RPA, BPMN ve yazılım hakkında yazılar.",
};

export default function BlogPage() {
  return (
    <section className="bg-brand-black pt-32 pb-24 lg:pt-40 lg:pb-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge color="violet" className="mb-6">
            Blog
          </Badge>
          <TextReveal
            text="Yazılar ve İçerikler"
            as="h1"
            className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
          />
          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="mt-6 text-lg text-white/50">
              Dijital dönüşüm, RPA, BPMN ve yazılım dünyasından güncel yazılar.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-up" delay={0.3}>
          <div className="mx-auto mt-16 max-w-lg rounded-2xl border border-white/10 bg-brand-off-black p-12 text-center">
            <p className="text-white/40">
              Blog yazılarımız çok yakında burada olacak. Takipte kalın!
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
