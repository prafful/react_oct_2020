<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('first')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
=======
import ReactDOM from "react-dom";
import React from "react"

import RootC from "./root/myrootcomponent";

ReactDOM.render(
    <span>
        <RootC></RootC>
    </span>, 
        document.getElementById("rootcomponent"))
>>>>>>> 3fcf3b8ef6e430ce16711936ba3f6f7dbca55927
