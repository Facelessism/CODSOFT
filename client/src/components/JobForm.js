// client/src/components/JobForm.js
import React, { useState } from "react";

function JobForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-Time",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" />
      <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
      <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Remote">Remote</option>
      </select>
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Job Description" />
      <button type="submit">Post Job</button>
    </form>
  );
}

export default JobForm;
