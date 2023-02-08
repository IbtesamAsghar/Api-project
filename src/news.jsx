import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import "./news.css"
const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=4a035d5b4a0b418d959c8a4d526133a5"
const App = () => {
  const [showButton, setShowButton] = useState(false);
  let navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [search, setsearch] = useState("")
  const fetchSet = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setNews(data.articles);
    console.log(data)
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  useEffect(() => {
    fetchSet();
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, [])
  const remove = (title) => {
    const singleNews = news.filter((meriNews) => meriNews.title !== title)
    setNews(singleNews)
  }
  return (
    <div>
      <div className='headersuper'>
        <div className="newsheading">

          <h1 >Daily Headlines</h1>
        </div>
        <div className="superheader">
          <div className="headerbtn">

            <button onClick={() => navigate(-1)}>Back</button>
          </div>
          <div className="search">

            <h6>Search</h6> <input type="search" name="" id="" onChange={(e) => setsearch(e.target.value)} />

          </div>
        </div>
      </div>
      <div className='hero'>

        {
          news.filter((newsSearch) => {
            return newsSearch.title.toLowerCase().startsWith(search)
          })
            .map((meriNews) => {
              return (
                <div className='superHero'>

                  <img src={meriNews.urlToImage} alt={meriNews.content} />
                  <div className='superdetail'>
                    <div className="btnremove">

                      <button onClick={() => remove(meriNews.title)} class="btn-close" style={{ backgroundColor: "transparent" }}></button>
                    </div>
                    <h1>{meriNews.title.substring(0, 30)}....</h1>
                    <p>{meriNews.description.substring(0, 150)}....</p>
                    <footer className='powerstat'>
                      <h6>{meriNews.author}</h6>

                      <h6>{meriNews.publishedAt.substring(0, 10)}</h6>
                    </footer>
                    <a target="_blank" href={meriNews.url} >Read more</a>
                    {/* <button onClick={() => remove(meriNews.title)} style={{ marginTop: ".8rem" }}>Not Interested</button> */}
                  </div>
                </div>
              )
            })
        }
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  )
}

export default App