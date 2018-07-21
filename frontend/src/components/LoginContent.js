import React, { Component } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { connect } from "react-redux";
import { loginUser } from "../actions/LoginUser";
import { login } from "../services/AuthService";
import { history } from "./MainPage";

class LoginContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: true,
      email: '',
      password: ''
    };

    this.login = this.login.bind(this);
    this.setCredentials = this.setCredentials.bind(this);
    this.clearState.bind(this);
  };

  login() {
    login(this.state.email, this.state.password, (user) => {
      const requestHeader = {
        email: user.email, 
        token: user.refreshToken
      };
      
      this.props.loginUser(requestHeader);
      history.push({pathname: '/home'});
      this.clearState();
    });
  };

  setCredentials =  field => event => {
    this.setState({
      [field]: event.target.value
    });
  };

  clearState() {
    this.setState({
      email: '',
      password: '',
      login: true
    });
  };

  render() {
    const { intl } = this.props;
    return (
      <div className="h-100 w-100 flex flex-column items-center justify-center pt5">
        <div className="flex justify-center w-100 pv2">
          <input className="w-80 pa2 gray outline-0" type="text" placeholder={intl.formatMessage({ id: 'auth-box.username' })} onChange={this.setCredentials('email')} />
        </div>
        <div className="flex justify-center w-100 pv2">
          <input className="w-80 pa2 gray outline-0" type="password" placeholder={intl.formatMessage({ id: 'auth-box.password' })} onChange={this.setCredentials('password')} />
        </div>
        <div className="inline-flex pv2">
          <div className="ph4">
            <input type="radio" />
            <span className="f7 b ml1">
              <FormattedMessage id="auth-box.remember-me" />
            </span>
          </div>
          <div className="ph4">
            <span className="f7 b">
              <a className="black" href="#">
                <FormattedMessage id="auth-box.forget-password" />
              </a>
            </span>
          </div>
        </div>
        <div className="flex justify-center w-100 pv2">
          <button className="content-button w-30 bg-dark-blue white br1 bn b" onClick={this.login}>
            <FormattedMessage id="auth-box.login" />
          </button>
        </div>
      </div>
    );
  };
};

LoginContent.propTypes = {
  intl: intlShape
};

export default connect(null, { loginUser })(injectIntl(LoginContent));