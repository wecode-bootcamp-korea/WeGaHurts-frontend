import React, { Component } from "react";



import RightInfo from "../RightInfo/RightInfo";
import RightStories from "../RightStories/RightStories";
import RightSuggestions from "../RightSuggestions/RightSuggestions";

import "./MainRight.scss";


class MainRight extends Component{
    render(){
        return(
            <div className = "MainRight">
                    
                <RightInfo />

                <RightStories />

                <RightSuggestions />
                
                    {/*About/Help/Press/API/etc*/}
                    <div className = "right_bottom_wrap">
                        <ul className = "right_bottom_list">
                            <li className = "right_bottom_items">
                                <span>About</span>
                            </li>
                            <span>·</span>
                            <li className = "right_bottom_items">
                                <span>Help</span>
                            </li>
                            <span>·</span>
                            <li className = "right_bottom_items">
                                <span>Press</span>
                            </li>
                            <span>·</span>
                            <li className = "right_bottom_items">
                                <span>API</span>
                            </li>
                            <span>·</span>
                            <li className = "right_bottom_items">
                                <span>Jobs</span>
                            </li>
                            <span>·</span>
                            <li className = "right_bottom_items">
                                <span>Privacy</span>
                            </li>
                            <span>·</span>
                            <li className = "right_bottom_items">
                                <span>Terms</span>
                            </li>
                            <span>·</span>
                            <li className = "right_bottom_items">
                                <span>Locations</span>
                            </li>
                            <span>·</span>
                            <li className = "right_bottom_items">
                                <span>Top Accounts</span>
                            </li>
                            <span>·</span>
                            <li className = "right_bottom_items">
                                <span>Hashtags</span>
                            </li>
                            <span>·</span>
                            <li className = "right_bottom_items">
                                <span>Language</span>
                            </li>
                        </ul>
                    </div>

                    {/*instagram/fb copyright*/}
                    <div className = "right_copyright">
                        <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
                    </div>
                </div>
        )
    }
}

export default MainRight;