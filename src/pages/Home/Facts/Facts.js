import React, { useState, useEffect } from 'react';
import "./Facts.css"

const Quotes = () => {
  const [quote, setQuote] = useState('');
//   const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        console.log(dataQuotes);
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        // setAuthor(randomQuote.author);
      })
  }

   const handleClick = () => {
    getQuote();
   }

  return (
    <>
       <div className="line-divider centered wide">
            <h2 className="diamond-text-box">
            <span className="left"></span>
            <span className="content caps centered">Facts about Panama</span>
            <span className="right"></span>
            </h2>
        </div>
      <section className="facts">
         <div className="fact-parent"><p>{quote}</p></div>
      </section>
      <button className="fact-button" onClick={handleClick} id="new-quote">Learn a new Fact</button>
    </>
  )
}

export default Quotes;