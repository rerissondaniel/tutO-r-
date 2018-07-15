import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class SideMenu extends Component {
  render() {
    return (
      <div className="bg-dark-blue fixed w-20 h-100 br b--white">
        <div className="flex flex-column items-center justify-content ph3">
          <div className="pv4 white">
            {/* TODO: put the logo image here */}
            <h1>
              LOGO
            </h1>
          </div>
          <div className="b pv3">
            <a className="no-underline white" href="#">
              <FormattedMessage id="side-menu.training" />
            </a>
          </div>
          <hr className="w-100"/>
          <div className="b pv3">
            <a className="no-underline white" href="#">
              <FormattedMessage id="side-menu.statistics" />
            </a>
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