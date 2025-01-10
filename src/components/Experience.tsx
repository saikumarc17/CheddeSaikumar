import React from 'react';
import { Blocks } from 'lucide-react';
import { motion } from 'framer-motion';

const experience = {
  role: 'System Engineer',
  company: 'Tata Consultancy Services',
  period: '2021 - Present',
  highlights: [
    'Developed and maintained enterprise-scale web applications using Angular and React, serving over 1M+ users with a focus on scalability and performance',
    'Architected microservices and implemented CI/CD pipelines, reducing system latency by 40% and deployment times by 60%',
    'Conducted code reviews to ensure high-quality, maintainable code and fostered best practices across the team',
    'Enhanced user experiences by building responsive, dynamic interfaces in Angular and React, boosting engagement by 25%',
    'Mentored junior developers and collaborated with cross-functional teams to deliver high-quality features on time'
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