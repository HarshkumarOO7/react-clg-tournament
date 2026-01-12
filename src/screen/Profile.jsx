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

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEditing) return;

    setLoading(true);

    try {
      const data = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          data.append(key, value);
        }
      });

      if (image) {
        data.append("profileImage", image);
      }

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
