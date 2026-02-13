interface ProjectMediaProps {
  imagem: string
  video?: string
  titulo: string
}

export function ProjectMedia({ imagem, video, titulo }: ProjectMediaProps) {
  return (
    <section className="bg-zinc-950 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Container da Imagem */}
        <div className="relative group overflow-hidden rounded-2xl border border-zinc-800 shadow-xl aspect-video lg:aspect-auto h-full min-h-[300px]">
          <img 
            src={imagem} 
            alt={`Imagem do projeto ${titulo}`} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <span className="text-white font-medium text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
              Visualização do Projeto
            </span>
          </div>
        </div>

        {/* Container do Vídeo */}
        <div className="relative rounded-2xl border border-zinc-800 shadow-xl overflow-hidden aspect-video bg-zinc-900 flex items-center justify-center">
          {video ? (
            <iframe
              width="100%"
              height="100%"
              src={video}
              title={`Vídeo do projeto ${titulo}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          ) : (
            <div className="flex flex-col items-center justify-center text-zinc-500 p-8 text-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mb-4 opacity-50"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <path d="m9 8 7 4-7 4Z" />
              </svg>
              <p className="text-sm">Vídeo demonstrativo indisponível</p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
