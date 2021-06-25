import FlyerImg from "../images/flyer-img.png"
import classes from "./flyer.module.css"
import Flyer2 from "../images/flyer2.svg"

const Flyer =()=>{
    return(
            <div className={classes.div}>
                <div className={classes.div2}>
                <p>OpenType feature <br /> and Variable fonts</p>
                <a hfef="#7" className={classes.a}>Try for free</a>
                </div>
                <div className={classes.imgcontainer}>
                <img src={FlyerImg} className={classes.flyer1}/>
                <img src={Flyer2} alt="Flyer" className={classes.flyer2}/>
                </div>

            </div>
    )
};

export default Flyer