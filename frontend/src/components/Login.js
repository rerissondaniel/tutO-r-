import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: true
    };

    this.changeState = this.changeState.bind(this);
  };

  changeState() {
    this.setState({login: !this.state.login});
  };

  logInBackGround() {
    const background = this.state.login? 'FFFFFF' : '#A463F2';
    return background;
  };

  signUpBackGround () {
    const background = this.state.login? '#A463F2' : 'FFFFFF';
    return background;
  };

  render() {
    return (
      <div style={{'height': '200px', 'width': '300px'}}>
        <article className="ba b--purple content-center h-100">
          <div className="flex justify-center ba b--black h-20">
            <div className="h-100 w-50 tc">
              <div style={{'height': '40px', 'backgroundColor': this.logInBackGround()}}
                onClick={this.changeState}>
                <span style={{'fontSize': '25px', 'color': this.state.login? '#A463F2' : 'FFFFFF'}}>
                Log In
              </span>
              </div>
            </div>
            <div className="h-100 w-50 tc">
              <div style={{'height': '40px', 'backgroundColor': this.signUpBackGround()}}
                onClick={this.changeState}>
                <span style={{'fontSize': '25px', 'color': this.state.login?  'FFFFFF': '#A463F2'}}>Sign Up</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}