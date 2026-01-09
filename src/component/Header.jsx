import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);

  // Toggle light / dark theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Navbar blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span>📍</span> TheEvent
      </div>

      <nav>
        <a href="#">Home</a>
        <a href="#">Speakers</a>
        <a href="#">Schedule</a>
        <a href="#">Venue</a>
        <a className="active">Gallery</a>
        <a href="#">Contact</a>
      </nav>

      <div className="nav-actions">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}