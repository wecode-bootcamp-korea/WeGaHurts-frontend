import React, { Component } from 'react';

import heart from "../../../../images/heart.png";
import feedComment from "../../../../images/feedcomment.png";
import feedDm from "../../../../images/dm.PNG";
import feedBookmark from "../../../../images/feedbookmark.png";
import Comment from "../Comment/Comment";

import "./FeedBottom.scss";


class FeedBottom extends Component{

    constructor(){
        super();
        this.state = {
            commentList: [],
            commentText : "",
            button : "btn1"
        }
    }

    addComment = (e) => {
        e.preventDefault();
        
        if(this.state.commentText.length>0){
            let token = localStorage.getItem('token');
            fetch('http://localhost:8000/comment', {
                method: 'POST',
                headers: {
                    'Authorization': token
                },
                body: JSON.stringify({
                    'content':this.state.commentText
                })
            })
            .then(response => response.json())
            .then(response => {
                this.setState({commentList: response.data})
            })
            this.setState({commentText: ""}, () => this.setBtnColor());
        }

    }

    updateText = (e) => {
        
        this.setState({commentText: e.target.value},()=>this.setBtnColor());

    }

    setBtnColor = () => {

        if(this.state.commentText.length>0){
            this.setState({button: "btn2"})
        }else{
            this.setState({button: "btn1"})
        }
    }

    // enterCheck = (e) => {
    //     if( e.keyCode = == 13){
    //         this.addComment();
    //     }
    // }
   
    // componentDidMount(){
    //     let token = localStorage.getItem('token');
    //     fetch('http://localhost:8000/login/', {
    //         headers: {
    //             'Authorization': token
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(response => {
    //         this.setState({commentList: response})
    //     })
    // }

    render(){
        
        const comment = this.state.commentList.map((comment,i) => {return<Comment key={i} id={comment.id} text={comment.text}/>});
        return(
            <div className = "FeedBottom">
                <div className = "feed_icon_sec">        
                    <div className = "feed_like_button">
                        <button className = "feed_like_btn">
                            <img className = "feed_like_img" src = { heart }/>
                        </button>
                    </div>
                    <div className = "feed_comment_button">
                        <button className = "feed_comment_btn">
                            <img src = { feedComment }/>
                        </button>
                    </div>
                    <div className = "feed_dm_button">
                        <button className = "feed_dm_btn">
                            <img src = { feedDm }/>
                        </button>
                    </div>
                    <div className = "feed_save_button">
                        <button className = "feed_save_btn">
                            <img className = "feed_save_img" src = { feedBookmark }/>
                        </button>
                    </div>
                </div>
                <div className = "feed_likes_sec">
                    25 likes
                </div>
                <div className = "feed_hashtag_sec">        
                    <div className = "feed_hashtag_sec_id">
                        galbimandu
                    </div>    
                    <div className = "feed_hashtag_sec_hashtags">
                        #Wecode #JS #HTML #CSS #WEGOTDAGUAP
                    </div>
                </div>            
                <div className = "feed_comment_sec">        
                
                    <Comment text = "" />   
                    {comment}
            

                </div>    
                <div className = "feed_time_sec">
                    17 HOURS AGO
                </div>            
                <form>
                <div className = "feed_addcomment_sec">                        
                    <input  onChange = {this.updateText} value={this.state.commentText} className = "comment_input" type = "text" placeholder = "Add a comment..."/>
                    <button onClick = {this.addComment} className = {this.state.button}>
                        Post
                    </button>
                </div>
                </form>
            </div>
        )
    }
}

export default FeedBottom;

