import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }
    alert("Login Successful (API later)");
  };

  return (
    <div style={styles.box}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

const styles = {
  box: {
    maxWidth: "300px",
    margin: "40px auto",
    padding: "30px",
    background: "var(--card)",
    borderRadius: "12px"
  }
};
