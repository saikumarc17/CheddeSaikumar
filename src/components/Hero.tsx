import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-size-200 animate-gradient rounded-3xl p-8 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#9333ea)] opacity-50 mix-blend-multiply"></div>
      <div className="relative z-10">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100"
        >
          Chedde Saikumar
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl mb-4 text-indigo-100"
        >
          Full Stack Javascript Developer
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg opacity-90 max-w-2xl"
        >
          Crafting seamless digital experiences with modern technologies. Specialized in building scalable web applications with cutting-edge tools.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 mt-8"
        >
          <SocialLink href="https://github.com/saikumarc17" icon={<Github size={24} />} label="GitHub" />
          <SocialLink href="www.linkedin.com/in/cheddesaikumar" icon={<Linkedin size={24} />} label="LinkedIn" />
          <SocialLink href="mailto:saikumar.c17@gmail.com" icon={<Mail size={24} />} label="Email" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    className="group flex items-center gap-2 hover:text-indigo-200 transition-colors"
    aria-label={label}
  >
    <span className="transform transition-transform group-hover:scale-110">
      {icon}
    </span>
  </a>
);

export default Hero;