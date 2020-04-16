import React from "react";
import "./index.scss";

//Varför separata komponenter för varje recept? De är ju praktiskt taget identiska
//Och hur skulle det bli när du har 1000 recept i din databas?
//Du skall ha EN Ramen-komponent som styr hur ett recept skall visas. Till den 
//skickar du in allt som behövs för att visa ett recept.
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
