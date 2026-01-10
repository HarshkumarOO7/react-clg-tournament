import { useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";

export default function Registration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "player",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful 🎉 (API later)");
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Create Account</h2>
        <p>Join tournaments & manage events easily</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <select name="role" onChange={handleChange}>
              <option value="player">Player</option>
              <option value="coach">Coach</option>
              <option value="organizer">Organizer</option>
            </select>
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <span className="divider">OR</span>

        <button className="google-btn">Continue with Google</button>

        <p className="login-text">
          Already have an account? <Link to="/Login">Login</Link>
        </p>
        
      </div>
    </div>
  );
}
