import React from "react"



export default function Card(props){

console.log(props)
     let cardStatus
     console.log(cardStatus)
     if (props.openSpots === 0) {
        cardStatus = "SOLD OUT"         
     }else if(props.location === "Online"){
        cardStatus = "ONLINE"
     }
    return(
        <div className="card">
            {cardStatus && <div className="card--status">{cardStatus}</div>}
            <img className="card--image" src={props.img}/>
            <div className="card--ratings">
                <img className="rating-icon" src="../images/star.png"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>       
            </div>    
            <p>{props.title}</p> 
            <p><span className="bold">From {props.price}</span> / person</p>   
        </div>
    )
}