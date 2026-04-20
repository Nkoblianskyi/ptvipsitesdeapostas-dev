"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import type React from "react"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-[#090e18]`}>
      <body className="font-sans min-h-screen w-full">
        <div className="min-h-screen w-full">
          <ScrollToTop />
          {children}
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  )
}
