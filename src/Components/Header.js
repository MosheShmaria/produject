import React from "react"
import Logo from "./Logo"
import Nav from "./Nav"
import '../App.css';

function Header() {
    return <div className="Header">
        <Logo />
        <Nav />
    </div>
}
export default Header;