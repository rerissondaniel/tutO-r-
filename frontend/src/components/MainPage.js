import React, { Component } from 'react';
import Auth from './Auth';

export default class MainPage extends Component {
  render() {
    return (
      <div className="ma2">
        <h1>tutO(r)</h1>
        <Auth />
      </div>
    );
  }
}