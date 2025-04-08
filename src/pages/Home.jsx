import React from "react";
import { motion } from "framer-motion";
import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";

function Home() {
  return (
    <section className="px-6 min-h-[calc(100vh-theme(spacing.20))] flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Web Developer</h2>
          {/* <p className="text-xl md:text-2xl mb-8 opacity-80">
            Crafting beautiful digital experiences with modern web technologies
          </p> */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Arilsamsi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:opacity-80"
            >
              <i class="fa-brands fa-github fa-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/arilsamsi/?igsh=aHB5dXY1NTN6N2Q4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:opacity-80"
            >
              <i class="fa-brands fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://www.tiktok.com/@deyissmyluvvv?is_from_webapp=1&sender_device=pc"
              className="p-2 hover:opacity-80"
            >
              <i class="fa-brands fa-tiktok fa-lg"></i>
            </a>
            <a
              href="https://www.facebook.com/people/Aril-Samsi/pfbid02tW7Lo427vBcTB45jaK6u9rWtBRT9HLwijzHav2wHwiQXD7pgDzQZodPuwt2Nyrbyl/"
              className="p-2 hover:opacity-80"
            >
              <i class="fa-brands fa-facebook fa-lg"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
