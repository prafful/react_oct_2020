import React from "react";
import Content from "../customcomponent/content";
import Introduction from "../customcomponent/intro";


class RootC extends React.Component{

   
    
    

    //render will definet he UI with JSX
    //it will define what needs to be rendered!
    render(){
        //message is prop passed from RootC to Introduction!
        return (
            <div>
                
               <Introduction name="prafful"  msg="Grascias!!!!" lane="eight">Parent Of All!!</Introduction>
               <Content></Content>
                
            </div>
        )
    }

}


export default RootC