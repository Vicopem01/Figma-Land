import React from "react"
import logo from "../images/logo-dark.svg"
import classes from "./Nav.module.css"
import Menu from "../images/menuKey.svg"

const NavBar = ()=>{
    return <div className={classes.navBar}>
        <a>
            <img src={logo} alt = "logo" className={classes.logo}/> 
        </a>
        <ul className={classes.ul}>
            <li className={classes.li}><a href= "#0">Home</a></li>
            <li className={classes.li}><a href= "#0">Product</a></li>
            <li className={classes.li}><a href= "#0">About</a></li>
            <li className={classes.li}><a href= "#0">Contact</a></li>
        </ul>
        <a href="#0" className={classes.login}>
            Login
        </a>
        <a>
            <img src={Menu} alt="Menu" className={classes.menu}/>
        </a>
        </div>
}

export default NavBar;