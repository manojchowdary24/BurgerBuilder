import React from "react";
import classes from "../Modal/Modal.css";
import Aux from "../../../hoc/Auxillary";
import Backdrop from "../../Backdrop/Backdrop";

const modal = props => (
  <Aux>
    <Backdrop
      purchaseMode={props.purchaseMode}
      clicked={props.removeModalClicked}
    />
    <div
      className={classes.Modal}
      style={{
        transform: props.purchaseMode ? "translateY(0)" : "translateY(-100)",
        opacity: props.purchaseMode ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
