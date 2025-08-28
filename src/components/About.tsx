import React from "react";
import { Code, Coffee, Rocket } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Hi there! I'm a passionate full-stack developer with over 5
                years of experience building web applications. I love turning
                complex problems into simple, beautiful, and intuitive
                solutions.
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-8">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or enjoying a good cup of
                coffee while brainstorming the next big idea.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  Clean Code
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Writing maintainable, efficient code
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                <Rocket className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  Innovation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Always learning new technologies
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-xl">
                <Coffee className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  Passion
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fueled by coffee and curiosity
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-emerald-400 rounded-full p-1">
                <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center animate-float">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center animate-float animation-delay-1000">
                <Rocket className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
