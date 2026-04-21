import laticeLabsImage from '@/assets/latice-labs.png';
import propertyAdvisorImage from '@/assets/property-advisor.png';
import sofiCombsImage from '@/assets/sofi-combs.png';
import { ProjectCard } from '@/components/ui/project-card';

const featuredProjects = [
  {
    title: 'Latice Labs',
    description:
      'A polished digital experience built to present a modern tech brand with clarity, trust, and visual depth.',
    imgSrc: laticeLabsImage,
    link: 'https://latticelabs.io/',
    linkText: 'View Project',
  },
  {
    title: 'Property Advisor',
    description:
      'A clean property-focused interface designed to help visitors explore listings and make confident decisions faster.',
    imgSrc: propertyAdvisorImage,
    link: 'https://burhani-property-solution.vercel.app/',
    linkText: 'View Project',
  },
  {
    title: 'Sofi Combs',
    description:
      'A brand-forward showcase page with strong imagery, clear messaging, and a premium presentation style.',
    imgSrc: sofiCombsImage,
    link: 'https://sofi-combs.vercel.app/',
    linkText: 'View Project',
  },
];

export default function ProjectCardDemo() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {featuredProjects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          imgSrc={project.imgSrc}
          link={project.link}
          linkText={project.linkText}
          className="theme-panel text-[var(--heading)] backdrop-blur-xl"
        />
      ))}
    </div>
  );
}
