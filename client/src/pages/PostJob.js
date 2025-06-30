import React, { useState } from "react";

function PostJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    description: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Submitted:", formData);
    alert("Job posting submitted (frontend only)!");
    setFormData({
      title: "",
      company: "",
      location: "",
      type: "",
      description: "",
      deadline: "",
    });
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto", background: "#f7f7ff", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Post a New Job</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} required />
        <input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input name="type" placeholder="Job Type (e.g., Full-time)" value={formData.type} onChange={handleChange} required />
        <textarea name="description" placeholder="Job Description" value={formData.description} onChange={handleChange} required />
        <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} />
        <button type="submit" style={{ backgroundColor: "#007bff", color: "#fff", padding: "10px" }}>Submit</button>
      </form>
    </div>
  );
}

export default PostJob;
