# MGM Aptitude Portal (Full Stack)

## Stack
- Frontend: React + Vite + Tailwind
- Backend: Node.js + Express + MongoDB + JWT

## Features
- Student authentication with MGM college email validation
- Subject -> topic -> notes -> MCQ practice flow
- Quiz scoring and analysis
- Progress tracking (completion, accuracy, completed topics)
- Medal rewards for score >= 50%
- Profile with picture and stats
- Leaderboard ranking users by performance
- Admin APIs for subject management

## Run Backend
1. Copy `backend/.env.example` to `backend/.env`
2. Start MongoDB locally
3. Run:
   - `cd backend`
   - `npm install`
   - `npm run seed`
   - `npm run dev`

## Run Frontend
1. Copy `frontend/.env.example` to `frontend/.env`
2. Run:
   - `cd frontend`
   - `npm install`
   - `npm run dev`

Frontend runs on `http://localhost:5173` and backend on `http://localhost:5000`.
