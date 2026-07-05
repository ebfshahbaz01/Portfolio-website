import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'; 

import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('TRANSMITTING...');
    
    // Simulate API patch/post or hook your backend service here
    setTimeout(() => {
      setStatus('TRANSMISSION SUCCESSFUL');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact-us" className="scroll-mt-28 min-h-screen bg-slate-950 text-slate-100 py-20 px-4 md:px-8 relative overflow-hidden border-t border-slate-900">
      
      {/* Ambient background aura glows matching the portfolio section */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="mb-16">
          <span className="text-sm font-semibold tracking-widest text-emerald-400 uppercase flex items-center gap-2">
            <i className="fa-solid fa-satellite-dish animate-pulse"></i> Communication Portal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">
            Start a <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Collaboration</span>
          </h2>
          <p className="text-slate-400 mt-3 text-lg max-w-xl">
            Have a project in mind, looking to build custom architecture, or just want to talk code? Drop a message down into the pipeline.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Telemetry Cards & Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Info Card */}
            <div className="p-6 rounded-3xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-xl space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-800/60 pb-4">
                <span>COMMS HUB</span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE
                </span>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl group-hover:border-emerald-500/30 transition-colors duration-300 text-emerald-400">
                    <i className="fa-solid fa-envelope text-sm"></i>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-600 uppercase">Direct Secure Mail</span>
                    <a href="mailto:shahbazali078272@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors duration-300">
                      shahbazali078272@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl group-hover:border-emerald-500/30 transition-colors duration-300 text-emerald-400">
                    <i className="fa-solid fa-location-dot text-sm"></i>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-600 uppercase">Node Location</span>
                    <span className="text-sm font-semibold text-slate-200">
                      Raharki, Sindh, Pakistan
                    </span>
                  </div>
                </div>
              </div>

              {/* Connected Social Profiles */}
              <div className="pt-4 border-t border-slate-800/50">
                <span className="block text-[10px] font-mono text-slate-600 uppercase mb-3">Sync Social Networks</span>
                <div className="flex gap-3">
                  <a href="https://github.com/ebfshahbaz01" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-800 hover:border-emerald-500/30 hover:scale-110 text-slate-400 hover:text-white bg-slate-950/20 transition-all duration-300">
                    <FontAwesomeIcon icon={faGithub} className="text-base" />
                  </a>
                  <a href="https://linkedin.com/in/ebfshahbaz01" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-800 hover:border-emerald-500/30 hover:scale-110 text-slate-400 hover:text-white bg-slate-950/20 transition-all duration-300">
                    <FontAwesomeIcon icon={faLinkedin} className="text-base" />
                  </a>
                  <a href="https://X.com/shahbazrahr_dev" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-800 hover:border-emerald-500/30 hover:scale-110 text-slate-400 hover:text-white bg-slate-950/20 transition-all duration-300">
                    <FontAwesomeIcon icon={faXTwitter} className="text-base" />
                  </a>
                    <a href="https://instagram.com/shahbaz_rahar53" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-800 hover:border-emerald-500/30 hover:scale-110 text-slate-400 hover:text-white bg-slate-950/20 transition-all duration-300">
                      <FontAwesomeIcon icon={faInstagram} className="text-base" />
                    </a>
                </div>
              </div>
            </div>

            {/* Sub-Card Architecture Metric */}
            <div className="p-6 rounded-3xl border border-slate-800/80 bg-slate-900/10 backdrop-blur-xl flex justify-between items-center font-mono text-[10px] text-slate-500">
              <div>
                <span className="block text-slate-600 uppercase">ENCRYPTION MODE</span>
                <span className="text-slate-300">TLS 1.3 / AES-256</span>
              </div>
              <div className="border-l border-slate-800 pl-6">
                <span className="block text-slate-600 uppercase">AVG RESPONSE</span>
                <span className="text-slate-300">&lt; 8 Hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interaction Secure Form */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-3xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase text-slate-400 tracking-wider">Your Identity / Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Shahbaz Ali"
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 transition-colors duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase text-slate-400 tracking-wider">Return Endpoint / Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. shahbaz@xyz.com"
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-mono uppercase text-slate-400 tracking-wider">Subject Wire</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Project Architecture Proposal"
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-mono uppercase text-slate-400 tracking-wider">Message Payload</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Describe your project, stack requirements, or collaboration goals..."
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 transition-colors duration-300 resize-none"
                />
              </div>

              {/* Status & Submit Bar */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/50">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest min-h-[15px]">
                  {status}
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_20px_rgba(16,185,129,0.15)]"
                >
                  Transmit Packet
                  <FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;