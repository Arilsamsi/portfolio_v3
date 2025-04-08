import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../ThemeContext';

function Projects() {
  const { theme } = useTheme();
  
  const projects = [
    {
      title: "Project One",
      description: "A revolutionary web application that transforms user experiences",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
      link: "#",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Project Two",
      description: "Mobile-first design with cutting-edge technologies",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
      link: "#",
      tags: ["React Native", "Firebase"]
    },
    {
      title: "Project Three",
      description: "Enterprise solution for modern businesses",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
      link: "#",
      tags: ["Vue.js", "GraphQL", "AWS"]
    }
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="opacity-80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-sm px-3 py-1 rounded-full ${
                          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;