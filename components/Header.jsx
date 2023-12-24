import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">Van Rental</Link>
            <nav>
                
                <NavLink 
                    to="/vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                
            </nav>
        </header>
    )
}