import React, { useState } from 'react'
import mobile from "./image/mobile1.png"

import halfMbl from "./image/animateImg1.png"
import girl from "./image/girl.png"
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import "./home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'


const Home = () => {
    const [size, setsize] = useState(false)
    const [show, setShow] = useState(false);

    return (
        <div className='containerApp'>
            <div className="textApp" style={{ textAlign: "center" }}>
                <div className="head" >
                    <p style={{ textAlign: "left", fontFamily: "Allan, cursive", fontSize: "3rem", lineHeight: "90%" }}>Latest Info</p> <h1 style={{ color: "#FFD234", fontSize: "5rem", fontFamily: "Anton", lineHeight: "90%" }}>ABOUT THE</h1><h1 style={{ textAlign: "right", fontSize: "5rem", lineHeight: "90%" }}> WORLD!</h1></div>
                <p style={{ textAlign: "center", marginTop: "2rem", color: "rgb(216, 216, 216)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam alias illum quae doloremque, vitae dolore!</p>
                <div className='btnApp'> <button onMouseOver={() => setsize(!size)} onMouseOut={() => setsize(!size)} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"> START NOW</button></div>


                <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel" style={{ height: "100vh", backgroundColor: "#EEF5F9" }}>
                    <div class="offcanvas-header" >
                        <h5 class="offcanvas-title" id="offcanvasTopLabel" style={{ display: "flex" }}>
                            <div className="box" >

                                <h3>What type of website do you want?</h3>
                                <div className="cardsApp">
                                    <Link to="/news" >
                                        <div className="cardApp">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                            <h6>Daily News/Headlines</h6>
                                            {/* <h6>Collection:100</h6> */}
                                        </div>
                                    </Link>
                                    <Link to="/app">
                                        <div className="cardApp">
                                            <FontAwesomeIcon icon={faLayerGroup} />
                                            <h6>SuperHero Information</h6>
                                            {/* <h6>Collection:100</h6> */}

                                        </div></Link>
                                </div>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </h5>
                    </div>
                </div>

            </div>
            <div className="image">
                {
                    size ? (

                        <div className='animateImg'>

                            <img src={halfMbl} alt="" />
                            {/* <img src={halfMbl} alt="" style={{ width: "40rem", height: "30rem" }} /> */}



                        </div>
                    )
                        : (<img src={mobile} alt="" />
                            // : (<img src={mobile} alt="" style={{ width: "40rem", height: "30rem" }} />
                        )

                }



            </div>

        </div >



    )
}

export default Home