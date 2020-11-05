import React from 'react';
import axios from "axios";
import User from './user';

class RemoteData extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            users:[],
            displayForm: false,
            name:'',
            location:'',
            years:0
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

     deleteFriendWithId=(id)=>{
         console.log("I am called from child component!!!! for id: " + id)
         axios.delete("http://localhost:1234/allfriends" + "/" + id)
                .then(response=>{
                    console.log(response)
                    this.getRemoteUsers()
                })
                .catch(error=>{
                    console.log(error)
                })
     }

     displayUsers=()=>{
        return (
            this.state.users.map(eachuser =>{
               return(
                
                        <User key={eachuser.id}
                                id={eachuser.id}
                                name={eachuser.name}
                                loc={eachuser.location}
                                year={eachuser.years}
                                getIdFromUserComponent={this.deleteFriendWithId}
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

    captureLocation = (event)=>{
        console.log(event.target.value)
        this.setState({
            location: event.target.value
        })
    }

    captureYears = (event)=>{
        console.log(event.target.value)
        this.setState({
            years: event.target.value
        })
    }

    postFriend =(event)=>{
        event.preventDefault()
        console.log("Post friend to rest api!!!!")
        var newfriend = {
            "name": this.state.name,
            "location": this.state.location,
            "years": this.state.years
        }
        axios.post("http://localhost:1234/allfriends", newfriend )
                .then(response=>{
                    console.log(response)
                    this.setState({
                        name:'',
                        location:'',
                        years:0,
                        displayForm: false
                    })
                    this.getRemoteUsers()
                })
                .catch(error=>{
                    console.log(error)
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
                        Location: <input type="text" onChange={this.captureLocation}></input>
                        {this.state.location}
                        <br></br>
                        Years: <input type="number" onChange={this.captureYears}></input>
                        {this.state.years}
                        <br></br>
                        <button onClick={this.postFriend}>Add</button>
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
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Years</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayUsers()}
                    </tbody>
                </table>
                
            </div>
        );
    }
}
 
export default RemoteData;