interface ProjectTechStackProps {
  tecnologias: string[]
  categoria: string
  desafios: string
}

export function ProjectTechStack({ tecnologias, categoria, desafios }: ProjectTechStackProps) {
  return (
    <section className="bg-zinc-900/50 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Detalhes Técnicos</h2>

        {/* Categoria */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-3 text-cyan-400">Categoria</h3>
          <p className="text-lg text-zinc-300 capitalize">{categoria}</p>
        </div>

        {/* Stack de tecnologias */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">Stack Técnico</h3>
          <div className="flex flex-wrap gap-3">
            {tecnologias.map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:border-cyan-400 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Desafios */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-cyan-400">Desafios Técnicos</h3>
          <p className="text-zinc-300 leading-relaxed">
            {desafios}
          </p>
        </div>
      </div>
    </section>
  )
}