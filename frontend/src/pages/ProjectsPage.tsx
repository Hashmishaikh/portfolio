import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Eye, ArrowLeft, Terminal } from 'lucide-react';
import { projects } from '../data/projects';
import { SidebarStats } from '../components/SidebarStats';
import { TerminalDrawer } from '../components/TerminalDrawer';
import { Header } from '../components/Header';

const ProjectsPage = () => {
  return (
    <div className="bg-cyber-black min-h-screen text-gray-300 antialiased selection:bg-cyber-cyan/30 selection:text-cyber-cyan">
      {/* Background Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#00f2ff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
      </div>

      <Header />
      <SidebarStats />
      <TerminalDrawer />

      <main className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <Link to="/" className="group flex items-center gap-2 text-cyber-cyan font-mono text-sm hover:glow-text transition-all">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              BACK_TO_HOME
            </Link>
            <div className="h-px flex-1 bg-gradient-to-r from-cyber-cyan/30 to-transparent"></div>
          </motion.div>

          <header className="mb-20">
            <span className="font-mono text-cyber-cyan text-sm mb-2 block tracking-[0.3em] font-bold">// OPERATIONS_EXPANSION_NODE</span>
            <h1 className="text-5xl md:text-7xl font-bold italic tracking-tighter">Full <span className="text-cyber-cyan glow-text">Portfolio</span></h1>
            <p className="text-gray-500 font-mono mt-4 max-w-2xl">
              Complete archive of offensive and defensive operations, security research, and technical implementations.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group border border-white/5 hover:border-cyber-cyan/50 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-90"></div>
                  
                  <div className="absolute top-4 left-4">
                    <div className="bg-cyber-black/80 backdrop-blur-md border border-white/10 p-2 rounded-lg">
                      <Terminal className="w-4 h-4 text-cyber-cyan" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-cyber-black/80 border border-white/10 text-[10px] text-cyber-cyan font-mono uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 font-mono group-hover:text-cyber-cyan transition-colors">
                    {project.title.split(': ')[1]}
                  </h3>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-6 border-t border-white/5 pt-6">
                    <a href={project.github} className="flex items-center gap-2 text-xs font-mono text-white hover:text-cyber-cyan transition-colors">
                      <Github className="w-4 h-4" />
                      SOURCE_CODE
                    </a>
                    <a href={project.link} className="flex items-center gap-2 text-xs font-mono text-white hover:text-cyber-cyan transition-colors ml-auto">
                      <Eye className="w-4 h-4" />
                      DEPLOYMENT
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <footer className="mt-32 pt-12 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            <div>© {new Date().getFullYear()} RAHUL_GUPTA_SEC_OPS</div>
            <div className="flex gap-8">
              <span>STATUS: ENCRYPTED</span>
              <span>CONNECTION: STABLE</span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
