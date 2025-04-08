import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Header */}
        <header className="fixed w-full top-0 z-50">
          <nav
            className={`px-6 py-4 ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold"
              >
                Ahmad Aril Samsi
              </motion.h1>
              <div className="flex items-center gap-8">
                <div className="hidden md:flex gap-6">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `hover:text-blue-500 transition-colors ${
                        isActive ? "text-blue-500" : ""
                      }`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `hover:text-blue-500 transition-colors ${
                        isActive ? "text-blue-500" : ""
                      }`
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      `hover:text-blue-500 transition-colors ${
                        isActive ? "text-blue-500" : ""
                      }`
                    }
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `hover:text-blue-500 transition-colors ${
                        isActive ? "text-blue-500" : ""
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full ${
                    theme === "dark"
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer
          className={`px-6 py-8 ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-50"
          }`}
        >
          <div className="max-w-6xl mx-auto text-center">
            <p className="opacity-80">© 2024 John Doe. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
