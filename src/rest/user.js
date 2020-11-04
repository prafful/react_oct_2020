import React from 'react';


class User extends React.Component {
    
    render() { 
        return ( 
            <div>
                Each user....
                <br></br>
                Name: {this.props.name}
                <br></br>
                Location: {this.props.loc}
                <br></br>
                Years: {this.props.year}
                <br></br>
                <button>Edit</button> 
                &nbsp; 
                <button>Delete</button>

                <hr></hr>
            </div>
         );
    }
}
 
export default User;