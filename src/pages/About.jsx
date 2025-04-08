import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Globe2 } from "lucide-react";
import { useTheme } from "../ThemeContext";

import Aril from "../assets/profile/aril.jpg";
import SkillsSection from "../components/SkillsSection";

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
    <section className="px-6 py-20 min-h-screen">
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
              <SkillsSection />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 py-10 px-4 md:px-8 rounded-2xl shadow-2xl max-w-4xl mx-auto my-10">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          🎧
        </h3>
        <div className="w-full rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://open.spotify.com/embed/playlist/5l1UE212LJ41Y6jB1w2lW8?utm_source=generator"
            className="w-full h-[500px] md:h-[600px] border-0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default About;
