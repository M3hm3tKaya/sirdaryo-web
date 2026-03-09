import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { CursorProvider } from "@/lib/CursorContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/animations/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sirdaryo | RPA, BPM & Yazılım Çözümleri",
    template: "%s | Sirdaryo",
  },
  description:
    "Sirdaryo Danışmanlık ve Bilişim Hizmetleri - RPA, BPM, Optimizasyon, Yönetim Paneli ve Özel Yazılım çözümleri ile işletmenizi dijitalleştirin.",
  metadataBase: new URL("https://sirdaryo.com"),
  icons: {
    icon: "/sirdaryo-S.svg",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://sirdaryo.com",
    siteName: "Sirdaryo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <CursorProvider>
          <LenisProvider>
            <CustomCursor />
            <Header />
            <main>{children}</main>
            <Footer />
          </LenisProvider>
        </CursorProvider>
      </body>
    </html>
  );
}
