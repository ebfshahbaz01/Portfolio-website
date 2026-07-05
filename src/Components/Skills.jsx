import { useState, useEffect } from 'react';
import { Cpu, Layers, Layout, Compass, Sparkles, TrendingUp, } from 'lucide-react';

const SKILL_CATEGORIES = {
  frontend: {
    title: "Frontend Core",
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    skills: [
      { name: "React / Next.js", level: 94, fluidColor: "from-emerald-500 to-teal-400", desc: "Server components, state design, SSR" },
      { name: "TypeScript", level: 88, fluidColor: "from-teal-500 to-emerald-400", desc: "Strict typing, complex interfaces, generics" },
      { name: "JavaScript (ES6+)", level: 95, fluidColor: "from-emerald-400 to-teal-500", desc: "Asynchronous patterns, memory optimization" },
    ]
  },
  design: {
    title: "UI / UX & Styling",
    icon: <Layout className="w-5 h-5 text-emerald-400" />,
    skills: [
      { name: "Tailwind CSS", level: 96, fluidColor: "from-emerald-400 to-emerald-600", desc: "Custom configurations, utility-first scaling" },
      { name: "Framer Motion", level: 85, fluidColor: "from-teal-400 to-emerald-500", desc: "Physics-based micro-interactions, spring layouts" },
      { name: "Figma to Code", level: 90, fluidColor: "from-emerald-500 to-teal-600", desc: "Pixel-perfect spatial design, design systems" },
    ]
  },
  backend: {
    title: "Architecture & Tools",
    icon: <Layers className="w-5 h-5 text-emerald-400" />,
    skills: [
      { name: "Node.js & APIs", level: 82, fluidColor: "from-teal-600 to-emerald-500", desc: "RESTful designs, Express architecture" },
      { name: "PostgreSQL & SQL", level: 78, fluidColor: "from-emerald-600 to-teal-400", desc: "Relational modeling, query optimization" },
      { name: "Git & CI/CD", level: 87, fluidColor: "from-emerald-500 to-teal-500", desc: "Advanced branching workflows, pipeline build" },
    ]
  }
};

