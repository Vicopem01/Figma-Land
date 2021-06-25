import FooterUl from "./footerUl"
import Location from "../images/location.svg"
import Phone from "../images/phone.svg"
import Twitter from "../images/twitter.svg"
import Facebook from "../images/facebook.svg"
import Linkedin from "../images/linkedin.svg"
import classes from "./footer.module.css"


const Footer =()=>{
    return(
        <div className={classes.div}>
                <FooterUl title="Fingertipe"/>
                <FooterUl title="Resources"/>
                <FooterUl title="About"/>
            <div>
                    <div className={classes.container}>
                        <img src={Location}/>
                        <span>7480 Mockingbird Hill undefined </span>
                    </div>
                    <div className={classes.container}>
                        <img src={Phone}/>
                        <span>(239) 555-0108</span>
                    </div>
                    <div >
                      <a href="#10" style={{paddingRight: "15px"}}>  <img src={Twitter}/> </a>
                      <a href="#10" style={{paddingRight: "15px"}}>  <img src={Facebook}/> </a>
                      <a href="#10">  <img src={Linkedin}/> </a>
                    </div>
            </div>

        </div>
    )
};

export default Footer;


