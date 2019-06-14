import React from "react";
import Aux from "../../hoc/Auxillary";

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
    </Aux>
  );
};

export default orderSummary;
