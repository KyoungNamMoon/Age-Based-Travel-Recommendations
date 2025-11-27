const express = require('express');
const cors = require('cors');
const axios = require('axios');
const Amadeus = require('amadeus');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');
require('dotenv').config(); 

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const CACHE_FILE_PATH = path.join(__dirname, 'recommendations_cache.json');

const FIXED_RECOMMENDATIONS = {
  "teens": [
    {"name":"Orlando","country":"USA","description":"Unleash your inner child at world-class theme parks.","tags":["Theme Parks","Adventure"]},
    {"name":"Tokyo","country":"Japan","description":"Dive into a futuristic metropolis blending anime and tech.","tags":["Anime","Shopping"]},
    {"name":"Barcelona","country":"Spain","description":"Explore Gaudi's architecture and city beaches.","tags":["Beach","Culture"]},
    {"name":"London","country":"UK","description":"Discover iconic landmarks and world-class museums.","tags":["History","Culture"]},
    {"name":"Costa Rica","country":"Costa Rica","description":"Embark on an epic eco-adventure ziplining through rainforests.","tags":["Nature","Wildlife"]},
    {"name":"Sydney","country":"Australia","description":"Soak up the sun on Bondi Beach and explore the Opera House.","tags":["Beach","Iconic"]}
  ],
  "twenties": [
    {"name":"Bali","country":"Indonesia","description":"Tropical paradise with vibrant nightlife and surfing.","tags":["Beach","Nightlife"]},
    {"name":"Berlin","country":"Germany","description":"Legendary nightlife and cutting-edge history.","tags":["Nightlife","History"]},
    {"name":"Hanoi","country":"Vietnam","description":"Dive into chaotic charm and incredible street food.","tags":["Foodie","Affordable"]},
    {"name":"Reykjavik","country":"Iceland","description":"Chase the Northern Lights and hike volcanic landscapes.","tags":["Nature","Adventure"]},
    {"name":"Lisbon","country":"Portugal","description":"Explore charming cobblestone streets and views.","tags":["City Break","Views"]},
    {"name":"Playa del Carmen","country":"Mexico","description":"Ultimate beach party destination with cenotes.","tags":["Party","Beach"]}
  ],
  "thirties": [
    {"name":"Rome","country":"Italy","description":"Walk through millennia of history and enjoy pasta.","tags":["History","Foodie"]},
    {"name":"Kyoto","country":"Japan","description":"Step back in time with temples and bamboo groves.","tags":["Culture","Quiet"]},
    {"name":"New York City","country":"USA","description":"Experience the energy of the Big Apple.","tags":["City Break","Shopping"]},
    {"name":"Bordeaux","country":"France","description":"Savor exquisite wines in a picturesque region.","tags":["Wine","Romance"]},
    {"name":"Marrakech","country":"Morocco","description":"Immerse in the exotic allure of bustling souks.","tags":["Exotic","Market"]},
    {"name":"Galapagos Islands","country":"Ecuador","description":"Once-in-a-lifetime wildlife adventure.","tags":["Wildlife","Nature"]}
  ],
  "forties": [
    {"name":"Cape Town","country":"South Africa","description":"Breathtaking beauty between mountains and ocean.","tags":["Nature","Wine"]},
    {"name":"Santorini","country":"Greece","description":"Iconic white villages and luxury sunsets.","tags":["Luxury","Romance"]},
    {"name":"Machu Picchu","country":"Peru","description":"Witness the awe-inspiring ancient Inca city.","tags":["History","Hiking"]},
    {"name":"Amalfi Coast","country":"Italy","description":"Indulge in the dolce vita on the coastline.","tags":["Luxury","Scenery"]},
    {"name":"Melbourne","country":"Australia","description":"Cultural capital with hidden laneway cafes.","tags":["Culture","Coffee"]},
    {"name":"Halong Bay","country":"Vietnam","description":"Cruise through mystical limestone karsts.","tags":["Nature","Cruise"]}
  ],
  "fifties": [
    {"name":"New Zealand","country":"New Zealand","description":"Dramatic landscapes and pristine lakes.","tags":["Nature","Scenery"]},
    {"name":"Danube Cruise","country":"Europe","description":"Luxurious river cruise through historic cities.","tags":["Cruise","History"]},
    {"name":"Kyoto","country":"Japan","description":"Serene beauty and profound culture.","tags":["Culture","Gardens"]},
    {"name":"Tuscany","country":"Italy","description":"Rolling hills, wine, and artistic heritage.","tags":["Wine","Relaxation"]},
    {"name":"Egypt","country":"Egypt","description":"Journey back in time with a Nile cruise.","tags":["History","Culture"]},
    {"name":"Alaska Cruise","country":"USA","description":"Experience majestic wilderness comfortably.","tags":["Cruise","Nature"]}
  ],
  "monthly": [
    {"name":"Lapland","country":"Finland","description":"Experience the magic of winter in Santa's hometown","tags":["Winter", "Family", "Northern Lights"]},
    {"name":"Tromsø","country":"Norway","description":"Witness the spectacular aurora borealis dance","tags":["Aurora", "Nature", "Adventure"]},
    {"name":"Zermatt","country":"Switzerland","description":"World-class skiing and breathtaking mountain views","tags":["Skiing", "Mountain", "Luxury"]},
    {"name":"Nuremberg","country":"Germany","description":"Traditional markets filled with festive cheer","tags":["Culture", "Food", "Shopping"]},
    {"name":"Blue Lagoon","country":"Iceland","description":"Relax in geothermal pools under the stars","tags":["Relaxation", "Hot Springs", "Wellness"]},
    {"name":"Banff","country":"Canada","description":"Wildlife viewing in pristine winter landscapes","tags":["Wildlife", "Safari", "Nature"]}
  ],
  "unique": [
    {"name":"Telluride","country":"USA","description":"Secluded retreat with stunning mountain views","tags":["Mountain", "Cabin", "Cozy"]},
    {"name":"Gatlinburg","country":"USA","description":"Modern villa with private infinity pool","tags":["Luxury", "Pool", "Modern"]},
    {"name":"Shenandoah","country":"USA","description":"Romantic getaway with outdoor hot tub","tags":["Romance", "Hot Tub", "Private"]},
    {"name":"Smoky Mountains","country":"USA","description":"Traditional log cabin in scenic woodland","tags":["Traditional", "Woodland", "Family"]},
    {"name":"Portland","country":"USA","description":"Unique treehouse experience in the forest","tags":["Treehouse", "Nature", "Unique"]},
    {"name":"Selfoss","country":"Iceland","description":"Sleep under the stars in a glass igloo","tags":["Unique", "Aurora", "Luxury"]}
  ]
};

