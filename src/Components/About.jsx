
function About() {
    const TechTags=['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Node.js', 
        'System Designing', 'REST APIs', 'MongoDB','Express','GSAP','Java','React Native', 
        'Redis','Docker','Jenkins','CI/CD Pipelines','AI Modlings','Google Cloud Computing','+10 others'];
    return (
        <section id="#About" className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center py-20 px-6 relative overflow-hidden">
            <div className="max-w-6xl w-full mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-16 text-center md:text-left">
                    <span className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
                        Get to know me
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">
                        About <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Myself</span>
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Main Bio Card (Takes up 2 columns) */}
                    <div className="md:col-span-2 bg-slate-900/50 border border-slate-850 backdrop-blur-xl p-8 rounded-3xl flex flex-col justify-between hover:border-emerald-950/40 transition-colors duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Who I Am</h3>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-medium">
                                I am a Frontend Engineer and UI/UX developer dedicated to crafting immersive, pixel-perfect digital experiences that leave a lasting impression.
                            </p>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                I thrive at the intersection of logical structure and creative design. For me, coding isn't just about putting elements on a screen—it's about architecture, fluid movement, and optimizing performance so users experience zero friction. I specialize in transforming complex concepts into clean, maintainable, and highly responsive web products.
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                When I’m not deep in code review or adjusting micro-interactions, I’m usually experimenting with upcoming web tech, analyzing visual layouts, or sharing ideas with the open-source community.
                            </p>
                        </div>

                        {/* Quick Stats Line */}
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 mt-8">
                            <div>
                                <p className="text-3xl font-bold text-emerald-400">4+</p>
                                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Years Exp.</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-teal-400">10+</p>
                                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Projects Done</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-emerald-300">100%</p>
                                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Core Tech Stack Card (Takes up 1 column) */}
                    <div className="bg-slate-900/50 border border-slate-850 backdrop-blur-xl p-8 rounded-3xl flex flex-col justify-between hover:border-emerald-950/40 transition-colors duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-white">Core Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {TechTags.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 bg-slate-800/40 border border-slate-700/50 rounded-xl text-sm font-medium text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action/Link block */}
                        <div className="mt-8 pt-6 border-t border-slate-800/80">
                            <a
                                href="#contact-us"
                                className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group"
                            >
                                Let's build something together
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default About;