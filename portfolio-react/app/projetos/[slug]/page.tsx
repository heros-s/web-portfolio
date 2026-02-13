'use client'

import projectsData from "@/app/projetos/data/projects.json"

import { ProjectHero } from "@/app/components/ProjectHero"
import { ProjectProblem } from "@/app/components/ProjectProblem"
import { ProjectSolution } from "@/app/components/ProjectSolution"
import { ProjectImpact } from "@/app/components/ProjectImpact"
import { ProjectTechStack } from "@/app/components/ProjectTechStack"

import { use } from 'react'

interface ProjectPageProps {
  // In Next.js 15+, params is a Promise
params: Promise<{ slug: string }>
}

export default function ProjectPage(props: ProjectPageProps) {
  // Unwrap params using React.use()
const params = use(props.params)
const project = projectsData.projetos.find(p => p.slug === params.slug)

if (!project) {
    return <div>Projeto não encontrado</div>
}

return (
    <div className="bg-zinc-950 text-white">
    <ProjectHero 
        titulo={project.titulo}
        subtitulo={project.subtitulo}
        descricaoCurta={project.descricaoCurta}
    />
    <ProjectProblem problema={project.problema} />
    <ProjectSolution 
        solucao={project.solucao}
        tecnologias={project.tecnologias}
    />
    <ProjectImpact 
        impacto={project.impacto}
        metricas={project.metricas as unknown as Record<string, string | number>}
    />
    <ProjectTechStack 
        tecnologias={project.tecnologias}
        categoria={project.categoria}
        desafios={project.desafios}
    />
    </div>
)
}