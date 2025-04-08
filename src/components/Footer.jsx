import React from "react";
import { useTheme } from "../ThemeContext";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`px-6 py-8 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="opacity-80">
          © 2024 Ahmad Aril Samsi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
