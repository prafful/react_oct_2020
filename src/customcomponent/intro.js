import React from 'react';

class Introduction extends React.Component {
    message = "Arigatoooo"

    username = this.props.name
    
    applyNow = {
        "color":"purple",
        "fontSize":"22px",
        "border":"1px dashed blue"
    }
    
    //normal functions
    oneWay(){
        return "I am on one lane highway!!!!"
    }
    //variable functions
    twoWay = function(){
        return "I am two lane highway!!!!"
    }
    //arrow functions
    threeWay = ()=>{
        console.log(this.props);
        return "Wow, four-lane expressway!!!!"
    }

    

    render() { 
        return ( 
            <span>
                <div>
                    <h1>{this.props.children}</h1>
                </div>
                <div>
                     Hello, {this.username}:    <h1>{this.message} and {this.props.msg}</h1>
                </div>
                <div>
                    <h1>
                        {this.oneWay()} {this.twoWay()} {this.threeWay()}
                        I am on {this.props.lane} highway!!!!
                    
                    </h1>
                </div>
                <hr></hr>
                <span style={{"color":"red"}}>aksdkj</span>
                <span style={{"color":"green"}}>asdasd</span>
                <span>asdsad</span>
                <div>div 1
                    <span style={{"color":"blue", "border":"1px solid red"}}>div1.1</span>
                </div>
                <div style={this.applyNow}>div2</div>
                <hr></hr>
            </span>

         );
    }
}
 
export default Introduction