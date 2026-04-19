import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      <section id="about" className="py-24 border-y border-white/5 bg-cyber-black/50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-cyber-cyan/20 rounded-xl -rotate-3"></div>
              <div className="absolute -inset-4 border border-white/10 rounded-xl rotate-3"></div>
              <div className="aspect-video bg-cyber-gray rounded-xl overflow-hidden border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070" 
                  alt="Workspace" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-cyber-cyan/10 blend-overlay"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-cyber-cyan text-sm mb-2 block">// PERSPECTIVE</span>
              <h2 className="text-4xl font-bold mb-6">Beyond the <span className="text-cyber-cyan glow-text italic">Matrix</span></h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Security is not a final destination, it's a persistent state of vigilance. As an Associate Manager at Cyberpwn Technologies, I bridge the gap between complex application security assurance and practical offensive strategy.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                With deep expertise in identifying and mitigating vulnerabilities across diverse digital platforms, my focus is on Application Security Assurance and VAPT. I lead initiatives to strengthen organizational defenses against evolving cyber threats through rigorous penetration testing, threat modeling, and forensic analysis.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-white font-bold text-2xl font-mono">Cyberpwn</div>
                  <div className="text-[10px] text-gray-500 font-mono italic">CURRENT_OPERATIONAL_UNIT</div>
                </div>
                <div>
                  <div className="text-white font-bold text-2xl font-mono">CC_ISC2</div>
                  <div className="text-[10px] text-gray-500 font-mono italic">SEC_VERIFICATION_LEVEL</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cyber-black/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {['ISC2 CC', 'CEH', 'API_SECURITY', 'IIS_SPECIALIST', 'FORENSIC_ANALYST'].map(cert => (
              <div key={cert} className="px-4 py-2 bg-cyber-gray border border-white/5 rounded font-mono text-[10px] text-gray-500 hover:border-cyber-cyan/30 hover:text-cyber-cyan transition-all cursor-crosshair">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Skills />
      <Projects />
      <Contact />
    </motion.div>
  );
};

export default HomePage;
