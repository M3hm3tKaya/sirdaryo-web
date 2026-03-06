"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GitCommit } from "lucide-react";

const commits = [
  { hash: "a3f2c1d", message: "feat: İhtiyaç analizi ve proje planlaması", desc: "Gereksinim toplama, kullanıcı hikayeleri, teknik mimari kararları ve proje yol haritası oluşturma.", branch: "main", time: "Sprint 1" },
  { hash: "b7e4f2a", message: "feat: UI/UX tasarım ve prototipleme", desc: "Wireframe, mockup ve interaktif prototip tasarımı. Kullanıcı testleri ile doğrulama.", branch: "design", time: "Sprint 2" },
  { hash: "c9d1e3b", message: "feat: Backend & API geliştirme", desc: "Veritabanı tasarımı, API endpoint'leri, iş mantığı ve güvenlik katmanlarının kodlanması.", branch: "develop", time: "Sprint 3-4" },
  { hash: "d2a5f4c", message: "feat: Frontend geliştirme", desc: "Responsive arayüz geliştirme, state management ve API entegrasyonu.", branch: "develop", time: "Sprint 4-5" },
  { hash: "e6b3c7d", message: "test: Kapsamlı test ve QA", desc: "Birim testler, entegrasyon testleri, performans ve güvenlik testleri.", branch: "release", time: "Sprint 6" },
  { hash: "f8c2d1e", message: "deploy: Canlıya geçiş ve destek", desc: "Production deployment, monitoring kurulumu ve sürekli bakım & destek.", branch: "main", time: "Sprint 7" },
];

const branchColors: Record<string, string> = {
  main: "#FF3B30",
  design: "#FBBF24",
  develop: "#34D399",
  release: "#60A5FA",
};

export function CodeProcess() {
  return (
    <section className="relative z-10 py-24 lg:py-32 bg-[#231010]">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Geliştirme Süreci
          </h2>
        </ScrollReveal>

        <div className="mx-auto max-w-2xl">
          <div className="relative border-l-2 border-[#FF3B30]/20 pl-8">
            {commits.map((commit, i) => (
              <ScrollReveal key={commit.hash} animation="fade-up" delay={i * 0.1}>
                <div className="relative mb-10 last:mb-0">
                  {/* Commit dot */}
                  <div className="absolute -left-[calc(2rem+5px)] top-1">
                    <GitCommit className="h-3.5 w-3.5 text-[#FF3B30]" />
                  </div>

                  {/* Commit info */}
                  <div className="rounded-xl border border-[#FF3B30]/10 bg-[#1A0A0A] p-5 transition-all duration-300 hover:border-[#FF3B30]/25">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-[#FF6B6B]">{commit.hash}</span>
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                        style={{
                          backgroundColor: `${branchColors[commit.branch]}20`,
                          color: branchColors[commit.branch],
                        }}
                      >
                        {commit.branch}
                      </span>
                      <span className="ml-auto text-xs text-[#FEF2F2]/30">{commit.time}</span>
                    </div>
                    <h3 className="font-mono text-sm font-bold text-[#FCA5A5]">{commit.message}</h3>
                    <p className="mt-2 text-sm text-[#FEF2F2]/50">{commit.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
