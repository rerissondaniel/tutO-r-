import React, { Component } from 'react';
import { IntlProvider, FormattedMessage, addLocaleData } from 'react-intl';

import Notifications from './Notifications';
import LanguageSelector from './LanguageSelector';

import ptLocale from 'react-intl/locale-data/pt';
import enLocale from 'react-intl/locale-data/en';

import ptMessages from '../translations/pt';
import enMessages from '../translations/en';

addLocaleData([ ...ptLocale, ...enLocale ]);

const DEFAULT_COUNTRY = 0;

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

const notifications = [
  {
    description: "You have solved all the problem about Dynamic Programming",
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
        <div className="ma2 inline-flex items-center">
        </div>
      </IntlProvider>
    );
  };
};

export default MainPage;