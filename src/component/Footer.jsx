import "../static/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-animate">
        <div className="footer-container">

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
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <p>
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
    </>
  );
};

export default Footer;
