export function AboutSection() {
  return (
    <section id="sobre" className="bg-zinc-950 text-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Intro + Diferencial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Coluna Esquerda: Intro */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Business Analyst & Data Professional
            </h1>
            <p className="text-lg text-zinc-400 mb-6">
              Experiência sólida em automação, dados e BI. Mais de 1 ano transformando
              dados em decisões estratégicas.
            </p>
            <div className="flex gap-4">
              <a 
                href="#projetos" 
                className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition"
              >
                Ver Projetos
              </a>
            </div>
          </div>

          {/* Coluna Direita: Diferenciais */}
          <div className="space-y-4">
            <div className="border-l-4 border-cyan-400 pl-4">
              <h3 className="font-bold text-white mb-1">Pensamento Crítico</h3>
              <p className="text-sm text-zinc-400">
                Apoio nas tomadas de decisão estratégica com análises profundas
              </p>
            </div>
            <div className="border-l-4 border-cyan-400 pl-4">
              <h3 className="font-bold text-white mb-1">Soft Skills Avançadas</h3>
              <p className="text-sm text-zinc-400">
                Trabalho diário com diretoria, RH e alta gestão
              </p>
            </div>
            <div className="border-l-4 border-cyan-400 pl-4">
              <h3 className="font-bold text-white mb-1">Técnica Sólida</h3>
              <p className="text-sm text-zinc-400">
                BI, Programação, IA e Automações Integradas
              </p>
            </div>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-cyan-400 transition">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="text-xl font-bold mb-2">Automação</h3>
            <p className="text-sm text-zinc-400">n8n, Python, workflows inteligentes</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-cyan-400 transition">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-bold mb-2">Data & BI</h3>
            <p className="text-sm text-zinc-400">Power BI, ETL, análise e modelagem</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-cyan-400 transition">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-xl font-bold mb-2">Estratégia & IA</h3>
            <p className="text-sm text-zinc-400">Inteligência corporativa, decisões data-driven</p>
          </div>
        </div>

        {/* Timeline de Experiência */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Jornada Profissional</h2>
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex gap-4">
              <div className="w-2 bg-cyan-400 rounded shrink-0"></div>
              <div>
                <h3 className="font-bold text-lg">Estagiário de Business Analytics</h3>
                <p className="text-sm text-zinc-400">
                  Setor de Inteligência Corporativa (5 meses) • Empresa
                </p>
                <p className="text-sm text-zinc-300 mt-2">
                  Projetos com Diretoria, RH, Marketing, Financeiro e áreas estratégicas
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4">
              <div className="w-2 bg-cyan-400 rounded shrink-0"></div>
              <div>
                <h3 className="font-bold text-lg">Estagiário de Business Analytics</h3>
                <p className="text-sm text-zinc-400">
                  Setor Financeiro (5 meses) • Empresa
                </p>
                <p className="text-sm text-zinc-300 mt-2">
                  BI, análise de dados e eficiência operacional
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4">
              <div className="w-2 bg-cyan-400 rounded shrink-0"></div>
              <div>
                <h3 className="font-bold text-lg">Estagiário de Control Desk</h3>
                <p className="text-sm text-zinc-400">
                  Primeira posição (10 meses) • Empresa
                </p>
                <p className="text-sm text-zinc-300 mt-2">
                  Operações, controle e base para transição para dados
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formação Acadêmica */}
        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
          <h2 className="text-2xl font-bold mb-4">Formação Acadêmica</h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold">Bacharelado em Sistemas de Informação</h3>
              <p className="text-zinc-400">7º/8º Período • Universidade Positivo</p>
            </div>
            <div className="text-left md:text-right">
              <div className="text-4xl font-bold text-cyan-400">87.5%</div>
              <p className="text-sm text-zinc-400">Progresso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}