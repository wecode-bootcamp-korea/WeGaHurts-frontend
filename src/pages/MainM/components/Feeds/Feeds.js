import React, { Component } from 'react';


import feedImage from "../../../../images/feedimage1.png";

import FeedNav from "../FeedNav/FeedNav";
import FeedBottom from "../FeedBottom/FeedBottom";

import "./Feeds.scss";

class Feeds extends Component{
    render(){
        return(
            <div className = "Feeds">
                <div className = "feed_wrap">        
                    
                    <FeedNav />

                    <div className = "feed_img_sec">
                        <img src = { feedImage } alt = "feed image"/>
                    </div>
                    
                    <FeedBottom />

                </div>
            </div>
        )
    }
}

export default Feeds;