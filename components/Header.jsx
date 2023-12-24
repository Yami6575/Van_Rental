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
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                
                <NavLink 
                    to="/host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
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