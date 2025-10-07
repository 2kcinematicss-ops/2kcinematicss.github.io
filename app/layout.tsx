import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "2K Cinematics - Produção Audiovisual Profissional",
  description:
    "Entre em contato com a 2K Cinematics para produção de vídeo, fotografia e edição profissional. Transforme suas ideias em realidade cinematográfica.",
  keywords: ["produção de vídeo", "cinematografia", "fotografia profissional", "edição de vídeo", "2K Cinematics"],
  openGraph: {
    title: "2K Cinematics - Produção Audiovisual Profissional",
    description: "Transforme suas ideias em realidade cinematográfica. Entre em contato agora!",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
