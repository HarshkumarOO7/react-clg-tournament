import "../static/event.css";
import { useEffect, useRef } from "react";

const events = [
  {
    title: "Inter-College Cricket Championship",
    sport: "Cricket",
    date: "15 – 20 March 2026",
    location: "National Sports Ground",
    status: "Upcoming",
  },
  {
    title: "5-a-Side Football League",
    sport: "Football",
    date: "05 – 10 April 2026",
    location: "City Arena",
    status: "Ongoing",
  },
  {
    title: "Indoor Badminton Open",
    sport: "Badminton",
    date: "22 February 2026",
    location: "Sports Complex Hall A",
    status: "Completed",
  },
];

export default function Events() {
  const cardsRef = useRef([]);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(card => observer.observe(card));
  }, []);

  return (
    <section className="events">
      {/* HEADER */}
      <header className="events-header fade-down">
        <h1>Sports Events</h1>
        <p>Discover upcoming, ongoing & completed tournaments</p>
      </header>

      {/* QUICK STATS */}
      <div className="event-stats">
        <div>
          <h2>25+</h2>
          <p>Events Hosted</p>
        </div>
        <div>
          <h2>120+</h2>
          <p>Teams Registered</p>
        </div>
        <div>
          <h2>8K+</h2>
          <p>Athletes</p>
        </div>
      </div>

      {/* EVENTS GRID */}
      <div className="events-grid">
        {events.map((event, index) => (
          <div
            key={index}
            ref={el => (cardsRef.current[index] = el)}
            className="event-card reveal"
          >
            <div className="event-top">
              <span className={`status ${event.status.toLowerCase()}`}>
                {event.status}
              </span>
              <span className="sport">{event.sport}</span>
            </div>

            <h3>{event.title}</h3>

            <div className="event-info">
              <p>📅 {event.date}</p>
              <p>📍 {event.location}</p>
            </div>

            <button className="event-btn">View Details</button>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="event-cta fade-up">
        <h2>Want to host your own tournament?</h2>
        <p>
          Register as an organizer and manage events professionally with live
          tracking, team management, and fair play.
        </p>
        <a href="/register" className="cta-btn">
          Become an Organizer
        </a>
      </div>
    </section>
  );
}
