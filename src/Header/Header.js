import NavBar from "./Nav"
import Button from "../button/button"
import classes from "./header.module.css"

const Header = ()=>{
    return(
        <div>
            <NavBar />
            <h1 className={classes.h1}>Work at the speed <br />of thought</h1>
            <p className={classes.p}>Most calendars are designed for teams. Slate is designed for <br/> freelancers who want a simple way to plan their schedule.</p>
            <div className={classes.div_btn}>
            <a href="#1" className={classes.a}>Try For Free</a>
            <a href="#2" className={classes.a}>Learn More</a>
            </div>
        </div>

    )
};

export default Header;