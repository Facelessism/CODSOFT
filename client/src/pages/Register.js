import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    alert("📝 Registration submitted (demo only)");
  };

  return (
    <div style={styles.container}>
      <h2>Register for your DreamJobs</h2>
      <form onSubmit={handleRegister} style={styles.form}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>REGISTER</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "#f4f9ff",
    borderRadius: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Register;
