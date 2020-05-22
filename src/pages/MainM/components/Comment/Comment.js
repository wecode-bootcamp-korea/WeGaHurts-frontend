import React, { Component } from "react";
import heart from "../../../../images/heart.png";

import "./Comment.scss";


class Comment extends Component{
    deleteComment = () => {
        if(this.state.commentText.length>0){
            let token = localStorage.getItem('token');
            fetch('http://10.58.5.83:8000/comment', {
                method: 'POST',
                headers: {
                    'Authorization': token
                },
                body: JSON.stringify({
                    'content':this.props.text
                })
            })
        }
    }
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
                    <span>{(this.props.time).slice(8,10)}</span>
                    <button onClick = {this.deleteComment}>
                        <img src = { heart }/>
                    </button>
                </div>
            </div>    
        )
    }
}

export default Comment;