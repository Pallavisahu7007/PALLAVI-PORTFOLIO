import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'IIT Kanpur',
      duration: 'June 2025 – July 2025',
      description: [
        'Built responsive UI with HTML, CSS, JavaScript, React',
        'Integrated APIs, fixed bugs, and improved design performance',
      ],
    },
    {
      title: 'Product Development Team Lead',
      company: 'Crazy WebDev Technologies',
      duration: 'November 2024',
      description: [
        'Led frontend team using Agile & JIRA',
        'Redesigned UI/UX resulting in 20% engagement increase',
      ],
    },
    {
      title: 'Web Developer Intern',
      company: 'Crazy WebDev Technologies',
      duration: 'February 2024 – June 2024',
      description: [
        'Developed dynamic, responsive websites',
        'Enhanced user experience using Bootstrap + JS',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-12" />

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto md:text-left'
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                {/* Timeline dot */}
                <div
                  className={`absolute ${
                    index % 2 === 0 ? 'md:right-[-4px]' : 'md:left-[-4px]'
                  } left-[-4px] top-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-background`}
                />

                <div className="glass-card p-6 rounded-xl ml-8 md:ml-0 hover:neon-border-blue transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2 justify-start md:justify-start">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-heading font-bold text-foreground">{exp.title}</h3>
                  </div>
                  <p className="text-secondary font-medium mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 justify-start md:justify-start">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <ul className="space-y-2 text-left">
                    {exp.description.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
