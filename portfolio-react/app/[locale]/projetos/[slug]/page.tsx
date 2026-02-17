'use client'

import projectsData from "../data/projects.json"

import { ProjectHero } from "../../../components/ProjectHero"
import { ProjectProblem } from "../../../components/ProjectProblem"
import { ProjectSolution } from "../../../components/ProjectSolution"
import { ProjectImpact } from "../../../components/ProjectImpact"
import { ProjectTechStack } from "../../../components/ProjectTechStack"
import { ProjectMedia } from "../../../components/ProjectMedia"

import { use } from 'react'
import { useTranslations } from 'next-intl';
import { Link } from "../../../../i18n/navigation";

interface ProjectPageProps {
  // In Next.js 15+, params is a Promise
  params: Promise<{ slug: string }>
}

export default function ProjectPage(props: ProjectPageProps) {
  // Unwrap params using React.use()
  const params = use(props.params)
  const projectBase = projectsData.projetos.find(p => p.slug === params.slug)
  
  const tp = useTranslations('projects.items');
  const tNav = useTranslations('projectPage');

  if (!projectBase) {
    return <div>Projeto não encontrado</div>
  }

  // Map JSON ID to the translation key prefix (e.g. "pjt1")
  const pKey = projectBase.id;
  
  // Get translated content
  const project = {
    ...projectBase,
    titulo: tp(`${pKey}.title`),
    subtitulo: tp(`${pKey}.subtitle`),
    problema: tp(`${pKey}.problem`),
    solucao: tp(`${pKey}.solution`),
  };

  return (
    <div className="bg-zinc-950 text-white pb-10">
      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Link 
          href="/#projetos" 
          className="text-cyan-400 hover:text-cyan-300 transition flex items-center gap-2 mb-4"
        >
          {tNav('backToProjects')}
        </Link>
      </div>

      <ProjectHero 
        titulo={project.titulo}
        subtitulo={project.subtitulo}
        descricaoCurta={tp(`${pKey}.subtitle`)}
      />
      <ProjectMedia 
        imagens={projectBase.imagens}
        video={(projectBase as { video?: string }).video}
        titulo={project.titulo}
      />
      <ProjectProblem problema={project.problema} />
      <ProjectSolution 
        solucao={project.solucao}
        tecnologias={projectBase.tecnologias}
      />
      <ProjectImpact 
        impacto={tp.raw(`${pKey}.impact`) as string[]}
        metricas={projectBase.metricas as unknown as Record<string, string | number>}
      />
      <ProjectTechStack 
        tecnologias={projectBase.tecnologias}
        categorias={projectBase.categorias}
        desafios={tp.raw(`${pKey}.challenges`) as string[]}
      />
    </div>
  )
}