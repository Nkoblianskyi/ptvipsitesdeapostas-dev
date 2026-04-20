import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./clientLayout"

export const metadata: Metadata = {
  title: "PT VIP Sites de Apostas — Comparador de Casas de Apostas Portugal 2026",
  description:
    "Guia informativo e educativo sobre sites de apostas desportivas em Portugal. Apenas para maiores de 18 anos. Jogo responsável obrigatório. Conteúdo educativo, não promocional.",
  keywords:
    "sites de apostas Portugal, apostas online Portugal, BWIN Portugal, Betano Portugal, bónus boas-vindas, comparador apostas, SRIJ, 18+",
  authors: [{ name: "PT VIP Sites de Apostas — Conteúdo Educativo" }],
  creator: "ptvipsitesdeapostas",
  publisher: "ptvipsitesdeapostas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://ptvipsitesdeapostas.com",
    title: "PT VIP Sites de Apostas — Informação Educativa Apostas Responsáveis",
    description:
      "Conteúdo educativo sobre apostas desportivas em Portugal. Apenas informação, sem promoção. 18+ Jogo responsável.",
    siteName: "ptvipsitesdeapostas",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT VIP Sites de Apostas — Educação Jogo Responsável Portugal",
    description: "Informação educativa apostas desportivas Portugal. Conteúdo não promocional. 18+.",
  },
  other: {
    "content-purpose": "educational-informational-only",
    "not-promotional": "true",
    "age-restriction": "18+",
    "geographic-restriction": "Portugal-only",
    "responsible-gambling": "mandatory",
    "gambling-addiction-help": "Linha de apoio: 1414",
    "content-warning": "Conteúdo educativo sobre apostas — Riscos financeiros e de saúde",
    "target-audience": "Adultos portugueses 18+ apenas para fins educativos",
    disclaimer: "Site educativo — NÃO constitui aconselhamento ou promoção",
    "harm-prevention": "Prevenção ativa de jogo problemático e dependência",
    "financial-warning": "AVISO: As apostas podem causar perdas financeiras — Aposte responsavelmente",
    "no-minors": "Estritamente proibido para menores de 18 anos",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
