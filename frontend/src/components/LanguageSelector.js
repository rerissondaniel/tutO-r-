import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LanguageSelectorItem from './LanguageSelectorItem';

class LanguageSelector extends Component {
  constructor(props) {
    super(props);
    
    const { countries: [ { language } ] } = this.props;
    this.state = {
      selectedLanguage: language
    };

    this.handleLanguageSelect = this.handleLanguageSelect.bind(this);
  }

  handleLanguageSelect(selectedLanguage) {
    this.setState({
      selectedLanguage
    });
    this.props.onLanguageSelected(selectedLanguage);
  }

  render() {
    const { countries } = this.props;
    const { selectedLanguage } = this.state;

    return (
      <div className="language-selector inline-flex">
        {
          countries.map(country => {
            const { name, language } = country;
            return (
              <div className="pr1" key={name}>
                <LanguageSelectorItem
                  country={name}
                  language={language}
                  isSelected={language === selectedLanguage}
                  onLanguageSelected={this.handleLanguageSelect}
                />
              </div>
            );
          })
        }
      </div>
    );
  }
}

LanguageSelector.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired
    })
  ).isRequired,
  onLanguageSelected: PropTypes.func.isRequired
};

export default LanguageSelector;