import type { Metadata } from "next";
import "@fontsource/rambla/400.css";
import "@fontsource/rambla/700.css";
import "./globals.css";
import { ThematicEntry } from "@/components/thematic-entry";
import { ScrollMotion } from "@/components/scroll-motion";

export const metadata: Metadata = {
  title: { default: "Alvora Lab | Ideias digitais. Objetos reais.", template: "%s | Alvora Lab" },
  description: "Produtos, personalizados e soluções em impressão 3D da Alvora Lab.",
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/alvora-mark.svg", type: "image/svg+xml" }], shortcut: "/favicon.ico", apple: "/favicon-180.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" data-scroll-behavior="smooth" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{ __html: "try{const saved=localStorage.getItem('alvora-theme');const system=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=saved==='light'||saved==='dark'?saved:system;requestAnimationFrame(()=>document.documentElement.classList.add('theme-ready'))}catch{document.documentElement.dataset.theme='light'}" }} /><ThematicEntry /><ScrollMotion />{children}</body></html>;
}
