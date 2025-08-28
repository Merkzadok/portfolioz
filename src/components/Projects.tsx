import React from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "TechBlog",
      description:
        "A modern blogging platform with rich text editing, and social sharing features.",
      image: "TechBlog.png",
      tech: ["Nextjs", "Typescript", "Tailwind", "API Routes"],
      github: "https://github.com/Merkzadok/techblog",
      demo: "https://tech-blog-five-ruddy.vercel.app/",
      date: "2025",
    },
    {
      id: 2,
      title: "Greenery to do list app",
      description:
        "A task management app with real-time collaboration, drag-and-drop interface, and customizable task categories.",
      image: "ToDoList.png",
      tech: ["Typescript", "Next.js", "Tailwind CSS"],
      github: "https://github.com/Merkzadok/greenery-to-do-list",
      demo: "https://greenery-to-do-list.vercel.app/",
      date: "2025",
    },
    {
      id: 3,
      title: "Weather app",
      description:
        "A weather forecasting application with interactive maps, location-based forecasts, and detailed weather analytics.",
      image: "WeatherApp.png",
      tech: ["Next.js", "Typescript", "API", "Tailwind CSS"],
      github: "https://github.com/Merkzadok/weathering",
      demo: "https://weathering-murex.vercel.app/",
      date: "2025",
    },
    {
      id: 4,
      title: "Movie app",
      description:
        "A movie app that allows users to browse, search, and view details about movies, including trailers and reviews.",
      image: "Movieapp.png",
      tech: ["Next.js", "API", "Tailwind.css"],
      github: "https://github.com/Merkzadok/Movie-app",
      demo: "https://example.com",
      date: "2025",
    },
    // {
    //   id: 5,
    //   title: "Weather Forecast App",
    //   description:
    //     "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    //   image:
    //     "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   tech: ["React Native", "OpenWeather API", "Redux", "Maps API"],
    //   github: "https://github.com",
    //   demo: "https://example.com",
    //   date: "2023",
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.date}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Project Link</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
