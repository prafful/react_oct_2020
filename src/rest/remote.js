import React from 'react';
import axios from "axios";

class RemoteData extends React.Component {

    componentWillMount(){
        this.getRemoteUsers()
    }

    getRemoteUsers=()=>{
       axios.get("https://jsonplaceholder.typicode1s.com/users").then(this.iAmSuccess).catch(this.iAmError)
    }

    iAmSuccess=(response)=>{
        console.log(response)
        console.log(response.data)
        console.log(response.data[0].name)
    }

    iAmError=(error)=>{
        console.log(error);
    }

    
    
    render() { 
        return (  
            <div>
                <h3>Get users....</h3>
            </div>
        );
    }
}
 
export default RemoteData;