import React, { Component } from "react";
import heart from "../../../../images/heart.png";

import "./Comment.scss";

class Comment extends Component{
    render(){
        return(
            <div className = "Comment">
                <div className = "front">
                    <div className = "id">
                        <span>{this.props.id}</span>
                    </div>
                    <div className = "text">
                        <span>{this.props.text}</span>
                    </div>        
                </div>        
                <div className = "like">
                    <button>
                        <img src = { heart }/>
                    </button>
                </div>
            </div>    
        )
    }
}

export default Comment;