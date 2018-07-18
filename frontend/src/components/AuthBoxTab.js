import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

class AuthBoxTab extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {
    event.preventDefault();
    const { tabIndex, onTabSelected } = this.props;
    onTabSelected(tabIndex);
  };

  render() {
    const { message, isOnFocus, intl } = this.props;
    return (
      <div 
        className={`flex items-center justify-center w-100 b ${isOnFocus ? 'dark-blue' : 'bg-dark-blue white' }`}
        onClick={this.handleClick} >
        { intl.formatMessage({ id: message }) }
      </div>
    );
  };
};

AuthBoxTab.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  isOnFocus: PropTypes.bool.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  intl: intlShape
};

export default injectIntl(AuthBoxTab);