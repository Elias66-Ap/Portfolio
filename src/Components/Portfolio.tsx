import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code,
  User,
  Download,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "inicio",
        "sobre-mi",
        "experiencia",
        "proyectos",
        "habilidades",
        "contacto",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "sobre-mi", label: "Sobre Mí" },
    { id: "experiencia", label: "Experiencia" },
    { id: "proyectos", label: "Proyectos" },
    { id: "habilidades", label: "Habilidades" },
    { id: "contacto", label: "Contacto" },
  ];

  const projects = [
    {
      title: "Sistema de una Pizzeria",
      description:
        "Sistema completo de comercio electrónico con pasarela de pagos, gestión de inventario y panel administrativo.",
      tech: ["Java", "Bootstraps", "MySQL"],
      link: "#",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Gestor de Proyectos",
      description:
        "Herramienta colaborativa para equipos con tableros kanban, chat en tiempo real y seguimiento de tareas.",
      tech: ["Laravel", "MySQL", "Bootrstrap", "JavaScript"],
      link: "#",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Panel de control interactivo con visualizaciones de datos en tiempo real y reportes personalizables.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      link: "#",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "App Mobile Fitness",
      description:
        "Aplicación móvil para seguimiento de ejercicios, nutrición y objetivos personales de fitness.",
      tech: ["React Native", "Firebase", "Redux"],
      link: "#",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Sistema de Reservas",
      description:
        "Plataforma de reservas online con calendario interactivo, notificaciones y pagos integrados.",
      tech: ["Vue.js", "Laravel", "MySQL"],
      link: "#",
      gradient: "from-violet-600 to-purple-600",
    },
    {
      title: "Red Social para Developers",
      description:
        "Comunidad para desarrolladores con compartir código, discusiones técnicas y networking.",
      tech: ["Next.js", "GraphQL", "Prisma"],
      link: "#",
      gradient: "from-yellow-500 to-orange-600",
    },
  ];

  const experiences = [
    {
      position: "Analisis y Diseño de Sistemas",
      company: "Codecta Peru",
      period: "2023 - 2024",
      description:
        "Modelar base de datos, diseñar diagramas de casos de uso, diagramas de secuencia y colaborar en la arquitectura de software.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      position: "Desarrollador Junior",
      company: "Hamid S.A.C",
      period: "2024 - 2025",
      description:
        "Desarrollo de aplicaciones web utilizando PHP, React, Laravel y MySQL. Instalacion de servidores Linux (Ubuntu y Rocky Linux)",
      color: "from-purple-400 to-pink-500",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Bootstrap", "Tailwind CSS"],
      icon: "💻",
      color: "from-cyan-500 to-blue-600",
    },
    {
      category: "Backend",
      items: ["Laravel", "Node.js", "MySQL", "PHP", "C#", "Java", "REST APIs"],
      icon: "⚙️",
      color: "from-purple-500 to-pink-600",
    },
    {
      category: "DevOps",
      items: ["Git", "Linux"],
      icon: "🚀",
      color: "from-orange-500 to-red-600",
    },
    {
      category: "UX / Diseño",
      items: ["Figma", "Wireframes", "Prototipos", "Diagramas"],
      icon: "🎨",
      color: "from-pink-500 to-purple-600",
    },
    {
      category: "Otras",
      items: ["Scrum", "Testing", "Microservicios"],
      icon: "✨",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div
          className="absolute w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
          style={{
            top: `${mousePosition.y / 10}px`,
            left: `${mousePosition.x / 10}px`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl"
          style={{
            bottom: `${mousePosition.y / 15}px`,
            right: `${mousePosition.x / 15}px`,
            transform: "translate(50%, 50%)",
            transition: "all 0.3s ease-out",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              {"DEVPORTFOLIO"}
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-all font-medium ${
                    activeSection === item.id
                      ? "text-cyan-400"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
                  )}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-4 hover:bg-white/5 transition-colors text-lg"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section
          id="inicio"
          className="min-h-screen flex items-center justify-center px-4 pt-20"
        >
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
                <p className="text-cyan-400 font-medium flex items-center gap-2">
                  <Sparkles size={18} className="animate-pulse" />
                  Disponible para nuevos proyectos
                </p>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  Elias Amaya Parco
                </span>
              </h1>

              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white/90">
                Desarrollador Full Stack
                <span className="block text-2xl md:text-3xl mt-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Creando el futuro digital
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                Transformo ideas innovadoras en experiencias digitales
                extraordinarias usando las últimas tecnologías
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <button
                onClick={() => scrollToSection("proyectos")}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
              >
                Ver Mis Proyectos
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>

              <button className="px-8 py-4 border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/10 hover:border-cyan-400 transition-all hover:scale-105 flex items-center gap-2">
                <Download size={20} />
                Descargar CV
              </button>
            </div>

            <div className="flex justify-center gap-6 mb-12">
              <a
                href="https://github.com/Elias66-Ap"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/5 rounded-full border border-white/10 hover:border-cyan-400 hover:bg-white/10 transition-all hover:scale-110"
              >
                <Github
                  size={28}
                  className="group-hover:text-cyan-400 transition-colors"
                />
              </a>
              <a
                href="http://www.linkedin.com/in/elias-amaya-parco-148a61270"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/5 rounded-full border border-white/10 hover:border-purple-400 hover:bg-white/10 transition-all hover:scale-110"
              >
                <Linkedin
                  size={28}
                  className="group-hover:text-purple-400 transition-colors"
                />
              </a>
              <a
                href="mailto:eamayaparco@email.com"
                target="_blank"
                rel="nooper noreferrer"
                className="group p-4 bg-white/5 rounded-full border border-white/10 hover:border-pink-400 hover:bg-white/10 transition-all hover:scale-110"
              >
                <Mail
                  size={28}
                  className="group-hover:text-pink-400 transition-colors"
                />
              </a>
            </div>

            <div className="animate-bounce">
              <ChevronDown size={32} className="mx-auto text-white/50" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre-mi" className="py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Sobre Mí
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <User className="w-16 h-16 mb-4 text-cyan-400" />
                  <h3 className="text-3xl font-bold mb-4">
                    Apasionado por la Tecnología
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Con más de 5 años transformando ideas en realidad digital,
                    me especializo en crear soluciones innovadoras que marcan la
                    diferencia.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all">
                  <h4 className="text-2xl font-bold mb-3 text-cyan-400">
                    🎯 Mi Enfoque
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    Me enfoco en crear experiencias de usuario excepcionales
                    combinadas con código limpio, escalable y mantenible.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all">
                  <h4 className="text-2xl font-bold mb-3 text-purple-400">
                    💡 Innovación Constante
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    Siempre explorando las últimas tecnologías y tendencias para
                    ofrecer soluciones de vanguardia.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/30 hover:border-orange-400 transition-all">
                  <h4 className="text-2xl font-bold mb-3 text-pink-400">
                    🚀 Resultados Medibles
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    Cada proyecto que desarrollo está orientado a generar
                    impacto real y valor tangible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experiencia" className="py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Experiencia
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
                  ></div>
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div className="flex-1">
                        <h3
                          className={`text-3xl font-bold mb-2 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                        >
                          {exp.position}
                        </h3>
                        <p className="text-xl text-white/90 mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mt-2 lg:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-white/70 text-lg leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Proyectos Destacados
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto rounded-full"></div>
              <p className="text-xl text-white/60 mt-6">
                Algunos de mis trabajos más recientes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}
                  ></div>
                  <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all hover:transform hover:scale-105">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl mb-4 flex items-center justify-center`}
                    >
                      <Code className="text-white" size={24} />
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/10 rounded-lg text-sm font-medium border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      className={`inline-flex items-center gap-2 text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text font-bold hover:gap-3 transition-all`}
                    >
                      Ver Proyecto
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                Habilidades
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${skillGroup.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}
                  ></div>
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-4xl">{skillGroup.icon}</span>
                      <h3
                        className={`text-3xl font-bold bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent`}
                      >
                        {skillGroup.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white/10 rounded-xl font-medium border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Trabajemos Juntos
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
                <p className="text-2xl text-white/90 mb-12 leading-relaxed">
                  ¿Tienes un proyecto emocionante en mente? ¡Me encantaría ser
                  parte de él!
                </p>

                <div className="space-y-6 mb-12">
                  <a
                    href="mailto:eamayaparco@gmail.com"
                    className="group flex items-center justify-center gap-4 text-xl hover:text-cyan-400 transition-colors"
                  >
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full">
                      <Mail className="text-white" size={24} />
                    </div>
                    <span className="font-medium">eamayaparco@gmail.com</span>
                  </a>

                  <a
                    href="https://github.com/Elias66-Ap"
                    target="_blank"
                    rel="nooper noreferrer"
                    className="group flex items-center justify-center gap-4 text-xl hover:text-purple-400 transition-colors"
                  >
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full">
                      <Github className="text-white" size={24} />
                    </div>
                    <span className="font-medium">github.com/Elias66-Ap</span>
                  </a>

                  <a
                    href="http://www.linkedin.com/in/elias-amaya-parco-148a61270"
                    target="_blank"
                    rel="nooper noreferrer"
                    className="group flex items-center justify-center gap-4 text-xl hover:text-pink-400 transition-colors"
                  >
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-orange-600 rounded-full">
                      <Linkedin className="text-white" size={24} />
                    </div>
                    <span className="font-medium">
                      linkedin.com/in/elias-amaya-parco
                    </span>
                  </a>
                </div>

                <a
                  href="mailto:eamayaparco@email.com"
                  className="inline-block px-12 py-5 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-110"
                >
                  Enviar Mensaje
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white/60 text-lg">© 2026 Elias Amaya Parco</p>
            <p className="text-white/40 mt-2">
              Diseñado y desarrollado con pasión
            </p>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
