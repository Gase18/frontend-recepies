import React from "react";
import "./index.scss";
import { RamenChicken } from "./RamenChicken";
import { RamenPork } from "./RamenPork";
import { RamenGarlic } from "./RamenGarlic";
import { RamenStart } from "./RamenStart";
import { RamenHeader } from "./RamenHeader";
import { RamenFooter } from "./RamenFooter";


export function RamenNavigate(props) {
    const [pageId, setPageId] = React.useState(0);
    const [currentrData, settCurrentrData] = React.useState(undefined);
    const [currentiData, settCurrentiData] = React.useState(undefined);

    function navigate(id) {
        setPageId(id);
    }

    let CurrentPage = null;
    if (pageId === 0) {

        CurrentPage = <RamenStart navigate={navigate} setrData={settCurrentrData} setiData={settCurrentiData}/>
    } else if (pageId === 1) {
        CurrentPage = <RamenPork navigate={navigate} rData={currentrData} iData={currentiData}/>
    } else if (pageId === 2) {
        CurrentPage = <RamenChicken navigate={navigate} rData2={currentrData} iData2={currentiData}/>
    } else if (pageId === 3) {
        CurrentPage = <RamenGarlic navigate={navigate} rData3={currentrData} iData3={currentiData}/>
    }
    return <div><RamenHeader />{CurrentPage}<RamenFooter /></div>
}
