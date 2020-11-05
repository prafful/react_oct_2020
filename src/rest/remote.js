import React from 'react';
import axios from "axios";
import User from './user';

class RemoteData extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            users:[],
            displayAddForm: false,
            displayEditForm: false,
            name:'',
            location:'',
            years:0,
            editId:0,
            editName:'',
            editLocation:'',
            editYears:0
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
         console.log("Delete-I am called from child component!!!! for id: " + id)
         axios.delete("http://localhost:1234/allfriends" + "/" + id)
                .then(response=>{
                    console.log(response)
                    this.getRemoteUsers()
                })
                .catch(error=>{
                    console.log(error)
                })
     }

     displayFriendWithId=(id)=>{
        console.log("Edit-I am called from child component!!!! for id: " + id)
        axios.get("http://localhost:1234/allfriends" + "/" + id)
                .then(response=>{
                    this.setState({
                        editId:response.data.id,
                        editName: response.data.name,
                        editLocation:response.data.location,
                        editYears:response.data.years
                    })
                    this.setState({
                        displayEditForm: true
                    })

                    console.log(this.state)
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
                                getIdFromUserComponentForDelete={this.deleteFriendWithId}
                                getIdFromUserComponentForEdit={this.displayFriendWithId}
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
            displayAddForm: !this.state.displayAddForm
        })
    }

    captureName=(event)=>{
        //console.log(event)
        //console.log(event.target)
        console.log(event.target.value)
        if(this.state.displayAddForm){
            this.setState({
                name: event.target.value
            })
        }
        if(this.state.displayEditForm){
            this.setState({
                editName: event.target.value
            })
        }
        
    }

    captureLocation = (event)=>{
        console.log(event.target.value)
        if(this.displayAddFriendForm){
            this.setState({
                location: event.target.value
            })
        }
        if(this.displayEditFriendForm){
            this.setState({
                editLocation: event.target.value
            })
        }
       
    }

    captureYears = (event)=>{
        console.log(event.target.value)
        if(this.state.displayAddForm){
            this.setState({
                years: event.target.value
            })
        }
        if(this.state.displayEditForm){
            this.setState({
                editYears: event.target.value
            }) 
        }
        
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
                        displayAddForm: false
                    })
                    this.getRemoteUsers()
                })
                .catch(error=>{
                    console.log(error)
                })

    }

    updateFriend=(event)=>{
        event.preventDefault()
        console.log("Update friend to rest api!!!! wid id: " + this.state.editId)
        var editfriend = {
            "name": this.state.editName,
            "location": this.state.editLocation,
            "years": this.state.editYears
        }
        axios.put("http://localhost:1234/allfriends"+ "/" + this.state.editId, editfriend)
            .then(response=>{
                console.log(response)
                this.getRemoteUsers()
                this.setState({
                    editId:0,
                    editName:'',
                    editLocation:'',
                    editYears:0,
                    displayEditForm:false
                })
            })
            .catch(error=>{
                console.log(error)
            })
    }

    displayAddFriendForm=()=>{
        if(this.state.displayAddForm){
            console.log("displayForm is: "  + this.state.displayAddForm)
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


    displayEditFriendForm=()=>{
        if(this.state.displayEditForm){
            console.log("displayForm is: "  + this.state.displayEditForm)
            return(
                <div>
                    <form>
                        Id: {this.state.editId}
                        <br></br>
                        Name: <input type="text"  value={this.state.editName} onChange={this.captureName}></input>
                        {this.state.editName}
                        <br></br>
                        Location: <input type="text" value={this.state.editLocation} onChange={this.captureLocation}></input>
                        {this.state.editLocation}
                        <br></br>
                        Years: <input type="number" value={this.state.editYears} onChange={this.captureYears}></input>
                        {this.state.editYears}
                        <br></br>
                        <button onClick={this.updateFriend}>Edit</button>
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
                {this.displayAddFriendForm()}
                <br></br>
                {this.displayEditFriendForm()}
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