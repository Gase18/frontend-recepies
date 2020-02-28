import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import"./index.scss";
import {RamenHeader} from "./RamenHeader";
import {RamenFooter} from "./RamenFooter";
import {RamenStart} from "./RamenStart";

function Start() {
    return (<div className="Content">
        <header><RamenHeader/></header>
        <div><RamenStart/></div>
        <footer><RamenFooter/></footer>
    </div>
    );

}

ReactDOM.render(<Start />, document.getElementById('root'));

serviceWorker.unregister();
