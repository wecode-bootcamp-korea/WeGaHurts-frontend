import React, { Component } from 'react';
import logoinsta from "../../images/logoinsta.png";
import searchIcon from "../../images/search icon.png";
import cancel from "../../images/cancel.png";
import home from "../../images/home.PNG";
import dm from "../../images/dm.PNG";
import explore from "../../images/explore.png";
import heart from "../../images/heart.png";
import profilePic from "../../images/profilepic.PNG";
import "./Nav.scss"

class Nav extends Component{
    render() {
        return (
            <div className="Nav">
                <div className="nav_wrap">
                    <div className="logo">
                        <img className="logo1" src = { logoinsta } alt="instagram logo"/>
                    </div>
                    <div className="search_bar">
                        <div className="search_box1">
                            <input type="text" placeholder="Search"/>
                            <img src= { searchIcon } alt="search icon"/>
                        </div>
                    </div>
                    <div className="goto">
                        <div className="goto_btn">
                            <div id="goto_home">
                                <a>
                                    <img src= { home } alt = "home"/>
                                </a>
                            </div>
                            <div id="goto_dm">
                                <a>
                                    <img src= { dm } alt = "dm"/>
                                </a>
                            </div>
                            <div id="goto_navigation">
                                <a>
                                    <img src= { explore } alt = "explore"/>
                                </a>
                            </div>
                            <div id="goto_likes">
                                <a>
                                    <img src= { heart } alt = "heart"/>
                                </a>
                            </div>
                            <div id="goto_profile">
                                <a>
                                    <img src= { profilePic } alt = "profile pic"/>
                                </a>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Nav;