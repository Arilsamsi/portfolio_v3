import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Globe2 } from "lucide-react";
import { useTheme } from "../ThemeContext";

//Skills
import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import jsLogo from "../assets/skills/js.png";
import reactLogo from "../assets/skills/react.png";
import vueLogo from "../assets/skills/vuejs.png";
import laravelLogo from "../assets/skills/laravel.png";

import Aril from "../assets/profile/aril.jpg";

function About() {
  const { theme } = useTheme();

  const skills = [
    {
      icon: <Code2 size={24} />,
      title: "Frontend Development",
      description: "Expert in React, JavaScript, and modern web technologies",
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces",
    },
    {
      icon: <Globe2 size={24} />,
      title: "Web Performance",
      description: "Optimizing for speed and accessibility",
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/3"
            >
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={Aril}
                    alt="John Doe"
                    className="object-cover"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500/20"></div>
              </div>
            </motion.div>
            <div className="w-full md:w-2/3">
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              <div>
                <p className="text-lg mb-6">
                  Hai, nama saya Aril Samsi. Saya sekolah di SMKN 1 Limboto, dan
                  mengambil jurusan PPLG (Pengembangan perangkat lunak & GIM).
                  Alasan saya masuk ke SMKN 1 Limboto adalah saya sangat ingin
                  sekali belajar CODING. Hobi saya hanya nonton Donghua dan
                  bermain game, dan saya juga suka dengan Sepak bola.
                </p>
              </div>
              <h2 className="text-4xl font-bold mb-8">Skills</h2>
              <div className="bg-gray-500 w-full flex items-center justify-center gap-4 p-4 rounded-lg">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <img
                    className="w-[50px] h-[50px]"
                    src={htmlLogo}
                    alt="html"
                  />
                  <span>HTML</span>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <img className="w-[50px] h-[50px]" src={cssLogo} alt="css" />
                  <span>CSS</span>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <img className="w-[50px] h-[50px]" src={jsLogo} alt="js" />
                  <span>JavaScript</span>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <img
                    className="w-[50px] h-[50px]"
                    src={reactLogo}
                    alt="react"
                  />
                  <span>React</span>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <img className="w-[50px] h-[50px]" src={vueLogo} alt="vue" />
                  <span>Vue</span>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <img
                    className="w-[50px] h-[50px]"
                    src={laravelLogo}
                    alt="laravel"
                  />
                  <span>Laravel</span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8">Skills & Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`p-6 rounded-xl bg-opacity-5 backdrop-blur-sm ${
                    theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                  }`}
                >
                  <div className="text-blue-500 mb-4">{skill.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      {skill.title}
                    </h4>
                    <p className="opacity-80">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
