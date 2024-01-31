import cors from "cors";
import express from "express";
import RSSParser from "rss-parser";
import fetch from 'node-fetch'; // You might need to install node-fetch

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
    const response = await fetch(feedURL);
    const text = await response.text();
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

export default server;
