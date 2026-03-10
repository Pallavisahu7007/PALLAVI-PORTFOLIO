import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8 print:p-0">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8 pb-6 border-b-2 border-gray-300">
          <h1 className="text-4xl font-bold mb-2">PALLAVI SAHU</h1>
          <p className="text-xl text-gray-700 mb-4">Full Stack Developer | Tech Lead – GDG BU</p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>7007818599</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>sahupalak9936@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              <span>linkedin.com/in/pallavis123</span>
            </div>
            <div className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              <span>github.com/Pallavisahu7007</span>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 pb-2 border-b border-gray-300">PROFESSIONAL SUMMARY</h2>
          <p className="text-gray-800">
            Passionate Computer Science & Engineering student with strong communication skills and a collaborative mindset. 
            Specializes in modern web development, frontend engineering, and AI-driven solutions. Committed to building 
            elegant and problem-solving digital experiences with a focus on user-centric design and performance optimization.
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 pb-2 border-b border-gray-300">EDUCATION</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold">B.Tech in Computer Science & Engineering</h3>
              <p className="text-gray-700">Bundelkhand University | 2022 – 2026 | CGPA: 8.38</p>
            </div>
            <div>
              <h3 className="font-bold">Class XII (CBSE)</h3>
              <p className="text-gray-700">2022 | 95.6%</p>
            </div>
            <div>
              <h3 className="font-bold">Class X (CBSE)</h3>
              <p className="text-gray-700">2020 | 94.6%</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 pb-2 border-b border-gray-300">EXPERIENCE</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Frontend Developer Intern</h3>
              <p className="text-gray-700 mb-1">IIT Kanpur | June 2025 – July 2025</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Built responsive UI with HTML, CSS, JavaScript, and React</li>
                <li>Integrated APIs, fixed bugs, and improved design performance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Product Development Team Lead</h3>
              <p className="text-gray-700 mb-1">Crazy WebDev Technologies | Nov 2024</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Led frontend team using Agile & JIRA</li>
                <li>Redesigned UI/UX resulting in 20% engagement increase</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Web Developer Intern</h3>
              <p className="text-gray-700 mb-1">Crazy WebDev Technologies | Feb 2024 – June 2024</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Developed dynamic, responsive websites</li>
                <li>Enhanced user experience using Bootstrap + JavaScript</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 pb-2 border-b border-gray-300">PROJECTS</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold">QuickQ — Smart Queue Management System | Jan 2025</h3>
              <p className="text-sm text-gray-800">
                Advanced cloud-based queue system with slot booking, virtual check-ins, dynamic queues, and real-time updates
              </p>
            </div>
            <div>
              <h3 className="font-bold">Under25 Universe Website Redesign | Feb 2025</h3>
              <p className="text-sm text-gray-800">
                Improved navigation, layout, and unique aesthetics; Enhanced flow and usability for better user experience
              </p>
            </div>
            <div>
              <h3 className="font-bold">Aurasafe — Women Safety Analytics App | Sep 2024</h3>
              <p className="text-sm text-gray-800">
                Real-time monitoring with gender-based analytics and emergency detection via smart alerts
              </p>
            </div>
            <div>
              <h3 className="font-bold">Agroguardian — AI Crop Disease Detection | Aug 2024</h3>
              <p className="text-sm text-gray-800">
                Machine learning solution for crop disease analysis supporting farmers with early detection and prevention
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 pb-2 border-b border-gray-300">TECHNICAL SKILLS</h2>
          <div className="space-y-2">
            <div>
              <span className="font-bold">Languages:</span> Python, HTML, CSS, JavaScript, PHP
            </div>
            <div>
              <span className="font-bold">Frameworks/Libraries:</span> ReactJS, Bootstrap, NodeJS
            </div>
            <div>
              <span className="font-bold">Databases:</span> MySQL, MongoDB
            </div>
            <div>
              <span className="font-bold">Developer Tools:</span> VS Code, XAMPP, Git, GitHub, Chrome DevTools, JIRA
            </div>
            <div>
              <span className="font-bold">Other Skills:</span> UI/UX (Figma, Canva), Communication, Problem-Solving, Critical Thinking
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 pb-2 border-b border-gray-300">ACHIEVEMENTS</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Tech Lead, GDG BU</li>
            <li>Trooper Rank – Google Cloud Arcade</li>
            <li>500+ LeetCode & 300+ GeeksforGeeks problems solved</li>
            <li>Selected twice for IDE Bootcamp</li>
            <li>ISRO certified AI/ML course</li>
            <li>2nd Prize in Prastuti 2.0</li>
            <li>Active participation in numerous hackathons & tech events</li>
          </ul>
        </section>
      </div>

      {/* Print Instructions */}
      <div className="text-center mt-8 text-gray-600 print:hidden">
        <p className="mb-2">To save as PDF: Press Ctrl+P (Cmd+P on Mac) and select "Save as PDF"</p>
        <button 
          onClick={() => window.print()} 
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Print / Save as PDF
        </button>
      </div>
    </div>
  );
};

export default Resume;