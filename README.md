# ✈️ Age-Based Travel Recommendation Web App

A full-stack web application that provides personalized travel destination recommendations based on the user's age group. This project demonstrates a modern component-based architecture using **React** and **TypeScript**, integrated with a **Node.js/Express** backend.

## 📸 Project Screenshot

> *Select your age group and explore curated travel destinations with detailed insights.*

## ✨ Key Features

* **Age-Based Filtering**: Categorizes travel destinations for different age groups (Kids, Teens, 20s, 30s, etc.).
* **Interactive UI**: Dynamic destination cards with hover effects and smooth transitions using **Tailwind CSS**.
* **Detailed Views**: Dedicated pages for each destination featuring galleries, travel tips, budgets, and best visiting times.
* **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices.
* **RESTful API**: Backend API design to serve structured JSON data to the frontend client.

## 🛠️ Tech Stack

### Frontend
* **Framework**: React (v18)
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **Routing**: React Router DOM
* **Icons**: Lucide React

### Backend
* **Runtime**: Node.js
* **Framework**: Express.js
* **Data**: JSON-based mock database (Migration to PostgreSQL/MongoDB planned)

## 📂 Project Structure

```bash
Travel-Recommender/
├── backend/                # Node.js API Server
│   ├── server.js           # Entry point for backend
│   └── package.json
├── frontend/               # React Client Application
│   └── client/
│       ├── src/
│       │   ├── components/ # Reusable UI components (DestinationCard, etc.)
│       │   ├── pages/      # Page components (Home, DestinationDetail)
│       │   ├── types/      # TypeScript interfaces
│       │   └── App.tsx     # Main application routing
│       └── package.json
└── README.md
🚀 Getting StartedFollow these steps to run the project locally.PrerequisitesNode.js (v18 or higher)npm (Node Package Manager)
1. Clone the RepositoryBashgit clone [https://github.com/YOUR_GITHUB_USERNAME/Travel-Recommender.git](https://github.com/YOUR_GITHUB_USERNAME/Travel-Recommender.git)
cd Travel-Recommender
2. Setup & Run Backend (Server)The backend runs on http://localhost:5000.Bashcd backend
npm install
node server.js
3. Setup & Run Frontend (Client)Open a new terminal. The frontend runs on http://localhost:3000.Bashcd frontend/client
npm install
npm start
📡 API EndpointsMethodEndpointDescriptionGET/api/destinationsFetch all destinations
(supports filtering by ?ageGroup=)GET/api/destinations/:idFetch detailed information for a specific destination
🗺️ Roadmap & Future Improvements[ ] Database Integration: Migrate from static JSON data to PostgreSQL (Supabase) or MongoDB.[ ]
Authentication: Implement user login and "My Favorites" feature.[ ] AI Recommendations: Integrate OpenAI API to generate personalized travel itineraries.[ ]
Deployment: Deploy Frontend to Vercel and Backend to Render/AWS.
👨‍💻 AuthorKyoungnam MoonMajor in Computer Science at Virginia TechContact: [Your Email Address]GitHub: [Your GitHub Profile URL]
