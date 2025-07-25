import { RevealOnScroll } from "../RevealOnScroll";
import { Linkedin, Twitter, Github } from "lucide-react";

export const About = () => {
  const frontendSkills = [
    "React",
    "shadcn",
    "TypeScript",
    "TailwindCSS",
  ];

  const backendSkills = [
    "Node.js",
    "Python",
    "TypeScript",
    "REST",
  
    "PostgreSQL",
    "MongoDB",
    "Redis",
  
    "RabbitMQ",
  
    "Docker",
    "Kubernetes",
    "GCP",
  
    "Object Storage",
    "Cloud CDN",
  ];
  
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            Backend engineer focused on building scalable systems and AI agents.
            I craft clean architectures that think, respond, and perform under pressure.           
            </p>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.tech in AI & DS </strong> - NMIMS Indore
                  (2023-2027)
                </li>
                <li>
                  Relevant Coursework: Data Structures, ML, AI, OS, DBMS
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer Intern at gate6 (May 2025 - Present){" "}
                  </h4>
                  <p>
                   Optimizing python flask api's, improving logging and monitoring
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-10 text-gray-400">
  <a
    href="https://github.com/prayanshchh"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="hover:text-white transition-colors"
  >
    <Github className="w-5 h-5" />
  </a>
  <a
    href="https://www.linkedin.com/in/prayansh-chhablani-b24304282/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="hover:text-white transition-colors"
  >
    <Linkedin className="w-5 h-5" />
  </a>
  <a
    href="https://x.com/prayansh7777"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter / X"
    className="hover:text-white transition-colors"
  >
    <Twitter className="w-5 h-5" />
  </a>
</div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
