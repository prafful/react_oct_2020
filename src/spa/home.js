import React from 'react';


class Home extends React.Component {

    goToTeam=()=>{
        console.log(this.props)
        this.props.history.push({
            pathname:'/team'
        })
    }
    
    render() { 
        return ( 
            <div>
                <h1>Home</h1>
                <p>I am at React Home!!!!</p>
                <br></br>
                <button onClick={this.goToTeam}>Go to team!</button>
            </div>
         );
    }
}
 
export default Home;