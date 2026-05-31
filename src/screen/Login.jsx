import { useState } from "react";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { validateEmail, validatePassword } from "../utils/validators";
import "./Login.css";
=======
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
<<<<<<< HEAD
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [needsVerification, setNeedsVerification] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleBlur = (field) => {
    let error = null;
    if (field === "email") {
      error = validateEmail(form.email);
    } else if (field === "password") {
      error = validatePassword(form.password);
    }
    if (error) {
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);
    
    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
=======

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    if (!validate()) return;

    setLoading(true);
    setErrors({});

    try {
      const res = await axios.post("http://localhost:5000/api/login", form);
      login(res.data.user, res.data.token);
      
      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      if (err.response?.data?.requiresVerification) {
        setNeedsVerification(true);
        setVerificationEmail(err.response.data.email);
        setErrors({ verify: err.response.data.message });
      } else {
        setErrors({ submit: err.response?.data?.message || "Login failed" });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/resend-verification", {
        email: verificationEmail
      });
      alert("New verification code sent to your email!");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to resend code");
    } finally {
      setLoading(false);
    }
  };

  if (needsVerification) {
    return (
      <div className="login-page">
        <div className="login-card">
          <h2>Email Not Verified</h2>
          <p>Please verify your email address before logging in.</p>
          <p className="verification-email">Check your email: <strong>{verificationEmail}</strong></p>
          {errors.verify && <div className="error-message">{errors.verify}</div>}
          <button onClick={handleResendVerification} className="resend-btn" disabled={loading}>
            Resend Verification Code
          </button>
          <Link to="/register" className="back-link">← Back to Register</Link>
        </div>
      </div>
    );
  }

=======

    try {
      const res = await axios.post(
        "http://localhost:5000/api/login",
        form
      );

      // ✅ SAVE USER + JWT TOKEN
      login(res.data.user, res.data.token);

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed ❌");
    }
  };

>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Login to manage tournaments & events</p>

<<<<<<< HEAD
        {errors.submit && <div className="error-message">{errors.submit}</div>}

=======
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
<<<<<<< HEAD
              value={form.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              onBlur={() => handleBlur("password")}
              className={errors.password ? "error" : ""}
            />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁️"}
            </span>
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="login-links">
          <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
          <Link to="/register" className="register-link">Create Account</Link>
        </div>
      </div>
    </div>
  );
}
=======
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

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <span className="divider">OR</span>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="register-text">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
