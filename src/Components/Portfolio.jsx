import { useState, useEffect } from 'react';

function Portfolio() {
  useEffect(() => {
    // Check if FontAwesome is already loaded to avoid duplicates
    if (!document.getElementById('font-awesome-cdn')) {
      const link = document.createElement('link');
      link.id = 'font-awesome-cdn';
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(link);
    }
  }, []);

  const [filter, setFilter] = useState('all');

  const PROJECTS_DATA = [
    {
      id: 1,
      title: "NexusOps - Industrial IoT Hub",
      category: "fullstack",
      featured: true,
      desc: "An intelligent Industrial IoT management hub built using the MERN stack. Integrated with local AI (Ollama) to manage device logs, calculate real-time node performance metrics, and handle edge data streams natively.",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Ollama AI", "Tailwind CSS"],
      metrics: { left: "Local Inference: <30ms", right: "Active Streams: Live" },
      demoUrl: "https://nexus-ops-theta.vercel.app",
      githubUrl: "https://github.com/ebfshahbaz01/NexusOps",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "LifeSync - Kaggle Capstone",
      category: "fullstack",
      featured: false,
      desc: "A full-stack behavior tracking and lifecycle analytics ecosystem designed to compile user activity datasets, map structured workflows, and generate rich contextual dashboard visual clusters.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Data Metrics"],
      metrics: { left: "Data Engine: Optimized", right: "Sync Delay: <15ms" },
      demoUrl: "#", 
      githubUrl: "https://github.com/ebfshahbaz01/CapestonProject-LifeSync-KaggleProject",
      thumbnail: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "EmuCrack by Shabby",
      category: "security",
      featured: false,
      desc: "A specialized security tool designed for network environment testing and application logic analysis, built to identify operational vulnerabilities and map network layer weaknesses.",
      tags: ["C++", "Network Analysis", "Cybersecurity", "Shell Scripting"],
      metrics: { left: "Packet Trace: Clean", right: "Security Mode: Dev" },
      demoUrl: "#",
      githubUrl: "https://github.com/ebfshahbaz01/EMU-Crack-ByShabby.git",
      thumbnail: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Sindhi Version of C++",
      category: "education",
      featured: false,
      desc: "An open-source educational compiler wrapper designed to localize C++ programming paradigms into the Sindhi language, lowering the entry barrier for programming students in Sindh.",
      tags: ["C++", "Compiler Architecture", "Localization", "Open Source"],
      metrics: { left: "Syntax Map: Complete", right: "Target: BS-IT Students" },
      demoUrl: "#",
      githubUrl: "https://github.com/ebfshahbaz01/Sindhi-version-of-Cpp",
      thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop"
      
    },
    {
      id: 5,
      title: "Urdu Version of C++",
      category: "education",
      featured: false,
      desc: "A custom language parsing localization layout that translates fundamental C++ syntax parameters and library errors into localized Urdu, easing logical comprehension for native speakers.",
      tags: ["C++", "Parsing Logic", "Language Localization", "CLI Tools"],
      metrics: { left: "Keywords Bound: 100%", right: "Runtime: Standard" },
      demoUrl: "#",
      githubUrl: "https://github.com/ebfshahbaz01/Urdu-Version-of-cpp",
      thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(proj => proj.category === filter);

  return (
    <section id="projects" className="scroll-mt-28 min-h-screen bg-slate-950 text-slate-100 py-20 px-4 md:px-8 relative overflow-hidden">
      
      {/* Ambient background aura glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-sm font-semibold tracking-widest text-emerald-400 uppercase flex items-center gap-2">
              <i className="fa-solid fa-wand-magic-sparkles animate-pulse"></i> Engineering Showcase
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">
              Featured <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Creations</span>
            </h2>
            <p className="text-slate-400 mt-3 text-lg max-w-xl">
              An ecosystem of web applications combining spatial design principles, high-performance architecture, and visual mechanics.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 bg-slate-900/60 border border-slate-800/80 p-1.5 rounded-2xl backdrop-blur-md self-start md:self-end">
            {['all', 'fullstack', 'security', 'education'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                    : 'text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
              >
                {cat === 'all' ? 'All Work' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;
            return (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.04)] ${
                  isFeatured ? 'lg:col-span-12 grid grid-cols-1 lg:grid-cols-12' : 'lg:col-span-6'
                }`}
              >
                
                {/* Thumbnail Screen Container */}
                <div className={`relative aspect-video lg:aspect-auto border-b lg:border-b-0 border-slate-800/60 overflow-hidden shrink-0 ${
                  isFeatured ? 'lg:col-span-7 lg:min-h-[380px] lg:border-r border-slate-800/60' : 'w-full'
                }`}>
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content block */}
                <div className={`p-6 md:p-8 flex flex-col justify-between h-full ${
                  isFeatured ? 'lg:col-span-5' : ''
                }`}>
                  <div>
                    {/* Tags and Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 px-2.5 py-1 bg-emerald-950/40 border border-emerald-900/60 rounded-full">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                        <i className="fa-solid fa-terminal text-[11px]"></i>
                        Live Trace
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Technologies tech stack */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-[10px] font-semibold text-slate-300 bg-slate-950/80 border border-slate-800/80 px-2.5 py-1 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Micro dashboard metrics footer */}
                  <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex gap-4 font-mono text-[10px] text-slate-500">
                      <div>
                        <span className="block text-slate-600 uppercase">TELEMETRY A</span>
                        <span className="text-slate-300">{project.metrics.left}</span>
                      </div>
                      <div className="border-l border-slate-800 pl-4">
                        <span className="block text-slate-600 uppercase">TELEMETRY B</span>
                        <span className="text-slate-300">{project.metrics.right}</span>
                      </div>
                    </div>

                    {/* Links connected to GitHub repositories */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-slate-800 hover:border-emerald-500/30 text-slate-400 hover:text-white bg-slate-950/20 transition-all duration-300"
                        title="View Source on GitHub"
                      >
                        <i className="fa-brands fa-github text-[15px]"></i>
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-950/40 border border-emerald-900/60 hover:border-emerald-500 text-emerald-400 hover:text-white font-semibold text-xs transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.05)]"
                      >
                        Launch
                        <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* CTA Footer Block */}
        <div className="mt-12 bg-gradient-to-br from-slate-900/60 to-slate-950/20 border border-slate-800/80 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-emerald-500/20 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-950/40 border border-emerald-900/80 rounded-2xl shrink-0 text-emerald-400">
              <i className="fa-solid fa-code text-[22px]"></i>
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-200">Seeking custom architecture?</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed max-w-xl">
                I build clean structures, fluid animations, and highly optimize performance to bring design files to life with zero code friction. Let’s collaborate.
              </p>
            </div>
          </div>
          <a
            href="#contact-us"
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_20px_rgba(16,185,129,0.2)] shrink-0"
          >
            Start a Project
            <i className="fa-solid fa-arrow-trend-up"></i>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;