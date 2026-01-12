import { useEffect, useState } from "react";
import '../static/home.css';

export default function Home() {
  const [count, setCount] = useState({ speakers: 0, attendees: 0, events: 0 });

  // simple counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        speakers: prev.speakers < 40 ? prev.speakers + 1 : 40,
        attendees: prev.attendees < 1200 ? prev.attendees + 40 : 1200,
        events: prev.events < 25 ? prev.events + 1 : 25,
      }));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing">
      {/* HERO */}
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content fade-up">
          <h1>
            THE ANNUAL <span>MARKETING</span> CONFERENCE
          </h1>
          <p>10–12 December, Downtown Conference Center, New York</p>
          <div className="play-btn">▶</div>
        </div>
      </section>

      {/* INFO */}
      <section className="info fade-up">
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
          <p>Monday to Wednesday <br /> 10–12 December</p>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-box">
          <h2>{count.speakers}+</h2>
          <p>Expert Speakers</p>
        </div>
        <div className="stat-box">
          <h2>{count.attendees}+</h2>
          <p>Attendees</p>
        </div>
        <div className="stat-box">
          <h2>{count.events}+</h2>
          <p>Sessions</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="page">
        <h1 className="fade-up">Why Attend This Event?</h1>

        <div className="cards">
          <div className="card slide-left">
            <h3>🎤 Expert Speakers</h3>
            <p>Learn from top industry professionals.</p>
          </div>

          <div className="card fade-up">
            <h3>🤝 Networking</h3>
            <p>Connect with marketers and founders.</p>
          </div>

          <div className="card slide-right">
            <h3>🚀 Growth</h3>
            <p>Boost your skills and business reach.</p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline">
        <h1>Conference Timeline</h1>

        <div className="timeline-item">
          <span>Day 1</span>
          <p>Opening Ceremony & Keynote Speeches</p>
        </div>

        <div className="timeline-item">
          <span>Day 2</span>
          <p>Workshops, Panels & Live Sessions</p>
        </div>

        <div className="timeline-item">
          <span>Day 3</span>
          <p>Final Talks, Awards & Closing</p>
        </div>
      </section>

      {/* CTA */}
      <section className="page center fade-up">
        <h1>Ready to Join Us?</h1>
        <p>Be part of the biggest marketing event of the year.</p>

        <a href="/register" className="hero-btn">
          Register Now
        </a>
      </section>
    </div>
  );
}
