import React, { Component } from "react";

import profilePic1 from "../../../../images/profilepic1.PNG";

import "./RightInfo.scss";

class RightInfo extends Component{
    render(){
        return(
            <div className = "RightInfo">
                {/*profile pic*/}
                <div className = "right_info_profile">
                    <img src = { profilePic1 } alt = "profile pic"/>
                </div>
                
                {/*profile info*/}
                <div className = "right_info_text">
                    <span>galbimandu</span>
                    <span>Michael Minchang Kim</span>    
                </div>
            </div>
        )
    }
}

export default RightInfo;