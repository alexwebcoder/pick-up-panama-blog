import { useEffect, useState } from "react";
import "./Newsfeed.css";
import axios from "axios";
import Feed from "./Feed";
import { TabTitle, Capitalize } from "../../utils/GeneralFunctions";

const Newsfeed = () => {
  TabTitle("Panama News Feed");
  Capitalize();

  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000");
      setArticles(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <main id="main-element" className="newsfeed">
      <figure className="news-hero">
        <picture>
          <source
            type="image/webp"
            srcSet={
              process.env.PUBLIC_URL +
              "/images/newsfeed/ocean-view-portobelo-panama-320.webp 320w, /images/newsfeed/ocean-view-portobelo-panama-480.webp 480w, /images/newsfeed/ocean-view-portobelo-panama-640.webp 640w, /images/newsfeed/ocean-view-portobelo-panama-768.webp 768w, /images/newsfeed/ocean-view-portobelo-panama-1024.webp 1024w, /images/newsfeed/ocean-view-portobelo-panama-1280.webp 1280w, /images/newsfeed/ocean-view-portobelo-panama-1920.webp 1920w, /images/newsfeed/ocean-view-portobelo-panama.webp 2543w"
            }
            sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1920px) 1920px, 2543px"
          />
          <source
            type="image/jpg"
            srcSet={
              process.env.PUBLIC_URL +
              "/images/newsfeed/ocean-view-portobelo-panama-320.jpg 320w, /images/newsfeed/ocean-view-portobelo-panama-480.jpg 480w, /images/newsfeed/ocean-view-portobelo-panama-640.jpg 640w, /images/newsfeed/ocean-view-portobelo-panama-768.jpg 768w, /images/newsfeed/ocean-view-portobelo-panama-1024.jpg 1024w, /images/newsfeed/ocean-view-portobelo-panama-1280.jpg 1280w, /images/newsfeed/ocean-view-portobelo-panama-1920.jpg 1920w, /images/newsfeed/ocean-view-portobelo-panama.jpg 2543w"
            }
            sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1920px) 1920px, 2543px"
          />
          <img
            className="no-right-click"
            fetchpriority="high"
            src={
              process.env.PUBLIC_URL +
              "/images/newsfeed/ocean-view-portobelo-panama.jpg"
            }
            alt="portobelo panama"
          />
        </picture>
        <figcaption>
          View of the Atlantic Ocean from Portobelo Panama
        </figcaption>
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
          {articles.map((item, i) => (
            <Feed
              key={i}
              title={item.item.title}
              link={item.item.link}
              contentSnippet={item.item.contentSnippet}
              date={item.item.pubDate}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Newsfeed;