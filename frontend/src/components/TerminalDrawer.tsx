import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, ChevronRight, Command } from 'lucide-react';

const commands: Record<string, string> = {
  help: 'Available commands: about, projects, skills, contact, clear, status, exit',
  about: 'Identity: Rahul Gupta. Unit: Cyberpwn Technologies. Experience: Application Security Manager specializing in VAPT and Offensive Security.',
  projects: 'Loading operation logs... [Anuvadak Translation Tool, AppSec_Audits, Zero-Day Research Sentinel]',
  skills: 'Scanning capabilities... [VAPT, Offensive_Sec, Digital_Forensics, API_Security]',
  contact: 'Opening secure line to R. Gupta...',
  status: 'System: Operational. Unit_Match: RAHUL_G_SEC. Breach_Probability: 0.00%',
};

export const TerminalDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome to SECURE_PORTFOLIO v2.0.0', 'Type "help" to begin.']);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;

    let response = '';
    if (cmd === 'clear') {
      setHistory(['Terminal cleared.']);
    } else if (cmd === 'exit') {
      setIsOpen(false);
    } else {
      response = commands[cmd] || `Command not found: ${cmd}. Type "help" for a list of commands.`;
      setHistory((prev) => [...prev, `> ${input}`, response]);

      // Command-based navigation
      if (['about', 'projects', 'skills', 'contact'].includes(cmd)) {
        const element = document.getElementById(cmd);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setInput('');
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-cyber-cyan text-cyber-black rounded-full shadow-[0_0_20px_rgba(0,242,255,0.5)] hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <TerminalIcon className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-mono text-sm font-bold ml-1">
          INIT_TERMINAL
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-cyber-black/95 border-l border-cyber-cyan/30 z-[100] shadow-[-20px_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-cyber-gray/50">
                <div className="flex items-center gap-2 font-mono text-xs text-cyber-cyan">
                  <Command className="w-4 h-4" />
                  <span>SESSION_MANAGER // tty1</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Terminal Content */}
              <div className="flex-1 overflow-y-auto p-6 font-mono text-sm space-y-2 custom-scrollbar">
                {history.map((line, i) => (
                  <div 
                    key={i} 
                    className={line.startsWith('>') ? 'text-cyber-cyan' : 'text-gray-400'}
                  >
                    {line}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleCommand} className="p-4 border-t border-white/10 bg-cyber-gray/20">
                <div className="flex items-center gap-2 text-cyber-cyan">
                  <ChevronRight className="w-4 h-4" />
                  <input
                    autoFocus
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-700 font-mono"
                    placeholder="Enter command..."
                  />
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
