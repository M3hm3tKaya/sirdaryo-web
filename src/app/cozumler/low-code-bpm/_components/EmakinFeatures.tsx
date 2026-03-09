"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MousePointerClick, FileText, Workflow, BarChart3, Cloud, Link2, ShieldCheck, Blocks } from "lucide-react";

const features = [
  {
    icon: MousePointerClick,
    title: "Sürükle-Bırak Tasarım",
    desc: "Kod yazmadan süreç akışlarını görsel olarak tasarlayın. İş birimleriniz kendi süreçlerini modelleyebilir.",
  },
  {
    icon: FileText,
    title: "Dinamik Form Oluşturma",
    desc: "Formlarınızı sürükle-bırak ile oluşturun, koşullu alanlar ve doğrulama kuralları ekleyin.",
  },
  {
    icon: Workflow,
    title: "İş Akışı Otomasyonu",
    desc: "Onay süreçleri, yönlendirmeler ve otomatik tetikleyicilerle süreçlerinizi uçtan uca otomatize edin.",
  },
  {
    icon: BarChart3,
    title: "Gelişmiş Raporlama",
    desc: "Süreç performansını gerçek zamanlı izleyin, darboğazları tespit edin ve veriye dayalı kararlar alın.",
  },
  {
    icon: Cloud,
    title: "Esnek Mimari",
    desc: "Bulut, on-premise veya hibrit altyapıda çalışın. Kurumunuzun güvenlik politikalarına tam uyum.",
  },
  {
    icon: Link2,
    title: "Güçlü Entegrasyon",
    desc: "ERP, CRM, e-posta ve üçüncü parti sistemlerle sorunsuz entegrasyon. API desteği ile sınırsız bağlantı.",
  },
  {
    icon: ShieldCheck,
    title: "Yetkilendirme & Denetim",
    desc: "Rol bazlı erişim kontrolü, detaylı denetim kayıtları ve uyumluluk raporlaması.",
  },
  {
    icon: Blocks,
    title: "Low-Code Yaklaşım",
    desc: "BT bağımlılığını azaltın. İş birimleri süreçleri hızla hayata geçirsin, IT ekibi stratejik projelere odaklansın.",
  },
];

export function EmakinFeatures() {
  return (
    <section className="relative z-10 py-24 lg:py-32">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-16 text-center font-display text-4xl font-bold sm:text-5xl">
            Platform Yetenekleri
          </h2>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <ScrollReveal key={feat.title} animation="fade-up" delay={i * 0.06}>
                <div className="group relative h-full rounded-2xl border border-[#F97316]/15 bg-[#1A130A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/40 hover:shadow-[0_0_25px_rgba(249,115,22,0.1)]">
                  <div className="rounded-lg bg-[#F97316]/10 p-2 inline-flex mb-4">
                    <Icon className="h-7 w-7 text-[#F97316]" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{feat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#FFF7ED]/50">{feat.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
