import macbook from "../images/macbook.png";
import boards from "../images/boards.svg";
import classes from "./content.module.css"



const Content = () => {
  return (
    <div>
      <h2 className={classes.h2}>Contents</h2>
      <p className={classes.contentP}>
        We focus on ergonomics and meeting you where you work. <br />
        It's only a keystroke away.
      </p>
      <div className={classes.div}>
      <div className={classes.flexgroup}>
                <h3>Work</h3>
                <p>Ever wondered if you're too reliant
                    <br /> on a client for work? Slate helps
                    <br /> you identify .</p>
                <a href="#8" className={classes.aTag}>Sign Up</a>
                <img src={macbook} className={classes.contentimg}/>
        </div>

        <div className={classes.flexgroup}>
                <h3>Design with real data</h3>
                <p>Ever wondered if you're too reliant
                <br /> on a client for work? Slate helps
                <br /> you identify .</p>
                <a href="#9" className={classes.aTag}>Try for free</a>
                <img src={boards} className={classes.contentimg}/>
        </div>
      </div>
    </div>
  );
};

export default Content;
