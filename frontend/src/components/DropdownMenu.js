import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import defaultProfileIcon from '../images/default-profile-icon.svg';

import { logoutUser } from '../actions/LogoutUser';
import { connect } from "react-redux";
import {Link} from "react-router-dom";

class DropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  };

  logout() {
    this.props.logoutUser();
  };

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
            <Link to='/home/profile' className="no-underline black" href="#">
              <FormattedMessage id="dropdown-menu.profile" />  
            </Link> 
            <hr className="w-100" />
            <a className="no-underline black" href="#">
              <FormattedMessage id="dropdown-menu.settings" />  
            </a>
            <hr className="w-100" />
            <a className="no-underline black" href="#">
              <FormattedMessage id="dropdown-menu.help" />  
            </a>
            <hr className="w-100" />
            <Link to="/" className="no-underline red" href="#" onClick={this.logout}>
              <FormattedMessage id="dropdown-menu.exit" />  
            </Link>
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

export default connect(null, { logoutUser })(DropdownMenu);