import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const profileRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= CLOSE DROPDOWN ON OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* LOGO */}
      <div className="logo">TheEvent</div>

      {/* NAV LINKS */}
      <nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/events">Events</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/speakers">Speakers</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/venue">Venue</Link>
        <Link to="/sponsors">Sponsors</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* RIGHT ACTIONS */}
      <div className="nav-actions">
        {user ? (
          <div className="profile-wrapper" ref={profileRef}>
            {/* PROFILE ICON */}
            <div
              className="profile-icon"
              onClick={() => setOpenProfile(!openProfile)}
            >
              {user.profileImage ? (
                <img
                  src={user.profileImage}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                user.name.charAt(0).toUpperCase()
              )}
            </div>

            {/* PROFILE DROPDOWN */}
            {openProfile && (
              <div className="profile-dropdown">
                <p className="profile-name">{user.name}</p>
                <p className="profile-email">{user.email}</p>

                <button className="profile_button" onClick={() => navigate("/profile")}>
                  My Profile
                </button>

                <button className="profile_button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
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
