const cors = require("cors");
const express = require("express");
const RSSParser = require("rss-parser");
const functions = require('firebase-functions');
const axios = require('axios');



const feedURL = "https://www.einnews.com/rss/NCx-iF5DlIFJE0fC";
const parser = new RSSParser();

const cors_whiteList = ['https://pickuppanama.com', 'http://localhost:3000'];
let app = express();
app.use(cors({
  origin: function (origin, callback) {
    if (cors_whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(feedURL);
    const text = await response.data;
    const feed = await parser.parseString(text);
    res.json(feed);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching RSS feed");
  }
});

const server = app.listen(4000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

exports.api = functions.https.onRequest(app);
