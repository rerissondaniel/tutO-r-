import React, { Component } from 'react';

import { IntlProvider, addLocaleData } from 'react-intl';

import ptLocale from 'react-intl/locale-data/pt';
import enLocale from 'react-intl/locale-data/en';

import ptMessages from '../translations/pt';
import enMessages from '../translations/en';

import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import AuthBox from './AuthBox';

import logo from '../images/logo.png';
import SideMenu from './SideMenu';
import TopBar from './TopBar';
import Tutorial from "./Tutorial/Tutorial";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics";
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
                  <div className="inline-flex w-100">
                    <div className="w-20">
                      <SideMenu />
                    </div>
                    <div className="w-80">
                      <TopBar
                        countries={countries}
                        onLanguageSelected={this.changeLanguage} />
                      <Route path='/home/statistics' component={Statistics} />
                      <Route path='/home/training' component={Themes} />
                      <Route path='/home/tutorial' component={Tutorial} />
                      <Route path='/home/profile' component={Profile} />
                    </div>
                  </div>
                </IntlProvider>
              )} />
            <Route path='/' render={(props) => (
              <div align="center" className="center-alignment">
                <IntlProvider locale={language} messages={translations[language]}>
                  <div className="flex flex-row">
                    <div className="flex items-center justify-center w-50">
                      <img className="w-60" src={logo} alt="logo" />
                    </div>
                    <div className="w-50">
                      <AuthBox />
                    </div>
                  </div>
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