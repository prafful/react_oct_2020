import React from 'react';
import ReviewList from './review/reviewlist';


class ReviewContent extends React.Component {
   
    render() { 
        return (  
            <span>
                <p>Check: I am content component!!!</p>
                <p>I will contain - reviewlist component!</p>
                <ReviewList></ReviewList>
            </span>
        );
    }
}
 
export default ReviewContent;