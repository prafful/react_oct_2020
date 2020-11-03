import React from 'react';


class User extends React.Component {
    
    render() { 
        return ( 
            <div>
                Each user....
                <br></br>
                Name: {this.props.name}
                <br></br>
                Email: {this.props.email}
                <br></br>
                Latitude: {this.props.latitude}
                <br></br>
                Longitude: {this.props.longitude}
                <br></br>
                <hr></hr>
            </div>
         );
    }
}
 
export default User;