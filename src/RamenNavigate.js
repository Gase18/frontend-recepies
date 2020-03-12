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
    const [currentData, settCurrentData] = React.useState(undefined);

    function navigate(id) {
        setPageId(id);
    }

    let CurrentPage = null;
    if (pageId === 0) {

        CurrentPage = <RamenStart navigate={navigate} setData={settCurrentData} />
    } else if (pageId === 1) {
        CurrentPage = <RamenPork navigate={navigate} Data={currentData} />
    } else if (pageId === 2) {
        CurrentPage = <RamenChicken navigate={navigate} Data2={currentData}/>
    } else if (pageId === 3) {
        CurrentPage = <RamenGarlic navigate={navigate} Data3={currentData} />
    }
    return <div><RamenHeader />{CurrentPage}<RamenFooter /></div>
}
