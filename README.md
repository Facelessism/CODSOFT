### JobBoard Web App

A modern job board platform to discover, filter, and apply for jobs — built with **React**, **Node.js**, and **Express**.


### Features Implemented (as of June 29, 2025)

### Job Search & Listings
- Browse job listings with **title**, **company**, **location**, **type**, **description**, and **deadline**
- Click on any job card to view **detailed information**
- **Apply Now** button with confirmation

### Search & Filter
- Filter jobs by:
  - **Keyword** (title or company)
  - **Location**
  - **Category** (Full-time, Part-time, Remote, Internship)

### Resume Upload (Functional)
- Upload `.pdf`, `.doc`, or `.docx` resumes
- Resume files are sent to the backend and saved in `/server/uploads/`
- Success & failure messages shown on the frontend

### Frontend (React)
- Pages:
  - `Home.js` (welcome + upload)
  - `Jobs.js` (listings + filter)
  - `JobDetails.js` (detailed view)
  - `Dashboard.js`, `Login.js`, `Register.js` (UI stubs)
- Beautiful UI with deep blue theme and responsive layout

### Backend (Express)
- Express API setup in `/server/index.js`
- `POST /api/resume/upload` for resume file uploads using `multer`
- CORS enabled for cross-origin support

### How to Run the Project Locally

### 1. Clone the Repository in Git Bash

  git clone https://github.com/your-username/jobboard-app.git
  cd jobboard-app

### 2. Start Backend
  cd server
  npm install
  node index.js

### 3. Start Frontend
  cd ../client
  npm install
  npm start


### From ME
This project is just a part of the tasks assigned for Codsoft Internship Programme
All the progress & related issues reflect the real-world projectflow.


