import { useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation(); // 👈 current route

  // Toggle theme
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
        <a href="/venue">Venue</a>
        <a className="active">Gallery</a>
        <a href="/sponsors">Sponsors</a>
        <a href="#">Contact</a>

        {/* 🔥 CONDITIONAL BUTTON */}
        {location.pathname === "/login" ? (
          <Link to="/register" className="hero-btn">
            Register
          </Link>
        ) : location.pathname === "/register" ? (
          <Link to="/login" className="hero-btn">
            Login
          </Link>
        ) : (
          <Link to="/login" className="hero-btn">
            Login
          </Link>
        )}
      </nav>

      <div className="nav-actions">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}