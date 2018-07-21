import React, { Component } from 'react';

import { IntlProvider, addLocaleData } from 'react-intl';

import ptLocale from 'react-intl/locale-data/pt';
import enLocale from 'react-intl/locale-data/en';

import ptMessages from '../translations/pt';
import enMessages from '../translations/en';

import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import AuthBox from './AuthBox';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import Tutorial from "./Tutorial/Tutorial";
import Profile from "./Profile/Profile";

import SideMenu from './SideMenu';
import TopBar from './TopBar';
import Statistics from './Statistics';
import Themes from './Themes';

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
                <Themes />
                {/* <div className="inline-flex w-100">
                  <div className="w-20">
                    <SideMenu />
                  </div>
                  <div className="w-80">
                    <TopBar
                      countries={countries}
                      onLanguageSelected={this.changeLanguage} />
                    <Route path='/home/statistics' component={Statistics} />
                    <Route path='/home/tournament' component={Tutorial} />
                    <Route path='/home/profile' component={Profile} />
                  </div>
                </div> */}
              </IntlProvider>
            )} />
            <Route path='/' render={(props) => (
              <div align="center" className="center-alignment">
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