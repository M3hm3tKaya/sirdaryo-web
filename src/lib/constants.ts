export const COMPANY = {
  name: "Sirdaryo Danışmanlık ve Bilişim Hizmetleri A.Ş.",
  shortName: "Sirdaryo",
  address: "Barbaros Mh. Mustafa Pehlivan Sk. 1/2, 34662 Üsküdar/İstanbul",
  email: "bilgi@sirdaryo.com",
  phone: "+90 536 451 66 33",
  workingHours: "Pazartesi–Cuma, 09:00–18:00",
  supportHours: "7/24 iletişim desteği",
  mapCoords: { lat: 41.0255, lng: 29.0155 },
} as const;

export type AccentColor = "coral" | "violet" | "lime" | "amber" | "cyan" | "orange";

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; color: AccentColor }[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Çözümler",
    href: "/hizmetler",
    children: [
      { label: "RPA", href: "/hizmetler/rpa", color: "violet" },
      { label: "Low-Code BPM", href: "/hizmetler/low-code-bpm", color: "orange" },
      { label: "Optimizasyon", href: "/hizmetler/optimizasyon", color: "lime" },
      { label: "Yönetim Paneli", href: "/hizmetler/yonetim-paneli", color: "amber" },
      { label: "Özel Yazılım", href: "/hizmetler/ozel-yazilim", color: "coral" },
    ],
  },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Blog", href: "/blog" },
];

export const ACCENT_COLORS = {
  coral: { hex: "#FF3B30", tw: "brand-coral" },
  violet: { hex: "#8B5CF6", tw: "brand-violet" },
  lime: { hex: "#84CC16", tw: "brand-lime" },
  amber: { hex: "#F59E0B", tw: "brand-amber" },
  cyan: { hex: "#06B6D4", tw: "brand-cyan" },
  orange: { hex: "#F97316", tw: "brand-orange" },
} as const;
