# ✈️ Age-Based Travel Recommendation Web App

A full-stack web application that provides personalized travel destination recommendations based on the user's age group. This project demonstrates a modern component-based architecture using **React** and **TypeScript**, integrated with a **Node.js/Express** backend that serves dynamic content via external APIs (Unsplash).

## 📸 Project Screenshot

> *Select your age group and explore curated travel destinations with detailed insights and dynamic photo galleries.*

## ✨ Key Features

* **Age-Based Filtering**: Categorizes travel destinations for specific age groups (Kids, Teens, 20s, 30s, 40s, 50+).
* **Dynamic Photo Gallery**: Fetches high-quality, random travel images from **Unsplash API** to keep the content fresh.
* **Interactive UI**: Features smooth scroll galleries, hover effects, and responsive destination cards using **Tailwind CSS**.
* **Detailed Insights**: Provides comprehensive information including best travel times, budgets, and travel tips for each destination.
* **RESTful API**: Custom Node.js backend that acts as a proxy to manage API keys and format external data.

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
* **HTTP Client**: Axios
* **External APIs**: Unsplash API (for images), Amadeus API (planned for data)

## 📂 Project Structure

```bash
Travel-Recommender/
├── backend/                # Node.js API Server
│   ├── server.js           # Entry point with API routes
│   ├── package.json        # Backend dependencies
│   └── .env                # Environment variables (API Keys)
├── frontend/               # React Client Application
│   └── client/
│       ├── src/
│       │   ├── components/ # Reusable UI components (DestinationCard, etc.)
│       │   ├── pages/      # Page components (Home, DestinationDetail)
│       │   ├── types/      # TypeScript interfaces
│       │   └── App.tsx     # Main application routing
│       └── package.json    # Frontend dependencies
└── README.md


## 🚀 Getting Started
Follow these steps to run the project locally.

Prerequisites
Node.js (v18 or higher)

npm (Node Package Manager)

Unsplash API Access Key (Get one here)

1. Clone the Repository
git clone [https://github.com/YOUR_GITHUB_USERNAME/Travel-Recommender.git](https://github.com/YOUR_GITHUB_USERNAME/Travel-Recommender.git)
cd Travel-Recommender