import React from "react";
import "./index.scss";
import {getRecipeData} from "./RamenData";




export function RamenStart(props) {

   async function gotoRamenchicken(){
        const rData = await getRecipeData();
        props.settData(rData);
        props.navigate(1);
    }

    async function gotoRamenPork(){
        props.navigate(2);
    }

    async function gotoRamenGarlic(){
        props.navigate(3);
    }
    
    return <div className="RamenStart">
        <li><a rel="group"><img src="img/ChickenRamen.jpg" onClick={gotoRamenchicken}/></a></li>
        <li><a rel="group"><img src="img/PorkRamen.jpg" onClick={gotoRamenPork}/></a></li>
        <li><a rel="group"><img src="img/spicy-garlic-ramen.jpg"onClick={gotoRamenGarlic}/></a></li>
    </div>

}
