import React from "react";
import Aux from "../../hoc/Auxillary";
import Button from "../UI/Button/Button";

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>
          {key} : {props.ingredients[key]}
        </span>
      </li>
    );
  });

  return (
    <Aux>
      <p> Your Order Summary is :</p>
      <ul>{ingredientsSummary}</ul>
      <p> TotalPrice : {props.totalPrice.toFixed(2)}</p>
      <Button btnType="Danger" clicked={props.removed}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.continue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
