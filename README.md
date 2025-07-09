# 🧠 AI Interview Prep Platform

Personalized interview question generator powered by Google Gemini AI and built with the MERN stack.

---

## 🛠 Tech Stack

### 🖥️ Frontend
- React.js
- Tailwind CSS
- React Router
- Axios

### 🔧 Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### 🤖 AI
- Google Gemini API (Prompt-based Q&A generation)

---

## 🧠 Features

- 🔐 **Login / SignUp:** Secure authentication using JWT tokens.
- 📝 **Create Interview Session:** Input your role, years of experience, and tech topics.
- 🤖 **AI-Generated Q&A:** Gemini API returns personalized technical questions and answers.
- 📊 **Dashboard View:** View your sessions with details like role, experience, and last updated date.
- 🗂 **Session Management:** View individual sessions, delete sessions, and prepare interactively.
- 📱 **Responsive UI:** Built using Tailwind CSS with mobile-friendly design.

---

## 🚀 Live Demo
https://ai-interview-web-theta.vercel.app/
---

## 🏁 Getting Started

Follow the steps below to set up and run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Irbaz-Patel/Ai-interview-Web.git
cd Ai-interview-Web

Setup Backend
cd backend
npm install

# Create a .env file in the backend folder with the following content:
# .env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key

Setup Frontend
cd ../frontend
npm install
npm run dev

📌 Environment Variables
🔒 Required for .env (in backend/ folder):
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
