import React, { Component } from "react";

import Story from "../Story/Story";

import "./RightStories.scss";

class RightStories extends Component{
    render(){
        return(
            <div className = "RightStories">          
                {/*The top bar of the stories wrap*/}
                <div className = "right_stories_top">
                    <div className = "right_stories_top_txt">
                        <span>Stories</span>
                    </div>
                    <div className  ="right_stories_top_btn">
                        <button className = "watch_all">
                            Watch All
                        </button>
                    </div>
                </div>

                {/*The list of stories wrap*/}
                <div className = "right_stories">
                    
                    {/*list of stories*/}
                    <ul className = "stories_list">
                        
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />

                    </ul>
                </div>
            </div>
        )
    }
}
export default RightStories;