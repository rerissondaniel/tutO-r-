import React, { Component } from 'react';

import { IntlProvider, addLocaleData } from 'react-intl';

import TopBar from './TopBar';
import SideMenu from './SideMenu';

import Auth from './Auth';
import Statistics from "./Statistics";

import ptLocale from 'react-intl/locale-data/pt';
import enLocale from 'react-intl/locale-data/en';

import ptMessages from '../translations/pt';
import enMessages from '../translations/en';

import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import AuthBox from './AuthBox';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

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

export const history = createBrowserHistory({});

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: countries[DEFAULT_COUNTRY].language
    };

    this.changeLanguage = this.changeLanguage.bind(this);
    console.log(this.props);
  };

  changeLanguage(language) {
    this.setState({
      language
    });
  };
  
  render() {
    const { language } = this.state;
    
    return (
      <BrowserRouter>
        <Router history={history}>
          <Switch>
            <Route path='/home' render={(props) => (
              <IntlProvider locale={language} messages={translations[language]}>
                <div className="inline-flex w-100">
                  <div className="w-20">
                    <SideMenu />
                  </div>
                  <div className="w-80">
                    <TopBar
                      countries={countries}
                      onLanguageSelected={this.changeLanguage} />
                    <Route path='/home/statistics' component={Statistics} />
                  </div>
                </div>
              </IntlProvider>
            )} />
            <Route path='/' render={(props) => (
              <div align="center">
                <IntlProvider locale={language} messages={translations[language]}>
                  <AuthBox />
                </IntlProvider>
              </div>
            )} />
          </Switch>
        </Router>
      </BrowserRouter>
    );
  };
};

export default MainPage;