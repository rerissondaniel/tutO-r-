import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

import SideMenu from './SideMenu';
import TopBar from './TopBar';

import AuthBox from './AuthBox';

import ptLocale from 'react-intl/locale-data/pt';
import enLocale from 'react-intl/locale-data/en';

import ptMessages from '../translations/pt';
import enMessages from '../translations/en';

addLocaleData([ ...ptLocale, ...enLocale ]);

const DEFAULT_COUNTRY = 1;

const countries = [
  {
    name: 'brazil',
    language: 'pt'
  },
  {
    name: 'united-states',
    language: 'en'
  }
];

const translations = {
  'pt': ptMessages,
  'en': enMessages
};

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: countries[DEFAULT_COUNTRY].language
    };

    this.changeLanguage = this.changeLanguage.bind(this);
  };

  changeLanguage(language) {
    this.setState({
      language
    });
  };

  render() {
    const { language } = this.state;
    
    return (
      <IntlProvider locale={language} messages={translations[language]}>
        <div className="w-100 h-100 inline-flex items-center justify-center pt6">
          <AuthBox />
        </div>
      </IntlProvider>
    );
  };
};

export default MainPage;