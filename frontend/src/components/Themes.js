import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import ThemesItem from './ThemesItem';

class Themes extends Component {
  render() {
    const { themes } = this.props;

    return (
      <div className="flex flex-column w-100 ma3">
        <h1 className="dark-blue">
          <FormattedMessage id="themes.themes" />
        </h1>
        {
          themes.map(theme => (
            <ThemesItem 
              key={theme.name} 
              {...theme}
            />
          ))
        }
      </div>
    );
  }
};

Themes.propTypes = {
  themes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      prerequisites: PropTypes.arrayOf(
        PropTypes.string  
      ).isRequired,
      status: PropTypes.string.isRequired
    })
  ).isRequired
};

Themes.defaultProps = {
  themes: [
    {
      name: "Dynamic Programming",
      prerequisites: [
        "Bitmasks",
        "Backtracking"
      ],
      status: "Explorar"
    },
    {
      name: "Bitmasks",
      prerequisites: [
        "Number Representation",
        "Numeric Bases"
      ],
      status: "Explorado"
    },
    {
      name: "Greedy",
      prerequisites: [],
      status: "Explorando"
    }
  ]
};

export default Themes;