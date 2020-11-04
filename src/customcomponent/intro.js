import React from 'react';

class Introduction extends React.Component {
    message = "Arigatoooo"

    username = this.props.name
    
    applyNow = {
        "color":"purple",
        "fontSize":"32px",
        "border":"1px dashed blue",
        "backgroundColor": "burlywood"
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
        console.log(this);
        console.log(this.props);
        return "Wow, four-lane expressway!!!!"
    }

    fourWay = ()=>{
        console.log("Four Lane Highway!!!!");
    }
    

    render() { 
        return ( 
            <span>
                <div>
                    <h1>Children: {this.props.children}</h1>
                </div>
                <div>
                     Hello, {this.username}:    <h1>{this.message} and {this.props.msg}</h1>
                </div>
                <div>
                    <h1>
                        {this.oneWay()} {this.twoWay()} {this.threeWay()}
                        I am on {this.props.lane} lane highway!!!!
                    
                    </h1>
                </div>
                <hr></hr>
                <span style={{"color":"red"}}>aksdkj</span>
                <span style={{"color":"green"}}>asdasd</span>
                <span>asdsad</span>
                <div>div 1
                    <span style={{
                                "color":"blue", 
                                "border":"4px solid red",
                                "backgroundColor":"pink"
                                }}>div 1.1
                    </span>
                </div>
                <div style={this.applyNow}>div2</div>
                <br></br>
                <button onClick={this.fourWay}>Catch Me!!!!</button>
                <hr></hr>
            </span>

         );
    }
}
 
export default Introduction