import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import defaultProfileIcon from '../images/default-profile-icon.svg';

class DropdownMenu extends Component {  
  render() {
    const { completeName, profileIcon } = this.props;
    const profIcon = profileIcon ? profileIcon : defaultProfileIcon;

    return (
      <div className="dropdown-menu dropdown relative dib pv2">
        <div className="inline-flex items-center">
          <div className="pa1">
            <img className="profile-icon" src={profIcon}/>
          </div>
          <div className="ml2 b white">
            { completeName } &#9660;
          </div>
        </div>
        <div className="dropdown-content dn absolute z-max ba br1 b--dark-blue pv3 ph3 right-0">
          <div className="flex flex-column items-center b">
            <a className="no-underline black" href="#">
              <FormattedMessage id="dropdown-menu.profile" />  
            </a> 
            <hr className="w-100" />
            <a className="no-underline black" href="#">
              <FormattedMessage id="dropdown-menu.settings" />  
            </a>
            <hr className="w-100" />
            <a className="no-underline black" href="#">
              <FormattedMessage id="dropdown-menu.help" />  
            </a>
            <hr className="w-100" />
            <a className="no-underline red" href="#">
              <FormattedMessage id="dropdown-menu.exit" />  
            </a>
          </div>
        </div>
      </div>
    );
  };
};

DropdownMenu.propTypes = {
  completeName: PropTypes.string.isRequired,
  profileImg: PropTypes.any
};

export default DropdownMenu;