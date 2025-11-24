const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config(); 

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//Unsplash API for Gallary section
app.get('/api/gallery', async (req, res) => {
  const { keyword, page } = req.query; 
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: keyword, 
        per_page: 3,    
        page: page,     
        orientation: 'landscape'
      },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
      }
    });
    const photos = response.data.results.map(photo => photo.urls.regular);
    
    res.json(photos);

  } catch (error) {
   console.error("Unsplash error:", error.response ? error.response.data : error.message);
    res.status(500).json({ message: "Gallary Error" });
  }
});
app.listen(port, () => {
  console.log(`백엔드 서버 실행 중: http://localhost:${port}`);
});