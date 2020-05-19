import React, { Component } from "react";

import profilePic1 from "../../../../images/profilepic1.PNG";

import "./Suggestion.scss";

class Suggestion extends Component{
    render(){
        return(
            <li className = "Suggestion">
                <div className = "suggestion_1">
                    {/*profile picture*/}
                    <div className = "suggestion_profile">
                        <img src = { profilePic1 } alt = "profile pic"/>
                    </div>

                    {/*suggestion txt wrap*/}
                    <div className = "suggestion_text">
                    
                        {/*suggested account id*/}
                        <div className = "suggestion_text_id">
                            <span>galbimandu</span>
                        </div>

                        {/*just the text*/}
                        <div className = "suggested_for_you">
                            <span>Suggested for you</span>
                        </div>
                    </div>
                </div>
                
                <div className = "suggestion_follow">
                    <button>Follow</button>
                </div>
            </li>
        )
    }
}

export default Suggestion;