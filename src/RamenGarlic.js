import React from "react";
import "./index.scss";


export function RamenGarlic(props) {
    return <div className="RamenGarlic">
        <li><a rel="group"><img src="img/spicy-garlic-ramen.jpg" /></a></li>
        <h3>Ingredients:</h3>
        {props.Data3 ? props.Data3.map(data => <div> {data.name} : {data.amount}</div>) : false}

        <h3>Instructions</h3>
    

        <textarea className="comment-area" placeholder="Comment on recipe"></textarea>

        <a className="button button">Button</a>
           
       

    </div>
}
