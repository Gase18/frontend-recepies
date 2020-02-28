import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import"./index.scss";
import {RamenHeader} from "./RamenHeader";
import {RamenFooter} from "./RamenFooter";

function Start() {
    return (<div className="Content">
        <header><RamenHeader/></header>
        <footer><RamenFooter/></footer>
    </div>
    );

}

ReactDOM.render(<Start />, document.getElementById('root'));

serviceWorker.unregister();
