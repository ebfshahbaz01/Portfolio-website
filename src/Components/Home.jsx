import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import {Typewriter} from 'react-simple-typewriter'

function Home() {
  const Tags=['MongoDB', 'Express', 'React', 'Node.js','KafKa', 'Docker' ,'GCP', '+10 Others'];
  const Expertise=['MERN Stack Developer', 'System Designer', 'Open Source Contributor','Certified Google Cloud Enginner']
  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row items-center my-1.5 justify-between px-6 py-16 md:px-16 lg:px-24 gap-12 overflow-hidden bg-slate-950 text-white">
      
      {/* Background Radial Glow Effects for Visual Depth */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Left Section (Dynamic Copy & Intro) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 order-2 md:order-1 z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          AVAILABLE FOR FREELANCE &amp; ROLES
        </div>

        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-medium text-slate-400 font-mono">
            Hi, my name is
          </h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400">
            Shahbaz Ali
          </h1>
        </div>

        {/* Dynamic Typewriter Line */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-300 min-h-[40px] sm:min-h-[48px]">
          I am a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 border-r-2 border-emerald-400 pr-1 animate-none">
            <Typewriter
              words={Expertise}
              loop={true}
              cursor={false} // Custom border looks cleaner than default cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="text-slate-400 max-w-lg text-base md:text-lg leading-relaxed">
          Building high-performance web applications, robust microservices, and interactive frontend architectures with clean, scalable code.
        </p>

        {/* Tech Stack Mini-Badges */}
        <div className="flex flex-wrap gap-2 pt-2 max-w-md">
          {Tags.map((tech) => (
            <span key={tech} className="text-xs font-mono px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-slate-400">
              {tech}
            </span>
          ))}
        </div>

        {/* Call to Actions & Social Links */}
        <div className="flex flex-wrap items-center gap-6 pt-6 w-full sm:w-auto">
          <a 
            href="#projects" 
            className="w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 font-medium text-slate-950 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transform hover:-translate-y-0.5"
          >
            View My Work
          </a>
          
          <div className="flex items-center space-x-5 text-2xl text-slate-400 mx-auto sm:mx-0">
            <a href="https://github.com/ebfshahbaz01" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faGithub}  color="#333"  className='hover:text-emerald-400 md:text-2xl' />
            </a>
            <a href="https://linkedin.com/in/ebfshahbaz01" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faLinkedin} color="#333"  className='hover:text-emerald-400 md:text-2xl'/>
            </a>
            <a href="https://x.com/shahbazrahr_dev" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faXTwitter}  color="#333" className='hover:text-emerald-400 md:text-2xl' />
            </a>
            <a href="https://instagram.com/shahbaz_rahar53" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faInstagram}  color="#333" className='hover:text-emerald-400 md:text-2xl' />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section (Stunning Animated Card / Core Concept) */}
      <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2 z-10">
        <div className="relative w-full max-w-md aspect-square rounded-3xl imageapply bg-clip-border bg-blend-soft-light bg-slate-900/40 border border-slate-800/80 backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 hover:border-emerald-500/30">
          
          {/* Subtle moving accent light inside the card */}
          <div className="absolute -inset-px bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none" />
          
          {/* Header Window Controls */}
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/70"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/70"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/70"></span>
          </div>

          {/* Central Core Icon Feature */}
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />
              <FontAwesomeIcon icon={faCubes} className='text-6xl text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-teal-500 relative z-10'/>
            </div>
            <div className="space-y-1">
              <p className="text-emerald-400 font-mono text-sm tracking-wide">&lt;Interactive Architecture /&gt;</p>
              <p className="text-xs text-slate-500 font-mono">Status: Ready to deploy</p>
            </div>
          </div>

          {/* Code Footer Mockup */}
          <div className="font-mono text-xs text-slate-500 bg-slate-950/60 rounded-xl p-3 border border-slate-900">
            <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123; <span className="text-amber-400">name</span>: <span className="text-emerald-400">'Shahbaz'</span> &#125;;
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default Home;