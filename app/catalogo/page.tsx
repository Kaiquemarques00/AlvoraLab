import type { Metadata } from "next";
import { CatalogClient } from "@/components/catalog-client";
import { SiteFooter, SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Catálogo | Alvora Lab", description: "Explore produtos e possibilidades em impressão 3D da Alvora Lab." };

export default async function CatalogPage({ searchParams }: { searchParams: Promise<{ categoria?: string }> }) {
  const { categoria = "" } = await searchParams;
  return <><SiteHeader /><main><CatalogClient initialCategory={categoria} /></main><SiteFooter /></>;
}
