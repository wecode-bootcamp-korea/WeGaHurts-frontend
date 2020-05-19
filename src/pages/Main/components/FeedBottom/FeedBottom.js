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
            button : "btn1",
            users:[]
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => this.setState({users:response}))
    }

    addComment = (e) => {
        e.preventDefault();

        if(this.state.commentText.length>0){
            let tmp = [...this.state.commentList]; // spread operator
            tmp.push(this.state.commentText);
            this.setState({commentList: tmp, commentText: ""}, () => this.setBtnColor());
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

    render(){
        console.log("State => ",this.state)
        const comment = this.state.commentList.map((comment,i) => {return<Comment key={i} text={comment}/>});
        const test = this.state.users.map((user,i) => {return <div>{user.name}</div>});
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

