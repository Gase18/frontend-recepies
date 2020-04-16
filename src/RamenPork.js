import React from "react";
import "./index.scss";

//Varför separata komponenter för varje recept? De är ju praktiskt taget identiska
//Och hur skulle det bli när du har 1000 recept i din databas?
//Du skall ha EN Ramen-komponent som styr hur ett recept skall visas. Till den 
//skickar du in allt som behövs för att visa ett recept.
export function RamenPork(props) {
    return <div className="RamenPork">
        <h1>{props.rData.name}</h1>
        <li><a rel="group"><img src="img/PorkRamen.jpg" /></a></li>
        <h3>Ingredients:</h3>
        {props.iData ? props.iData.map(data => <div> {data.name} : {data.amount}</div>) : false}

        <h3>Instructions</h3>
        {props.rData ? <div>   {props.rData.instruction}</div> : false}
        <textarea className="comment-area" placeholder="Comment on recipe"></textarea>
    </div>
}
