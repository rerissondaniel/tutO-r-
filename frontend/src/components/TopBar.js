import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import Notifications from './Notifications';
import DropdownMenu from './DropdownMenu';
import LanguageSelector from './LanguageSelector';

const notifications = [
  {
    description: "You have solved all the problems about Dynamic Programming",
    readed: false
  },
  {
    description: "Your rating increase in +124",
    readed: false
  },
  {
    description: "You are now International Master on Codeforces",
    readed: true
  },
  {
    description: "Codeforces Round #666 is comming in one hour",
    readed: false
  }
];

class TopBar extends Component {
  render() {
    const { countries, onLanguageSelected } = this.props;

    return (
      <div className="top-bar w-100 bg-dark-blue inline-flex items-center">
        <div className="w-two-thirds ph3">
          <SearchBar />
        </div>
        <div className="w-5 h-100 ph3">
          <Notifications 
            notifications={notifications} />
        </div>
        <div className="w-30 ph3 flex justify-center">
          <DropdownMenu 
            completeName="Gennady Korotkevich" />
        </div>
        <div className="w-5 ph3">
          <LanguageSelector 
            countries={countries} 
            onLanguageSelected={onLanguageSelected} />
        </div>
      </div>
    );  
  };
};

TopBar.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired
    })
  ).isRequired,
  onLanguageSelected: PropTypes.func.isRequired
};

export default TopBar;