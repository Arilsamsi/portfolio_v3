import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTheme } from "../ThemeContext";

function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="px-6 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-500" size={24} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a
                      href="mailto:ahmadarilsamsi@gmail.com"
                      className="hover:text-blue-500"
                    >
                      ahmadarilsamsi@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <i class="fa-brands fa-github fa-lg"></i>
                  <div>
                    <a
                      href="https://github.com/Arilsamsi"
                      className="hover:text-blue-500"
                    >
                      <h4 className="font-semibold">Arilsamsi</h4>
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <i class="fa-brands fa-instagram fa-lg"></i>
                  <div>
                    <a
                      href="https://www.instagram.com/arilsamsi/"
                      className="hover:text-blue-500"
                    >
                      <h4 className="font-semibold">arilsamsi</h4>
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <i class="fa-brands fa-tiktok fa-lg"></i>
                  <div>
                    <a
                      href="https://www.tiktok.com/@arilsamsi?is_from_webapp=1&sender_device=pc"
                      className="hover:text-blue-500"
                    >
                      <h4 className="font-semibold">arilsamsi</h4>
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <i class="fa-brands fa-facebook fa-lg"></i>
                  <div>
                    <a
                      href="https://www.facebook.com/people/Aril-Samsi/pfbid02tW7Lo427vBcTB45jaK6u9rWtBRT9HLwijzHav2wHwiQXD7pgDzQZodPuwt2Nyrbyl/"
                      className="hover:text-blue-500"
                    >
                      <h4 className="font-semibold">Aril Samsi</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${
                      theme === "dark"
                        ? "bg-gray-800 border-gray-700 focus:border-blue-500"
                        : "bg-white border-gray-300 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${
                      theme === "dark"
                        ? "bg-gray-800 border-gray-700 focus:border-blue-500"
                        : "bg-white border-gray-300 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      theme === "dark"
                        ? "bg-gray-800 border-gray-700 focus:border-blue-500"
                        : "bg-white border-gray-300 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
