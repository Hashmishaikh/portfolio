import { motion } from 'framer-motion';
import { Github, Eye, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export const Projects = () => {
  // Show only the first 3 projects on the home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-cyber-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <span className="font-mono text-cyber-cyan text-sm mb-2 tracking-[0.2em] font-bold">// PROJECT_ARCHIVE</span>
          <h2 className="text-4xl font-bold">Recent <span className="text-cyber-cyan glow-text italic">Operations</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group border border-cyber-cyan/10 hover:border-cyber-cyan/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,242,255,0.1)]"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent opacity-80"></div>
                
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-cyber-black/80 border border-white/10 text-[10px] text-cyber-cyan font-mono uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-mono group-hover:text-cyber-cyan transition-colors">
                  {project.title.split(': ')[1]}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-[10px] font-mono text-white hover:text-cyber-cyan transition-colors">
                    <Github className="w-3.5 h-3.5" />
                    REPOSITORY
                  </a>
                  <a href={project.link} className="flex items-center gap-2 text-[10px] font-mono text-white hover:text-cyber-cyan transition-colors ml-auto">
                    <Eye className="w-3.5 h-3.5" />
                    PREVIEW
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/projects" className="cyber-button inline-flex items-center gap-2 text-sm px-10 py-3 group">
            <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            ACCESS_FULL_PORTFOLIO
          </Link>
        </div>
      </div>
    </section>
  );
};
