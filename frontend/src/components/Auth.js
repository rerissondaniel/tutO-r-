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
    this.logInBackGround = this.logInBackGround.bind(this);
    this.signUpBackGround = this.signUpBackGround.bind(this);
    this.button = this.button.bind(this);
    this.clearState = this.clearState.bind(this);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.setCredentials = this.setCredentials.bind(this);
  };

  changeState() {
    const currentValue = this.state.login;
    this.setState({login: !currentValue});
  };

  logInBackGround() {
    const loginFlag = this.state.login;
    const background = loginFlag? '#FFFFFF' : '#A463F2';
    return background;
  };

  signUpBackGround () {
    const loginFlag = this.state.login;
    const background = loginFlag? '#A463F2' : '#FFFFFF';
    return background;
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

  render() {
    const loginFlag = this.state.login;
    const loginBg = this.logInBackGround();
    const singUpBg = this.signUpBackGround();
    
    return (
      <div style={{'height': '200px', 'width': '300px'}}>
        <article className="ba b--purple content-center h-100">
          <div className="flex justify-center h-20" style={{'backgroundColor': "#FFFFFF"}}>
            <div className="h-100 w-50 tc">
              <div style={{'height': '40px', 'backgroundColor': loginBg}}
                onClick={this.changeState}>
                <span style={{'fontSize': '25px', 'color': loginFlag? '#A463F2' : '#FFFFFF'}}>
                  Log In
                </span>
              </div>
            </div>
            <div className="h-100 w-50 tc">
              <div style={{'height': '40px', 'backgroundColor': singUpBg}}
                onClick={this.changeState}>
                <span style={{'fontSize': '25px', 'color': loginFlag? '#FFFFFF' : '#A463F2'}}>Sign Up</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center h-40">
            <form className="flex flex-column pa4 black-80">
              <div className="measure" style={{'borderRadius': '50px'}}>
                <input id="username" className="input-reset ba b--black-20 mb2 db w-100" 
                  type="text" aria-describedby="name-desc" style={{'borderRadius': '50px'}} onChange={this.setCredentials('email')}/>
              </div>
              <div className="measure">
                <input id="name" className="input-reset ba b--black-20 mb2 db w-100" 
                  type="password" aria-describedby="name-desc" style={{'borderRadius': '50px'}} onChange={this.setCredentials('password')}/>
              </div>
            </form>
          </div>
          {this.button()}
        </article>
      </div>
    );
  }
}

export default connect(null, { loginUser, createUser })(Auth);