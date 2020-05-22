import React, { Component } from 'react';
import "./MainBody.scss";
import Feeds from "../Feeds/Feeds";
import MainRight from "../MainRight/MainRight";

class MainBody extends Component{

    render(){
        return(
            <div className = 'MainBody'>
               <div className = 'main_rewrap'>
                    <Feeds />
                    <MainRight />
               </div>
            </div>
        )
    }
}

export default MainBody;