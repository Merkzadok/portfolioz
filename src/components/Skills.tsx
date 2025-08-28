import React from "react";

const Skills: React.FC = () => {
  const skills = [
    { name: "Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 95, color: "from-blue-600 to-blue-800" },
    { name: "Node.js", level: 88, color: "from-green-500 to-green-700" },
    { name: "PostgreSQL", level: 94, color: "from-blue-700 to-indigo-700" },
    { name: "MongoDB", level: 92, color: "from-pink-500 to-rose-500" },
  ];

  const tools = [
    { name: "React", icon: "react.png", color: "from-blue-400 to-blue-600" },
    { name: "Next.js", icon: "next.png", color: "from-gray-600 to-gray-800" },
    { name: "Node.js", icon: "node.png", color: "from-green-500 to-green-700" },
    {
      name: "Express.js",
      icon: "expres.png",
      color: "from-gray-500 to-gray-700",
    },
    {
      name: "TypeScript",
      icon: "typescript.png",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "JavaScript",
      icon: "javascript.png",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      name: "PostgreSQL",
      icon: "postgresql.svg",
      color: "from-blue-700 to-indigo-700",
    },
    {
      name: "MongoDB",
      icon: "mongo.png",
      color: "from-green-600 to-green-800",
    },
    { name: "GraphQL", icon: "graph.png", color: "from-pink-500 to-rose-500" },
    { name: "GitHub", icon: "git.png", color: "from-gray-700 to-gray-900" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with to bring
            ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Skill Bars */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                    <div
                      className={`h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Tags with Icons */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => {
                const isImage = typeof tool.icon === "string"; // check if it's a string
                return (
                  <div
                    key={tool.name}
                    className="group relative px-6 py-3 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {/* Background gradient on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    <div className="relative flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg shadow-sm flex items-center justify-center`}
                      >
                        {isImage ? (
                          <img
                            src={`/${tool.icon}`} // <-- this points to /public/tool.icon
                            alt={tool.name}
                            className="w-5 h-5 object-cover"
                          />
                        ) : (
                          <tool.icon />
                        )}
                      </div>
                      <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-200">
                        {tool.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
