import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services";
import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("rpa")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function RPAPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
