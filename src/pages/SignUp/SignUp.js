import React, { Component } from "react";

import instaLogo from "../../images/logoinsta.png";
import appStore from "../../images/appstore.png";
import googlePlay from "../../images/googleplay.png";

import "./SignUp.scss";

class SignUp extends Component{

    constructor(){
        super();
        this.state = {
            idInput: '',
            pwInput: '',
            emailInput: '',
            btnColor: 'button1'
        }
    }

    
    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value},()=>this.setButtonColor())
    }

    handleToLogin(event){
        
        console.log('id => ', this.state.idInput);
        console.log('pw => ', this.state.pwInput);
        console.log('email => ', this.state.emailInput);
        if(this.state.emailInput.includes('@') && this.state.pwInput.length>4 && this.state.idInput.length>4){
            fetch('http://localhost:8000/account/sign-up', {
                method: 'POST',
                body: JSON.stringify({
                    'name': this.state.idInput,
                    'password': this.state.pwInput,
                    'email': this.state.emailInput
                })
            })
            .then(response => {
                if (response.status==200) {
                    this.props.history.push('/');
                }else{
                    alert('This Email is already Registered');
                }
            })
        }else{
            alert("PassWord and ID should be more than 4 letters \nEmail should include @");
        }
    }
    setButtonColor = () => {
        if(this.state.emailInput.includes('@') && this.state.pwInput.length>4 && this.state.idInput.length>4){
            this.setState({btnColor:'button2'});
        }else{
            this.setState({btnColor:'button1'});
        }
    }

    render(){
        return(
            <main id = "SignUp_section">
                <div className = "SignUp">
                    <div id = "logo_wrap">
                        <img src = { instaLogo } alt = "instagram logo"/>
                    </div>
                    <form>
                    <div className = "test">
                        <div className = "input_wrap">
                            <input  name = "idInput" onChange = {this.handleChange} id = "id" type = "text" placeholder = "Username"/>
                        </div>
                        <div className = "input_wrap" >
                            <input  name = "pwInput" onChange = {this.handleChange} id = "pw" type = "password" placeholder = "Password"/>
                        </div>
                        <div className = "input_wrap" >
                            <input  name = "emailInput" onChange = {this.handleChange} id = "email" type = "text" placeholder = "email"/>
                        </div>
                    </div>
                    <div onClick={this.handleToLogin.bind(this)} id = "login_button_wrap">
                        <button  className = {this.state.btnColor} >Sign Up</button>
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
                </div>
                <div className = "sign_up">
                    <div id = "text">
                        Don't have an account?
                    </div>
                    <a id = "button">
                        Sign up
                    </a>
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

export default SignUp;