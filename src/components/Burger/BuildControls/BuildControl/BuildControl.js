import React from 'react';

import classes from './BuildControl.css';


const BuildControl = (props) => {   
    const disable = props.val ===0 ;
    return (<div className = {classes.BuildControl}> 
        <div className={classes.Label}> {props.label}</div>
        <button disabled = {disable} className={classes.Less} onClick = {props.removed} >less </button>
        <button className={classes.More} onClick = {props.added} >More </button>
        </div>)
}


export default BuildControl;