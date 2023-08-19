import { useEffect, useState } from "react";
import "./Newsfeed.css";
import axios from "axios";
import Feed from "./Feed";

const Newsfeed = () => {
  const [articles, setArticles] = useState([]);
 
  console.log(articles);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
   getArticles();
  }, []);

    return (
      <main className="margin newsfeed">
        <div className="line-divider centered wide">
            <h1 className="diamond-text-box">
              <span className="left"></span>
              <span className="content caps centered">News</span>
              <span className="right"></span>
            </h1>
        </div>
        <div className="news-article-container" id="style-5">
            {articles.map((item, i) => 
              <Feed className="scrolling"
                key={i}
                title={item.item.title}
                link={item.item.link}
                contentSnippet={item.item.contentSnippet}
                date={item.item.pubDate}
              />
              )}
        </div>
      </main>
    )
}

export default Newsfeed;