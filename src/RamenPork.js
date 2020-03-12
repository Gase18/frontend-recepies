import React from "react";
import "./index.scss";


export function RamenPork(props) {
    return <div className="RamenPork">
        <li><a rel="group"><img src="img/PorkRamen.jpg" /></a></li>
        <h3>Ingredients:</h3>
        {props.Data ? props.Data.map(data => <div> {data.name} : {data.amount}</div>) : false}

        <h3>Instructions</h3>

        <textarea className="comment-area" placeholder="Comment on recipe"></textarea>

        <a className="button button">Button</a>



    </div>
}
