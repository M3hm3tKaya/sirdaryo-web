"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Monitor, Shield, Sliders, FileText, Smartphone } from "lucide-react";

const tabs = [
  { icon: Monitor, title: "Gerçek Zamanlı Veri", desc: "Anlık veri akışı ve canlı dashboard'lar ile işletmenizi gerçek zamanlı izleyin. Gecikme olmadan kritik bilgilere erişin." },
  { icon: Shield, title: "Rol Bazlı Erişim", desc: "Kullanıcı bazlı yetkilendirme ve güvenlik. Her kullanıcı yalnızca yetkili olduğu verileri görür." },
  { icon: Sliders, title: "Özelleştirilebilir Widget", desc: "Drag & drop ile kendi dashboard'unuzu oluşturun. Her ekip kendi ihtiyacına göre özelleştirebilir." },
  { icon: FileText, title: "Otomatik Raporlama", desc: "Planlı rapor oluşturma ve otomatik dağıtım. PDF, Excel ve e-posta ile raporlama." },
  { icon: Smartphone, title: "Mobil Uyum", desc: "Her cihazdan erişilebilir responsive tasarım. Telefonunuzdan bile verilere ulaşın." },
];

export function PanelFeatures() {
  const [active, setActive] = useState(0);
  const ActiveIcon = tabs[active].icon;

  return (
    <section className="relative z-10 py-24 lg:py-32">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Özellikler
          </h2>
        </ScrollReveal>

        <div className="mx-auto max-w-4xl grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Tab list */}
          <div className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.title}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 whitespace-nowrap lg:whitespace-normal ${
                    i === active
                      ? "bg-[#F59E0B]/10 text-[#FBBF24] border-l-2 border-[#F59E0B]"
                      : "text-[#FFFBEB]/40 hover:text-[#FFFBEB]/70"
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {tab.title}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div className="rounded-2xl border border-[#F59E0B]/15 bg-[#231C10] p-8">
            <div className="mb-4 inline-flex rounded-xl bg-[#F59E0B]/10 p-3">
              <ActiveIcon className="h-10 w-10 text-[#FBBF24]" />
            </div>
            <h3 className="text-2xl font-display font-bold">{tabs[active].title}</h3>
            <p className="mt-3 text-base leading-relaxed text-[#FFFBEB]/60">{tabs[active].desc}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
