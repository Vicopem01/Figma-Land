import card1 from "../images/Card1.png"
import card2 from "../images/Card2.png"
import card3 from "../images/Card3.png"
import card4 from "../images/Card4.png"
import card5 from "../images/Card5.png"
import card6 from "../images/Card6.png"
import card7 from "../images/Card7.png"
import classes from "./gallery.module.css"




const Gallery =()=>{
    return(
        <div>
            <h2 className={classes.h2}>Gallery</h2>
            <p className={classes.p}>We focus on ergonomics and meeting you where you work. <br />It's only a keystroke away.</p>
            <div className={classes.div}>
                <img src={card1} className={classes.img}/>
                <img src={card2} className={classes.img}/>
                <img src={card3} className={classes.img}/>
                <img src={card4} className={classes.img}/>
                <img src={card5} className={classes.img}/>
                <img src={card6} className={classes.img}/>
                <img src={card7} className={classes.img}/>
            </div>
            <a href="#5" className={classes.button}>See More</a>
        </div>
    )
}


export default Gallery;