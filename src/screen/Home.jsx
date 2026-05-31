import { useEffect, useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import api from "../utils/axiosConfig";
import "../static/home.css";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const [stats, setStats] = useState({
    tournaments: 0,
    teams: 0,
    matches: 0,
    players: 0,
  });

  const { user } = useAuth();
  const [featuredTournaments, setFeaturedTournaments] = useState([]);
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        // ✅ FIXED: Use PUBLIC endpoints for home page
        const tournamentsRes = await api.get("/tournaments/public");
        const tournaments = tournamentsRes.data;

        setStats((prev) => ({
          ...prev,
          tournaments: tournaments.length,
        }));

        const featured = tournaments
          .filter((t) => ["upcoming", "ongoing"].includes(t.status))
          .slice(0, 3);
        setFeaturedTournaments(featured);

        // ✅ FIXED: Use PUBLIC endpoint for upcoming matches
        try {
          const matchesRes = await api.get("/matches/public/upcoming");
          setUpcomingMatches(matchesRes.data.slice(0, 5));
          setStats((prev) => ({
            ...prev,
            matches: matchesRes.data.length,
          }));
        } catch {
          setUpcomingMatches([]);
        }

        // ✅ FIXED: For team counts, either use a public endpoint or fallback
        try {
          const teamsRes = await api.get("/teams/public");
          setStats((prev) => ({
            ...prev,
            teams: teamsRes.data.length,
          }));
        } catch {
          setStats((prev) => ({ ...prev, teams: 0 }));
        }

        // ✅ FIXED: For player counts, either use a public endpoint or fallback
        try {
          const usersRes = await api.get("/users/public");
          const players = usersRes.data.filter((u) => u.role === "player");
          setStats((prev) => ({
            ...prev,
            players: players.length,
          }));
        } catch {
          setStats((prev) => ({ ...prev, players: 0 }));
        }
      } catch (err) {
        console.error("Failed to fetch home data:", err);
        setStats({
          tournaments: 0,
          teams: 0,
          matches: 0,
          players: 0,
        });
        setFeaturedTournaments([]);
        setUpcomingMatches([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <div className="sports-event-page">
      {/* HERO */}
      <section className="hero clean-hero">
        <div className="hero-content">
          <h1 className="fade-up">
            <span>SPORTS EVENT</span>
            <span className="highlight">MANAGEMENT PLATFORM</span>
          </h1>
          <p className="fade-up">
            Create tournaments, form teams, compete and win prizes
          </p>

          <div className="hero-buttons">
            <Link to="/events" className="primary-btn">
              Browse Tournaments
            </Link>
            <Link to="/register" className="secondary-btn">
              Join as Player
            </Link>
          </div>
=======
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
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
        </div>
      </section>

      {/* STATS */}
<<<<<<< HEAD
      <section className="stats-section">
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-number">{stats.tournaments}+</div>
          <div className="stat-label">Active Tournaments</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-number">{stats.teams}+</div>
          <div className="stat-label">Registered Teams</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⚔️</div>
          <div className="stat-number">{stats.matches}+</div>
          <div className="stat-label">Matches Played</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-number">{stats.players}+</div>
          <div className="stat-label">Active Players</div>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section className="tournaments-section">
        <div className="section-header">
          <h2>🔥 FEATURED TOURNAMENTS</h2>
          <Link to="/events" className="view-all">
            View All →
          </Link>
        </div>

        <div className="tournament-grid">
          {featuredTournaments.length > 0 ? (
            featuredTournaments.map((t) => (
              <div key={t._id} className="tournament-card">
                <div className="tournament-image">
                  {t.logo ? (
                    <img src={t.logo} alt={t.eventName} />
                  ) : (
                    <div className="default-image">🏆</div>
                  )}
                  <span className={`status-badge ${t.status}`}>
                    {t.status}
                  </span>
                </div>

                <div className="tournament-details">
                  <h3>{t.eventName}</h3>
                  <p className="sport">{t.sportId?.name}</p>

                  <div className="tournament-meta">
                    <span>
                      📅 {new Date(t.startDate).toLocaleDateString()}
                    </span>
                    <span>👥 {t.teams?.length || 0} teams</span>
                  </div>

                  <div className="tournament-prize">
                    🏆 Prize Pool: ₹{t.prizePool?.toLocaleString() || 0}
                  </div>

                  <Link
                    to={`/tournament/${t._id}`}
                    className="btn-outline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="no-data">No tournaments available</p>
          )}
        </div>
      </section>

      {/* MATCHES */}
      <section className="matches-section">
        <h2>📅 UPCOMING MATCHES</h2>

        <div className="matches-list">
          {upcomingMatches.length > 0 ? (
            upcomingMatches.map((m) => (
              <div key={m._id} className="match-card">
                <div className="match-teams">
                  <span className="team">
                    {m.teams?.[0]?.teamName || "TBD"}
                  </span>
                  <span className="vs">VS</span>
                  <span className="team">
                    {m.teams?.[1]?.teamName || "TBD"}
                  </span>
                </div>

                <div className="match-info">
                  <span>🏟️ {m.venueId?.name}</span>
                  <span>
                    📅{" "}
                    {new Date(m.matchDate).toLocaleString()}
                  </span>
                  <span className={`status ${m.status}`}>
                    {m.status}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="no-data">No upcoming matches</p>
          )}
=======
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
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
        </div>
      </section>

      {/* CTA */}
<<<<<<< HEAD
      {!user && (
        <section className="cta-section">
          <div className="cta-content">
            <h2>READY TO COMPETE?</h2>
            <p>
              Join {stats.players}+ athletes and {stats.teams}+ teams already on our platform
            </p>

            <div className="cta-buttons">
              <Link to="/register" className="cta-primary">
                Create Account
              </Link>
              <Link to="/events" className="cta-secondary">
                Browse Tournaments
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
=======
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
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
