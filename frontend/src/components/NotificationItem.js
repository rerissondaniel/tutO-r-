import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import checkIcon from '../images/check.svg';

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {
    event.preventDefault();
    const { index, onNotificationRead } = this.props;
    onNotificationRead(index);
  };

  render() {
    const { description } = this.props;

    return (
      <div className="notification__item">
        <div className="notification__item-card inline-flex ba br1 b--light-gray ma1 w-100 pa1">
          <div className="flex items-center w-90">
            { description }
          </div>
          <div className="flex items-center justify-center w-10">
            <img 
              className="small-icon bg--dark-blue" 
              src={checkIcon}
              onClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  };
};

NotificationItem.propTypes = {
  index: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  onNotificationRead: PropTypes.func.isRequired
};

export default NotificationItem;