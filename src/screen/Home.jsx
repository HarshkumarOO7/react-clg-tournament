// import "../static/landing.css";

export default function Home() {
  return (
    <div className="landing">
      {/* Navbar */}

      {/* Hero */}
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>
            THE ANNUAL <span>MARKETING</span> CONFERENCE
          </h1>
          <p>10–12 December, Downtown Conference Center, New York</p>

          <div className="play-btn">▶</div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info">
        <div>
          <h2>About The Event</h2>
          <p>
            A professional event management platform designed to organize,
            manage and participate in tournaments and events seamlessly.
          </p>
        </div>

        <div>
          <h3>WHERE</h3>
          <p>Downtown Conference Center, New York</p>
        </div>

        <div>
          <h3>WHEN</h3>
          <p>Monday to Wednesday<br />10–12 December</p>
        </div>
      </section>
    </div>
  );
}
