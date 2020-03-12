import React from "react";
import "./index.scss";



export function RamenChicken(props) {
    
    return <div className="RamenChicken">
        <li><a rel="group"><img src="img/ChickenRamen.jpg" /></a></li>
        <h3>Ingredients:</h3>
        {props.Data2 ? props.Data2.map(data => <div> {data.name} : {data.amount}</div>) : false}


        <h3>Instructions</h3>
        <textarea className="comment-area" placeholder="Comment on recipe"></textarea>

        <a className="button button">Button</a>



    </div>
}
