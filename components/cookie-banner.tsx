"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cookie } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        background: "rgba(11,15,26,0.97)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(240,165,0,0.20)",
        boxShadow: "0 -4px 30px rgba(0,0,0,0.45)",
      }}
    >
      {/* Top accent line */}
      <div className="h-[2px] w-full" style={{ background: "#f0a500" }} />

      <div className="container mx-auto max-w-[1220px] px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Content */}
          <div className="flex items-start gap-3 flex-1">
            <div
              className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg mt-0.5"
              style={{
                background: "rgba(240,165,0,0.10)",
                border: "1px solid rgba(240,165,0,0.24)",
              }}
            >
              <Cookie className="w-4 h-4" style={{ color: "#f0a500" }} />
            </div>
            <div>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                Este site utiliza cookies para melhorar a sua experiencia de navegacao.{" "}
                Ao continuar, aceita a nossa{" "}
                <Link href="/politica-privacidade" className="font-medium transition-colors hover:text-[#f0a500]" style={{ color: "#c98a00" }}>
                  Politica de Privacidade
                </Link>{" "}
                e{" "}
                <Link href="/politica-cookies" className="font-medium transition-colors hover:text-[#f0a500]" style={{ color: "#c98a00" }}>
                  Politica de Cookies
                </Link>
                .
              </p>

              {showDetails && (
                <div
                  className="mt-3 p-3 rounded-lg"
                  style={{
                    background: "rgba(240,165,0,0.05)",
                    border: "1px solid rgba(240,165,0,0.14)",
                  }}
                >
                  <h4 className="font-semibold text-xs mb-2" style={{ color: "#f0a500" }}>
                    Configuracao de cookies:
                  </h4>
                  <div className="space-y-2 text-xs" style={{ color: "#64748b" }}>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked readOnly className="accent-[#f0a500]" />
                      Cookies necessarios (sempre ativos)
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="accent-[#f0a500]" />
                      Cookies analiticos (Google Analytics)
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              onClick={() => setShowDetails(!showDetails)}
              variant="outline"
              size="sm"
              className="text-xs font-mono"
              style={{
                background: "transparent",
                border: "1px solid rgba(240,165,0,0.18)",
                color: "#64748b",
              }}
            >
              {showDetails ? "Ocultar" : "Configurar"}
            </Button>
            <Button
              onClick={rejectCookies}
              variant="outline"
              size="sm"
              className="text-xs font-mono"
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#64748b",
              }}
            >
              Rejeitar
            </Button>
            <Button
              onClick={acceptCookies}
              size="sm"
              className="text-xs font-bold font-mono"
              style={{
                background: "#f0a500",
                color: "#0b0f1a",
              }}
            >
              Aceitar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
