import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    cheese: 0.9,
    salad: 0.5,
    meat:1.5,
    bacon:0.9
}

class BurgerBuilder extends React.Component{
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 4
    }

    addIngredientHandler =(type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = newCount;
        const price = INGREDIENT_PRICES[type];
        const updatedPrice = this.state.totalPrice + price;
        this.setState({
            totalPrice: updatedPrice,
            ingredients : updatedIngredients
        })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = newCount;
        const price = INGREDIENT_PRICES[type];
        const updatedPrice = this.state.totalPrice - price;
        this.setState({
            totalPrice: updatedPrice,
            ingredients : updatedIngredients
        }) 
    }

    render(){
        return (
            <Auxillary> 
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                add = {this.addIngredientHandler} 
                remove = {this.removeIngredientHandler}
                ingredients = {this.state.ingredients}
                currentPrice = {this.state.totalPrice}
                />
            </Auxillary>
        )
    }
}

export default BurgerBuilder;
