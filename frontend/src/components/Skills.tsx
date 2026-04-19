import { motion } from 'framer-motion';
import { Network, Bug, ShieldAlert, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Testing',
    icon: Bug,
    skills: ['VAPT Specialist', 'App_Sec_Assurance', 'API_Security_Audit'],
    color: 'text-cyber-cyan',
    bgColor: 'bg-cyber-cyan/10',
    borderColor: 'border-cyber-cyan/30'
  },
  {
    title: 'Offensive',
    icon: ShieldAlert,
    skills: ['Ethical_Hacking', 'threat_modeling', 'exploitation_dev'],
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30'
  },
  {
    title: 'Defense',
    icon: Network,
    skills: ['Incident_Handling', 'malware_analysis', 'soc_operations'],
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30'
  },
  {
    title: 'Forensics',
    icon: Globe,
    skills: ['Digital_Forensics', 'evidence_recovery', 'fraud_investigation'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30'
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-cyber-black overflow-hidden relative">
      {/* Decorative background text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] font-mono text-[150px] font-bold select-none leading-none -translate-x-10">
        SKILLS_MATRIX_0101
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-20">
          <span className="font-mono text-cyber-cyan text-sm mb-2 font-bold tracking-[0.3em]">// CAPABILITIES_EXPOSURE</span>
          <h2 className="text-5xl font-bold italic tracking-tighter">Technical <span className="text-cyber-cyan glow-text">Arsenal</span></h2>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-x-20 md:gap-y-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative w-72 h-80 group`}
            >
              {/* Hex-like boundary box */}
              <div className={`absolute inset-0 ${category.bgColor} ${category.borderColor} border-2 transform rotate-3 transition-transform group-hover:rotate-0 duration-500 rounded-2xl`}></div>
              
              <div className="absolute inset-0 bg-cyber-gray/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center group-hover:border-cyber-cyan/50 transition-all duration-500">
                <div className={`p-4 rounded-xl bg-cyber-black mb-6 border border-white/10 group-hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all`}>
                  <category.icon className={`w-10 h-10 ${category.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 font-mono tracking-tighter uppercase">{category.title}</h3>
                
                <div className="space-y-2 w-full">
                  {category.skills.map((skill) => (
                    <div key={skill} className="text-[11px] font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 pb-1">
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-mono text-cyber-cyan animate-pulse">SYSTEMS_OPTIMIZED_✓</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Stats Bar */}
        <div className="mt-32 p-8 glass-card border-white/5 flex flex-wrap justify-between items-center gap-8">
          {[
            { label: 'THREATS_DEFLECTED', value: '742' },
            { label: 'UAC_BYPASS_EXP', value: '4_PTS' },
            { label: 'ZERO_DAY_READY', value: 'SYNCED' },
            { label: 'KERNEL_LVL_ACCESS', value: 'GRANTED' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-[10px] font-mono text-gray-600 mb-1">{stat.label}</span>
              <span className="text-xl font-bold text-cyber-cyan font-mono">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
