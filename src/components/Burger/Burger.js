import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(firstMapKey => {
       return  [...Array(props.ingredients[firstMapKey])].map( (_,i) => {
            return <BurgerIngredients key={firstMapKey + i} type = {firstMapKey} />
       });
    }).reduce((arr,el) => {
        return arr.concat(el);
    },[]);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p> <b>Please add some ingredients  </b></p>;
    }
    // console.log(transformedIngredients);
return (
    <div className = {classes.Burger}> 
    <BurgerIngredients type ="bread-top"/>
    {transformedIngredients}
    <BurgerIngredients type ="bread-bottom"/>
        </div>
)
};

export default burger;