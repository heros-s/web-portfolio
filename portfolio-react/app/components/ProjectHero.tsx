// Este é um exemplo para você entender o padrão
interface ProjectHeroProps {
  titulo: string
  subtitulo: string
  descricaoCurta: string
  imagem: string
}

export function ProjectHero({ 
  titulo, 
  subtitulo, 
  descricaoCurta, 
  imagem 
}: ProjectHeroProps) {
  return (
    <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${imagem})` }}>
      {/* Overlay escuro para ler o texto */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Conteúdo */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-6 max-w-4xl mx-auto">
        <p className="text-cyan-400 mb-4 text-sm uppercase">{subtitulo}</p>
        <h1 className="text-5xl font-bold mb-4">{titulo}</h1>
        <p className="text-xl text-zinc-300">{descricaoCurta}</p>
      </div>
    </section>
  )
}