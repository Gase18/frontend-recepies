import React from "react";
import "./index.scss";


export function RamenGarlic(props) {
    return <div className="RamenGarlic">
        <h1>{props.rData3.name}</h1>
        <li><a rel="group"><img src="img/spicy-garlic-ramen.jpg" /></a></li>
        <h3>Ingredients:</h3>
        {props.iData3 ? props.iData3.map(data => <div> {data.name} : {data.amount}</div>) : false}

        <h3>Instructions</h3>
        {props.rData3 ? <div>   {props.rData3.instruction}</div> : false}

        <textarea className="comment-area" placeholder="Comment on recipe"></textarea>
   </div>
}
