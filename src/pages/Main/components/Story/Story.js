import React, { Component } from "react";

import profilePic1 from "../../../../images/profilepic1.PNG";

import "./Story.scss";

class Story extends Component{
    render(){
        return(
            <li className = "Story">
                {/*profile pic*/}
                <div className = "story_profile">
                    <img src = { profilePic1 }/>
                </div>

                {/*story profile name and upload time*/}
                <div className = "story_txt">

                    {/*id of the story posted*/}
                    <div className = "story_id">
                        <span>galbimandu</span>
                    </div>

                    {/*upload time*/}
                    <div className = "story_time">
                        <span>2 HOURS AGO </span>
                    </div>
                </div>
            </li>
        )
    }
}


export default Story;