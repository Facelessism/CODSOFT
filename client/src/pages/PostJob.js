import React, { useState } from "react";
import axios from "axios";

function PostJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    description: "",
    deadline: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const res = await axios.post("http://localhost:5000/api/jobs", formData);
      console.log("✅ Job submitted:", res.data);
      setSuccess(true);
      setFormData({
        title: "",
        company: "",
        location: "",
        type: "",
        description: "",
        deadline: "",
      });
    } catch (err) {
      console.error("❌ Submission error:", err.response?.data);
      setError(err.response?.data?.error || "Server error while posting job.");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto", background: "#f7f7ff", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Post a New Job</h2>

      {success && <p style={{ color: "green", textAlign: "center" }}>✅Job Posted Successfully!!!</p>}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} required />
        <input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input name="type" placeholder="Job Type (e.g., Full-time)" value={formData.type} onChange={handleChange} required />
        <textarea name="description" placeholder="Job Description" value={formData.description} onChange={handleChange} required />
        <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} required />
        <button type="submit" style={{ backgroundColor: "#007bff", color: "#fff", padding: "10px" }}>SUBMIT</button>
      </form>
    </div>
  );
}

export default PostJob;
