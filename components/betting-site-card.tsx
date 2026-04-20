"use client"

import { Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "@/lib/mock-data"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

const rankColors: Record<number, { bg: string; text: string }> = {
  1: { bg: "#f5c518", text: "#0b0f1a" },
  2: { bg: "#94a3b8", text: "#0b0f1a" },
  3: { bg: "#cd7f32", text: "#0b0f1a" },
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  const getPrimaryBadge = () => {
    if (site.isTopRating) return { text: "MELHOR AVALIACAO", color: "#f0a500", bg: "rgba(240,165,0,0.10)", border: "rgba(240,165,0,0.28)" }
    if (site.isTopLine) return { text: "MELHOR OPCAO", color: "#f0a500", bg: "rgba(240,165,0,0.10)", border: "rgba(240,165,0,0.28)" }
    if (site.isPopular) return { text: "POPULAR", color: "#f5c518", bg: "rgba(245,197,24,0.10)", border: "rgba(245,197,24,0.28)" }
    if (site.isTrending) return { text: "TENDENCIA", color: "#4ade80", bg: "rgba(74,222,128,0.10)", border: "rgba(74,222,128,0.28)" }
    return null
  }

  const primaryBadge = getPrimaryBadge()
  const isFirstItem = rank === 1
  const rankInfo = rankColors[rank]

  return (
    <div
      className="relative rounded-xl transition-all duration-300 hover:scale-[1.005] cursor-pointer overflow-hidden"
      style={{
        background: isFirstItem ? "rgba(240,165,0,0.04)" : "#111827",
        border: isFirstItem
          ? "1px solid rgba(240,165,0,0.22)"
          : "1px solid rgba(255,255,255,0.07)",
        boxShadow: isFirstItem ? "0 4px 24px rgba(0,0,0,0.4)" : "0 2px 12px rgba(0,0,0,0.3)",
      }}
      onClick={() => window.open(site.url, "_blank", "noopener,noreferrer")}
    >
      {/* Left rank stripe */}
      {rankInfo && (
        <div
          className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
          style={{ background: rankInfo.bg }}
        />
      )}

      {/* Badge */}
      {primaryBadge && (
        <div className="absolute top-0 right-0 z-10">
          <div
            className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-tr-xl rounded-bl-xl font-mono"
            style={{
              background: primaryBadge.bg,
              border: `1px solid ${primaryBadge.border}`,
              color: primaryBadge.color,
            }}
          >
            {primaryBadge.text}
          </div>
        </div>
      )}

      <div className="pl-4">
        {/* Desktop layout */}
        <div className="hidden md:flex md:items-center md:gap-5 lg:gap-8 px-4 py-5">
          {/* Rank */}
          <div className="flex-shrink-0 text-center w-8">
            <span
              className="text-xl font-extrabold font-mono"
              style={{ color: rankInfo?.bg || "rgba(255,255,255,0.20)" }}
            >
              {rank}
            </span>
          </div>

          {/* Logo */}
          <div
            className="flex-shrink-0 rounded-xl flex items-center justify-center"
            style={{
              background: "#0b0f1a",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "10px 16px",
              minWidth: 140,
            }}
          >
            <img
              src={site.logo || "/placeholder.svg"}
              alt={site.name}
              className="w-[130px] h-[70px] lg:w-[150px] lg:h-[80px] object-contain"
            />
          </div>

          {/* Bonus */}
          <div className="flex-1 px-2">
            <div
              className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1.5"
              style={{ color: "#f0a500" }}
            >
              Bonus de Boas-Vindas
            </div>
            <p
              className="font-extrabold leading-tight text-lg lg:text-xl text-balance"
              style={{ color: "#e4e9f2" }}
            >
              {site.bonus}
            </p>
            {site.dopbonus && (
              <p className="text-sm mt-0.5" style={{ color: "#64748b" }}>{site.dopbonus}</p>
            )}
          </div>

          {/* Rating */}
          <div className="text-center flex-shrink-0 px-2">
            <div
              className="text-2xl lg:text-3xl font-extrabold font-mono mb-1"
              style={{ color: "#f0a500" }}
            >
              {site.rating.toFixed(1)}
              <span className="text-sm font-normal" style={{ color: "#64748b" }}>/10</span>
            </div>
            <div className="flex items-center justify-center mb-1 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5"
                  style={{
                    color: "#f5c518",
                    fill: i < Math.floor(site.stars) ? "#f5c518" : "transparent",
                    opacity: i < Math.floor(site.stars) ? 1 : 0.2,
                  }}
                />
              ))}
            </div>
            <div className="text-[11px] font-mono" style={{ color: "#64748b" }}>
              ({site.reviews.toLocaleString()} av.)
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Button
              className="font-bold px-5 lg:px-7 py-2.5 lg:py-3 text-sm font-mono uppercase tracking-wide transition-all hover:scale-105 flex items-center gap-2"
              style={{
                background: "#f0a500",
                color: "#0b0f1a",
              }}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(site.url, "_blank", "noopener,noreferrer")
              }}
            >
              Obter Bonus
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden px-4 py-4">
          <div className="flex items-start justify-between mb-4 gap-3">
            <div className="flex items-center gap-3">
              <span
                className="text-lg font-extrabold font-mono flex-shrink-0"
                style={{ color: rankInfo?.bg || "rgba(255,255,255,0.20)" }}
              >
                {rank}
              </span>
              <div
                className="flex-shrink-0 rounded-lg"
                style={{
                  background: "#0b0f1a",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "7px 10px",
                }}
              >
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[100px] h-[58px] object-contain"
                />
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-extrabold font-mono" style={{ color: "#f0a500" }}>
                {site.rating.toFixed(1)}<span className="text-xs" style={{ color: "#64748b" }}>/10</span>
              </div>
              <div className="flex items-center justify-end gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3"
                    style={{
                      color: "#f5c518",
                      fill: i < Math.floor(site.stars) ? "#f5c518" : "transparent",
                      opacity: i < Math.floor(site.stars) ? 1 : 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-3">
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1" style={{ color: "#f0a500" }}>
              Bonus de Boas-Vindas
            </div>
            <p className="font-bold text-base text-balance" style={{ color: "#e4e9f2" }}>{site.bonus}</p>
            {site.dopbonus && <p className="text-xs mt-0.5" style={{ color: "#64748b" }}>{site.dopbonus}</p>}
          </div>

          <Button
            className="font-bold w-full py-2.5 text-sm font-mono uppercase tracking-wide flex items-center justify-center gap-2"
            style={{ background: "#f0a500", color: "#0b0f1a" }}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.open(site.url, "_blank", "noopener,noreferrer")
            }}
          >
            Obter Bonus
            <ExternalLink className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      {/* Disclaimer */}
      <div
        className="mx-4 mb-3 px-3 py-2 rounded-lg text-center"
        style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p className="text-[10px] leading-relaxed font-mono" style={{ color: "#374151" }}>
          <strong style={{ color: "rgba(220,38,38,0.75)" }}>18+</strong>
          {" | "}
          {site.terms || "As apostas podem causar dependencia. Aposte responsavelmente. Licenca SRIJ."}
        </p>
      </div>
    </div>
  )
}
