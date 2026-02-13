// COMPONENTE que recebe dados via props
interface ProjectCardProps {
    title: string;
    subtitle: string;
    category: string;
}

export function ProjectCard({ title, subtitle, category }: ProjectCardProps) {
    return (
        <div className="border border-zinc-800 p-6 rounded-2xl hover:border-cyan-400 transition text-center">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-zinc-400 mt-2">{subtitle}</p>
            <span className="text-xs text-cyan-400 mt-4 inline-block">{category}</span>
        </div>
    )
}