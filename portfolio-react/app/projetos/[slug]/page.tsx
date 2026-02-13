'use client'
import projectsData from "@/app/projetos/data/projects.json"
import Link from "next/link"

interface ProjectPageProps {
    params: { slug: string }
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projectsData.projetos.find(p => p.slug === params.slug)

    if (!project) {
        return (
            <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
                    <p className="text-zinc-400">Voltando para a home...</p>
                    <Link href="/" className="mt-6 inline-block px-6 py-3 bg-cyan-500 text-black rounded-lg">
                        Voltar
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div className="min-h-screen bg-zinc-950 text-white">
{/* TODO: Estrutura da página vai aqui */}
<h1>{project.titulo}</h1>
</div>
)
}