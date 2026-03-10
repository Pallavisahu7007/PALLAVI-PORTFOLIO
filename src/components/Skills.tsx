import { Code, Layers, Database, Wrench, Palette, MessageSquare } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'HTML', 'CSS', 'JavaScript', 'PHP'],
      color: 'primary',
    },
    {
      icon: Layers,
      title: 'Frameworks & Libraries',
      skills: ['ReactJS', 'Bootstrap', 'NodeJS'],
      color: 'secondary',
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
      color: 'accent',
    },
    {
      icon: Wrench,
      title: 'Developer Tools',
      skills: ['VS Code', 'XAMPP', 'Git', 'GitHub', 'Chrome DevTools', 'JIRA'],
      color: 'primary',
    },
    {
      icon: Palette,
      title: 'Design Tools',
      skills: ['Figma', 'Canva'],
      color: 'secondary',
    },
    {
      icon: MessageSquare,
      title: 'Soft Skills',
      skills: ['Communication', 'Problem-Solving', 'Critical Thinking', 'Team Collaboration'],
      color: 'accent',
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
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-xl transition-all duration-300 ${getColorClass(
                category.color
              )} group animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className={`h-6 w-6 text-neon-${category.color}`} />
                <h3 className="text-xl font-heading font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-background/50 rounded-full text-sm text-muted-foreground border border-border group-hover:border-current transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
