import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone, Github, Linkedin, Twitter, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import axios from 'axios';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:8080/api/contactus/contact-us', formData);
      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.response?.data?.message || 'TRANSMISSION_FAILED: Connection terminated.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-cyber-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_center,_var(--color-cyber-cyan)_0%,transparent_70%)] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-cyber-cyan text-sm mb-2 font-bold tracking-[0.2em]">// SECURE_CHANNEL</span>
            <h2 className="text-4xl font-bold mb-6">Establish <span className="text-cyber-cyan glow-text italic">Communication</span></h2>
            <p className="text-gray-400 mb-10 max-w-md">
              Whether you have a security inquiry, vulnerability report, or a project proposal, the channel is open. All communications are encrypted.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'EMAIL', value: 'contact@cyberpwn.com' },
                { icon: MapPin, label: 'LOCATION', value: 'Cyberpwn HQ, IN_REGION' },
                { icon: Phone, label: 'SECURE_VOICE', value: '+91 (REDACTED)_SEC' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="p-3 rounded bg-cyber-gray border border-white/5 group-hover:border-cyber-cyan/30 transition-colors">
                    <item.icon className="w-5 h-5 text-cyber-cyan" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-mono">{item.label}</div>
                    <div className="text-white font-mono">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full border border-white/5 hover:border-cyber-cyan/50 hover:bg-cyber-cyan/5 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-cyber-cyan" />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-gupta-677a401b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/5 hover:border-cyber-cyan/50 hover:bg-cyber-cyan/5 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyber-cyan" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full border border-white/5 hover:border-cyber-cyan/50 hover:bg-cyber-cyan/5 transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-cyber-cyan" />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border border-white/5 hover:border-cyber-cyan/20 transition-all duration-500 relative"
          >
            {/* Status Overlays */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-cyber-black/95 backdrop-blur-sm rounded-lg"
              >
                <CheckCircle2 className="w-16 h-16 text-cyber-cyan mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">BROADCAST_SUCCESS</h4>
                <p className="text-gray-400 font-mono text-sm">Target has been notified.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs text-cyber-cyan mb-2 tracking-widest">SENDER_NAME</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Identify yourself..."
                    className="w-full bg-cyber-black border border-white/10 rounded px-4 py-3 outline-none focus:border-cyber-cyan/50 focus:bg-cyber-cyan/5 transition-all text-white font-mono placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-cyber-cyan mb-2 tracking-widest">EMAIL_ADDRESS</label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="email@protocol.com"
                    className="w-full bg-cyber-black border border-white/10 rounded px-4 py-3 outline-none focus:border-cyber-cyan/50 focus:bg-cyber-cyan/5 transition-all text-white font-mono placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-cyber-cyan mb-2 tracking-widest">SUBJECT</label>
                <input
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text"
                  placeholder="Security audit / General inquiry"
                  className="w-full bg-cyber-black border border-white/10 rounded px-4 py-3 outline-none focus:border-cyber-cyan/50 focus:bg-cyber-cyan/5 transition-all text-white font-mono placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-cyber-cyan mb-2 tracking-widest">ENCRYPTED_MESSAGE</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Transmit your message here..."
                  className="w-full bg-cyber-black border border-white/10 rounded px-4 py-3 outline-none focus:border-cyber-cyan/50 focus:bg-cyber-cyan/5 transition-all text-white font-mono placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-500 font-mono text-xs p-3 bg-red-500/10 border border-red-500/20 rounded">
                  <AlertCircle className="w-4 h-4" />
                  {errorMessage}
                </div>
              )}

              <button
                disabled={status === 'loading'}
                className="cyber-button w-full flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-cyber-cyan" />
                    TRANSMITTING...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    BROADCAST_MESSAGE
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="mt-24 border-t border-white/5 py-8 text-center">
        <p className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} secure_portfolio // all systems operational
        </p>
      </footer>
    </section>
  );
};
