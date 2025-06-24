import React, { useState } from "react";

function JobForm() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-Time",
    description: "",
  });

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted Job:", formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" style={inputStyle} />
      <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" style={inputStyle} />
      <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" style={inputStyle} />
      <select name="type" value={formData.type} onChange={handleChange} style={inputStyle}>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Remote">Remote</option>
      </select>
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Job Description" style={{ ...inputStyle, height: "100px" }} />
      <button
        type="submit"
        style={{
          backgroundColor: "#4caf50", // green button
          color: "white",
          border: "none",
          padding: "12px 20px",
          fontSize: "16px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Submit Job
      </button>
    </form>
  );
}

export default JobForm;
