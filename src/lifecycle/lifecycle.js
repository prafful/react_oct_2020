import React from 'react';


class LifeCycle extends React.Component {
    //define state
    constructor(props){
        super(props)
        this.state = {
            counter: 8,
            name: "OBB"
        }
    }

    componentWillMount(){
        console.log("component will be mounted");
        //alert()
    }

    componentDidMount(){
        console.log("component is mounted");
    }

    componentDidUpdate(){
        console.log("component is updated");
    }

    componentWillUpdate(){
        console.log("component will be updated!!!!");
        alert()
    }
   
    updateState=()=>{
        this.setState({counter: this.state.counter + 1})
    }



    render() { 
        return ( 
            <span>
                <h1>Component LifeCycle</h1>
                <br></br>
        <button onClick={this.updateState}>Update State!!!!  {this.state.counter}</button>
            </span>
         );
    }
}
 
export default LifeCycle;