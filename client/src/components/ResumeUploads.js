import React, { useRef, useState } from "react";
import axios from "axios";

function ResumeUploads() {
  const fileInputRef = useRef(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await axios.post("http://localhost:5000/api/resume/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadStatus(`✅ Uploaded: ${res.data.originalName}`);
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadStatus("❌ Upload failed. Try again.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        backgroundColor: "#003366",
        padding: "16px 20px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: 1000,
        width: "280px",
        color: "#fff",
      }}
    >
      <h4 style={{ marginBottom: "12px", fontSize: "18px" }}>Upload Your Resume</h4>

      <button
        style={{
          padding: "10px 18px",
          fontSize: "15px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          width: "100%",
        }}
        onClick={handleUploadClick}
      >
        Choose A File
      </button>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {uploadStatus && (
        <p
          style={{
            marginTop: "10px",
            fontSize: "14px",
            color: "#dff0ff",
            wordWrap: "break-word",
          }}
        >
          {uploadStatus}
        </p>
      )}
    </div>
  );
}

export default ResumeUploads;
