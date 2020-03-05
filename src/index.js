import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import"./index.scss";
import { RamenNavigate } from './RamenNavigate';



ReactDOM.render(<RamenNavigate/>, document.getElementById('root'));

serviceWorker.unregister();
