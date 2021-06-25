import TestimonialFlex from "./testimonialFlex";
import Avatar1 from "../images/avatar1.png"
import Avatar2 from "../images/avatar2.png"
import Avatar3 from "../images/avatar3.png"
import Avatar4 from "../images/avatar4.png"
import classes from "./testimonials.module.css"


const Testimonials = ()=>{
    return(<div>

        <h2 className={classes.h2}>Testimonials</h2>
        <div style={{width:"80%", margin:"auto"}}>
        <div className={classes.grid}>
            <TestimonialFlex img={Avatar1} name="Claire Bell" text="Slate helps you see how many more days 
you need to work to reach your financial 
goal for the month and year. Slate helps 
you see how many more days 
you need to work to reach your financial 
goal for the month and year.your financial 
goal for the month and year."/>
            <TestimonialFlex img={Avatar2} name="Francisco Lane" text="Slate helps you see how many more days 
you need to work to reach your financial 
goal for the month and year. Slate helps 
you see how many more days 
you need to work to reach your financial 
goal for the month and year.your financial 
goal for the month and year."/>
            <TestimonialFlex img={Avatar3} name="Ralph Fisher" text="Slate helps you see how many more days 
you need to work to reach your financial 
goal for the month and year. Slate helps 
you see how many more days 
you need to work to reach your financial 
goal for the month and year.your financial 
goal for the month and year."/>
            <TestimonialFlex img={Avatar4} name="Jorge Murphy" text="Slate helps you see how many more days 
you need to work to reach your financial 
goal for the month and year. Slate helps 
you see how many more days 
you need to work to reach your financial 
goal for the month and year.your financial 
goal for the month and year."/>
        </div>

        </div>
    </div>
    )
};

export default Testimonials;