'use client' // Necesseário para usar hooks como useState
import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { useState } from "react";
import { ProjectCard } from './components/ProjectCard'
import { AboutSection } from './components/AboutSection'

export default function Home() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Automação de Horas Extras',
      subtitle: 'n8n + Slack',
      category: 'Automação'
    },
    {
      id: 2,
      title: 'Dashboard Financeiro',
      subtitle: 'Power BI',
      category: 'BI'
    },
    {
      id: 3,
      title: 'Pipeline de Dados de Mailings',
      subtitle: 'Python + ETL',
      category: 'Data'
    },

    {
      id: 4,
      title: 'Dashboard de Monitoramento de Créditos de IA',
      subtitle: 'Power BI',
      category: 'BI'
    },

    {
      id: 5,
      title: 'Dashboard de Experiência do Colaborador',
      subtitle: 'eNPS + Power BI',
      category: 'BI'
    },

    {
      id: 6,
      title: 'Automação de Cálculo ESG',
      subtitle: 'Google Sheets + Apps Script (Javascript)',
      category: 'Automação'
    },

    {
      id: 7,
      title: 'Coleta de Dados Salariais',
      subtitle: 'Python + Selenium (Web Scraping)',
      category: 'Data'
    }
  ]

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* Seção de Projetos */}
      <section id="projetos" className="bg-zinc-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-10">Meus Projetos</h1>
          {/* Filtros */}
          <div className="flex gap-3 mb-10 flex-wrap">
            {['all', 'Automação', 'BI', 'Data'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg border transition ${filter === cat
                  ? 'bg-cyan-500 text-black border-cyan-500'
                  : 'border-zinc-700 hover:border-cyan-400'
                  }`}
              >
                {cat === 'all' ? 'Todos' : cat.toUpperCase()}
              </button>
            ))}
          </div>
          {/* Cards Filtrados */}
          <div className="flex flex-wrap justify-center gap-6">
            {filtered.map(project => (
              <ProjectCard
                key={project.id}
                title={project.title}
                subtitle={project.subtitle}
                category={project.category}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}