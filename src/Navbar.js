import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>
                The Arash Blog
            </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/contactme">Contact Me</Link>
            </div>
        </nav>
    );
}

export default Navbar;