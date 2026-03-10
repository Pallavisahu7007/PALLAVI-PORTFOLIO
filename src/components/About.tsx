import { GraduationCap, Award, Trophy, Code, Brain, Users } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Bundelkhand University',
      duration: '2022 – 2026',
      cgpa: 'CGPA: 8.38',
    },
    {
      degree: 'Class XII (CBSE)',
      institution: '95.6%',
      duration: '2022',
      cgpa: '',
    },
    {
      degree: 'Class X (CBSE)',
      institution: '94.6%',
      duration: '2020',
      cgpa: '',
    },
  ];

  const achievements = [
    { icon: Users, text: 'Tech Lead, GDG BU' },
    { icon: Trophy, text: 'Trooper Rank – Google Cloud Arcade' },
    { icon: Code, text: '500+ LeetCode Problems Solved' },
    { icon: Code, text: '300+ GeeksforGeeks Problems Solved' },
    { icon: Brain, text: 'ISRO Certified AI/ML Course' },
    { icon: Award, text: '2nd Prize in Prastuti 2.0' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground text-center mb-16 leading-relaxed">
            I am a passionate Computer Science & Engineering student with strong communication skills and a 
            collaborative mindset. Specializes in modern web development, frontend engineering and AI-driven 
            solutions. Working on building elegant and problem-solving digital experiences.
          </p>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-bold mb-8 flex items-center justify-center md:justify-start gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover:neon-border-blue transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h4>
                  <p className="text-primary font-medium mb-1">{edu.institution}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span>{edu.duration}</span>
                    {edu.cgpa && <span className="text-accent font-medium">{edu.cgpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-8 flex items-center justify-center md:justify-start gap-2">
              <Award className="h-6 w-6 text-secondary" />
              Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-xl hover:neon-border-purple transition-all duration-300 flex items-center gap-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <achievement.icon className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
