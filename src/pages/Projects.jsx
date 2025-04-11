import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../ThemeContext";

//Projects component
import Projects1 from "/projects/projects_1.png";
import Projects2 from "/projects/projects_2.png";
import Projects3 from "/projects/projects_3.png";
import Projects4 from "/projects/projects_4.png";
import Projects5 from "/projects/projects_5.png";
import Projects6 from "/projects/projects_6.png";
import Projects7 from "/projects/projects_7.png";
import Projects8 from "/projects/projects_8.png";
import { title } from "framer-motion/client";

function Projects() {
  const { theme } = useTheme();

  const projects = [
    {
      title: "Portofolio V1",
      description: "Portofolio Pertama saya",
      image: Projects1,
      link: "https://arilsamsi.vercel.app/",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      title: "Portofolio V2",
      description: "Portofolio kedua saya",
      image: Projects8,
      link: "https://ahmadarilsamsi.vercel.app/",
      tags: ["Vue JS", "Tailwind CSS"],
    },
    {
      title: "Website Kelas",
      description: "Website Kelas pertama yang saya buat di kelas 10",
      image: Projects2,
      link: "https://rplsmklimboto.vercel.app/",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      title: "QR Code Generator",
      description: "QR Code Generator sederhana",
      image: Projects3,
      link: "https://pembuat-qr.vercel.app/",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      title: "Todo List",
      description: "Website Todo List sederhana",
      image: Projects4,
      link: "https://daftartugas.vercel.app/",
      tags: ["Vue JS"],
    },
    {
      title: "Website Pencari Film",
      description: "Website pencari film menggunakan API TMDB",
      image: Projects5,
      link: "https://maniacmovie.vercel.app/",
      tags: ["Vue JS"],
    },
    {
      title: "Website Streaming Anime",
      description: "Website streaming dan download Anime sub Indo",
      image: Projects6,
      link: "https://animestrim.vercel.app/",
      tags: ["React JS", "Tailwind CSS"],
    },
    {
      title: "Electronic Al Qur'an",
      description: "Website Al Qur'an Digital",
      image: Projects7,
      link: "https://equran.vercel.app/",
      tags: ["React JS", "Tailwind CSS"],
    },
  ];

  return (
    <section className="px-6 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`rounded-lg overflow-hidden ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h4>
                  <p className="opacity-80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-sm px-3 py-1 rounded-full ${
                          theme === "dark" ? "bg-gray-700" : "bg-gray-200"
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
