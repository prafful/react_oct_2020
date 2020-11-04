import React from 'react';
import axios from "axios";
import User from './user';

class RemoteData extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            users:[]
        }
    }

    componentWillMount(){
        this.getRemoteUsers()
    }

    getRemoteUsers=()=>{
        axios.get("http://localhost:1234/allfriends")
             .then((response)=>{
                 console.log(response.data)
                 console.log(this.state.users)
                 this.setState({users: response.data})
                 console.log(this.state.users)
             })
             .catch((error)=>{
                 console.log(error);
             })
     }

     displayUsers=()=>{
        return (
            this.state.users.map(eachuser =>{
               return(
                   <User id={eachuser.id}
                        name={eachuser.name}
                        loc={eachuser.location}
                        year={eachuser.years}
                   >
                   </User>
               )
            })
        )
     }


/*     getRemoteUsers=()=>{
       axios.get("https://jsonplaceholder.typicode1s.com/users")
            .then(this.iAmSuccess)
            .catch(this.iAmError)
    } */

   /*  getRemoteUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
             .then(function(response){
                 console.log(response.data)
             })
             .catch(function(error){
                 console.log(error)
             })
     } */

  /*   iAmSuccess=(response)=>{
        console.log(response)
        console.log(response.data)
        console.log(response.data[0].name)
    }

    iAmError=(error)=>{
        console.log(error);
    } */

    
    
    render() { 
        return (  
            <div>
                <button>Add New Friend....</button>
                <h3>Get users....</h3>
                {this.displayUsers()}
            </div>
        );
    }
}
 
export default RemoteData;