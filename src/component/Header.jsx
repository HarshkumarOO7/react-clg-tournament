import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState, useRef } from "react";
import api from "../utils/axiosConfig";
import socket from "../utils/socket";

export default function Header() {
  const { user, logout, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);
  const [openNotification, setOpenNotification] = useState(false);
  const [isCaptain, setIsCaptain] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  const isAdmin = user?.role === "admin";
  const isOrganizer = user?.role === "organizer";
  const unreadCount = notifications.filter(n => !n.isRead).length;

  const toggleDropdown = (key) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(e.target)) {
        setOpenNotification(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (window.innerWidth > 768 && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (user) {
      api.get("/api/teams/captain-teams")
        .then(res => setIsCaptain(res.data.length > 0))
        .catch(() => setIsCaptain(false));
    }
  }, [user]);

  useEffect(() => {
    if (user?._id) {
      socket.emit("register", user._id);
    }
  }, [user]);

  useEffect(() => {
    const handleNotification = (data) => {
      setNotifications(prev => [data, ...prev]);
    };
    socket.on("new_notification", handleNotification);
    return () => socket.off("new_notification", handleNotification);
  }, []);

  useEffect(() => {
    if (user) {
      api.get("/api/notifications")
        .then(res => setNotifications(res.data))
        .catch(err => console.error("Notification fetch error", err));
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    setOpenProfile(false);
    navigate("/login");
  };

  const markAsRead = async (n) => {
    try {
      if (!n._id) return;
      await api.put(`/notifications/${n._id}`);
      setNotifications(prev => prev.map(item =>
        item._id === n._id ? { ...item, isRead: true } : item
      ));
    } catch (err) {
      console.error(err);
    }
  };

  const markAllAsRead = async () => {
    const unreadNotifications = notifications.filter(n => !n.isRead);
    for (const n of unreadNotifications) {
      try {
        await api.put(`/notifications/${n._id}`);
      } catch (err) {
        console.error(err);
      }
    }
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const isActive = (path) => location.pathname === path;

  // Admin Navigation
  const adminNavLinks = {
    main: [
      { path: "/admin/dashboard", label: "Dashboard", icon: "📊" },
      { path: "/admin/users", label: "Users", icon: "👥" },
      { path: "/admin/registrations", label: "Registrations", icon: "📝" },
    ],
    dropdowns: {
      tournament: {
        icon: "🏆",
        label: "Tournament",
        links: [
          { path: "/admin/tournament/create", label: "Create Tournament" },
          { path: "/admin/tournaments", label: "Tournament List" },
        ]
      },
      teams: {
        icon: "👥",
        label: "Teams",
        links: [
          { path: "/admin/teams/add", label: "Add Team" },
          { path: "/admin/teams", label: "Team List" },
          { path: "/admin/players/approve", label: "Approve Players" },
        ]
      },
      matches: {
        icon: "⚽",
        label: "Matches",
        links: [
          { path: "/admin/matches", label: "Create Match" },
          { path: "/admin/matches/list", label: "Match List" },
        ]
      },
      settings: {
        icon: "⚙️",
        label: "Settings",
        links: [
          { path: "/admin/sports", label: "Sports" },
          { path: "/admin/venues", label: "Venues" },
          { path: "/admin/sponsors", label: "Sponsors" },
        ]
      },
      analytics: {
        icon: "📊",
        label: "Analytics",
        links: [
          { path: "/admin/analytics", label: "Analytics" },
          { path: "/admin/reports", label: "Reports" },
        ]
      }
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo" onClick={() => navigate("/")}>
          🏆 ArenaSync
        </div>

        <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </div>

        {!loading && (
          <>
            <nav className={mobileMenuOpen ? "mobile-open" : ""}>
              {isAdmin ? (
                <>
                  {adminNavLinks.main.map(link => (
                    <Link 
                      key={link.path} 
                      to={link.path} 
                      className={isActive(link.path) ? "active" : ""}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.icon} {link.label}
                    </Link>
                  ))}
                  {Object.entries(adminNavLinks.dropdowns).map(([key, dropdown]) => (
                    <div key={key} className={`nav-dropdown ${openDropdowns[key] ? 'open' : ''}`}>
                      <button className="nav-link" onClick={() => toggleDropdown(key)}>
                        {dropdown.icon} {dropdown.label} {openDropdowns[key] ? '▲' : '▼'}
                      </button>
                      <div className="dropdown-menu">
                        {dropdown.links.map(link => (
                          <Link 
                            key={link.path} 
                            to={link.path}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setOpenDropdowns({});
                            }}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <Link to="/" className={isActive("/") ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>🏠 Home</Link>
                  <Link to="/tournaments" className={isActive("/tournaments") ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>🏆 Tournaments</Link>
                  <Link to="/teams" className={isActive("/teams") ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>👥 Teams</Link>
                  <Link to="/matches" className={isActive("/matches") ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>⚽ Matches</Link>
                  <Link to="/leaderboard" className={isActive("/leaderboard") ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>🏅 Leaderboard</Link>
                </>
              )}
            </nav>

            <div className="nav-actions">
              {user && (
                <div className="notification-icon" onClick={() => setOpenNotification(!openNotification)}>
                  🔔
                  {unreadCount > 0 && <span className="notif-badge">{unreadCount}</span>}
                </div>
              )}

              {user ? (
                <div className="profile-wrapper" ref={profileRef}>
                  <div className="profile-icon" onClick={() => setOpenProfile(!openProfile)}>
                    {user.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                  {openProfile && (
                    <div className="profile-dropdown">
                      <p><strong>{user.name}</strong></p>
                      <p className="profile-email">{user.email}</p>
                      <hr />
                      <button onClick={() => { navigate("/profile"); setOpenProfile(false); }}>👤 My Profile</button>
                      <button onClick={handleLogout} className="logout-btn">🚪 Logout</button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="login-btn">🔐 Login</Link>
              )}
            </div>
          </>
        )}
      </header>

      {openNotification && (
        <div className="notif-overlay" onClick={() => setOpenNotification(false)}>
          <div className="notif-popup" onClick={(e) => e.stopPropagation()} ref={notificationRef}>
            <div className="notif-header">
              <h3>🔔 Notifications</h3>
              <button onClick={() => setOpenNotification(false)} className="close-btn">×</button>
            </div>
            <div style={{ flex: 1, overflowY: "auto" }}>
              {notifications.length > 0 ? (
                notifications.map(n => (
                  <div key={n._id} className={`notif-item ${!n.isRead ? "unread" : ""}`} onClick={() => markAsRead(n)}>
                    <p>{n.message}</p>
                    <small>{n.createdAt ? new Date(n.createdAt).toLocaleString() : "Just now"}</small>
                  </div>
                ))
              ) : (
                <div className="empty-notif">📭 No notifications</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}