import classes from "./button.module.css";


const Button = ({children, href})=> {
    return(
        <a href={href} className = {classes.btn}>
            {" "}
            {children}
        </a>
    );
}; 

export default Button