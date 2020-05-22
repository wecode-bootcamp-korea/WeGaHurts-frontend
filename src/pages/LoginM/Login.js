import React, { Component } from "react";

import instaLogo from "../../images/logoinsta.png";
import appStore from "../../images/appstore.png";
import googlePlay from "../../images/googleplay.png";

import "./Login.scss";

class Login extends Component{

    constructor(){
        super();
        this.state = {
            idInput: '',
            pwInput: '',
            btnColor: 'button1'
        }
    }

    
    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value},()=>this.setButtonColor())
    }

    handleToMain(event){
        event.preventDefault();
        console.log('id', this.state.idInput);
        console.log('pw', this.state.pwInput);
        if(this.state.idInput.length>4 && this.state.pwInput.length>4){
            
            fetch('http://10.58.5.83:8000/account/sign-in', {
                method: 'POST',
                body: JSON.stringify({
                    'name': this.state.idInput,
                    'password': this.state.pwInput
                })
            })
            .then(response => response.json())
            .then(response => {
                if (response.Authorization) {
                    this.props.history.push('/Main');
                    localStorage.setItem('token', response.Authorization);
                }else{
                    alert('This ID/Pw pair is invalid');
                }
            })
             
        }else{
            alert("PassWord and ID should be more than 4 letters");
        }
    }

    handleToSignUp = () => {
        this.props.history.push('/SignUp');
    }

    setButtonColor = () => {
        if(this.state.idInput.length>4 && this.state.pwInput.length>4){
            this.setState({btnColor:'button2'});
        }else{
            this.setState({btnColor:'button1'});
        }
    }

    render(){
        return(
            <main id = "login_section">
                <div className = "login">
                    <div id = "logo_wrap">
                        <img src = { instaLogo } alt = "instagram logo"/>
                    </div>
                    <form>
                    <div className = "test">
                        <div className = "input_wrap">
                            <input  name = "idInput" onChange = {this.handleChange} id = "id" type = "text" placeholder = "Phone number, username, or email"/>
                        </div>
                        <div className = "input_wrap" >
                            <input  name = "pwInput" onChange = {this.handleChange} id = "pw" type = "password" placeholder = "Password"/>
                        </div>
                    </div>
                    <div onClick={this.handleToMain.bind(this)} id = "login_button_wrap">
                        <button  className = {this.state.btnColor} >Log in</button>
                    </div>
                    </form>                    
                    <div id = "or_container">
                        <div id = "or">
                            <div className = "line"></div>
                            <div className = "text">OR</div>
                            <div className = "line"></div>                    
                        </div>

                    </div>
                    <div id = "fb_login">
                        <a >
                            <i className = "fab fa-facebook-square"></i>
                            Log in with Facebook
                        </a>                    
                    </div>
                    <div id = "forgot_pw">
                        <a >
                            Forgot password?
                        </a>
                    </div>
                </div>
                <div className = "sign_up">
                    <div id = "text">
                        Don't have an account?
                    </div>
                    <button onClick = {this.handleToSignUp} id = "button">
                        Sign up
                    </button>
                </div>
                <div className = "app">
                    <p>Get the app.</p>
                </div>           
                <div className = "app_button">
                    <a className = "app_img">
                        <img src = { appStore } alt = "appstore"/>
                    </a>
                    <a className = "app_img">
                        <img src = { googlePlay } alt = "googleplay"/>
                    </a>
                </div>
            </main>
        )
    }
}

export default Login;