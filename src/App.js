import './App.css';
import React, {useState} from 'react';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote.content}" - ${quote.author}`
    )}`;
    window.open(twitterUrl, "_blank");
  };

  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `"${quote.content}" - ${quote.author}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
          <button onClick={shareOnTwitter} className="btn">Share on Twitter</button>
          <button onClick={shareOnWhatsApp} className="btn">Share on WhatsApp</button>
        </div>
      </div>
    </>
  )
}


export default App;
