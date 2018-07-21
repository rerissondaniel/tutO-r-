import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import logoWhite from '../images/logo-white.png';

class SideMenu extends Component {
  render() {
    return (
      <div className="bg-dark-blue fixed w-20 h-100 br b--white">
        <div className="flex flex-column items-center justify-content ph3">
          <div className="flex items-center justify-center pv4">
            <img className="w-60" src={logoWhite} alt="Logo" />
          </div>
          <div className="b pv3">
            <Link className="no-underline white" to='/home/tournament'>
              <FormattedMessage id="side-menu.training" />
            </Link>
          </div>
          <hr className="w-100"/>
          <div className="b pv3">
            <Link className="no-underline white" to='/home/statistics'>
              <FormattedMessage id="side-menu.statistics" />
            </Link>
          </div>
          <hr className="w-100"/>
          <div className="b pv3">
            <a className="no-underline white" href="#">
              <FormattedMessage id="side-menu.calendar" />
            </a>
          </div>
          <hr className="w-100"/>
          <div className="b pv3">
            <a className="no-underline white" href="#">
              <FormattedMessage id="side-menu.repository" />
            </a>
          </div>
        </div>
      </div>
    );
  };
};

export default SideMenu;