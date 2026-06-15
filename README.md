# 💼 Job Board Portal

A full-stack Job Board web application where users can browse jobs, register, log in, and apply for jobs. Employers can manage job listings and view applicants.

## 🚀 Live Demo

🌐 Frontend: https://codsoft-level1-job-board.vercel.app/login

🔗 Backend API: https://job-board-backend-tm6e.onrender.com

---

## 📌 Features

### 👨‍💼 User Features
- View all available jobs
- Search and browse job listings
- User Registration and Login
- Apply for jobs
- Upload resume while applying
- Responsive UI for desktop and mobile

### 🏢 Employer Features
- Employer Dashboard
- View applicants
- Manage job postings

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 📂 Project Structure

```text
job-board-project/
│
├── client/                 # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Node.js Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── index.js
│
└── README.md


## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Jobs

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | /api/jobs | Get All Jobs |
| GET | /api/jobs/:id | Get Single Job |

### Applications

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | /api/applications/apply | Apply for a Job |

---

## Screenshots

Add screenshots here:

- Home Page
<img width="1902" height="1031" alt="Screenshot 2026-06-15 164001" src="https://github.com/user-attachments/assets/0b481786-ddff-4389-b48e-a202c5c6935b" />

- Jobs Page
<img width="1902" height="1025" alt="Screenshot 2026-06-15 164016" src="https://github.com/user-attachments/assets/2da3cd4c-7968-4624-babb-687a7df69a98" />

- Login Page
<img width="1903" height="1022" alt="Screenshot 2026-06-15 164725" src="https://github.com/user-attachments/assets/feec9ceb-d032-4159-964b-8ad9f71b3399" />

- Apply Job Page
<img width="1903" height="1028" alt="Screenshot 2026-06-15 164100" src="https://github.com/user-attachments/assets/69a1202a-20e4-4cd9-bd11-cd3caec43d09" />

- Employer Dashboard
<img width="1902" height="1033" alt="Screenshot 2026-06-15 164034" src="https://github.com/user-attachments/assets/3a2aef2e-73a9-474b-bc20-697f0e665b38" />


---

## Future Improvements

- Email notifications
- Advanced job filters
- Resume download option
- Admin Dashboard
- Save Jobs feature
- Company Profiles

---

## Learning Outcomes

This project helped in understanding:

- MERN Stack Development
- REST APIs
- Authentication using JWT
- MongoDB Integration
- File Upload Handling
- Deployment using Vercel and Render

---

## Author

**Akash Pandey**

GitHub: https://github.com/akashupp2024-sys

LinkedIn: https://www.linkedin.com/in/akash-pandey-15bb18338/

---

## License

This project is developed for educational purposes and internship learning.
