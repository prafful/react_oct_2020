import React from 'react';
import axios from "axios";
import User from './user';

class RemoteData extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            users:[],
            displayForm: false,
            name:''
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
                   <User key={eachuser.id}
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

    toggleDisplayAddFriendForm=()=>{
        this.setState({
            displayForm: !this.state.displayForm
        })
    }

    captureName=(event)=>{
        //console.log(event)
        //console.log(event.target)
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }

    displayFriendForm=()=>{
        if(this.state.displayForm){
            console.log("displayForm is: "  + this.state.displayForm)
            return(
                <div>
                    <form>
                        Name: <input type="text" onChange={this.captureName}></input>
                        {this.state.name}
                        <br></br>
                        Location: <input type="text"></input>
                        <br></br>
                        Years: <input type="number"></input>
                        <br></br>
                        <button>Add</button>
                    </form>
                </div>
            )
        }
    }
    
    render() { 
        return (  
            <div>
                <button onClick={this.toggleDisplayAddFriendForm}>Add New Friend....</button>
                <br></br>
                <br></br>
                {this.displayFriendForm()}
                <h3>Get users....</h3>
                {this.displayUsers()}
            </div>
        );
    }
}
 
export default RemoteData;