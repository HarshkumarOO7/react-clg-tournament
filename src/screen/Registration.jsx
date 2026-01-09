import { useState } from "react";

export default function Registration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "player"
  });

  const handleRegister = () => {
    alert("Registered Successfully");
  };

  return (
    <div style={styles.box}>
      <h2>Register</h2>

      <input placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <input placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })} />

      <select
        onChange={e => setForm({ ...form, role: e.target.value })}>
        <option>player</option>
        <option>coach</option>
        <option>organizer</option>
      </select>

      <button onClick={handleRegister}>Register</button>
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
