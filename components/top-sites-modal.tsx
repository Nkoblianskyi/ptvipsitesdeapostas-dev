"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star, Trophy, ExternalLink } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"

export function TopSitesModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const dontShow = localStorage.getItem("topSitesModalDismissed")
    if (dontShow) return

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const topSite = bettingSites[0]

  const handleDontShowAgain = () => {
    localStorage.setItem("topSitesModalDismissed", "true")
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-transparent border-none shadow-none max-w-sm p-0">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#111827",
            border: "1px solid rgba(240,165,0,0.22)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
          }}
        >
          {/* Top accent line */}
          <div className="h-[2px] w-full" style={{ background: "#f0a500" }} />

          {/* Header */}
          <div
            className="py-3 px-6 flex items-center justify-center gap-2"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
          >
            <Trophy className="w-4 h-4" style={{ color: "#f0a500" }} />
            <h3
              className="font-bold text-sm font-mono uppercase tracking-widest"
              style={{ color: "#f0a500" }}
            >
              Melhor Casa de Apostas
            </h3>
          </div>

          <div className="p-6">
            {/* Logo */}
            <div
              className="rounded-xl p-4 mb-4 flex items-center justify-center"
              style={{
                background: "#0b0f1a",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <img
                src={topSite.logo || "/placeholder.svg"}
                alt={topSite.name}
                className="w-[140px] h-[78px] object-contain"
              />
            </div>

            {/* Bonus */}
            <div className="mb-4 text-center">
              <div
                className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1.5"
                style={{ color: "#f0a500" }}
              >
                Bonus de Boas-Vindas
              </div>
              <p
                className="font-extrabold text-lg leading-tight text-balance"
                style={{ color: "#e4e9f2" }}
              >
                {topSite.bonus}
              </p>
            </div>

            {/* Rating */}
            <div className="mb-5 text-center">
              <div className="flex items-center justify-center mb-2 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    style={{
                      color: "#f5c518",
                      fill: i < Math.floor(topSite.stars) ? "#f5c518" : "transparent",
                      opacity: i < Math.floor(topSite.stars) ? 1 : 0.2,
                    }}
                  />
                ))}
              </div>
              <div
                className="text-3xl font-extrabold font-mono"
                style={{ color: "#f0a500" }}
              >
                {topSite.rating.toFixed(1)}
                <span className="text-sm font-normal" style={{ color: "#64748b" }}>/10</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href={topSite.url}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold font-mono uppercase tracking-wide transition-all hover:scale-[1.02]"
              style={{
                background: "#f0a500",
                color: "#0b0f1a",
                textDecoration: "none",
              }}
            >
              Apostar Agora
              <ExternalLink className="w-4 h-4" />
            </a>

            <div
              className="mt-4 pt-3 text-center"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-[10px] font-mono" style={{ color: "#374151" }}>
                <span style={{ color: "rgba(220,38,38,0.75)" }} className="font-bold">18+</span>
                {" · "}
                As apostas podem causar dependencia. Licenca SRIJ.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-3">
          <Button
            onClick={handleDontShowAgain}
            variant="outline"
            size="sm"
            className="text-xs font-mono"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#64748b",
            }}
          >
            Nao mostrar novamente
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
