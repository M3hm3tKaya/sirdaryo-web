"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { useCursor } from "@/lib/CursorContext";
import { COMPANY } from "@/lib/constants";
import { Mail, MapPin, Clock, Phone, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Ad Soyad en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Bir hizmet seçiniz"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

export default function IletisimPage() {
  const [submitted, setSubmitted] = useState(false);

  const { setColor } = useCursor();

  useEffect(() => {
    setColor("#FF3B30");
    return () => setColor("#FF3B30");
  }, [setColor]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { honeypot: "" },
  });

  async function onSubmit(data: FormData) {
    if (data.honeypot) return;

    // TODO: Replace with actual API endpoint
    console.log("Form data:", data);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-brand-black pt-32 pb-16 lg:pt-40 lg:pb-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge color="coral" className="mb-6">
              İletişim
            </Badge>
            <TextReveal
              text="Bizimle İletişime Geçin"
              as="h1"
              className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
            />
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="mt-6 text-lg text-white/50">
                Projeleriniz hakkında konuşmak için bize ulaşın. İlk görüşme ücretsizdir.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-brand-black pb-24 lg:pb-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <ScrollReveal animation="fade-up">
                {submitted ? (
                  <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-brand-off-black p-12 text-center">
                    <CheckCircle className="h-16 w-16 text-brand-lime" />
                    <h3 className="mt-6 text-2xl font-display font-bold">
                      Mesajınız Gönderildi!
                    </h3>
                    <p className="mt-2 text-white/50">
                      En kısa sürede size döneceğiz. Teşekkür ederiz.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6 rounded-2xl border border-white/10 bg-brand-off-black p-8"
                  >
                    <div className="hidden" aria-hidden="true">
                      <input {...register("honeypot")} tabIndex={-1} autoComplete="off" />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Input
                        label="Ad Soyad"
                        placeholder="Adınız Soyadınız"
                        required
                        {...register("name")}
                        error={errors.name?.message}
                      />
                      <Input
                        label="E-posta"
                        type="email"
                        placeholder="ornek@sirket.com"
                        required
                        {...register("email")}
                        error={errors.email?.message}
                      />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Input
                        label="Telefon"
                        type="tel"
                        placeholder="+90 5XX XXX XX XX"
                        {...register("phone")}
                      />
                      <Input
                        label="Firma Adı"
                        placeholder="Firma adınız"
                        {...register("company")}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-white/70">
                        Hizmet <span className="text-brand-coral">*</span>
                      </label>
                      <select
                        {...register("service")}
                        className="w-full rounded-lg border border-white/10 bg-[#0A0A0A] px-4 py-3 text-white transition-all duration-300 focus:border-brand-coral focus:outline-none focus:ring-1 focus:ring-brand-coral/50 [&>option]:bg-[#0A0A0A] [&>option]:text-white"
                        defaultValue=""
                      >
                        <option value="" disabled className="text-white/50">Seçim yapınız</option>
                        <option value="rpa">RPA</option>
                        <option value="bpm">BPM</option>
                        <option value="optimizasyon">Optimizasyon</option>
                        <option value="yonetim-paneli">Yönetim Paneli</option>
                        <option value="ozel-yazilim">Özel Yazılım</option>
                        <option value="diger">Diğer</option>
                      </select>
                      {errors.service && (
                        <p className="text-sm text-brand-coral">{errors.service.message}</p>
                      )}
                    </div>

                    <Textarea
                      label="Mesajınız"
                      placeholder="Projeniz hakkında kısa bilgi verin..."
                      required
                      {...register("message")}
                      error={errors.message?.message}
                    />

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönderin"}
                    </Button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2">
              <ScrollReveal animation="fade-up" delay={0.2}>
                <div className="rounded-2xl border border-white/10 bg-brand-off-black p-8">
                  <h3 className="text-xl font-display font-bold">İletişim Bilgileri</h3>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-coral" />
                      <div>
                        <p className="text-sm font-medium">Adres</p>
                        <p className="text-sm text-white/50">{COMPANY.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-coral" />
                      <div>
                        <p className="text-sm font-medium">Telefon</p>
                        <a
                          href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                          className="text-sm text-white/50 transition-colors hover:text-white"
                        >
                          {COMPANY.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-coral" />
                      <div>
                        <p className="text-sm font-medium">E-posta</p>
                        <a
                          href={`mailto:${COMPANY.email}`}
                          className="text-sm text-white/50 transition-colors hover:text-white"
                        >
                          {COMPANY.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-coral" />
                      <div>
                        <p className="text-sm font-medium">Çalışma Saatleri</p>
                        <p className="text-sm text-white/50">{COMPANY.workingHours}</p>
                        <p className="text-sm text-white/50">{COMPANY.supportHours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
