import React from "react";
import "./index.scss";



export function RamenChicken(props) {
    
    return <div className="RamenChicken">
        <h1>{props.rData2.name}</h1>
        <li><a rel="group"><img src="img/ChickenRamen.jpg" /></a></li>
        <h3>Ingredients:</h3>
        {props.iData2 ? props.iData2.map(data => <div> {data.name} : {data.amount}</div>) : false}


        <h3>Instructions</h3>
        {props.rData2 ? <div>   {props.rData2.instruction}</div> : false}
        <textarea className="comment-area" placeholder="Comment on recipe"></textarea>
    </div>
}
