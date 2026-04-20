import { Header } from "@/components/header"

const cardStyle = {
  background: "rgba(15,22,35,0.80)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(14,242,200,0.12)",
}

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Page title */}
          <div className="text-center mb-8">
            <div
              className="inline-block text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 rounded mb-4"
              style={{
                background: "rgba(14,242,200,0.08)",
                border: "1px solid rgba(14,242,200,0.22)",
                color: "#0ef2c8",
              }}
            >
              Documentação Legal
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-balance" style={{ color: "#e8edf5" }}>
              Política de Privacidade
            </h1>
            <p className="text-sm font-mono" style={{ color: "#0ef2c8" }}>ptvipsitesdeapostas.com</p>
          </div>

          <div className="rounded-2xl p-8 space-y-8" style={cardStyle}>

            {/* Last updated */}
            <div
              className="pb-5 text-center"
              style={{ borderBottom: "1px solid rgba(14,242,200,0.10)" }}
            >
              <p className="font-mono text-sm font-semibold" style={{ color: "#0ef2c8" }}>
                Última atualização: 2026
              </p>
            </div>

            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0ef2c8" }}>
                1. Identificação do Responsável
              </h2>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#6b7e9a" }}>
                <p>
                  ptvipsitesdeapostas.com é uma plataforma independente de análise e comparação de operadores de apostas desportivas licenciados em Portugal pelo SRIJ. A nossa missão é fornecer informação transparente, atualizada e imparcial para ajudar os utilizadores nas suas decisões.
                </p>
                <div
                  className="p-4 rounded-lg mt-3 space-y-1.5 text-sm"
                  style={{ background: "rgba(14,242,200,0.05)", border: "1px solid rgba(14,242,200,0.12)" }}
                >
                  <p><strong style={{ color: "#e8edf5" }}>Entidade:</strong> PT VIP Sites de Apostas</p>
                  <p>
                    <strong style={{ color: "#e8edf5" }}>Email de Privacidade:</strong>{" "}
                    <a href="mailto:privacidade@ptvipsitesdeapostas.com" style={{ color: "#0ef2c8" }} className="hover:underline">
                      privacidade@ptvipsitesdeapostas.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0ef2c8" }}>
                2. Dados Pessoais Recolhidos
              </h2>
              <div className="space-y-3 text-sm" style={{ color: "#6b7e9a" }}>
                <div
                  className="rounded-lg px-4 py-3"
                  style={{ background: "rgba(14,242,200,0.05)", borderLeft: "3px solid #0ef2c8" }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: "#e8edf5" }}>Dados Fornecidos Diretamente:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-xs">
                    <li>Endereço de email para subscrição de newsletter</li>
                    <li>Nome e mensagem em formulários de contacto</li>
                    <li>Comentários e avaliações enviadas voluntariamente</li>
                    <li>Preferências de comunicação e interesses</li>
                  </ul>
                </div>
                <div
                  className="rounded-lg px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.03)", borderLeft: "3px solid rgba(255,255,255,0.10)" }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: "#e8edf5" }}>Dados Recolhidos Automaticamente:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-xs">
                    <li>Endereço IP e localização geográfica aproximada</li>
                    <li>Informação sobre o dispositivo e navegador utilizado</li>
                    <li>Páginas visitadas e duração das sessões</li>
                    <li>Fonte de referência e padrões de navegação</li>
                    <li>Dados de cookies conforme a nossa Política de Cookies</li>
                  </ul>
                </div>
              </div>
            </section>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0ef2c8" }}>
                3. Finalidades do Tratamento
              </h2>
              <div className="text-sm" style={{ color: "#6b7e9a" }}>
                <p className="mb-3">Os seus dados pessoais são utilizados exclusivamente para:</p>
                <div className="grid md:grid-cols-2 gap-2.5">
                  {[
                    { title: "Prestação de Serviços", desc: "Oferecer comparações e análises de qualidade" },
                    { title: "Comunicação", desc: "Enviar newsletters e atualizações relevantes" },
                    { title: "Melhorias", desc: "Otimizar a experiência do utilizador" },
                    { title: "Suporte", desc: "Responder a consultas e pedidos de assistência" },
                    { title: "Análise", desc: "Compreender padrões de utilização do site" },
                    { title: "Segurança", desc: "Prevenir fraudes e atividades maliciosas" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-lg p-3"
                      style={{ background: "rgba(14,242,200,0.04)", border: "1px solid rgba(14,242,200,0.10)" }}
                    >
                      <p className="font-semibold text-xs" style={{ color: "#0ef2c8" }}>{item.title}</p>
                      <p className="text-xs mt-0.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0ef2c8" }}>
                4. Base Legal
              </h2>
              <div className="space-y-2 text-sm" style={{ color: "#6b7e9a" }}>
                <p className="mb-2">O tratamento dos seus dados pessoais baseia-se em:</p>
                {[
                  { label: "Consentimento explícito:", desc: "Para envio de comunicações de marketing e newsletters" },
                  { label: "Interesse legítimo:", desc: "Para análise estatística e melhoria dos serviços prestados" },
                  { label: "Execução de serviço:", desc: "Para disponibilizar as funcionalidades solicitadas" },
                  { label: "Cumprimento legal:", desc: "Para satisfazer obrigações legais e regulamentares" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-2 px-3 py-2 rounded-lg text-xs"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: "#0ef2c8" }}>•</span>
                    <div>
                      <strong style={{ color: "#e8edf5" }}>{item.label}</strong> {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0ef2c8" }}>
                5. Partilha de Informação
              </h2>
              <div className="space-y-3 text-sm" style={{ color: "#6b7e9a" }}>
                <div
                  className="rounded-lg px-4 py-3 font-bold text-sm"
                  style={{
                    background: "rgba(240,64,96,0.06)",
                    borderLeft: "3px solid rgba(240,64,96,0.40)",
                    color: "#f04060",
                  }}
                >
                  ptvipsitesdeapostas.com não vende, aluga nem comercializa os seus dados pessoais.
                </div>
                <p className="text-sm">Podemos partilhar informação limitada com:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-xs">
                  <li>Prestadores de serviços técnicos (alojamento, análise de dados, email marketing)</li>
                  <li>Autoridades judiciais ou reguladoras quando legalmente obrigatório</li>
                  <li>Parceiros comerciais, exclusivamente em formato agregado e anonimizado</li>
                </ul>
              </div>
            </section>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0ef2c8" }}>
                6. Direitos dos Titulares
              </h2>
              <div className="text-sm" style={{ color: "#6b7e9a" }}>
                <p className="mb-3">Ao abrigo da legislação de proteção de dados, tem direito a:</p>
                <div className="grid md:grid-cols-2 gap-2.5">
                  {[
                    { title: "Direito de Acesso", desc: "Obter confirmação sobre que dados pessoais temos sobre si" },
                    { title: "Direito de Retificação", desc: "Corrigir dados pessoais inexatos ou incompletos" },
                    { title: "Direito ao Esquecimento", desc: "Solicitar a eliminação dos seus dados pessoais" },
                    { title: "Direito à Limitação", desc: "Restringir o tratamento em determinadas circunstâncias" },
                    { title: "Direito à Portabilidade", desc: "Receber os seus dados em formato estruturado" },
                    { title: "Direito de Oposição", desc: "Opor-se ao tratamento dos seus dados pessoais" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-lg p-3"
                      style={{ background: "rgba(14,242,200,0.04)", border: "1px solid rgba(14,242,200,0.10)" }}
                    >
                      <h5 className="font-semibold text-xs mb-0.5" style={{ color: "#0ef2c8" }}>{item.title}</h5>
                      <p className="text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="p-4 rounded-lg mt-4"
                  style={{ background: "rgba(14,242,200,0.05)", border: "1px solid rgba(14,242,200,0.12)" }}
                >
                  <p className="text-sm">
                    Para exercer qualquer um destes direitos, contacte-nos em:{" "}
                    <strong>
                      <a href="mailto:privacidade@ptvipsitesdeapostas.com" style={{ color: "#0ef2c8" }} className="hover:underline">
                        privacidade@ptvipsitesdeapostas.com
                      </a>
                    </strong>
                  </p>
                  <p className="text-xs mt-1.5" style={{ color: "#3d5068" }}>
                    Responderemos ao seu pedido no prazo máximo de 30 dias.
                  </p>
                </div>
              </div>
            </section>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0ef2c8" }}>
                7. Segurança da Informação
              </h2>
              <div className="text-sm leading-relaxed" style={{ color: "#6b7e9a" }}>
                <p>
                  Implementamos medidas técnicas e organizativas rigorosas para proteger os seus dados pessoais contra acesso não autorizado, perda, destruição ou alteração. As nossas medidas de segurança incluem encriptação SSL/TLS, controlo de acesso restrito, monitorização contínua e backups seguros.
                </p>
              </div>
            </section>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0ef2c8" }}>
                8. Período de Conservação
              </h2>
              <div className="text-sm" style={{ color: "#6b7e9a" }}>
                <ul className="space-y-2 ml-2">
                  <li className="flex items-start gap-2 text-xs">
                    <span style={{ color: "#0ef2c8" }}>•</span>
                    <div><strong style={{ color: "#e8edf5" }}>Dados de newsletter:</strong> Até cancelamento da subscrição ou pedido de eliminação</div>
                  </li>
                  <li className="flex items-start gap-2 text-xs">
                    <span style={{ color: "#0ef2c8" }}>•</span>
                    <div><strong style={{ color: "#e8edf5" }}>Dados analíticos:</strong> Máximo de 26 meses em formato anonimizado</div>
                  </li>
                  <li className="flex items-start gap-2 text-xs">
                    <span style={{ color: "#0ef2c8" }}>•</span>
                    <div><strong style={{ color: "#e8edf5" }}>Dados de contacto:</strong> 3 anos após a última interação</div>
                  </li>
                  <li className="flex items-start gap-2 text-xs">
                    <span style={{ color: "#0ef2c8" }}>•</span>
                    <div><strong style={{ color: "#e8edf5" }}>Dados legais:</strong> Conforme exigido pela legislação aplicável</div>
                  </li>
                </ul>
              </div>
            </section>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0ef2c8" }}>
                9. Contacto
              </h2>
              <div
                className="p-4 rounded-lg text-sm"
                style={{ background: "rgba(14,242,200,0.05)", border: "1px solid rgba(14,242,200,0.12)", color: "#6b7e9a" }}
              >
                <p>Para consultas relacionadas com a proteção de dados pessoais, contacte-nos em:</p>
                <p className="mt-2">
                  <strong style={{ color: "#e8edf5" }}>Email:</strong>{" "}
                  <a href="mailto:privacidade@ptvipsitesdeapostas.com" style={{ color: "#0ef2c8" }} className="hover:underline">
                    privacidade@ptvipsitesdeapostas.com
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
    </>
  )
}
