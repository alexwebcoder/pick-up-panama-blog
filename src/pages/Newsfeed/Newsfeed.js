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
        <figure className="news-hero">
          <figcaption>View of the Atlantic Ocean from Portobelo Panama</figcaption>
          <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/ocean-view-portobelo-panama.JPG'} alt="ocean view from Portobelo Panama"/>
       </figure>
        <div className="line-divider centered wide">
            <h1 className="diamond-text-box">
              <span className="left"></span>
              <span className="content caps centered">News</span>
              <span className="right"></span>
            </h1>
        </div>
        <div className="news-article-container">
          <div className="feed-container">
            {articles.map((item, i) => 
              <Feed
                key={i}
                title={item.item.title}
                link={item.item.link}
                contentSnippet={item.item.contentSnippet}
                date={item.item.pubDate}
              />
              )}
          </div>
        </div>
      </main>
    )
}

export default Newsfeed;