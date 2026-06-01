import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../static/Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show/hide scroll top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing! Updates will be sent to ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <>
      <footer className="footer footer-animate">
        <div className="footer-container">
          {/* COLUMN 1 - Brand */}
          <div className="footer-col">
            <h2 className="footer-logo">🏆 ArenaSync</h2>
            <p className="footer-tagline">
              Your complete sports tournament management platform. Create, compete, and conquer.
            </p>
            <p>
              <strong>📍 Address:</strong> 123 Sports Complex,<br />
              Stadium Road, Mumbai - 400001
            </p>
            <p>
              <strong>📞 Phone:</strong> +91 98765 43210 <br />
              <strong>✉️ Email:</strong> support@arenasync.com
            </p>
          </div>

          {/* COLUMN 2 - Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/" onClick={scrollToTop}>🏠 Home</Link></li>
              <li><Link to="/tournaments" onClick={scrollToTop}>🏆 Tournaments</Link></li>
              <li><Link to="/schedule" onClick={scrollToTop}>📅 Schedule</Link></li>
              <li><Link to="/leaderboard" onClick={scrollToTop}>🏅 Leaderboard</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>📞 Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 - For Players */}
          <div className="footer-col">
            <h4>For Players</h4>
            <ul>
              <li><Link to="/my-teams" onClick={scrollToTop}>👥 My Teams</Link></li>
              <li><Link to="/my-registrations" onClick={scrollToTop}>📋 My Registrations</Link></li>
              <li><Link to="/teams/create" onClick={scrollToTop}>✨ Create Team</Link></li>
              <li><Link to="/teams" onClick={scrollToTop}>🔍 Browse Teams</Link></li>
              <li><Link to="/profile" onClick={scrollToTop}>👤 My Profile</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 - Resources */}
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/about" onClick={scrollToTop}>📖 About Us</Link></li>
              <li><Link to="/faq" onClick={scrollToTop}>❓ FAQ</Link></li>
              <li><Link to="/gallery" onClick={scrollToTop}>🖼️ Gallery</Link></li>
              <li><Link to="/speakers" onClick={scrollToTop}>🎤 Speakers</Link></li>
              <li><Link to="/venue" onClick={scrollToTop}>🏟️ Venue</Link></li>
            </ul>
          </div>

          {/* COLUMN 5 - Legal */}
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/terms" onClick={scrollToTop}>📜 Terms & Conditions</Link></li>
              <li><Link to="/privacy" onClick={scrollToTop}>🔒 Privacy Policy</Link></li>
              <li><Link to="/sponsors" onClick={scrollToTop}>🤝 Sponsors</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>💬 Support</Link></li>
            </ul>
          </div>

          {/* COLUMN 6 - Newsletter */}
          <div className="footer-col">
            <h4>Stay Updated</h4>
            <p className="newsletter-text">
              Subscribe to get tournament updates, event announcements & exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="newsletter">
              <input 
                type="email" 
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            
            {/* Social Icons */}
            <div className="social-icons">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                📘
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                📸
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="YouTube"
              >
                📺
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} <strong>ArenaSync</strong>. All rights reserved. 
            Empowering sports tournaments worldwide.
          </p>
          <button className="scroll-top-btn" onClick={scrollToTop}>
            ↑ Back to Top
          </button>
        </div>
      </footer>

      {/* Fixed Scroll Top Button (appears after scrolling) */}
      {showScrollTop && (
        <button 
          className="scroll-top-fixed" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;