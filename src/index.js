import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import"./index.scss";
import {RamenHeader} from "./RamenHeader";

function Start() {
    return (<div className="Content">
        <header><RamenHeader/></header>
    </div>
    );

}

ReactDOM.render(<Start />, document.getElementById('root'));

serviceWorker.unregister();
