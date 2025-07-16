import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
 const navigate = useNavigate();

 const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      alert("Invalid email format");
      return;
    }
    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registered Successfully!");
       navigate("/");
    } catch (err) {
      console.error("Registration failed", err);
      alert("Failed to register. Try again.");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
}
