import React from "react";
import classes from "./Backdrop.css";

const backdrop = props =>
  props.purchaseMode ? (
    <div className={classes.BackDrop} onClick={props.clicked}>
      {" "}
    </div>
  ) : null;

export default backdrop;
