import React from 'react';
import Review from './review';

class ReviewList extends React.Component {
    
    render() { 
        return (  
            <div>
                <Review rating="8" reviewContent = "Masterpiece from Sony!" videoid="A3Mvy8WMk04">Sony Xperia</Review>
                <Review rating="10" reviewContent = "Best in Dual Screen" videoid="xtUaxscA6ZA">LG ThinQ</Review>
                <Review rating="11" reviewContent = "Beast in hands!!!!" videoid="taDCjl29pzw">Note 20</Review>
                <Review rating="7" reviewContent = "Universal!!!!" videoid="N25inoCea24">Nokia 8810</Review>
            </div>
        );
    }
}
 
export default ReviewList;