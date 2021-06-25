import AppStore from "../images/logos_apple-store.svg"
import Apiary from "../images/logos_apiary.svg"
import Android from "../images/logos_android.svg"
import BaseCamp from "../images/logos_basecamp.svg"
import AirBnB from "../images/logos_airbnb.svg"
import IBM from "../images/logos_ibm.svg"
import classes from "./partner.module.css"


const Partners =() => {
    return(
        <div>
            <h2 className={classes.h2}>Partners</h2>
            <p className={classes.p}>We focus on ergonomics and meeting you where you work. <br />It's only a keystroke away.</p>
            <div className={classes.div}>
                <div>
                    <img src={AppStore} />
                </div>
                <div>
                    <img src={Apiary} />
                </div>
                <div>
                    <img src={Android} />
                </div>
                <div>
                    <img src={BaseCamp} />
                </div>
                <div>
                    <img src={AirBnB} />
                </div>
                <div>
                    <img src={IBM} />
                </div>
            </div>
            <a href="#6" className={classes.a}>All Partners </a>
        </div>
    )

};

export default Partners;