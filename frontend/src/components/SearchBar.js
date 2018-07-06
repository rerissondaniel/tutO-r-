import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';

class SearchBar extends Component {
  render() {
    const { intl } = this.props;

    return (
      <div className="search-bar inline-flex w-100">
        <input 
          className="search-bar-input pa2 bn gray outline-0" 
          type="text"
          placeholder={intl.formatMessage({ id: 'search-bar.search' })} />
        <button className="search-bar-button bn outline-0" />
      </div>
    );
  };
};

SearchBar.propTypes = {
  intl: intlShape
};

export default injectIntl(SearchBar);