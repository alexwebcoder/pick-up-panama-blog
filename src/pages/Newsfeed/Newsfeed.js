import { useEffect, useState } from "react";
import "./Newsfeed.css";
import axios from "axios";
import Feed from "./Feed";
import { TabTitle, Capitalize } from '../../utils/GeneralFunctions';

const Newsfeed = () => {
  TabTitle('Panama News Feed');
  Capitalize()

  const [articles, setArticles] = useState([]);
 

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data)
    } catch (error) {
    }
  }

  useEffect(() => {
   getArticles();
  }, []);

    return (
      <main className="newsfeed"> 
        <figure className="news-hero">
          <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/newsfeed/ocean-view-portobelo-panama.JPG'} alt="portobelo panama"/>
          <figcaption>View of the Atlantic Ocean from Portobelo Panama</figcaption>
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