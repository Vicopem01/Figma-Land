import classes from "./testimonials.module.css"


const TestimonialFlex =(props)=>{
    return(
        <div className={classes.div_container}>
        <div className={classes.box}>
            <img src={props.img}/>
            <span>{props.name}
            <br />Designer</span>
        </div>
            <p>{props.text}</p>
        </div>
    )
};

export default TestimonialFlex;