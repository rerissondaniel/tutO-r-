import React, { Component } from 'react';

import { IntlProvider, addLocaleData } from 'react-intl';

import ptLocale from 'react-intl/locale-data/pt';
import enLocale from 'react-intl/locale-data/en';

import ptMessages from '../translations/pt';
import enMessages from '../translations/en';

import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

import SideMenu from './SideMenu';
import TopBar from './TopBar';
import Statistics from './Statistics';

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

const history = createBrowserHistory({});

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
            <Route path='/' render={(props) => (
              <IntlProvider locale={language} messages={translations[language]}>
                <div className="inline-flex w-100">
                  <div className="w-20">
                    <SideMenu />
                  </div>
                  <div className="w-80">
                    <TopBar
                      countries={countries}
                      onLanguageSelected={this.changeLanguage} />
                    <Route path='/statistics' component={Statistics} />
                  </div>
                </div>
              </IntlProvider>
            )} />
          </Switch>
        </Router>
      </BrowserRouter>
    );
  };
};

export default MainPage;