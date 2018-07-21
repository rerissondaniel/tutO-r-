import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import { Link } from "react-router-dom";

class ThemesItem extends Component {
  getBackground(status) {
    if (status === 'Explorar') return 'bg-light-blue b--dark-blue';
    if (status === 'Explorado') return 'bg-green b--dark-green';
    if (status === 'Explorando') return 'bg-yellow b--gold';
  }

  render() {
    const { name, prerequisites, status, intl } = this.props;

    return (
      <div className="flex flex-row ba br3 mv2 mr5 shadow-2 b--dark-blue pa3">
        <div className="flex flex-column w-90">
          <h1 className="">
            <a className="green no-underline" href="#">{name}</a>
          </h1>
          <div className="flex flex-row">
            <span className="mr1 b">
              <FormattedMessage id="themes.prerequisites" />:
            </span>
            {
              prerequisites.length ? prerequisites.map((prerequisite, index) => (
                <div className="" key={prerequisite}>
                  <span className="">
                    {index ? ', ' : ''}{prerequisite}
                  </span>
                </div>
              )) : intl.formatMessage({ id: 'themes.none' })
            }
          </div>
        </div>
        <div className={`flex items-center justify-center w-10 ba ${this.getBackground(status)} br3`}>
          <Link className="white b f4" to='/home/tutorial'>
            {status}
          </Link>
        </div>
      </div>
    );
  };
};

ThemesItem.propTypes = {
  intl: intlShape,
  name: PropTypes.string.isRequired,
  prerequisites: PropTypes.arrayOf(
    PropTypes.string  
  ).isRequired,
  status: PropTypes.string.isRequired
};

export default injectIntl(ThemesItem);