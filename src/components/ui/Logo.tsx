"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  linkToHome?: boolean;
}

export function Logo({
  variant = "light",
  className = "",
  linkToHome = true,
}: LogoProps) {
  const logo = (
    <Image
      src="/sirdaryo-vector-final.svg"
      alt="Sirdaryo"
      width={140}
      height={46}
      priority
      className={`h-auto w-[280px] sm:w-[340px] ${variant === "light" ? "invert" : ""} ${className}`}
    />
  );

  if (linkToHome) {
    return (
      <Link href="/" className="inline-flex items-center">
        {logo}
      </Link>
    );
  }

  return logo;
}
