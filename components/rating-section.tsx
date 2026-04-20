import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"
import { Trophy } from "lucide-react"

export function RatingSection() {
  return (
    <section className="py-3 px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="flex items-center justify-center w-8 h-8 rounded-lg"
            style={{
              background: "rgba(240,165,0,0.12)",
              border: "1px solid rgba(240,165,0,0.28)",
            }}
          >
            <Trophy className="w-4 h-4" style={{ color: "#f0a500" }} />
          </div>
          <div>
            <h2
              className="text-base font-bold font-mono uppercase tracking-widest"
              style={{ color: "#e4e9f2" }}
            >
              Top Sites de Apostas
            </h2>
            <p className="text-[11px] font-mono" style={{ color: "#64748b" }}>
              Ranking atualizado &middot; {new Date().getFullYear()} &middot; Licenciados SRIJ
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-2.5">
          {bettingSites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
