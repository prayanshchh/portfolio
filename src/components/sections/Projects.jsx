import { RevealOnScroll } from "../RevealOnScroll";
import { Github } from "lucide-react";

export const Projects = () => {
  return (
<section
  id="projects"
  className="min-h-screen flex flex-col items-center justify-center"
>
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Meetbot */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Meetbot</h3>
              <p className="text-gray-400 mb-4">
                Records a Google Meet, gives a transcript, and AI-generated summary.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Playwright", "open-ai", "postgreSQL", "Object-storage"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://meetbot.prayanshchhablani.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/prayanshchh/meet_bot"
                  className="text-gray-400 hover:text-white transition-colors my-4 ml-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repo"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Deep-research Agent */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Deep-research Agent</h3>
              <p className="text-gray-400 mb-4">
                Implements deep-research in three steps, uses queues and AgendaJS for reliability and availability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Nodejs", "Typescript", "Agendajs", "rabbitmq", "mongodb"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://deepresearch.prayanshchhablani.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/prayanshchh/alchemyst-assignment"
                  className="text-gray-400 hover:text-white transition-colors my-4 ml-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repo"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* File-operation MCP */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">File-operation MCP</h3>
              <p className="text-gray-400 mb-4">
                MCP server to perform filesystem operations with tools to create, edit, and delete files.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "fastmcp", "object storage"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://file-operation.prayanshchhablani.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/prayanshchh/file-operation"
                  className="text-gray-400 hover:text-white transition-colors my-4 ml-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repo"
                >
                   <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Replit-clone (Coming Soon) */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all relative overflow-hidden">
              <h3 className="text-xl font-bold mb-2">Replit-clone</h3>
              <p className="text-gray-400 mb-4 animate-pulse">Coming soon...</p>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 blur-md opacity-10 animate-ping pointer-events-none" />
            </div>
          </div>
          <div className="mt-8 w-full flex justify-center">
  <p className="text-center text-sm text-gray-500 max-w-xl">
    I also contribute to open source —{" "}
    <a
      href="https://docs.google.com/document/d/1OOPmrbsDuaRgYyurJE16FUO5vqELMkTTrfVu7KtSIUM/edit?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline"
    >
      view my Open Source contributions
    </a>
    .
  </p>
</div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
