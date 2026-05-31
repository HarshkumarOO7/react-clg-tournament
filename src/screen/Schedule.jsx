<<<<<<< HEAD
import { useEffect, useState } from "react";
import api from "../utils/axiosConfig";
import { Link } from "react-router-dom";
import "../static/schedule.css";

export default function Schedule() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const res = await api.get("/matches/public/upcoming");
      setMatches(res.data);
    } catch (err) {
      console.error("Failed to load matches", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredMatches = matches.filter(m => {
    if (filter === "all") return true;
    return m.status === filter;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case "scheduled": return "#f59e0b";
      case "live": return "#ef4444";
      case "completed": return "#10b981";
      default: return "#6b7280";
    }
  };

  if (loading) {
    return <div className="loading-spinner">Loading schedule...</div>;
  }

  return (
    <div className="schedule-page">
      <div className="schedule-header">
        <h1>📅 Match Schedule</h1>
        <p>Upcoming and live matches</p>
      </div>

      <div className="schedule-filters">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>All</button>
        <button onClick={() => setFilter("scheduled")} className={filter === "scheduled" ? "active" : ""}>Upcoming</button>
        <button onClick={() => setFilter("live")} className={filter === "live" ? "active" : ""}>Live</button>
        <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>Completed</button>
      </div>

      {filteredMatches.length === 0 ? (
        <div className="no-matches">
          <p>No matches found</p>
        </div>
      ) : (
        <div className="matches-grid">
          {filteredMatches.map(match => (
            <div key={match._id} className="match-card">
              <div className="match-teams">
                <div className="team">
                  <span className="team-name">{match.teams?.[0]?.teamName || "TBD"}</span>
                </div>
                <div className="vs">VS</div>
                <div className="team">
                  <span className="team-name">{match.teams?.[1]?.teamName || "TBD"}</span>
                </div>
              </div>
              <div className="match-info">
                <p>🏟️ {match.venueId?.name || "Venue TBD"}</p>
                <p>📅 {new Date(match.matchDate).toLocaleString()}</p>
                <span className="status" style={{ backgroundColor: getStatusColor(match.status) }}>
                  {match.status}
                </span>
              </div>
              <Link to={`/tournament/${match.tournamentId?._id}`} className="view-btn">
                View Tournament →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
=======
import { useState } from "react";
import "../static/schedule.css";

const schedules = {
  day1: [
    {
      time: "09:30 AM",
      title: "Registration",
      desc: "Fugit voluptas iusto maiores temporibus autem numquam magnam.",
    },
    {
      time: "10:00 AM",
      title: "Keynote",
      speaker: "Brenden Legros",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      desc: "Facere provident incidunt quos voluptas.",
    },
    {
      time: "11:00 AM",
      title: "Et voluptatem iusto dicta nobis.",
      speaker: "Hubert Hirthe",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      desc:
        "Maiores dignissimos neque qui cum accusantium ut sit sint inventore.",
    },
  ],

  day2: [
    {
      time: "10:00 AM",
      title: "Opening Ceremony",
      desc: "Officiis adipisci placeat eius laudantium.",
    },
    {
      time: "11:30 AM",
      title: "Marketing Trends 2026",
      speaker: "Sarah Johnson",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      desc: "Quibusdam facilis doloremque qui autem.",
    },
    {
      time: "01:00 PM",
      title: "Panel Discussion",
      speaker: "Michael Scott",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
      desc: "Nemo enim ipsam voluptatem quia voluptas.",
    },
  ],

  day3: [
    {
      time: "10:30 AM",
      title: "Startup Pitch",
      speaker: "Emma Watson",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      desc: "Dolorem ipsum quia dolor sit amet.",
    },
    {
      time: "12:00 PM",
      title: "Closing Keynote",
      speaker: "David Miller",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      desc: "Ut enim ad minima veniam quis nostrum.",
    },
  ],
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState("day1");

  return (
    <section className="schedule-section">
      {/* TITLE */}
      <h2 className="schedule-title">Event Schedule</h2>
      <div className="schedule-underline"></div>
      <p className="schedule-subtitle">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      {/* DAY BUTTONS */}
      <div className="day-tabs">
        <button
          className={`day ${activeDay === "day1" ? "active" : ""}`}
          onClick={() => setActiveDay("day1")}
        >
          Day 1
        </button>

        <button
          className={`day ${activeDay === "day2" ? "active" : ""}`}
          onClick={() => setActiveDay("day2")}
        >
          Day 2
        </button>

        <button
          className={`day ${activeDay === "day3" ? "active" : ""}`}
          onClick={() => setActiveDay("day3")}
        >
          Day 3
        </button>
      </div>

      {/* DESCRIPTION */}
      <p className="schedule-desc">
        Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet
        officia. Eius necessitatibus voluptatem quis labore perspiciatis quia.
      </p>

      {/* LIST */}
      <div className="schedule-list">
        {schedules[activeDay].map((item, index) => (
          <div className="schedule-item" key={index}>
            <div className="time">{item.time}</div>

            <div
              className={`content ${
                item.speaker ? "with-speaker" : ""
              }`}
            >
              {item.img && <img src={item.img} alt={item.speaker} />}

              <div>
                <h4>
                  {item.title}
                  {item.speaker && <span> {item.speaker}</span>}
                </h4>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
