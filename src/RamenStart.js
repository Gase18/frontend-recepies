import React from "react";
import "./index.scss";
import { getRecipeData } from "./RamenRecipeData";
import { getIngredientData, getIngredientData2, getIngredientData3} from "./RamenIngredientData";





export function RamenStart(props) {

    async function gotoRamenPork() {
        const iData = await getIngredientData();
        const rData = await getRecipeData(1);
        props.setrData(rData);
        props.setiData(iData);
        props.navigate(1);
    }

    async function gotoRamenchicken() {
        const iData = await getIngredientData2();
        const rData = await getRecipeData(2);
        props.setrData(rData);
        props.setiData(iData);
        props.navigate(2);
    }


    async function gotoRamenGarlic() {
        const iData = await getIngredientData3();
        const rData = await getRecipeData(3);
        props.setrData(rData);
        props.setiData(iData);
        props.navigate(3);
    }

    return <div className="RamenStart">
        <li><a rel="group"><img src="img/PorkRamen.jpg" onClick={gotoRamenPork}/></a></li>
        <li><a rel="group"><img src="img/ChickenRamen.jpg" onClick={gotoRamenchicken} /></a></li>
        <li><a rel="group"><img src="img/spicy-garlic-ramen.jpg" onClick={gotoRamenGarlic} /></a></li>
    </div>

}
