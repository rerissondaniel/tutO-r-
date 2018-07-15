import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import NotificationItem from './NotificationItem';
import notificationsIcon from '../images/notifications.svg';

class Notifications extends Component {
  constructor(props) {
    super(props);

    const { notifications } = this.props;
    this.state = {
      notifications
    };

    this.handleNotificationRead = this.handleNotificationRead.bind(this);
  };

  handleNotificationRead(notificationIndex) {
    let { notifications } = this.state;
    notifications.splice(notificationIndex, 1);
    this.setState({
      notifications
    });
  };

  renderNotifications(notifications) {
    if (notifications.length) {
      return (notifications.map((notification, index) => (
        <div key={index}>
          <NotificationItem 
            index={index}
            description={notification.description}
            onNotificationRead={this.handleNotificationRead}
          />
        </div>
      )));
    } else {
      return (  
        <div className="flex justify-center">
          <FormattedMessage id="notifications.no-notifications" />
        </div>
      );
    };
  };

  render() {
    const { notifications } = this.state;

    return (
      <div className="notifications h-100">
        <div className="dropdown relative dib h-100">
          <div className="inline-flex items-center h-100">
            <img className="icon br-100 h-100" src={notificationsIcon} />
          </div>
          <div className="notifications-dropdown-content dropdown-content z-max dn absolute ba br1 b--dark-blue pv3 ph3">
            <div className="flex flex-column b">
              { this.renderNotifications(notifications) }
            </div>
          </div>
        </div>
      </div>
    );
  };
};

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default Notifications;