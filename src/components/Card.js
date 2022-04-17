import React from "react"



export default function Card(props){

console.log(props)
     let cardStatus
     console.log(cardStatus)
     if (props.data.openSpots === 0) {
        cardStatus = "SOLD OUT"         
     }else if(props.data.location === "Online"){
        cardStatus = "ONLINE"
     }
    return(
        <div className="card">
            {cardStatus && <div className="card--status">{cardStatus}</div>}
            <img className="card--image" src={props.data.coverImg}/>
            <div className="card--ratings">
                <img className="rating-icon" src="../images/star.png"/>
                <span>{props.data.stats.rating}</span>
                <span className="gray">({props.data.stats.reviewCount}) • </span>
                <span className="gray">{props.data.location}</span>       
            </div>    
            <p>{props.title}</p> 
            <p><span className="bold">From {props.data.price}</span> / person</p>   
        </div>
    )
}