import React, { Component } from "react";

import "./RightSuggestions.scss";
import Suggestion from "../Suggestion/Suggestion";

class RightSuggestions extends Component{
    render(){
        return(
            <div className = "RightSuggestions">

                {/*the top bar of the suggestion box*/}
                <div className = "right_suggestion_top">
                    <div className = "right_suggestion_top_txt">
                        <span>Suggestions For You</span> 
                    </div>
                    <div className = "right_suggestion_top_btn">
                        <button className = "see_all">
                            See All
                        </button>
                    </div>
                </div>

                {/*wraps the suggestions list*/}
                <div className = "right_suggestions">

                    {/*list of suggestions*/}
                    <ul className = "suggestion_list">
                        
                        <Suggestion />
                        <Suggestion />
                        <Suggestion />

                    </ul>
                </div>
            </div>
        )
    }
}

export default RightSuggestions;