import React from 'react';

class Review extends React.Component {
    likesCount = 0


    render() { 
        return (  
            <div>
                <h3>{this.props.children}</h3>
                <iframe width="240" 
                        height="160" 
                        src="https://www.youtube.com/embed/qIWO-DbcvQs" 
                        allowFullScreen></iframe>
                <p> { this.props.reviewContent}</p>
                <span>
                    <button>Like</button>
                    &nbsp; 
                    {this.likesCount}
                    &nbsp;
                    <button>Dislike</button>
                </span>
                <hr></hr>
            </div>
        );
    }
}
 
export default Review;