import React from "react";
import "./index.scss";



export function RamenChicken(props) {
    
    return <div className="RamenChicken">
        {/* https://www.mathem.se/recept/ramensoppa-med-kyckling */}
        <li><a rel="group"><img src="img/ChickenRamen.jpg" /></a></li>
        <h3>Ingredients:</h3>


        <h3>Instructions</h3>
    <div>{props.thisData.Instructions}</div>
        <textarea className="comment-area" placeholder="Comment on recipe"></textarea>

        <a className="button button">Button</a>



    </div>
}
