import React from 'react';


class User extends React.Component {

    getIdForDelete=()=>{
        console.log("Delete friend with id: " + this.props.id) 
        this.props.getIdFromUserComponent(this.props.id)
    }
    
    render() { 
        return ( 
            <tr>
                <td>{this.props.id}</td>
               
                <td> {this.props.name}</td>
              
              <td> {this.props.loc}</td>
             
               <td>{this.props.year}</td>
                <td >
                <button>Edit</button> 
                 </td>
                 <td>
                <button onClick={this.getIdForDelete}>Delete</button>
                </td>

                <hr></hr>
            </tr>
         );
    }
}
 
export default User;