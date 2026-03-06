"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";

const accentColorMap: Record<string, string> = {
  violet: "text-brand-violet",
  cyan: "text-brand-cyan",
  lime: "text-brand-lime",
  amber: "text-brand-amber",
  coral: "text-brand-coral",
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo variant="light" />

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white">
                  {link.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 rounded-xl border border-white/10 bg-brand-off-black/95 p-3 backdrop-blur-xl"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${
                              child.color === "violet"
                                ? "bg-brand-violet"
                                : child.color === "cyan"
                                  ? "bg-brand-cyan"
                                  : child.color === "lime"
                                    ? "bg-brand-lime"
                                    : child.color === "amber"
                                      ? "bg-brand-amber"
                                      : "bg-brand-coral"
                            }`}
                          />
                          <span className="text-sm text-white/80 hover:text-white">
                            {child.label}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-white ${
                  pathname === link.href ? "text-white" : "text-white/70"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:block">
          <Button href="/iletisim" size="sm">
            İletişim
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-[70] lg:hidden"
          aria-label="Menü"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#000000] lg:hidden"
            style={{ minHeight: "100dvh" }}
          >
            <div className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.children ? (
                    <div className="flex flex-col items-center gap-3">
                      <span className="text-2xl font-display font-bold text-white">
                        {link.label}
                      </span>
                      <div className="flex flex-col items-center gap-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`text-base ${accentColorMap[child.color] || "text-white/60"}`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-2xl font-display font-bold text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 }}
              >
                <Button href="/iletisim" size="lg" className="mt-4">
                  İletişim
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
