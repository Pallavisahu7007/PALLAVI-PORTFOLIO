import { useState, useEffect } from 'react';
import { Download, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full Stack Developer',
    'Tech Lead – GDG BU',
    'AI-driven Software Enthusiast',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  PALLAVI SAHU
                </span>
              </h1>
              <div className="h-16 flex items-center justify-center md:justify-start">
                <p className="text-2xl md:text-3xl text-muted-foreground animate-fade-in">
                  {roles[currentRole]}
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
              Crafting clean, smart and modern tech solutions through web development and AI.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button
                onClick={scrollToContact}
                className="neon-border-blue hover:glow-blue transition-all duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
              <Button
                variant="outline"
                className="neon-border-purple hover:glow-purple transition-all duration-300"
                asChild
              >
                <a href="/PALLAVI_RESUME.pdf" download="Pallavi_Sahu_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                className="neon-border-cyan hover:glow-cyan transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://linkedin.com/in/pallavis123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/Pallavisahu7007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-50 animate-glow-pulse" />
              <img
                src={profileImage}
                alt="Pallavi Sahu - Frontend Developer"
                className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
