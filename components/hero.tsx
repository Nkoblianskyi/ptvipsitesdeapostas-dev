"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Clock, ChevronRight } from "lucide-react"

export function Hero() {
  const [show18Modal, setShow18Modal] = useState(false)
  const [showReglasModal, setShowReglasModal] = useState(false)

  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <section className="px-4 py-4 w-full">
        <div className="container mx-auto max-w-[1220px]">
          {/* Hero card with background image */}
          <div
            className="relative overflow-hidden rounded-2xl hero-bg"
            style={{ minHeight: 260 }}
          >
            {/* Dark overlay on image */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(to right, rgba(11,15,26,0.92) 55%, rgba(11,15,26,0.55) 100%)",
              }}
            />

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-40 rounded-2xl" />

            {/* Gold top border */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
              style={{ background: "#f0a500" }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-5 py-8 px-6 md:px-10">
              {/* Updated date */}
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#f0a500" }} />
                <span
                  className="text-[11px] font-mono font-semibold uppercase tracking-widest"
                  style={{ color: "#f0a500" }}
                >
                  Atualizado &middot; {formattedDate}
                </span>
              </div>

              {/* Badge + Title */}
              <div>
                <div
                  className="inline-block text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded mb-3"
                  style={{
                    background: "rgba(240,165,0,0.12)",
                    border: "1px solid rgba(240,165,0,0.28)",
                    color: "#f0a500",
                  }}
                >
                  Comparador Independente Portugal
                </div>
                <h1
                  className="font-extrabold leading-[1.08] text-balance mb-4"
                  style={{
                    fontSize: "clamp(1.7rem, 4.5vw, 3rem)",
                    color: "#e4e9f2",
                  }}
                >
                  Top Sites de{" "}
                  <span style={{ color: "#f0a500" }}>Apostas VIP</span>{" "}
                  em Portugal
                </h1>
                <p
                  className="text-sm md:text-[15px] leading-relaxed max-w-2xl"
                  style={{ color: "#94a3b8" }}
                >
                  Comparacao independente de casas de apostas licenciadas pelo SRIJ em Portugal. Analise imparcial, bonus verificados e rankings atualizados para 2026.
                </p>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => setShowReglasModal(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide transition-all hover:scale-105 font-mono uppercase"
                  style={{
                    background: "rgba(240,165,0,0.10)",
                    border: "1px solid rgba(240,165,0,0.30)",
                    color: "#f0a500",
                  }}
                >
                  <Image src="/srij.svg" alt="Licenca" width={16} height={16} />
                  Licenca
                </button>

                <button
                  onClick={() => setShowReglasModal(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide transition-all hover:scale-105 font-mono uppercase"
                  style={{
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.25)",
                    color: "#4ade80",
                  }}
                >
                  <Lock className="w-3 h-3" />
                  Seguro &amp; Verificado
                </button>

                <button
                  onClick={() => setShow18Modal(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide transition-all hover:scale-105 font-mono"
                  style={{
                    background: "rgba(220,38,38,0.10)",
                    border: "1px solid rgba(220,38,38,0.30)",
                    color: "#fca5a5",
                  }}
                >
                  18+
                </button>
              </div>

              {/* Stats row */}
              <div
                className="flex flex-wrap gap-6 pt-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                {[
                  { val: "7+", label: "Casas Avaliadas" },
                  { val: "SRIJ", label: "Operadores Licenciados" },
                  { val: "2026", label: "Rankings Atualizados" },
                ].map(({ val, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <span
                      className="text-xl font-extrabold font-mono"
                      style={{ color: "#f0a500" }}
                    >
                      {val}
                    </span>
                    <span className="text-xs" style={{ color: "#64748b" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal 18+ */}
      <Dialog open={show18Modal} onOpenChange={setShow18Modal}>
        <DialogContent
          className="max-w-md mx-4"
          style={{
            background: "#111827",
            border: "1px solid rgba(255,255,255,0.10)",
            color: "#e4e9f2",
          }}
        >
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-bold" style={{ color: "#fca5a5" }}>
              18+ Apenas para Adultos
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <p style={{ color: "#64748b" }}>
              <strong style={{ color: "#e4e9f2" }}>Limite de idade:</strong> Deve ter pelo menos 18 anos para participar em atividades de apostas em Portugal.
            </p>
            <p style={{ color: "#64748b" }}>
              <strong style={{ color: "#e4e9f2" }}>Jogo responsavel:</strong> As apostas devem ser um entretenimento, nao uma fonte de rendimento. Aposte apenas o que pode perder.
            </p>
            <p style={{ color: "#64748b" }}>
              <strong style={{ color: "#e4e9f2" }}>Estabeleca limites:</strong> Utilize as ferramentas de autoexclusao e limites de deposito disponiveis em cada site.
            </p>
            <div
              className="p-4 rounded-lg"
              style={{
                background: "rgba(240,165,0,0.07)",
                border: "1px solid rgba(240,165,0,0.20)",
              }}
            >
              <p className="font-semibold mb-2" style={{ color: "#f0a500" }}>Precisa de ajuda?</p>
              <p className="text-sm" style={{ color: "#64748b" }}>
                Linha de apoio ao jogo responsavel:{" "}
                <strong style={{ color: "#e4e9f2" }}>1414</strong>
              </p>
            </div>
          </div>
          <Button
            onClick={() => setShow18Modal(false)}
            className="w-full font-bold"
            style={{ background: "#f0a500", color: "#0b0f1a" }}
          >
            Entendido
          </Button>
        </DialogContent>
      </Dialog>

      {/* Modal Regras */}
      <Dialog open={showReglasModal} onOpenChange={setShowReglasModal}>
        <DialogContent
          className="max-w-2xl mx-4 max-h-[80vh] overflow-y-auto"
          style={{
            background: "#111827",
            border: "1px solid rgba(255,255,255,0.10)",
            color: "#e4e9f2",
          }}
        >
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-bold" style={{ color: "#e4e9f2" }}>
              Regras e Condicoes
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-sm">
            <div>
              <h3 className="font-bold mb-2" style={{ color: "#f0a500" }}>Condicoes Gerais</h3>
              <p style={{ color: "#64748b" }}>
                Todos os sites de apostas recomendados operam com licenca SRIJ (Servico de Regulacao e Inspecao de Jogos) em Portugal.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2" style={{ color: "#f0a500" }}>Condicoes dos Bonus</h3>
              <ul className="space-y-1" style={{ color: "#64748b" }}>
                <li>&bull; Todos os bonus de boas-vindas tem requisitos de apostas</li>
                <li>&bull; Os bonus devem ser utilizados dentro do prazo estabelecido</li>
                <li>&bull; Leia sempre as condicoes completas em cada site</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2" style={{ color: "#f0a500" }}>Levantamentos e Verificacao</h3>
              <ul className="space-y-1" style={{ color: "#64748b" }}>
                <li>&bull; Todos os levantamentos sao processados apos verificacao de identidade</li>
                <li>&bull; Os prazos variam entre 1&ndash;5 dias uteis</li>
                <li>&bull; Podem ser solicitados documentos no primeiro levantamento</li>
              </ul>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{
                background: "rgba(240,165,0,0.07)",
                border: "1px solid rgba(240,165,0,0.20)",
              }}
            >
              <h3 className="font-bold mb-2" style={{ color: "#f0a500" }}>Recursos de Jogo Responsavel</h3>
              <p style={{ color: "#64748b" }}>
                Linha de apoio SRIJ: <strong style={{ color: "#e4e9f2" }}>1414</strong>
              </p>
            </div>
          </div>
          <Button
            onClick={() => setShowReglasModal(false)}
            className="w-full font-bold"
            style={{ background: "#f0a500", color: "#0b0f1a" }}
          >
            Aceitar e Fechar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
