import react from "react"
import logo from "../images/airbnb-logo.png"

export default function Navbar(){
    return(
        <nav className= "navbar">
            <img className="navbar--logo" src={logo}/>
        </nav>
    )
}