# KisanBot - Project Structure

## 📁 Clean Project Structure for LMS Submission

```
KisanBot/
│
├── 📁 backend/                    # Python/Flask Backend
│   ├── backend_api.py                 # Main Flask REST API server
│   ├── agrobot_chat.py                # AI chat logic with bidirectional translation
│   ├── universal_stt.py               # Groq Whisper speech-to-text
│   ├── tts_engine.py                  # Google TTS with translation
│   ├── __init__.py                    # Python package initialization
│   ├── temp/                          # Temporary files directory (auto-created)
│   └── __pycache__/                   # Python cache (auto-created)
│
├── 📁 frontend/                   # React Application
│   ├── src/
│   │   ├── App.jsx                    # Main application component
│   │   ├── main.jsx                   # React entry point
│   │   ├── index.css                  # Tailwind CSS with green agricultural theme
│   │   ├── components/
│   │   │   ├── LandingPage.jsx            # Landing page with all sections
│   │   │   ├── ChatInterface.jsx          # Unified chat interface
│   │   │   ├── Header.jsx                 # Application header
│   │   │   └── Footer.jsx                 # Application footer
│   │   └── contexts/
│   │       └── LanguageContext.jsx        # 6-language translation system
│   ├── public/                        # Static assets
│   ├── index.html                     # HTML template
│   ├── package.json                   # Frontend dependencies
│   ├── package-lock.json              # Frontend dependency lock
│   ├── vite.config.js                 # Vite build configuration
│   ├── tailwind.config.js             # Tailwind CSS configuration
│   ├── postcss.config.js              # PostCSS configuration
│   ├── .eslintrc.cjs                  # ESLint configuration
│   └── node_modules/                  # Frontend dependencies (auto-created)
│
├── 📁 docs/                       # Documentation
│   ├── INDEX.md                       # Documentation index
│   ├── PRESENTATION_GUIDE.md          # Presentation guide
│   ├── PROJECT_SUMMARY.md             # Project overview
│   └── QUICKSTART.md                  # Quick setup guide
│
├── 📁 scripts/                    # Setup & Automation
│   └── check_setup.py                 # Setup validation script
│
├── 📄 Configuration Files
│   ├── requirements.txt               # Python dependencies
│   ├── .env                           # API keys (create from .env.example)
│   ├── .env.example                   # Environment template
│   ├── package.json                   # Node.js project configuration
│   ├── package-lock.json              # Node.js dependency lock
│   ├── slides.md                      # Presentation slides for Gamma AI
│   └── SETUP.md                       # Detailed setup instructions
│
├── README.md                      # Main project documentation
├── PROJECT_STRUCTURE.md           # This file
└── node_modules/                  # Root Node.js dependencies (auto-created)
```

## 🧹 Files Removed for Clean Submission

### Test Files (Removed)
- `test_groq.py`
- `test_language.html`
- `test_punjabi_chat.py`
- `test_punjabi_frontend.html`
- `test_shahmukhi.py`
- `test_translation.py`
- `verify_punjabi.py`

### Git References (Removed)
- `.gitignore` (main)
- `frontend/.gitignore`
- `LICENSE` (contained original author info)

### Unnecessary Documentation (Removed)
- `QUOTA_SOLUTION.md`
- `backend/README.md`
- `frontend/README.md`
- `scripts/README.md`

### Unused Code (Removed)
- `backend/image.py` (functionality moved to backend_api.py)

## 🎯 Core Features

1. **6-Language Support**: English, Urdu, Punjabi (Shahmukhi), Sindhi, Pashto, Balochi
2. **Voice Interaction**: Groq Whisper speech-to-text + gTTS text-to-speech
3. **Text Chat**: AI-powered agricultural advice with bidirectional translation
4. **Image Analysis**: Plant disease detection using Gemini Vision AI
5. **Agricultural Restriction**: System prompts ensure only farming-related responses
6. **Modern UI**: React with Tailwind CSS, glass morphism effects, green theme

## 🛠️ Technology Stack

- **Frontend**: React 18.3.1, Tailwind CSS 3.4.4, Framer Motion, Axios
- **Backend**: Flask 3.0.0, Groq AI (Llama 3.3-70B), Google Gemini 2.5 Flash
- **AI Services**: Groq Whisper, gTTS, Deep Translator
- **Languages**: JavaScript (React), Python (Flask)

## 📝 Setup Instructions

1. Copy `.env.example` to `.env` and add API keys
2. Install dependencies: `npm run setup`
3. Start application: `npm start`
4. Access at: `http://localhost:3000`

This is a clean, production-ready codebase suitable for academic submission.