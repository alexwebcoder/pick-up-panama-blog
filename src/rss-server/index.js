import cors from "cors";
import express from "express";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import RSSParser from "rss-parser";

const feedURL = "https://www.einnews.com/rss/NCx-iF5DlIFJE0fC";
const parser = new RSSParser();
let articles = [];
const parse = async url => {
  const feed = await parser.parseURL(url);


  feed.items.forEach(item => {
    articles.push({ item });
  })
}

parse(feedURL);

let app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send(articles);
})

const server = app.listen('https://pickuppanama.com', () => {
});

export default server;