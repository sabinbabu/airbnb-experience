import React from "react"

export default function Hero(){
    const name = "sabin"
   
    return(
        <section className="hero">
            <img className="hero--image" src="../images/photo-grid.png"/>
            <h1 className="hero--header"> Good Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
