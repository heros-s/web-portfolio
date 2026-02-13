export function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-zinc-900/50">
            <div className="max-w-4xl mx-auto px-6">
                {/* Título Principal */}
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Tem um projeto em mente ou quer explorar oportunidades?
                </h2>

                {/* Subtítulo */}
                <p className="text-zinc-400 text-lg mt-4">
                    Estou aberto para freelances e colaborações em projetos. Vamos conversar sobre como posso ajudar você ou sua empresa.
                </p>

                {/* Formulário */}
                <form className="space-y-4 mt-8">
                    <div>
                        <input
                            type="text"
                            placeholder="Seu nome"
                            className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Assunto (freelance, proposta, parceria, etc)"
                            className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Descreva sua ideia, projeto ou oportunidade"
                            rows={5}
                            className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-lg text-white resize-none focus:outline-none focus:border-cyan-500 transition-all"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-cyan-500 text-black font-bold py-3 rounded-lg hover:bg-cyan-400 transition-all"
                    >
                        Enviar Mensagem
                    </button>
                    
                    {/* Parágrafo de Status */}
                    <p className="text-center text-sm text-zinc-500 mt-3">
                        Vou responder em até 24h
                    </p>
                </form>
            </div>
        </section>
    );
}