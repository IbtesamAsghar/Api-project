import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import "./app.css"
import logo from "./image/logo.jpg"
const url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"

const App = () => {
  const [showButton, setShowButton] = useState(false);
  let navigate = useNavigate();
  const [hero, setHero] = useState([])
  const [search, setsearch] = useState("")
  const fetchSuperHero = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setHero(data)
  }
  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  const remove = (name) => {
    const singleNews = hero.filter((meriNews) => meriNews.name !== name)
    setHero(singleNews)
  }
  useEffect(() => {
    fetchSuperHero();
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });

  }, [])
  return (
    <>

      <div className='headersuper'>

        <h1 style={{ marginTop: "3rem", marginBottom: "4px", letterSpacing: "1px", fontWeight: "600", fontSize: "37px" }}>
          SuperHero
        </h1>
        <p style={{ marginTop: ".001px", width: "50%" }}>Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!</p>
        <img src={logo} alt="Ibtesam" />
        <p>Collection by <strong>Syeda Ibtesam</strong></p>
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
          hero.filter((newsSearch) => {
            return newsSearch.name.toLowerCase().startsWith(search)
          })
            .map((fetchHero) => {
              return (
                <div className='superHero'>

                  <img src={fetchHero.images.lg} alt="" />



                  <div className='superdetail'>
                    <div className="btnremove">

                      <button onClick={() => remove(fetchHero.name)} class="btn-close" style={{ backgroundColor: "transparent" }}></button>
                    </div>


                    <h1 >{fetchHero.id}:   {fetchHero.name}</h1>



                    <p>{fetchHero.connections.relatives.substring(0, 202)}</p>
                    <div className='powerstat'>


                      <p><strong>Intelligence:  </strong> {fetchHero.powerstats.intelligence}</p>
                      <p><strong>Strength:   </strong>{fetchHero.powerstats.strength}</p>
                      <p><strong>Speed:   </strong>{fetchHero.powerstats.speed}</p>
                      <p><strong>Durability:    </strong>{fetchHero.powerstats.durability}</p>
                      <p><strong>Power:     </strong>{fetchHero.powerstats.power}</p>
                      <p><strong>Combat:    </strong>{fetchHero.powerstats.combat}</p>
                    </div>
                    <p style={{ color: "rgb(56, 56, 56)" }}><strong>Gender</strong>   {fetchHero.appearance.gender}</p>
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
    </>
  )
}

export default App