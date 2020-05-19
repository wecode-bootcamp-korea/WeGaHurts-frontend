import React,{ Component } from 'react';

import profilepic1 from "../../../../images/profilepic1.PNG";
import more from "../../../../images/feedmore.png";

import "./FeedNav.scss";

class FeedNav extends Component{
    render(){
        return(
            <div className = "FeedNav">        
                <div className = "profile_pic">
                    <img src = { profilepic1 }/>
                </div>    
                <div className = "try">
                    <div className = "account_name">
                        <a className = "account_name_link">
                            galbimandu
                        </a>
                    </div>   
                    <div className = "more">
                            <button>
                            <img src= { more } alt = "more"/>
                        </button>
                    </div>
                </div>    
            </div>
        ) 
    }
}

export default FeedNav;