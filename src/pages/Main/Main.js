import React, { Component } from 'react';

import Nav from "../../components/Nav/Nav";
import MainBody from './components/MainBody/MainBody';

class Main extends Component{
  render(){
    return (
      <div>
      
        <Nav />
        <MainBody />

      </div> 
    )
  }

}

export default Main;