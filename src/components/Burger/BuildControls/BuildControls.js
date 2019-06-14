import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls =[
    {label:'Salad', type : 'salad'},
    {label:'Bacon', type : 'bacon'},
    {label:'Meat', type : 'meat'},
    {label:'Cheese', type : 'cheese'}
];

const buildControls = (props) => (
    <div className = {classes.BuildControls}>
        <p>Current Price :<strong> {props.currentPrice.toFixed(2)}</strong> </p>
        {  controls.map(ctrl => 
            (<BuildControl
                 key ={ctrl.label}
                  label = {ctrl.label}
                  added = {() => props.add(ctrl.type)}
                  removed = {() => props.remove(ctrl.type)}
                  val = {props.ingredients[ctrl.type]}
                  />))
        }
     </div>
)

export default buildControls;