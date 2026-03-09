"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { useCursor } from "@/lib/CursorContext";
import { COMPANY } from "@/lib/constants";
import { Mail, MapPin, Clock, Phone } from "lucide-react";

const serviceLinks = [
  { label: "RPA", href: "/hizmetler/rpa", hoverColor: "hover:text-brand-violet" },
  { label: "Low-Code BPM", href: "/hizmetler/low-code-bpm", hoverColor: "hover:text-[#F97316]" },
  { label: "Optimizasyon", href: "/hizmetler/optimizasyon", hoverColor: "hover:text-brand-lime" },
  { label: "Yönetim Paneli", href: "/hizmetler/yonetim-paneli", hoverColor: "hover:text-brand-amber" },
  { label: "Özel Yazılım", href: "/hizmetler/ozel-yazilim", hoverColor: "hover:text-brand-coral" },
];

const companyLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export function Footer() {
  const { setColor } = useCursor();

  return (
    <footer
      className="border-t border-white/10 bg-brand-black pt-20 pb-8"
      onMouseEnter={() => setColor("#FFFFFF")}
    >
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Logo variant="light" className="!w-[420px] sm:!w-[480px]" />
            <div className="space-y-3 text-sm text-white/50">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>{COMPANY.workingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Çözümler
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm text-white/60 transition-colors duration-200 ${link.hoverColor}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Şirket
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              İletişim
            </h4>
            <div className="space-y-2 text-sm text-white/50">
              <p>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-white">
                  {COMPANY.phone}
                </a>
              </p>
              <p>{COMPANY.email}</p>
              <p>{COMPANY.supportHours}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {COMPANY.shortName}. Tüm hakları saklıdır.
          </p>
          <Link
            href="/kvkk"
            className="mt-2 text-xs text-white/40 transition-colors hover:text-white sm:mt-0"
          >
            KVKK Aydınlatma Metni
          </Link>
        </div>
      </Container>
    </footer>
  );
}