// 
app.get('/api/recommendations', async (req, res) => {
  const CACHE_DURATION = 24 * 60 * 60 * 1000;

  try {
    if (fs.existsSync(CACHE_FILE_PATH)) {
      const stats = fs.statSync(CACHE_FILE_PATH);
      const now = new Date().getTime();
      if (now - new Date(stats.mtime).getTime() < CACHE_DURATION) {
        console.log("Using cache");
        const fileData = fs.readFileSync(CACHE_FILE_PATH, 'utf-8');
        return res.json(JSON.parse(fileData));
      }
    }

    console.log("Asking Gemini...");
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const currentYear = new Date().toLocaleString('default', { year: 'numeric' });
    const prompt = `
      Recommend 6 travel destinations for each category:
      1. Age groups: teens, twenties, thirties, forties, fifties
      2. Monthly: "monthly" (Destinations best for visiting in ${currentMonth})
      3. Unique: "unique" (Extraordinary, off-beat, or unique accommodation styles) in ${currentYear}

      Return ONLY a valid JSON object (no markdown).
      
      Each destination MUST have:
      - name (City Name)
      - country (Country Name)
      - description (Short description, max 100 chars)
      - tags (Array of 3 keywords, e.g., ["Beach", "Nightlife", "Relax"])
      
      JSON Structure:
      {
        "teens": [ { "name": "...", "country": "...", "description": "...", "tags": ["...", "..."] }, ... ],
        "twenties": [ ... ],
        "thirties": [ ... ],
        "forties": [ ... ],
        "fifties": [ ... ],
        "monthly": [ ... ],
        "unique": [ ... ]
      }
    `;
    
    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json|```/g, '').trim();
    const data = JSON.parse(text);

    fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(data, null, 2));
    res.json(data);

  } catch (error) {
    console.error("AI Error (Using Backup):", error.message);
    res.json(FIXED_RECOMMENDATIONS);
  }
});

// [API 2] Gallery
app.get('/api/gallery', async (req, res) => {
  const { keyword, page } = req.query; 
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query: keyword, per_page: 3, page: page, orientation: 'landscape' },
      headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` }
    });
    res.json(response.data.results.map(photo => photo.urls.regular));
  } catch (error) {
    console.error("Unsplash Error");
    res.json([]); 
  }
});

// [API 3] Travel Info
app.get('/api/travel-info', async (req, res) => {
  const { keyword } = req.query;
  res.json({ city: keyword, attractions: [] });
});

// [API 4] Refresh Cache
app.get('/api/recommendations/refresh', (req, res) => {
  if (fs.existsSync(CACHE_FILE_PATH)) {
    fs.unlinkSync(CACHE_FILE_PATH);
    res.send("Cache cleared.");
  } else {
    res.send("No cache.");
  }
});

app.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`);
});