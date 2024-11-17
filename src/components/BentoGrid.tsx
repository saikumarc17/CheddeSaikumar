import { Code2, Server, Database } from 'lucide-react';
import Hero from './Hero';
import SkillCard from './SkillCard';
import ProjectCard from './ProjectCard';
import Experience from './Experience';
import Contact from './Contact';

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
      <Hero />

      <SkillCard
        icon={Code2}
        title="Frontend"
        skills={['React', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS','Bootstrap CSS']}
        delay={0.2}
      />

      <SkillCard
        icon={Server}
        title="Backend"
        skills={['Node.js', 'Express', 'Java', 'SpringBoot']}
        delay={0.3}
      />

      <SkillCard
        icon={Database}
        title="Database"
        skills={['PostgreSQL', 'MongoDB', 'Redis']}
        delay={0.4}
      />

      <Experience />

      <div className="col-span-full space-y-6">
        <ProjectCard
          title="E-Commerce Platform"
          description="A full-stack e-commerce solution with real-time inventory management and AI-powered recommendations. Built with modern technologies to ensure scalability and performance."
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          tags={['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS']}
          link="https://example.com"
          delay={0.5}
        />

        <ProjectCard
          title="AI Chat Platform"
          description="Real-time chat application with AI-powered responses and natural language processing. Features include multi-language support and sentiment analysis."
          image="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80"
          tags={['React', 'Socket.io', 'OpenAI', 'MongoDB']}
          link="https://example.com"
          delay={0.6}
        />

        <ProjectCard
          title="Analytics Dashboard"
          description="Data visualization platform for business metrics with real-time updates. Includes customizable widgets and automated reporting features."
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
          tags={['D3.js', 'Redux', 'Firebase', 'Material-UI']}
          link="https://example.com"
          delay={0.7}
        />
      </div>

      <Contact />
    </div>
  );
};

export default BentoGrid;