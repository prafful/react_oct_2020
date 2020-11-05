import React from 'react';

class Review extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            likes : parseInt(this.props.rating),
            name:"prafful daga"
        }

    }
    
    likesCount = 10

    addLike =()=>{
       
        //not the correct way!
        //this.state.likes =  this.state.likes + 1
        this.setState({likes: this.state.likes + 1})
        console.log(this.state.likes);
    }

    removeLike =()=>{
        //not the correct way!
        //this.state.likes =  this.state.likes + 1
        this.setState({likes: this.state.likes - 1})
        console.log(this.state.likes);
    }



    render() { 
        return (  
            <div>
                <h3>{this.props.children}</h3>
            {
                /*
                <iframe width="240" 
                        height="160" 
                        src={"https://www.youtube.com/embed/"+this.props.videoid} 
                        allowFullScreen>
                </iframe>
                */
            }  
                
                <p> { this.props.reviewContent}</p>
                <span>
                    <button onClick={this.addLike}>Like</button>
                    &nbsp; 
                    {this.state.likes}
                    &nbsp;
                    <button onClick={this.removeLike}>Dislike</button>
                </span>
                <hr></hr>
            </div>
        );
    }
}
 
export default Review;