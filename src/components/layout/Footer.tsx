import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";
import { Mail, MapPin, Clock } from "lucide-react";

const serviceLinks = [
  { label: "RPA", href: "/hizmetler/rpa" },
  { label: "BPMN", href: "/hizmetler/bpmn" },
  { label: "Optimizasyon", href: "/hizmetler/optimizasyon" },
  { label: "Yönetim Paneli", href: "/hizmetler/yonetim-paneli" },
  { label: "Özel Yazılım", href: "/hizmetler/ozel-yazilim" },
];

const companyLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-black pt-16 pb-8">
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
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/30">
              Hizmetler
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/30">
              Şirket
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/30">
              İletişim
            </h4>
            <div className="space-y-2 text-sm text-white/50">
              <p>{COMPANY.email}</p>
              <p>{COMPANY.supportHours}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {COMPANY.shortName}. Tüm hakları saklıdır.
          </p>
          <Link
            href="/kvkk"
            className="mt-2 text-xs text-white/30 transition-colors hover:text-white sm:mt-0"
          >
            KVKK Aydınlatma Metni
          </Link>
        </div>
      </Container>
    </footer>
  );
}
