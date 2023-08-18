import { useEffect, useState } from "react";
import "./Newsfeed.css";
import axios from "axios";

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
      <>
        <h1>Newsfeed</h1>
      </>
    )
}

export default Newsfeed;