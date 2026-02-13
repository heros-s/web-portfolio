// Estrutura do Navbar
export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <div className="font-bold text-white text-lg">
                    Heros Dinão
                </div>

                {/* Links */}
                <div className="flex gap-8 items-center">
                    <a href="#home" className="text-gray-300 hover:text-white">Início</a>
                    <a href="#projects" className="text-gray-300 hover:text-white">Projetos</a>
                    <a href="#about" className="text-gray-300 hover:text-white">Sobre</a>
                    <a href="#contact" className="px-4 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400">Contato</a>
                </div>
            </div>
        </nav>
    )
}