import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import databnb from "./data"


export default function App(){
    const dataElement = databnb.map(data=>{
        console.log(data.coverImg)
        return(
            <Card 
            key={data.id}
            img = {data.coverImg}
            rating= {data.stats.rating}
            reviewCount={data.stats.reviewCount}
            location={data.location}
            title={data.title}
            price={data.price} 
            openSpots={data.openSpots}   
        />
        )
    }) 
        
    return(
        <div>
            <Navbar/>
            <Hero/>
            <div className="card-list">
                {dataElement}
            </div>
        </div>
    )
}