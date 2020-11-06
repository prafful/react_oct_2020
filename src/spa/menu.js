import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    
    render() { 
        return (  
            <div>
               <Link to='/'>Home</Link>
               &nbsp;
               <Link to='/examples'>Examples</Link>
               &nbsp;
               <Link to='/services'>Services</Link>
               &nbsp;
               <Link to='/team'>Team</Link>
            </div>
        );
    }
}
 
export default Menu;