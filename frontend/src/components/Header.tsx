import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-cyber-black/80 backdrop-blur-lg border-white/10 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
          onClick={() => {
            if (isHomePage) window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Shield className="w-8 h-8 text-cyber-cyan glow-text group-hover:scale-110 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="font-mono text-xl font-bold tracking-tighter text-white">
              RAHUL<span className="text-cyber-cyan">_GUPTA</span>
            </span>
            <span className="text-[8px] font-mono text-cyber-cyan tracking-[0.3em] opacity-70">SEC_OP_READY</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="nav-link text-gray-400 font-mono text-sm hover:text-cyber-cyan transition-colors"
            >
              <span className="text-cyber-cyan/50 mr-1">{i}.</span>
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="https://www.linkedin.com/in/rahul-gupta-677a401b3/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="p-2 rounded-full border border-white/10 text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan/30 transition-all"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>
          <Link
            to="/#contact"
            className="cyber-button text-xs py-2 px-4 ml-2"
          >
            ENCRYPTED_MESSAGE
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-cyber-cyan"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-cyber-black/95 border-b border-white/10"
        >
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-mono text-gray-300 hover:text-cyber-cyan transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/rahul-gupta-677a401b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-mono text-gray-300 hover:text-cyber-cyan transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Linkedin className="w-5 h-5" />
              LINKEDIN_PROFILE
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};
