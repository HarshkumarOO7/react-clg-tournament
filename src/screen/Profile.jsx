<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axiosConfig";
import { useAuth } from "../context/AuthContext";
import "../static/Profile.css";

export default function Profile() {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    location: "",
    description: "",
    gender: "",
    age: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  // ================= FETCH PROFILE =================
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/profile/me");

        setForm({
          name: res.data.name || "",
          phoneNumber: res.data.phoneNumber || "",
          location: res.data.location || "",
          description: res.data.description || "",
          gender: res.data.gender || "",
          age: res.data.age || "",
        });

        setPreview(res.data.profileImage || "");
      } catch (err) {
        console.error("Profile load failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // ================= HANDLERS =================
=======
import { useState } from "react";
import api from "../utils/axiosConfig";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, login } = useAuth();

  const [form, setForm] = useState({
    name: user?.name || "",
    phoneNumber: user?.phoneNumber || "",
    gender: user?.gender || "",
    location: user?.location || "",
    description: user?.description || "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(user?.profileImage || "");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
<<<<<<< HEAD
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      alert("Image must be under 10MB");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
=======
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    if (!isEditing) return;

    setSaving(true);
=======

    if (!isEditing) return;

    setLoading(true);
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0

    try {
      const data = new FormData();

<<<<<<< HEAD
      // Add all form fields
      Object.keys(form).forEach((key) => {
        if (form[key]) data.append(key, form[key]);
=======
      Object.entries(form).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          data.append(key, value);
        }
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
      });

      if (image) {
        data.append("profileImage", image);
      }

<<<<<<< HEAD
      const res = await api.put("/profile/update", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Update auth context with new user data
      login(res.data.user, localStorage.getItem("token"));

      alert("Profile updated successfully ✅");
      setIsEditing(false);
      
      // Refresh preview if new image was uploaded
      if (res.data.user.profileImage) {
        setPreview(res.data.user.profileImage);
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Profile update failed ❌");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to deactivate your account? This action cannot be undone.")) return;

    try {
      await api.delete("/profile/delete");
      logout();
      navigate("/");
    } catch (err) {
      alert("Deactivate failed ❌");
    }
  };

  if (loading) {
    return (
      <div className="profile-loading">
        <div className="spinner"></div>
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      {/* HEADER */}
      <div className="profile-header">
        <div className="profile-cover">
          <div className="profile-avatar-wrapper">
            <img
              src={
                preview ||
                `https://ui-avatars.com/api/?name=${form.name || "User"}&background=4f46e5&color=fff`
              }
              alt="profile"
              className="profile-avatar"
            />

            {isEditing && (
              <label className="avatar-upload">
                <input type="file" hidden accept="image/*" onChange={handleImageChange} />
                <span>📷</span>
              </label>
            )}
          </div>

          <h1 className="profile-name">{form.name || "Your Name"}</h1>
          <p className="profile-role">
            {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
          </p>
          <p className="profile-email">{user?.email}</p>
        </div>
      </div>

      {/* TABS */}
      <div className="profile-tabs">
        <button
          className={`tab-btn ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile Info
        </button>

        <button
          className={`tab-btn ${activeTab === "teams" ? "active" : ""}`}
          onClick={() => setActiveTab("teams")}
        >
          My Teams
        </button>

        <button
          className={`tab-btn ${activeTab === "registrations" ? "active" : ""}`}
          onClick={() => setActiveTab("registrations")}
        >
          Registrations
        </button>
      </div>

      {/* CONTENT */}
      <div className="profile-content">
        {activeTab === "profile" && (
          <>
            {!isEditing && (
              <button className="edit-profile-btn" onClick={() => setIsEditing(true)}>
                ✎ Edit Profile
              </button>
            )}

            <form onSubmit={handleSubmit} className="profile-form">
              {/* Name */}
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                  disabled={!isEditing}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Age */}
              <div className="form-group">
                <label>Age</label>
                <input 
                  type="number"
                  name="age" 
                  value={form.age} 
                  onChange={handleChange} 
                  disabled={!isEditing}
                  placeholder="Enter your age"
                  min="10"
                  max="100"
                />
              </div>

              {/* Gender */}
              <div className="form-group">
                <label>Gender</label>
                <select 
                  name="gender" 
                  value={form.gender} 
                  onChange={handleChange} 
                  disabled={!isEditing}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="tel"
                  name="phoneNumber" 
                  value={form.phoneNumber} 
                  onChange={handleChange} 
                  disabled={!isEditing}
                  placeholder="Enter 10-digit mobile number"
                  pattern="[0-9]{10}"
                  maxLength="10"
                />
              </div>

              {/* Location */}
              <div className="form-group">
                <label>Location</label>
                <input 
                  name="location" 
                  value={form.location} 
                  onChange={handleChange} 
                  disabled={!isEditing}
                  placeholder="City, State"
                />
              </div>

              {/* Description */}
              <div className="form-group">
                <label>Bio / Description</label>
                <textarea 
                  name="description" 
                  value={form.description} 
                  onChange={handleChange} 
                  disabled={!isEditing}
                  placeholder="Tell us about yourself..."
                  rows="4"
                />
              </div>

              {isEditing && (
                <div className="form-actions">
                  <button type="submit" className="save-btn" disabled={saving}>
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                  <button type="button" className="cancel-btn" onClick={() => {
                    setIsEditing(false);
                    // Reset form to original values
                    window.location.reload();
                  }}>
                    Cancel
                  </button>
                </div>
              )}
            </form>

            <div className="danger-zone">
              <h3>⚠️ Danger Zone</h3>
              <p>Once you deactivate your account, you will lose all your data.</p>
              <button className="deactivate-btn" onClick={handleDelete}>
                Deactivate Account
              </button>
            </div>
          </>
        )}

        {activeTab === "teams" && <TeamsList navigate={navigate} />}
        {activeTab === "registrations" && <RegistrationsList navigate={navigate} />}
      </div>
    </div>
  );
}

/* ================= TEAMS COMPONENT ================= */
function TeamsList({ navigate }) {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await api.get("/teams/my-teams");
        setTeams(res.data || []);
      } catch (error) {
        console.error("Failed to fetch teams", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeams();
  }, []);

  if (loading) return <div className="loading-spinner">Loading teams...</div>;

  if (teams.length === 0) {
    return (
      <div className="empty-state">
        <p>You haven't joined any teams yet.</p>
        <button className="primary-btn" onClick={() => navigate("/teams")}>
          Browse Teams
        </button>
      </div>
    );
  }

  return (
    <div className="teams-grid">
      {teams.map((team) => (
        <div key={team._id} className="team-card">
          <h3>{team.teamName}</h3>
          <p className="team-role">
            {team.captainId?._id === JSON.parse(localStorage.getItem("user"))?._id 
              ? "👑 Captain" 
              : "👤 Player"}
          </p>
          <p className="team-sport">🏆 {team.sportId?.name || "Unknown"}</p>
          <p className="team-players">
            👥 {team.players?.filter(p => p.status === "approved").length || 0} Players
          </p>

          <button className="view-btn" onClick={() => navigate(`/team/${team._id}`)}>
            View Team →
          </button>
        </div>
      ))}
    </div>
  );
}

/* ================= REGISTRATIONS COMPONENT ================= */
function RegistrationsList({ navigate }) {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const res = await api.get("/registrations/my-registrations");
        setRegistrations(res.data || []);
      } catch (error) {
        console.error("Failed to fetch registrations", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRegistrations();
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case "approved": return "#10b981";
      case "pending": return "#f59e0b";
      case "rejected": return "#ef4444";
      default: return "#6b7280";
    }
  };

  if (loading) return <div className="loading-spinner">Loading registrations...</div>;

  if (registrations.length === 0) {
    return (
      <div className="empty-state">
        <p>No tournament registrations yet.</p>
        <button className="primary-btn" onClick={() => navigate("/tournaments")}>
          Browse Tournaments
        </button>
      </div>
    );
  }

  return (
    <div className="registrations-list">
      {registrations.map((reg) => (
        <div key={reg._id} className="registration-card">
          <div className="reg-header">
            <h3>{reg.tournamentId?.eventName || "Tournament"}</h3>
            <span 
              className={`status-badge ${reg.approvalStatus || "pending"}`}
              style={{ backgroundColor: getStatusColor(reg.approvalStatus) }}
            >
              {reg.approvalStatus || "pending"}
            </span>
          </div>

          <p className="reg-team">🏷️ Team: {reg.teamId?.teamName || "N/A"}</p>
          <p className="reg-date">
            📅 Registered:{" "}
            {reg.registrationDate
              ? new Date(reg.registrationDate).toLocaleDateString()
              : "N/A"}
          </p>

          <p className="reg-payment">
            💰 Payment: 
            <span className={`payment-status ${reg.paymentStatus || "pending"}`}>
              {reg.paymentStatus || "pending"}
            </span>
          </p>

          <button
            className="view-btn"
            onClick={() => navigate(`/tournament/${reg.tournamentId?._id}`)}
          >
            View Tournament →
          </button>
        </div>
      ))}
    </div>
  );
}
=======
      const res = await api.put("/profile/update", data);

      // ✅ IMPORTANT: keep SAME token, only update user
      const token = localStorage.getItem("token");
      login(res.data.user, token);

      setIsEditing(false);
      alert("Profile updated successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Profile update failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Profile</h2>

      {/* PROFILE IMAGE */}
      <div style={styles.imageSection}>
        <img
          src={
            preview ||
            "https://ui-avatars.com/api/?name=User&background=random"
          }
          alt="Profile"
          style={styles.image}
        />

        {isEditing && (
          <label style={styles.uploadBtn}>
            Change Photo
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </label>
        )}
      </div>

      {/* EDIT BUTTON (OUTSIDE FORM) */}
      {!isEditing && (
        <button
          type="button"
          style={styles.editBtn}
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </button>
      )}

      {/* PROFILE FORM */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.row}>
          <label>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div style={styles.row}>
          <label>Phone Number</label>
          <input
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div style={styles.row}>
          <label>Gender</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            disabled={!isEditing}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div style={styles.row}>
          <label>Location</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div style={styles.row}>
          <label>About</label>
          <textarea
            name="description"
            rows="4"
            value={form.description}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        {/* READ-ONLY INFO */}
        <div style={styles.readOnly}>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Role:</strong> {user?.role}</p>
          <p>
            <strong>Joined:</strong>{" "}
            {user?.createdAt
              ? new Date(user.createdAt).toDateString()
              : "-"}
          </p>
        </div>

        {/* SAVE BUTTON */}
        {isEditing && (
          <button
            type="submit"
            disabled={loading}
            style={styles.saveBtn}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        )}
      </form>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  container: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "30px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "20px",
  },
  imageSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "30px",
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #e5e7eb",
  },
  uploadBtn: {
    cursor: "pointer",
    color: "#4f46e5",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  row: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  readOnly: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#374151",
  },
  editBtn: {
    marginBottom: "20px",
    padding: "10px",
    background: "#0f172a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
  },
  saveBtn: {
    marginTop: "20px",
    padding: "10px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
  },
};
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
