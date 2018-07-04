import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginUser } from "../actions/LoginUser";
import { createUser } from "../actions/CreateUser";
import { create, login } from "../services/AuthService";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: true,
      email: '',
      password: ''
    };

    this.changeState = this.changeState.bind(this);
    this.loginCss = this.loginCss.bind(this);
    this.singUpCss = this.singUpCss.bind(this);
    this.button = this.button.bind(this);
    this.clearState = this.clearState.bind(this);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.setCredentials = this.setCredentials.bind(this);
    this.signUpHeader = this.signUpHeader.bind(this);
    this.loginHeader = this.loginHeader.bind(this);
  };

  changeState() {
    const currentValue = this.state.login;
    this.setState({login: !currentValue});
  };

  loginCss() {
    const loginFlag = this.state.login;
    const classes = loginFlag? 'no-bg height-40' : 'purple-bg height-40';
    return classes;
  };

  singUpCss () {
    const loginFlag = this.state.login;
    const classes = loginFlag? 'purple-bg height-40' : 'no-bg height-40';
    return classes;
  };

  button() {
    const loginFlag = this.state.login;
    var valueToReturn = loginFlag? 
      (<a className="f6 link dim ph3 pv2 mb2 dib white bg-purple" href="#0" onClick={this.login}>
        Login
      </a>) : 
      (<a className="f6 link dim ph3 pv2 mb2 dib white bg-purple" href="#0" onClick={this.signUp}>
        Sign Up
      </a>);
    return (<div className="ph3 flex justify-center h-40">{valueToReturn}</div>);
  };

  login() {
    login(this.state.email, this.state.password, (user) => {
      const requestHeader = {
        email: user.email, 
        token: user.refreshToken
      };
      
      this.props.loginUser(requestHeader);
      this.clearState();
    });
  };

  clearState() {
    this.setState({
      email: '',
      password: '',
      login: true
    });
  };

  signUp() {
    create(this.state.email, this.state.password, user => {
      const body = {email: user.email};
      this.props.createUser(body);
      this.clearState();
    });
  };

  setCredentials = field => event => {
    this.setState({
      [field]: event.target.value
    });
  };

  signUpHeader() {
    return this.state.login ? "auth-card-header no-color" : "auth-card-header purple-color";
  };

  loginHeader() {
    return this.state.login ? "auth-card-header purple-color" : "auth-card-header no-color";
  };

  render() {
    const loginCss = this.loginCss();
    const singUpCss = this.singUpCss();
    const signUpHeader = this.signUpHeader();
    const loginHeader = this.loginHeader();
    
    return (  
      <div className="login-card">
        <article className="ba b--purple content-center h-100">
          <div className="flex justify-center h-20 no-bg">
            <div className="h-100 w-50 tc">
              <div className={loginCss}
                onClick={this.changeState}>
                <span className={loginHeader}>
                  Log In
                </span>
              </div>
            </div>
            <div className="h-100 w-50 tc">
              <div className={singUpCss}
                onClick={this.changeState}>
                <span className={signUpHeader}>Sign Up</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center h-40">
            <form className="flex flex-column pa4 black-80">
              <div className="measure br-50">
                <input id="username" className="input-reset ba b--black-20 mb2 db w-100 br-50" 
                  type="text" aria-describedby="name-desc" onChange={this.setCredentials('email')}/>
              </div>
              <div className="measure">
                <input id="name" className="input-reset ba b--black-20 mb2 db w-100 br-50" 
                  type="password" aria-describedby="name-desc" onChange={this.setCredentials('password')}/>
              </div>
            </form>
          </div>
          {this.button()}
        </article>
      </div>
    );
  };
};

export default connect(null, { loginUser, createUser })(Auth);