
<p align="center">
  <img src="https://raw.githubusercontent.com/aaditya7788/Calling_Agent/906796b5e7193a34e347a37745409f5732b06fc5/src/assets/react.svg" alt="Calling Agent Logo" width="100" height="100" />
</p>

<h1 align="center">📞 Calling Agent</h1>

<p align="center">
  <strong>AI Voice Call Assistant Platform</strong><br/>
  Convert text to real-time AI voice conversations and automate calls using Twilio, Gemini AI, and TTS/STT.
</p>

<p align="center">
  <img alt="Top Language" src="https://img.shields.io/github/languages/top/aaditya7788/Calling_Agent?color=blueviolet">
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/aaditya7788/Calling_Agent?color=green">
  <img alt="Live Site" src="https://img.shields.io/badge/Live-Demo-green">
</p>

---

## 🔍 Overview

**Calling Agent** is a fully automated voice-calling system powered by AI. It lets users send AI-driven voice calls using Google Sign-In and allows dynamic conversation between the user and an AI agent through speech-to-text and text-to-speech cycles.

> 🌐 **Live App:** [callingagent.aaditya78.live](https://callingagent.aaditya78.live)

---

## 🧠 Features

- 🔐 Google Sign-In (OAuth)
- 📞 Voice Calls with Twilio
- 🗣️ Real-time AI conversation via Gemini + TTS/STT loop
- 💬 Custom campaign & call goal scripting
- 🎙️ Choose AI voice types (Jessica, Sarah, etc.)
- 📈 Call history based on Google ID
- 📂 Separate call logs and conversations
- 🎯 Intelligent goal-specific scripting
- 🌐 Deployed on Vercel with clean UI

---

## 🛠️ Tech Stack

| Area         | Tech Used                                  |
|--------------|---------------------------------------------|
| Frontend     | React.js, Tailwind CSS                      |
| Auth         | Google OAuth (via `@react-oauth/google`)    |
| Backend API  | [Calling_Agent_server](https://github.com/aaditya7788/Calling_Agent_server) (Express, Node.js) |
| AI           | Google Gemini, TTS (LemonFox), STT          |
| Voice        | Twilio Programmable Voice API               |
| Database     | MongoDB Atlas                               |
| Hosting      | Vercel (Frontend), Render (Backend)         |

---

## 🖼️ UI Preview

| Login | Dashboard | Campaign |
|-------|-----------|----------|
| ![Login](https://i.imgur.com/j3WxKfL.png) | ![Dashboard](https://i.imgur.com/Zmd8Bxv.png) | ![Campaign](https://i.imgur.com/USYihvP.png) |

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/aaditya7788/Calling_Agent.git
cd Calling_Agent
```
2. Install Dependencies
```bash
npm install
```

3. Add .env File (Optional if keys are public in the code)
```bash
# Example .env (Vite config format)
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
```
4. Run the App Locally
```bash
npm run dev
```

---

📡 Deployment

Frontend: Vercel

Backend: Render (or self-hosted Express)

Database: MongoDB Atlas



---

🔐 Auth Setup

To fix redirect_uri_mismatch:

1. Go to Google Cloud Console


2. Navigate to: APIs & Services → Credentials


3. In your OAuth Client, add:

https://callingagent.aaditya78.live to Authorized JavaScript origins

https://callingagent.aaditya78.live to Authorized redirect URIs





---

📈 Future Improvements

🧠 Train custom AI response personality

🗃️ Exportable call logs

🔔 WhatsApp/TXT fallback

🗂️ Role-based user dashboard



---

👨‍💻 Author

Aaditya Sahani
Fullstack Developer | Voice AI Engineer | Building @Scale 🚀


---

⭐ Show Some Love

If you found this project helpful, give it a ⭐ on GitHub and share it!


---

📄 License

Licensed under the MIT License.

---

