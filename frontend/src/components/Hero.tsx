import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Lock, Linkedin, ChevronDown } from 'lucide-react';

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = useMemo(() => [
    "Application Security Manager",
    "VAPT Specialist",
    "Offensive Security Consultant",
    "Forensic Analyst"
  ], []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 grayscale transition-all duration-1000 z-0"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070')` }}
      ></div>

      {/* Unique Data Web Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0 bg-cover bg-center mix-blend-screen opacity-30"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070')` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-transparent to-cyber-black z-1"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Profile Image with Cyber Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-48 h-48 mb-8 group"
          >
            <div className="absolute inset-0 rounded-full bg-cyber-cyan opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative w-full h-full rounded-full border-2 border-cyber-cyan/50 p-1 bg-cyber-black overflow-hidden transform group-hover:scale-105 transition-transform duration-500 shadow-[0_0_30px_rgba(0,242,255,0.2)]">
              <img
                src="/Images/liked.jpeg"
                alt="Rahul Gupta"
                className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Hexagonal decorative bits */}
            <div className="absolute -top-2 -right-2 w-8 h-8 border border-cyber-cyan/30 rounded-lg animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border border-cyber-cyan/20 rounded-lg animate-pulse delay-700"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-[10px] font-mono mb-6 uppercase tracking-[0.2em]"
          >
            <Lock className="w-3 h-3" />
            SESSION_ID: RAHUL_GUPTA_SEC_01
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white leading-none uppercase text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Rahul <span className="text-cyber-cyan bg-clip-text glow-text italic">Gupta</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl font-mono text-gray-500 mb-12 h-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-cyber-cyan opacity-50 mr-2">root@secure:~$</span>
            <span className="text-white">{displayText}</span>
            <span className="w-2 h-6 bg-cyber-cyan inline-block ml-1 animate-pulse align-middle"></span>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="https://www.linkedin.com/in/rahul-gupta-677a401b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button group flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span className="relative z-10">AUTHORIZE_ACCESS</span>
            </a>
            <a
              href="#about"
              className="px-8 py-3 bg-white/5 border border-white/10 text-white font-mono text-sm hover:bg-white/10 transition-all flex items-center gap-2 group"
            >
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              READ_LOGS
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative FUI elements */}
      <div className="absolute top-1/4 left-10 hidden xl:block opacity-10 group">
        <div className="font-mono text-[10px] text-cyber-cyan space-y-1">
          <div>// SCANNING_SECTORS...</div>
          <div className="w-32 h-1 bg-cyber-gray overflow-hidden">
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-1/2 h-full bg-cyber-cyan"
            />
          </div>
          <div>MEM_ADDR: 0x4F22B1</div>
        </div>
      </div>
    </section>
  );
};