// Points representing the flowing river timeline peaks
const RIVER_FLOW_POINTS = [
  { x: 50, y: 150, label: "UI Concept", value: 85, metric: "Fluid Design" },
  { x: 180, y: 80, label: "Core Dev", value: 95, metric: "Architecture" },
  { x: 320, y: 190, label: "State Flow", value: 90, metric: "Zustand & Context" },
  { x: 480, y: 60, label: "API Stream", value: 82, metric: "Data Fetching" },
  { x: 620, y: 160, label: "Animations", value: 92, metric: "Framer Waves" },
  { x: 750, y: 90, label: "Deployment", value: 89, metric: "Vercel / Edge" }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [pulseWave, setPulseWave] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseWave((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="scroll-mt-28 min-h-screen bg-slate-950 text-slate-100 py-20 px-4 md:px-8 relative overflow-hidden">
      
      {/* Dynamic fluid CSS injection for water-wave simulation */}
      <style>{`
        @keyframes liquidWave {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .liquid-layer {
          animation: liquidWave 8s infinite linear;
        }
        .liquid-layer-back {
          animation: liquidWave 12s infinite linear;
        }
        .river-pulse-glow {
          filter: drop-shadow(0 0 12px rgba(16, 185, 129, 0.6));
        }
      `}</style>

      {/* Subtle Background Emerald Gradients */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {}
        <div className="mb-14 text-center lg:text-left">
          <span className="text-sm font-semibold tracking-widest text-emerald-400 uppercase flex items-center justify-center lg:justify-start gap-2">
            <Sparkles className="w-4 h-4 animate-pulse" /> My Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">
            Skills <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Ocean</span>
          </h2>
          <p className="text-slate-400 mt-3 text-lg max-w-2xl">
            A dynamic telemetry map showcasing technical competencies, system performance metrics, and liquid fluid capabilities.
          </p>
        </div>

        {/* Master Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl p-6 rounded-3xl hover:border-emerald-500/20 transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-emerald-400 animate-spin" style={{ animationDuration: '8s' }} />
                  River of Flow & Development Velocity
                </h3>
                <p className="text-xs text-slate-500">Smooth navigation mapping from abstract layouts to deployment pipelines.</p>
              </div>
              <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-900/60 px-3 py-1.5 rounded-xl text-xs text-emerald-400 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block mr-1"></span>
                LIVE METRICS
              </div>
            </div>

            {/* River Flow SVG Canvas */}
            <div className="relative bg-slate-950/60 border border-slate-900/80 rounded-2xl p-4 overflow-hidden">
              <svg 
                viewBox="0 0 800 240" 
                className="w-full h-auto"
                style={{ overflow: 'visible' }}
              >
                {/* SVG Definitions for Complex Gradients and Glows */}
                <defs>
                  <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#047857" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                  </linearGradient>
                  
                  <linearGradient id="riverStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="50%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>

                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Grid guidelines */}
                <line x1="0" y1="60" x2="800" y2="60" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="120" x2="800" y2="120" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="180" x2="800" y2="180" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />

                {/* Curved flow region (River body) */}
                <path
                  d={`
                    M 0 240
                    C 100 240, 40 150, 50 150
                    C 100 150, 130 80, 180 80
                    C 240 80, 260 190, 320 190
                    C 390 190, 410 60, 480 60
                    C 540 60, 570 160, 620 160
                    C 680 160, 700 90, 750 90
                    C 780 90, 800 240, 800 240
                    Z
                  `}
                  fill="url(#riverGradient)"
                />

                {/* Core flow spline (River currents) */}
                <path
                  d={`
                    M 0 160
                    C 40 160, 40 150, 50 150
                    C 100 150, 130 80, 180 80
                    C 240 80, 260 190, 320 190
                    C 390 190, 410 60, 480 60
                    C 540 60, 570 160, 620 160
                    C 680 160, 700 90, 750 90
                    C 780 90, 800 100, 800 100
                  `}
                  fill="none"
                  stroke="url(#riverStrokeGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Flowing current micro-strokes */}
                <path
                  d={`
                    M 50 150 C 100 150, 130 80, 180 80 C 240 80, 260 190, 320 190
                  `}
                  fill="none"
                  stroke="#6ee7b7"
                  strokeWidth="1.5"
                  strokeDasharray="15 150"
                  strokeDashoffset={pulseWave * -3}
                />
                <path
                  d={`
                    M 320 190 C 390 190, 410 60, 480 60 C 540 60, 570 160, 620 160 C 680 160, 700 90, 750 90
                  `}
                  fill="none"
                  stroke="#a7f3d0"
                  strokeWidth="1.5"
                  strokeDasharray="25 200"
                  strokeDashoffset={pulseWave * -4}
                />

                {/* Graph nodes along the river */}
                {RIVER_FLOW_POINTS.map((pt, index) => {
                  const isHovered = hoveredPoint === index;
                  return (
                    <g 
                      key={index} 
                      className="cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredPoint(index)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    >
                      {/* Active/Passive Node Halo */}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isHovered ? 16 : 8}
                        className={`transition-all duration-300 ${isHovered ? 'fill-emerald-500/25 stroke-emerald-400' : 'fill-slate-900 stroke-emerald-500'}`}
                        strokeWidth={isHovered ? 3 : 2}
                        filter={isHovered ? "url(#glow)" : ""}
                      />
                      {/* Innermost Core Dot */}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="3"
                        fill={isHovered ? "#fff" : "#10b981"}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Dynamic node tooltip popovers */}
              <div className="absolute inset-x-4 bottom-4 flex justify-between items-center bg-slate-900/80 border border-slate-800/80 backdrop-blur-md py-3 px-4 rounded-xl min-h-[64px]">
                {hoveredPoint !== null ? (
                  <div className="flex justify-between w-full items-center animate-fade-in">
                    <div>
                      <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">Phase Metric</span>
                      <h4 className="text-sm font-bold text-white">{RIVER_FLOW_POINTS[hoveredPoint].label}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-slate-400 block">{RIVER_FLOW_POINTS[hoveredPoint].metric}</span>
                      <span className="text-base font-bold text-emerald-400">{RIVER_FLOW_POINTS[hoveredPoint].value}% Performance</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <TrendingUp className="w-4 h-4 text-emerald-500 animate-bounce" />
                    <span>Hover over any river node to examine phase efficiencies.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Dashboard category switches */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {Object.keys(SKILL_CATEGORIES).map((catKey) => {
                const isActive = activeCategory === catKey;
                return (
                  <button
                    key={catKey}
                    onClick={() => setActiveCategory(catKey)}
                    className={`flex items-center justify-center gap-2 p-3 rounded-2xl border text-sm font-semibold transition-all duration-300 ${
                      isActive 
                        ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]' 
                        : 'bg-slate-900/20 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                    }`}
                  >
                    {SKILL_CATEGORIES[catKey].icon}
                    <span className="hidden sm:inline">{SKILL_CATEGORIES[catKey].title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl p-6 rounded-3xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-emerald-500/10 rounded-xl">
                    {SKILL_CATEGORIES[activeCategory].icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{SKILL_CATEGORIES[activeCategory].title}</h3>
                    <p className="text-xs text-slate-500">Fluid storage capacities (Proficiency levels)</p>
                  </div>
                </div>
              </div>

              {/* Fluid-Wave Skill Rows */}
              <div className="space-y-6">
                {SKILL_CATEGORIES[activeCategory].skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="p-4 bg-slate-950/50 border border-slate-900/80 rounded-2xl flex items-center justify-between gap-4 group hover:border-emerald-500/10 transition-colors"
                  >
                    {/* Left Details block */}
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <h4 className="font-bold text-base text-slate-100 group-hover:text-emerald-400 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-xs font-mono font-semibold text-emerald-400/80">{skill.level}%</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">{skill.desc}</p>
                    </div>

                    {/* Right Liquid wave gauge */}
                    <div className="relative w-16 h-16 rounded-full border border-slate-800 bg-slate-900 overflow-hidden flex items-center justify-center shrink-0">
                      {/* Fluid wave back layer */}
                      <div 
                        className="liquid-layer-back absolute w-32 h-32 rounded-[42%] bg-emerald-700/20 left-1/2 bottom-0 transition-all duration-1000"
                        style={{
                          transformOrigin: '50% 50%',
                          transform: `translate(-50%, ${100 - skill.level}%) rotate(180deg)`
                        }}
                      />
                      {/* Fluid wave front layer */}
                      <div 
                        className="liquid-layer absolute w-32 h-32 rounded-[38%] bg-gradient-to-t from-emerald-600/60 to-teal-500/40 left-1/2 bottom-0 transition-all duration-1000"
                        style={{
                          transformOrigin: '50% 50%',
                          transform: `translate(-50%, ${100 - skill.level}%) rotate(0deg)`
                        }}
                      />
                      {/* Value print overlay */}
                      <span className="relative z-10 font-mono text-sm font-bold text-white">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Dashboard Statistics footer */}
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/20 border border-slate-800/80 p-5 rounded-3xl flex items-center gap-4">
              <div className="p-3 bg-emerald-950/40 border border-emerald-900/80 rounded-2xl shrink-0">
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-200">Fluid Adaptability</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Highly dynamic components with rapid runtime rendering.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}