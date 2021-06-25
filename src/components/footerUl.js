import classes from "./footer.module.css"


const FooterUl =(props)=>{
    return(
        <div className={classes.item}>
            <p>{props.title}</p>
            <ul style={{listStyle:"none"}}>
                <li><a href="#15"> Home</a></li>
                <li><a href="#15"> Examples</a></li>
                <li><a href="#15"> Pricing</a></li>
                <li><a href="#15"> Updates</a></li>
                
            </ul>
        </div>
    )
};

export default FooterUl;