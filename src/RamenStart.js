import React from "react";
import "./index.scss";
import { RamenHeader } from "./RamenHeader";



export function RamenStart(props) {

    function gotoRamenchicken(){
        props.navigate(1);
    }
    function gotoRamenPork(){
        props.navigate(2);
    }
    function gotoRamenGarlic(){
        props.navigate(3);
    }

    return <div className="RamenStart">
        <li><a rel="group"><img src="img/ChickenRamen.jpg" onClick={gotoRamenchicken}/></a></li>
        <li><a rel="group"><img src="img/PorkRamen.jpg" onClick={gotoRamenPork}/></a></li>
        <li><a rel="group"><img src="img/spicy-garlic-ramen.jpg"onClick={gotoRamenGarlic}/></a></li>
    </div>

}
