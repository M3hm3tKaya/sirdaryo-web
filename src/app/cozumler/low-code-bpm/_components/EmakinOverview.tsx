"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function EmakinOverview() {
  return (
    <section className="relative z-10 py-24 lg:py-32 bg-[#1A130A]">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-4 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Emakin Nedir?
          </h2>
          <p className="mx-auto mb-16 max-w-lg text-center text-[#FFF7ED]/50">
            Kurumsal iş süreçleri yönetimi ve otomasyon platformu
          </p>
        </ScrollReveal>

        <div className="mx-auto max-w-4xl space-y-8">
          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="rounded-2xl border border-[#F97316]/15 bg-[#231A10] p-8 lg:p-10">
              <p className="text-lg leading-relaxed text-[#FFF7ED]/80">
                2010 yılında kullanım kolaylığı, erişilebilirlik ve esneklik odağıyla kurulan Emakin; kurumların iş süreçlerini karmaşık BPM sistemleriyle uğraşmadan dijitalleştirmesini ve otomatikleştirmesini sağlayan bir low-code BPM (Business Process Management) platformudur. Yoğun Ar-Ge çalışmaları sonucunda geliştirilen Emakin BPM; sürükle-bırak süreç tasarımı, dinamik form oluşturma, iş akışı otomasyonu ve gelişmiş raporlama yetkinlikleriyle öne çıkar.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="rounded-2xl border border-[#F97316]/15 bg-[#231A10] p-8 lg:p-10">
              <p className="text-lg leading-relaxed text-[#FFF7ED]/80">
                Emakin platformu, bulut, şirket içi (on-premise) ve hibrit mimarilerde çalışabilen yapısı sayesinde farklı kurumsal ihtiyaçlara kolayca uyum sağlar. Güçlü entegrasyon kabiliyetleri ile gelişmiş yetkilendirme ve denetim mekanizmaları, kurumlara uçtan uca süreç görünürlüğü ve kontrol imkânı sunar. Low-code yaklaşımı sayesinde iş birimlerinin BT bağımlılığı azalırken, süreçlerin hızlı bir şekilde hayata geçirilmesi mümkün hale gelir.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.3}>
            <div className="rounded-2xl border border-[#F97316]/15 bg-[#231A10] p-8 lg:p-10">
              <p className="text-lg leading-relaxed text-[#FFF7ED]/80">
                Bankacılık, finans, sigortacılık, üretim ve operasyonel alanlar başta olmak üzere birçok sektörde öncü kurumlar tarafından tercih edilen Emakin; iş süreçlerini sadeleştirerek verimlilik, şeffaflık ve ölçülebilir performans artışı sağlamayı hedefler.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.4}>
            <div className="rounded-2xl border border-[#F97316]/15 bg-[#231A10] p-8 lg:p-10">
              <p className="text-lg leading-relaxed text-[#FFF7ED]/80">
                Merkez ofisi İstanbul&apos;da bulunan Emakin, Türkiye&apos;deki operasyonlarını buradan yürütmektedir. İrlanda / Dublin ofisi aracılığıyla Avrupa ve Orta Doğu pazarlarında da aktif olarak faaliyet göstermektedir. Uluslararası vizyonu, ölçeklenebilir teknolojisi ve deneyimli ekibiyle Emakin, kurumların dijital dönüşüm yolculuğunda güvenilir bir teknoloji iş ortağıdır.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
