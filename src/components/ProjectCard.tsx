import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  className?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link,
  className = '',
  delay = 0
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="md:flex">
        {image && (
          <div className="md:w-1/3 h-48 md:h-auto rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform transition-transform hover:scale-105"
            />
          </div>
        )}
        <div className="p-6 md:w-2/3">
          <h3 className="text-2xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          {link && (
            <a
              href={link}
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              View Project <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;