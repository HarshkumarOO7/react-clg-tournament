<<<<<<< HEAD
import { Link } from "react-router-dom";
import "../static/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

=======
import "../static/Footer.css";

const Footer = () => {
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
  return (
    <>
      <footer className="footer footer-animate">
        <div className="footer-container">
<<<<<<< HEAD
          {/* COLUMN 1 - Brand */}
          <div className="footer-col">
            <h2 className="footer-logo">ArenaSync</h2>
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
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/tournaments" onClick={scrollToTop}>Tournaments</Link></li>
              <li><Link to="/schedule" onClick={scrollToTop}>Schedule</Link></li>
              <li><Link to="/leaderboard" onClick={scrollToTop}>Leaderboard</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 - For Players */}
          <div className="footer-col">
            <h4>For Players</h4>
            <ul>
              <li><Link to="/my-teams" onClick={scrollToTop}>My Teams</Link></li>
              <li><Link to="/my-registrations" onClick={scrollToTop}>My Registrations</Link></li>
              <li><Link to="/teams/create" onClick={scrollToTop}>Create Team</Link></li>
              <li><Link to="/teams" onClick={scrollToTop}>Browse Teams</Link></li>
              <li><Link to="/profile" onClick={scrollToTop}>My Profile</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 - Resources */}
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
              <li><Link to="/faq" onClick={scrollToTop}>FAQ</Link></li>
              <li><Link to="/gallery" onClick={scrollToTop}>Gallery</Link></li>
              <li><Link to="/speakers" onClick={scrollToTop}>Speakers</Link></li>
              <li><Link to="/venue" onClick={scrollToTop}>Venue</Link></li>
            </ul>
          </div>

          {/* COLUMN 5 - Legal */}
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/terms" onClick={scrollToTop}>Terms & Conditions</Link></li>
              <li><Link to="/privacy" onClick={scrollToTop}>Privacy Policy</Link></li>
              <li><Link to="/sponsors" onClick={scrollToTop}>Sponsors</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>Support</Link></li>
            </ul>
          </div>

          {/* COLUMN 6 - Newsletter */}
          <div className="footer-col">
            <h4>Stay Updated</h4>
            <p className="newsletter-text">
              Subscribe to get tournament updates, event announcements & exclusive offers.
            </p>
            <div className="newsletter">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
            {/* <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
            </div> */}
=======

          {/* COLUMN 1 */}
          <div className="footer-col">
            <h2 className="footer-logo">TheEvent</h2>
            <p className="footer-tagline">
              Where innovation, networking, and inspiration meet.
            </p>

            <p>
              A108 Adam Street <br />
              New York, NY 535022
            </p>

            <p>
              <strong>Phone:</strong> +1 5589 55488 55 <br />
              <strong>Email:</strong> info@theevent.com
            </p>
          </div>

          {/* COLUMN 2 */}
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>Home</li>
              <li>Events</li>
              <li>Speakers</li>
              <li>Schedule</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="footer-col">
            <h4>For Attendees</h4>
            <ul>
              <li>Register</li>
              <li>Venue</li>
              <li>Sponsors</li>
              <li>Gallery</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Support</li>
              <li>Careers</li>
              <li>Press Kit</li>
            </ul>
          </div>

          {/* COLUMN 5 – NEWSLETTER (NEW) */}
          <div className="footer-col">
            <h4>Stay Updated</h4>
            <p className="newsletter-text">
              Subscribe to get event updates, speaker announcements & offers.
            </p>

            <div className="newsletter">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <p>
<<<<<<< HEAD
            © {new Date().getFullYear()} <strong>ArenaSync</strong>. All rights reserved. 
            Empowering sports tournaments worldwide.
          </p>
          <button className="scroll-top-btn" onClick={scrollToTop}>
            ↑ Back to Top
          </button>
        </div>
      </footer>
=======
            © {new Date().getFullYear()} <strong>TheEvent</strong>. All Rights Reserved.
          </p>

          <div className="social-icons">
            <div>𝕏</div>
            <div>f</div>
            <div>📷</div>
            <div>in</div>
          </div>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      <div
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </div>
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
    </>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
