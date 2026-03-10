import { Code, Layers, Palette, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern and responsive websites using clean frontend technologies.',
      color: 'primary',
    },
    {
      icon: Layers,
      title: 'React Development',
      description: 'Component-based architecture, API integration, smooth UI transitions.',
      color: 'secondary',
    },
    {
      icon: Palette,
      title: 'UI/UX Design & Enhancement',
      description: 'Wireframing, Figma design, improving user flow and visual aesthetics.',
      color: 'accent',
    },
    {
      icon: Brain,
      title: 'AI-driven Features',
      description: 'Smart features, analytics dashboards, algorithm-based improvements.',
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
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-xl transition-all duration-300 ${getColorClass(
                service.color
              )} group text-center animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-background/50">
                  <service.icon className={`h-8 w-8 text-neon-${service.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
