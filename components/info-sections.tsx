import { CheckCircle, AlertTriangle, ShieldCheck, BarChart3 } from "lucide-react"

const GOLD = "#f0a500"

function SectionCard({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div
      className="rounded-xl p-8 md:p-10"
      style={{
        background: "#111827",
        border: accent ? "1px solid rgba(240,165,0,0.16)" : "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {children}
    </div>
  )
}

function SectionHeading({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
        style={{
          background: "rgba(240,165,0,0.10)",
          border: "1px solid rgba(240,165,0,0.22)",
        }}
      >
        <Icon className="w-5 h-5" style={{ color: GOLD }} />
      </div>
      <h2
        className="text-xl md:text-2xl font-bold text-balance"
        style={{ color: "#e4e9f2" }}
      >
        {title}
      </h2>
    </div>
  )
}

function CriteriaItem({ title, desc, accent = false }: { title: string; desc: string; accent?: boolean }) {
  return (
    <div
      className="rounded-lg px-4 py-3"
      style={{
        background: accent ? "rgba(240,165,0,0.05)" : "rgba(255,255,255,0.03)",
        borderLeft: `3px solid ${accent ? GOLD : "rgba(255,255,255,0.10)"}`,
      }}
    >
      <h4 className="font-semibold text-sm mb-0.5" style={{ color: "#e4e9f2" }}>{title}</h4>
      <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{desc}</p>
    </div>
  )
}

export function InfoSections() {
  return (
    <section className="py-8 px-4 w-full">
      <div className="container mx-auto max-w-[1220px] space-y-6">

        {/* Methodology */}
        <SectionCard accent>
          <div className="max-w-4xl mx-auto">
            <SectionHeading icon={BarChart3} title="Metodologia de Analise Profissional" />

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <div>
                  <h3 className="text-base font-bold mb-3" style={{ color: GOLD }}>
                    Processo de Avaliacao Rigoroso
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#64748b" }}>
                    <p>
                      Cada plataforma de apostas passa por uma analise detalhada realizada por especialistas com anos de experiencia no mercado portugues. Testamos pessoalmente todos os aspetos operacionais, desde o registo ate aos levantamentos.
                    </p>
                    <p>
                      A nossa equipa verifica minuciosamente a licenca SRIJ, testa a velocidade de pagamentos, avalia a qualidade do suporte ao cliente e compara as odds em diferentes mercados desportivos.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold mb-3" style={{ color: GOLD }}>
                    Criterios de Classificacao
                  </h3>
                  <div className="space-y-2">
                    {[
                      { t: "Licenca SRIJ Oficial", d: "Verificacao obrigatoria de licenca valida emitida pelo SRIJ", accent: true },
                      { t: "Seguranca Digital", d: "Encriptacao de dados, protecao financeira e politicas de privacidade" },
                      { t: "Competitividade das Odds", d: "Analise comparativa de odds nos principais eventos e mercados" },
                      { t: "Metodos de Pagamento", d: "Variedade de opcoes, limites adequados e velocidade de processamento" },
                    ].map(({ t, d, accent }) => (
                      <CriteriaItem key={t} title={t} desc={d} accent={accent} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <h3 className="text-base font-bold mb-3" style={{ color: GOLD }}>
                    Garantia de Imparcialidade
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#64748b" }}>
                    <p>
                      Mantemos total independencia editorial nas nossas classificacoes. As avaliacoes baseiam-se exclusivamente em criterios objetivos e testes praticos, sem influencia comercial.
                    </p>
                    <p>
                      Atualizamos constantemente as nossas analises para refletir mudancas nas plataformas, novas funcionalidades e feedback real dos utilizadores.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold mb-3" style={{ color: GOLD }}>
                    Pontos de Atencao Importantes
                  </h3>
                  <div className="space-y-2">
                    {[
                      { t: "Requisitos dos Bonus", d: "Analise cuidadosamente os requisitos de apostas antes de aceitar promocoes" },
                      { t: "Limites Operacionais", d: "Confirme que os limites de aposta e levantamento se adequam ao seu perfil" },
                      { t: "Controlo do Jogo", d: "Utilize sempre as ferramentas de jogo responsavel disponiveis" },
                    ].map(({ t, d }) => (
                      <CriteriaItem key={t} title={t} desc={d} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mt-6 p-5 rounded-xl text-center text-sm leading-relaxed"
              style={{
                background: "rgba(240,165,0,0.05)",
                border: "1px solid rgba(240,165,0,0.14)",
                color: "#64748b",
              }}
            >
              <span className="font-semibold" style={{ color: GOLD }}>Compromisso Editorial: </span>
              Este portal tem carater exclusivamente informativo e educacional. Nao promovemos apostas nem incentivamos nenhum operador especifico. As classificacoes refletem analises objetivas.
            </div>
          </div>
        </SectionCard>

        {/* Responsible Gambling */}
        <SectionCard>
          <div className="max-w-4xl mx-auto">
            <SectionHeading icon={ShieldCheck} title="Jogo Responsavel e Protecao" />

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <div>
                  <h3 className="text-base font-bold mb-3" style={{ color: GOLD }}>
                    Fundamentos do Jogo Consciente
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#64748b" }}>
                    <p>
                      As apostas desportivas devem ser consideradas exclusivamente como entretenimento recreativo, nunca como fonte de rendimento. Estabeleca sempre limites claros antes de iniciar qualquer atividade.
                    </p>
                    <p>
                      Defina um orcamento especifico que nao comprometa as suas necessidades essenciais ou obrigacoes financeiras. Nunca utilize dinheiro emprestado para fazer apostas.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold mb-3" style={{ color: GOLD }}>
                    Indicadores de Risco
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Exceder frequentemente o orcamento definido para apostas",
                      "Aumentar os montantes apostados para recuperar perdas anteriores",
                      "Esconder de familiares o tempo ou dinheiro dedicado as apostas",
                      "Descuidar obrigacoes laborais ou pessoais por causa das apostas",
                      "Sentir ansiedade quando nao pode apostar",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 px-3 py-2 rounded-lg text-sm"
                        style={{
                          background: "rgba(220,38,38,0.06)",
                          borderLeft: "3px solid rgba(220,38,38,0.35)",
                          color: "#64748b",
                        }}
                      >
                        <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "rgba(220,38,38,0.65)" }} />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <h3 className="text-base font-bold mb-3" style={{ color: GOLD }}>
                    Ferramentas de Controlo
                  </h3>
                  <div className="space-y-2">
                    {[
                      { t: "Limites de Deposito", d: "Configure limites diarios, semanais ou mensais para depositos" },
                      { t: "Limites Temporais", d: "Estabeleca o tempo maximo dedicado a atividade de apostas" },
                      { t: "Autoexclusao", d: "Bloqueie o acesso a sua conta por periodos definidos ou permanentemente" },
                    ].map(({ t, d }) => (
                      <CriteriaItem key={t} title={t} desc={d} accent />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold mb-3" style={{ color: GOLD }}>
                    Recursos de Apoio
                  </h3>
                  <div
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(240,165,0,0.05)",
                      border: "1px solid rgba(240,165,0,0.14)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4" style={{ color: GOLD }} />
                      <h4 className="font-semibold text-sm" style={{ color: GOLD }}>
                        Linha de Jogo Responsavel SRIJ
                      </h4>
                    </div>
                    <p className="text-2xl font-extrabold font-mono" style={{ color: "#e4e9f2" }}>1414</p>
                    <p className="text-xs mt-1" style={{ color: "#64748b" }}>Atendimento permanente 24h/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal warning */}
            <div
              className="mt-6 p-6 rounded-xl"
              style={{
                background: "rgba(220,38,38,0.05)",
                border: "1px solid rgba(220,38,38,0.18)",
              }}
            >
              <div className="text-center">
                <h3 className="text-lg font-extrabold mb-3 font-mono uppercase tracking-wide" style={{ color: "#dc2626" }}>
                  Aviso Legal Obrigatorio
                </h3>
                <p className="font-bold text-base mb-4" style={{ color: "#e4e9f2" }}>
                  AS APOSTAS PODEM CAUSAR DEPENDENCIA
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm" style={{ color: "#64748b" }}>
                  {[
                    { t: "Riscos Financeiros", d: "Perdas monetarias, endividamento e dificuldades economicas" },
                    { t: "Riscos Sociais", d: "Conflitos familiares, isolamento e problemas laborais" },
                    { t: "Riscos Psicologicos", d: "Dependencia, ansiedade e perturbacoes mentais" },
                  ].map(({ t, d }) => (
                    <div
                      key={t}
                      className="p-3 rounded-lg"
                      style={{ background: "rgba(220,38,38,0.04)", border: "1px solid rgba(220,38,38,0.10)" }}
                    >
                      <h4 className="font-semibold mb-1.5 text-sm" style={{ color: "#fca5a5" }}>{t}</h4>
                      <p className="text-xs leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-5 pt-4"
                  style={{ borderTop: "1px solid rgba(220,38,38,0.12)" }}
                >
                  <p className="font-bold font-mono uppercase tracking-widest text-sm" style={{ color: "#dc2626" }}>
                    Proibido para Menores de 18 Anos
                  </p>
                  <p className="text-xs mt-1.5" style={{ color: "#64748b" }}>
                    Verificacao obrigatoria de idade e identidade em todas as plataformas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>

      </div>
    </section>
  )
}
