import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      {["/", "/about", "/projects", "/contact"].map((path, i) => {
        const labels = ["Home", "About", "Project", "Contact"];
        return (
          <NavLink
            key={i}
            to={path}
            className={({ isActive }) =>
              `hover:text-blue-500 font-medium transition-colors ${
                isActive ? "text-blue-500" : "text-black dark:text-white"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            {labels[i]}
          </NavLink>
        );
      })}
    </>
  );

  return (
    <header className="fixed top-4 w-full z-50 flex justify-center px-4">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-7xl rounded-xl px-6 py-3 flex items-center justify-between
          shadow-lg transition-all duration-300
          backdrop-blur-md
          ${
            scrolled
              ? "bg-white/40 dark:bg-gray-900/30"
              : "bg-white/20 dark:bg-gray-900/10"
          } border border-white/30 dark:border-white/10`}
      >
        {/* Nama */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-2xl font-bold transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Ahmad Aril Samsi
        </motion.h1>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 items-center">{navLinks}</div>

        {/* Kanan */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-20 w-full max-w-7xl mx-auto flex flex-col items-center gap-4 p-4
              rounded-xl backdrop-blur-md shadow-lg md:hidden
              bg-white/40 dark:bg-gray-900/30 border border-white/20 dark:border-white/10`}
          >
            {navLinks}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
