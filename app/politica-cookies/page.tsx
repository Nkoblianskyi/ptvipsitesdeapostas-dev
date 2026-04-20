import { Header } from "@/components/header"

const cardStyle = {
  background: "rgba(15,22,35,0.80)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(14,242,200,0.12)",
}

export default function PoliticaCookiesPage() {
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
              Política de Cookies
            </h1>
            <p className="text-sm font-mono" style={{ color: "#0ef2c8" }}>ptvipsitesdeapostas.com</p>
          </div>

          <div className="rounded-2xl p-8 space-y-8" style={cardStyle}>

            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0ef2c8" }}>
                1. Informação sobre Cookies
              </h2>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#6b7e9a" }}>
                <p>
                  Os cookies são ficheiros de texto de pequena dimensão que os sites armazenam no seu dispositivo durante a navegação. ptvipsitesdeapostas.com utiliza cookies para garantir o funcionamento adequado do site e melhorar a experiência de navegação dos utilizadores.
                </p>
                <p>
                  A nossa plataforma emprega exclusivamente cookies técnicos e analíticos, respeitando integralmente a sua privacidade e os requisitos legais aplicáveis em Portugal.
                </p>
              </div>
            </section>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0ef2c8" }}>
                2. Categorias de Cookies Utilizados
              </h2>
              <div className="space-y-3 text-sm" style={{ color: "#6b7e9a" }}>
                <div
                  className="rounded-lg px-4 py-3"
                  style={{ background: "rgba(14,242,200,0.05)", borderLeft: "3px solid #0ef2c8" }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: "#e8edf5" }}>Cookies Técnicos Essenciais</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-xs">
                    <li>Gestão de preferências de consentimento</li>
                    <li>Manutenção de sessões seguras</li>
                    <li>Proteção contra ataques informáticos</li>
                    <li>Funcionalidades básicas de navegação</li>
                  </ul>
                </div>
                <div
                  className="rounded-lg px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.03)", borderLeft: "3px solid rgba(255,255,255,0.10)" }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: "#e8edf5" }}>Cookies Analíticos</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-xs">
                    <li>Análise de padrões de uso do site</li>
                    <li>Identificação de conteúdos mais relevantes</li>
                    <li>Medição do desempenho das páginas</li>
                    <li>Estatísticas agregadas e anonimizadas</li>
                  </ul>
                </div>
              </div>
            </section>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0ef2c8" }}>
                3. Serviços de Terceiros
              </h2>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#6b7e9a" }}>
                <p>
                  <strong style={{ color: "#e8edf5" }}>Google Analytics:</strong> Utilizamos esta ferramenta com configurações avançadas de privacidade, incluindo anonimização completa de endereços IP e desativação da partilha de dados com outros serviços Google.
                </p>
                <p>
                  <strong style={{ color: "#e8edf5" }}>Ausência de Publicidade:</strong> O nosso site não utiliza cookies de publicidade dirigida, retargeting nem qualquer forma de rastreamento comportamental entre diferentes sites.
                </p>
              </div>
            </section>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0ef2c8" }}>
                4. Controlo e Gestão
              </h2>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#6b7e9a" }}>
                <p>Pode controlar e gerir os cookies através de várias opções:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Painel de preferências de cookies disponível no nosso site</li>
                  <li>Configurações de privacidade do seu navegador</li>
                  <li>Extensões de navegador para bloqueio de cookies</li>
                  <li>Ferramentas de exclusão voluntária específicas do Google Analytics</li>
                </ul>
                <div
                  className="p-3 rounded-lg text-xs"
                  style={{ background: "rgba(14,242,200,0.05)", border: "1px solid rgba(14,242,200,0.12)" }}
                >
                  Nota: A desativação de cookies essenciais pode afetar o correto funcionamento de algumas funcionalidades do site.
                </div>
              </div>
            </section>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0ef2c8" }}>
                5. Medidas de Segurança
              </h2>
              <div className="text-sm leading-relaxed" style={{ color: "#6b7e9a" }}>
                <p>
                  Todos os cookies implementados no ptvipsitesdeapostas.com estão protegidos com flags de segurança avançadas (Secure, HttpOnly, SameSite=Strict), garantindo proteção contra vulnerabilidades como XSS e CSRF. Não armazenamos nenhuma informação sensível ou pessoalmente identificável através de cookies.
                </p>
              </div>
            </section>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0ef2c8" }}>
                6. Atualizações da Política
              </h2>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#6b7e9a" }}>
                <p>
                  Esta política pode ser atualizada periodicamente para refletir alterações nas nossas práticas ou requisitos legais. Recomendamos a consulta regular desta página para se manter informado sobre como protegemos a sua privacidade.
                </p>
                <p className="font-mono text-xs" style={{ color: "#3d5068" }}>Última atualização: 2026</p>
              </div>
            </section>

          </div>
        </div>
      </main>
    </>
  )
}
