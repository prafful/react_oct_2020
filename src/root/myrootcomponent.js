import React from "react";

import Menu from "../spa/menu";
import Content from "../spa/content";

class RootC extends React.Component{

    //render will define the UI with JSX
    //it will define what needs to be rendered!
    render(){
        //message is prop passed from RootC to Introduction!
        return (
            <div>
              <Menu></Menu>
                <br></br>
                <br></br>
              <Content></Content>
           
            </div>
        )
    }

}


export default RootC