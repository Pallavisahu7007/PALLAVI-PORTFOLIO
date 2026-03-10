import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'QuickQ',
      subtitle: 'Smart Queue Management System',
      date: 'January 2025',
      description:
        'Advanced cloud-based queue system with slot booking, virtual check-ins, dynamic queues, and real-time updates.',
      tech: ['React', 'Cloud', 'Real-time Updates', 'UI/UX'],
      color: 'primary',
    },
    {
      title: 'Agroguardian',
      subtitle: 'AI Crop Disease Detection',
      date: 'August 2024',
      description:
        'Machine learning solution for crop disease analysis. Supported farmers with early detection and prevention measures.',
      tech: ['Machine Learning', 'AI', 'Python', 'Data Analysis'],
      color: 'secondary',
    },
    {
      title: 'Aurasafe',
      subtitle: 'Women Safety Analytics App',
      date: 'September 2024',
      description:
        'Real-time monitoring system with gender-based analytics and emergency detection via smart alerts.',
      tech: ['React', 'Analytics', 'Real-time Monitoring', 'Safety Tech'],
      color: 'accent',
    },
    {
      title: 'Under25 Universe',
      subtitle: 'Website Redesign',
      date: 'February 2025',
      description:
        'Improved navigation, layout, and unique aesthetics. Enhanced flow and usability for better user experience.',
      tech: ['UI/UX', 'React', 'Redesign', 'User Flow'],
      color: 'primary',
    },
  ];

  const getColorClass = (color: string) => {
    const colors = {
      primary: 'neon-border-blue hover:glow-blue',
      secondary: 'neon-border-purple hover:glow-purple',
      accent: 'neon-border-cyan hover:glow-cyan',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-xl transition-all duration-300 ${getColorClass(
                project.color
              )} group animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                  <span className="text-xs text-accent">{project.date}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-background/50 rounded-full text-xs text-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button size="sm" variant="ghost" className="hover:text-primary">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" variant="ghost" className="hover:text-secondary">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
