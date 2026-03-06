import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services";
import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("optimizasyon")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function OptimizasyonPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
