import React from 'react';
import Review from './review';

class ReviewList extends React.Component {
    
    render() { 
        return (  
            <div>
                review component will come here!
                <Review reviewContent = "Masterpiece from Sony!">Sony Xperia</Review>
                <Review reviewContent = "Best in Dual Screen">LG ThinQ</Review>
                <Review reviewContent = "Beast in hands!!!!">Note 20</Review>
                <Review reviewContent = "Universal!!!!">Nokia 8810</Review>
            </div>
        );
    }
}
 
export default ReviewList;