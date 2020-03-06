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
    const [settCurrentData, currentData] = React.useState(undefined);

    function navigate(id) {
        console.log(`Navigate: ${id}`)
        setPageId(id);
    }

    let CurrentPage = null;
    if (pageId === 0) {

        CurrentPage = <RamenStart navigate={navigate} settData={settCurrentData} />
    } else if (pageId === 1) {
        CurrentPage = <RamenChicken navigate={navigate} thisData={currentData} />
    } else if (pageId === 2) {
        CurrentPage = <RamenPork navigate={navigate} />
    } else if (pageId === 3) {
        CurrentPage = <RamenGarlic navigate={navigate} />
    }
    return <div><RamenHeader />{CurrentPage}<RamenFooter /></div>
}
