import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-brand-black">
      <Container>
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          <Image
            src="/sirdaryo-S.svg"
            alt="Sirdaryo"
            width={80}
            height={80}
            className="mb-8 invert opacity-20"
          />
          <h1 className="font-display text-7xl font-bold text-gradient-coral">
            404
          </h1>
          <p className="mt-4 text-xl text-white/50">
            Aradığınız sayfa bulunamadı.
          </p>
          <Button href="/" variant="primary" size="lg" className="mt-8">
            Ana Sayfaya Dön
          </Button>
        </div>
      </Container>
    </section>
  );
}
