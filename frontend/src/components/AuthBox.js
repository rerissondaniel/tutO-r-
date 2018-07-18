import React, { Component } from 'react';

import AuthBoxTab from './AuthBoxTab';
import LoginContent from './LoginContent';
import SignUpContent from './SignUpContent';

const DEFAULT_TAB = 0;

const TABS = [
  {
    message: 'auth-box.login',
    content: <LoginContent />
  },
  {
    message: 'auth-box.signup',
    content: <SignUpContent />
  }
];

class AuthBox extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      onFocusTabIndex: DEFAULT_TAB
    };

    this.handleTabSelected = this.handleTabSelected.bind(this);
  };

  handleTabSelected(onFocusTabIndex) {
    this.setState({
      onFocusTabIndex
    });
  };

  render() {
    const { onFocusTabIndex } = this.state;

    return (
      <div className="auth-box ba br1 b--dark-blue">
        <div className="tabs-container inline-flex w-100">
          {
            TABS.map((tabs, index) => {
              const { message } = tabs;
              return (
                <AuthBoxTab
                  key={message}
                  tabIndex={index}
                  message={message} 
                  isOnFocus={onFocusTabIndex === index}
                  onTabSelected={this.handleTabSelected} />
              );
            })
          }
        </div>
        <div className="flex items-center justify-center">
          { TABS[onFocusTabIndex].content }
        </div>
      </div>
    );
  };
};

export default AuthBox;