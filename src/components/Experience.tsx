import React from 'react';
import { Blocks } from 'lucide-react';
import { motion } from 'framer-motion';

const experience = {
  role: 'System Engineer',
  company: 'Tata Consultancy Services',
  period: '2020 - Present',
  highlights: [
    'Led development of enterprise-scale applications serving 1M+ users',
    'Architected and implemented microservices architecture reducing system latency by 40%',
    'Mentored junior developers and established best practices for the team',
    'Implemented CI/CD pipelines reducing deployment time by 60%'
  ]
};

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-full bg-white rounded-3xl p-8 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-6">
        <Blocks className="text-indigo-600" size={28} />
        <h3 className="text-2xl font-semibold">Professional Experience</h3>
      </div>
      
      <div className="border-l-2 border-indigo-200 pl-6 py-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h4 className="text-xl font-semibold text-gray-900">{experience.role}</h4>
            <p className="text-lg text-indigo-600">{experience.company}</p>
          </div>
          <p className="text-sm text-gray-500 md:text-right">{experience.period}</p>
        </div>
        
        <ul className="space-y-3 list-disc list-outside ml-4 text-gray-600">
          {experience.highlights.map((highlight, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {highlight}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;