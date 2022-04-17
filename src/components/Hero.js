import React from "react"
import logo from "../images/photo-grid.png"

export default function Hero(){
    const name = "sabin"
   
    return(
        <section className="hero">
            <img className="hero--image" src={logo}/>
            <h1 className="hero--header"> Good Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
