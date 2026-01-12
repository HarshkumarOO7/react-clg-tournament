import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

export default function Header() {
  const { user, logout } = useAuth(); // single source of truth
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">TheEvent</div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/speakers">Speakers</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/venue">Venue</Link>
        <Link to="/sponsors">Sponsors</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="nav-actions">
        {user ? (
          <>
            <span className="welcome-text">Hi, {user.name}</span>
            <button className="hero-btn" onClick={handleLogout}>
              Sign Out
            </button>
          </>
        ) : location.pathname === "/login" ? (
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
      </div>
    </header>
  );
}
