import React from "react";
import Content from "../customcomponent/content";
import Introduction from "../customcomponent/intro";
import LifeCycle from "../lifecycle/lifecycle";
import RemoteData from "../rest/remote";


class RootC extends React.Component{

    //render will definet he UI with JSX
    //it will define what needs to be rendered!
    render(){
        //message is prop passed from RootC to Introduction!
        return (
            <div>
                
               <Introduction 
                    name="prafful"  
                    msg="Grascias!!!!" 
                    lane="eight">
                        I am children props!
                </Introduction>
               <Content></Content>
               <hr></hr> 
               <LifeCycle></LifeCycle>
               <hr></hr>
               <RemoteData></RemoteData>
            </div>
        )
    }

}


export default RootC