import React, { Component } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

class SignUpContent extends Component {
  render() {
    const { intl } = this.props;
    return (
      <div className="h-100 w-100 flex flex-column items-center justify-center pt2">
        <div className="flex justify-center w-100 pv2">
          <input className="w-80 pa2 gray outline-0" type="text" placeholder={intl.formatMessage({ id: 'auth-box.full-name' })} />
        </div>
        <div className="flex justify-center w-100 pv2">
          <input className="w-80 pa2 gray outline-0" type="text" placeholder={intl.formatMessage({ id: 'auth-box.username' })} />
        </div>
        <div className="flex justify-center w-100 pv2">
          <input className="w-80 pa2 gray outline-0" type="text" placeholder={intl.formatMessage({ id: 'auth-box.email' })} />
        </div>
        <div className="flex justify-center w-100 pv2">
          <input className="w-80 pa2 gray outline-0" type="password" placeholder={intl.formatMessage({ id: 'auth-box.password' })} />
        </div>
        <div className="flex justify-center w-100 pv2">
          <input className="w-80 pa2 gray outline-0" type="password" placeholder={intl.formatMessage({ id: 'auth-box.confirm-password' })} />
        </div>
        <div className="flex justify-center w-100 pv2">
          <button className="content-button w-30 bg-dark-blue white br1 bn b">
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

export default injectIntl(SignUpContent);