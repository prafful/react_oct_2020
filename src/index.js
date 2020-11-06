
import ReactDOM from "react-dom";
import React from "react"

import RootC from "./root/myrootcomponent";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
    <HashRouter>
       
            <RootC></RootC>
        
    </HashRouter>, 
        document.getElementById("rootcomponent"))

