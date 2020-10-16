import React from 'react';
import ReviewList from './review/reviewlist';


class Content extends React.Component {
   
    render() { 
        return (  
            <span>
                <p>I am content component!!!</p>
                <p>I will contain - reviewlist component!</p>
                <ReviewList></ReviewList>
            </span>
        );
    }
}
 
export default Content;