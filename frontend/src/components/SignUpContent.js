import React, { Component } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { history } from "./MainPage";
import { connect } from "react-redux";
import { createUser } from "../actions/CreateUser";
import { create } from "../services/AuthService";

class SignUpContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      fullName: ''
    };

    this.signUp = this.signUp.bind(this);
    this.setCredentials = this.setCredentials.bind(this);
  };

  signUp() {
    create(this.state.email, this.state.password, user => {
      const body = {email: user.email, name: this.state.fullName};
      this.props.createUser(body);

      history.push({pathname: "/home"});
    });
  };

  setCredentials = field => event => {
    this.setState({
      [field]: event.target.value
    });
  };

  render() {
    const { intl } = this.props;
    return (
      <div className="h-100 w-100 flex flex-column items-center justify-center pt2">
        <div className="flex justify-center w-100 pv2">
          <input className="w-80 pa2 gray outline-0" type="text" placeholder={intl.formatMessage({ id: 'auth-box.full-name' })} onChange={this.setCredentials('fullName')}/>
        </div>
        <div className="flex justify-center w-100 pv2">
          <input className="w-80 pa2 gray outline-0" type="text" placeholder={intl.formatMessage({ id: 'auth-box.username' })}/>
        </div>
        <div className="flex justify-center w-100 pv2">
          <input className="w-80 pa2 gray outline-0" type="text" placeholder={intl.formatMessage({ id: 'auth-box.email' })} onChange={this.setCredentials('email')}/>
        </div>
        <div className="flex justify-center w-100 pv2">
          <input className="w-80 pa2 gray outline-0" type="password" placeholder={intl.formatMessage({ id: 'auth-box.password' })} onChange={this.setCredentials('password')}/>
        </div>
        <div className="flex justify-center w-100 pv2">
          <input className="w-80 pa2 gray outline-0" type="password" placeholder={intl.formatMessage({ id: 'auth-box.confirm-password' })} />
        </div>
        <div className="flex justify-center w-100 pv2">
          <button className="content-button w-30 bg-dark-blue white br1 bn b" onClick={this.signUp}>
            <FormattedMessage id="auth-box.signup" />
          </button>
        </div>
      </div>
    );
  };
};

SignUpContent.propTypes = {
  intl: intlShape
};

export default connect(null, { createUser })(injectIntl(SignUpContent));