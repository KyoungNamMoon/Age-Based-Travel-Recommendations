# ✈️ Age-Based Travel Recommendation Web App

A full-stack web application that provides personalized travel destination recommendations based on the user's age group. This project demonstrates a modern component-based architecture using **React** and **TypeScript**, integrated with a **Node.js/Express** backend that fetches dynamic content via external APIs.

## 📸 Project Screenshot

> *Explore curated travel destinations with age-based filtering, detailed insights, and a dynamic photo gallery.*

## ✨ Key Features

* **Age-Based Recommendations**: Curated travel spots categorized by age groups (Kids, Teens, 20s, 30s, 40s, 50+).
* **Dynamic Photo Gallery**: Fetches high-quality, random travel images from **Unsplash API** to keep the content fresh and engaging.
* **Search & Filtering**:
    * **Search Tabs**: Specialized search options for Accommodation, Flights, Rental Cars, and Packages.
    * **Filter Sheet**: Advanced filtering by region, activity type, price range, and rating.
* **Interactive UI**: Features smooth horizontal scroll galleries, hover effects, and responsive destination cards using **Tailwind CSS**.
* **Detailed Insights**: Provides comprehensive information including best travel times, budgets, highlights, and travel tips for each destination.

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
* **External APIs**: Unsplash API (for dynamic images)

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
│       │   ├── components/ # UI components
│       │   │   ├── DestinationCard.tsx
│       │   │   ├── DestinationDetail.tsx
│       │   │   ├── FilterSheet.tsx
│       │   │   ├── Home.tsx
│       │   │   └── SearchTabs.tsx
│       │   ├── types/      # TypeScript interfaces
│       │   └── App.tsx     # Main application routing
│       └── package.json    # Frontend dependencies
└── README.md
```

## 🚀 Getting Started

### 2. Setup & Run Backend (Server)

The backend API server will run on `http://localhost:5000`.

1.  **Navigate to the backend folder:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file** in the `backend/` directory and add your Unsplash API key:
    ```
    UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
    ```

4.  **Start the server:**
    ```bash
    node server.js
    ```

### 3. Setup & Run Frontend (Client)

The frontend client application will run on `http://localhost:3000`.

1.  **Open a new terminal** and navigate to the client folder:
    ```bash
    cd frontend/client
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the React app:**
    ```bash
    npm start
    ```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/gallery` | Fetches images from Unsplash. |
| | | **Query Params:** |
| | | - `keyword`: Search term (e.g., "Bhutan") |
| | | - `page`: Pagination index for infinite scrolling |

---

## 🗺️ Roadmap & Future Improvements

* [x] Frontend UI: Implement responsive cards, detail pages, and filter sheets.
* [x] Backend Setup: Express server with CORS and Unsplash integration.
* [x] Dynamic Gallery: Infinite scroll gallery with API data fetching and duplicate removal.
* [ ] Database Integration: Migrate hardcoded destination data to PostgreSQL (Supabase) or MongoDB.
* [ ] Authentication: Implement user login to save favorite destinations.
* [ ] Real-time Data: Integrate Amadeus API for real-time flight and hotel pricing.
* [ ] Deployment: Deploy Frontend to Vercel and Backend to Render/AWS.

---

## 👨‍💻 Author

**Kyoungnam Moon**
* Major in Computer Science at Virginia Tech
