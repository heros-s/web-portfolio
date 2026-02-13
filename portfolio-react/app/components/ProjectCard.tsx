// COMPONENTE que recebe dados via props
import Link from "next/link"

interface ProjectCardProps {
    title: string;
    subtitle: string;
    categories: string[]; // Aceita array de categorias
    slug: string;
}

export function ProjectCard({ title, subtitle, categories, slug }: ProjectCardProps) {
    return (
        <Link href={`/projetos/${slug}`}>  {/* ✅ WRAP COM LINK */}
        <div className="w-full sm:w-[350px] border border-zinc-800 p-5 rounded-2xl hover:border-cyan-400 transition-all text-center">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-zinc-400 mt-2">{subtitle}</p>
            <div className="flex gap-2 justify-center mt-3 flex-wrap">
                {categories.map((cat, index) => (
                    <span key={index} className="text-xs text-cyan-400 px-2 py-1 bg-cyan-400/10 rounded-full">
                        {cat}
                    </span>
                ))}
            </div>
        </div>
        </Link>
    )
}