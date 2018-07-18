import React, { Component } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

class LoginContent extends Component {
  render() {
    const { intl } = this.props;
    return (
      <div className="h-100 w-100 flex flex-column items-center justify-center pt5">
        <div className="flex justify-center w-100 pv2">
          <input className="w-80 pa2 gray outline-0" type="text" placeholder={intl.formatMessage({ id: 'auth-box.username' })} />
        </div>
        <div className="flex justify-center w-100 pv2">
          <input className="w-80 pa2 gray outline-0" type="password" placeholder={intl.formatMessage({ id: 'auth-box.password' })} />
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
          <button className="content-button w-30 bg-dark-blue white br1 bn b">
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

export default injectIntl(LoginContent);