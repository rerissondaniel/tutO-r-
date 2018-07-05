import React, { Component } from 'react';
import { IntlProvider, FormattedMessage, addLocaleData } from 'react-intl';
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
        <div className="ma2 flex flex-column items-center">
          <LanguageSelector countries={countries} onLanguageSelected={this.changeLanguage} />
          <h3>
            <FormattedMessage id="hello-world" />
          </h3>
        </div>
      </IntlProvider>
    );
  };
};

export default MainPage;