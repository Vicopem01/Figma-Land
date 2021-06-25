import imageStats from "../images/imageStats.svg";
import FeatureText from "./featureText";
import classes from "./features.module.css";

import iconSpoon from "../images/icon-spoon.svg";
import alien from "../images/alien-icon.svg";
import infinity from "../images/infinity-icon.svg";

const Features = () => {
  return (
    <div>
      <h2 className={classes.h2}>FEATURES</h2>
      <p className={classes.p}>
        Most calendars are designed for teams. Slate is designed for <br />
        freelancers who want a simple way to plan their schedule.
      </p>
      <div className={classes.divstyle}>
        <img className={classes.imageStats} src={imageStats} alt="statistics" />
        <div className={classes.divstyle1}>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={iconSpoon} />
              <span className={classes.span}>A single source of truth</span>
            </div>
            <p className={classes.ptext}>
              When you add work to your <br /> Slate calendar we automatically <br />
              calculate useful insights
            </p>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={alien} />
              <span className={classes.span}>Intuitive interface</span>
            </div>
            <p className={classes.ptext}>
              When you add work to your <br /> Slate calendar we automatically <br />
              calculate useful insights
            </p>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={infinity} />
              <span className={classes.span}>Or with rules</span>
            </div>
            <p className={classes.ptext}>
              When you add work to your <br /> Slate calendar we automatically <br />
              calculate useful insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
