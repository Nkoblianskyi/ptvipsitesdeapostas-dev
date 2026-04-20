"use client"

import Link from "next/link"
import Image from "next/image"
import { Trophy } from "lucide-react"

export function Header() {
  return (
    <header className="w-full relative z-50">
      {/* Top accent line */}
      <div className="h-[2px] w-full bg-[#f0a500]" />

      <div
        style={{
          background: "rgba(11,15,26,0.94)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="container mx-auto max-w-[1220px] px-4 py-3.5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 select-none group">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg"
                style={{
                  background: "rgba(240,165,0,0.12)",
                  border: "1px solid rgba(240,165,0,0.30)",
                }}
              >
                <Trophy className="w-4 h-4" style={{ color: "#f0a500" }} />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="font-bold text-base tracking-tight"
                  style={{ color: "#f0a500" }}
                >
                  PT VIP
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.15em]" style={{ color: "#64748b" }}>
                  sitesdeapostas.com
                </span>
              </div>
            </Link>

            {/* Right badge */}
            <div
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest font-mono"
              style={{
                background: "rgba(240,165,0,0.08)",
                border: "1px solid rgba(240,165,0,0.20)",
                color: "#f0a500",
              }}
            >
              <Image src="/srij.svg" alt="SRIJ" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
