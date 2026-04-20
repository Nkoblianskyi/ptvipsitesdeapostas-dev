import Link from "next/link"
import { Trophy } from "lucide-react"

const orgs = [
  {
    name: "BeGambleAware",
    url: "https://www.begambleaware.org",
    imgUrl: "/begambleaware.png",
  },
  {
    name: "Gambling Therapy",
    url: "https://www.gamblingtherapy.org",
    imgUrl: "/gordon.png",
  },
  {
    name: "GamCare",
    url: "https://www.gamcare.org.uk",
    imgUrl: "/gamecare.svg",
  },
   {
    name: "Jogo Responsável Portugal",
    url: "https://jogoresponsavel.pt/",
    imgUrl: "/jogo2.png",
  },
   {
    name: "ICAD Portugal",
    url: "https://www.icad.pt/",
    imgUrl: "/icad.png",
  },
]

export function Footer() {
  return (
    <footer className="w-full mt-6 relative">
      {/* Top accent line */}
      <div
        className="h-[1px] w-full"
        style={{ background: "rgba(240,165,0,0.25)" }}
      />

      <div
        style={{
          background: "rgba(7,10,18,0.97)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="container mx-auto max-w-[1220px] px-4 py-6">

          {/* Main row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-5">

            {/* Brand */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <div
                className="flex items-center justify-center w-7 h-7 rounded-lg"
                style={{
                  background: "rgba(240,165,0,0.10)",
                  border: "1px solid rgba(240,165,0,0.25)",
                }}
              >
                <Trophy className="w-3.5 h-3.5" style={{ color: "#f0a500" }} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-sm" style={{ color: "#f0a500" }}>PT VIP Sites de Apostas</span>
                <span className="text-[10px] font-mono" style={{ color: "#64748b" }}>ptvipsitesdeapostas.com</span>
              </div>
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-5 text-xs" style={{ color: "#64748b" }}>
              <Link
                href="/politica-privacidade"
                className="transition-colors hover:text-[#f0a500]"
              >
                Politica de Privacidade
              </Link>
              <span style={{ color: "rgba(255,255,255,0.10)" }}>|</span>
              <Link
                href="/politica-cookies"
                className="transition-colors hover:text-[#f0a500]"
              >
                Politica de Cookies
              </Link>
            </div>

            {/* 18+ + helpline */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-full border font-bold text-[10px]"
                style={{
                  background: "rgba(220,38,38,0.15)",
                  borderColor: "rgba(220,38,38,0.45)",
                  color: "#fca5a5",
                }}
              >
                18+
              </div>
              <div className="text-xs leading-tight" style={{ color: "#64748b" }}>
                <p>Apoio: <span className="font-semibold" style={{ color: "#e4e9f2" }}>1414</span></p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} />

          {/* Org logos + disclaimer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {orgs.map((org) => (
                <a
                  key={org.name}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={org.name}
                  className="hover:opacity-70 transition-opacity rounded-md p-1.5"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <img
                    src={org.imgUrl}
                    alt={org.name}
                    className="h-5 w-auto object-contain"
                  />
                </a>
              ))}
            </div>

            <p className="text-[10px] text-center md:text-right leading-relaxed max-w-sm font-mono" style={{ color: "#374151" }}>
              &copy; 2026 ptvipsitesdeapostas.com &mdash; Comparador independente. Apenas para maiores de 18 anos. As apostas podem causar dependencia.
            </p>
          </div>

          {/* SRIJ disclaimer */}
          <div
            className="mt-5 pt-4 text-center text-[10px] leading-relaxed"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.04)",
              color: "#374151",
            }}
          >
            Conteudo exclusivamente informativo e educacional. Nao promovemos apostas nem incentivamos nenhum operador especifico.
            Licenca SRIJ obrigatoria. Proibido para menores de 18 anos.
          </div>
        </div>
      </div>
    </footer>
  )
}
