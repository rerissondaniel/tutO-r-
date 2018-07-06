import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class LanguageSelectorItem extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {
    event.preventDefault();
    const { language, onLanguageSelected } = this.props;
    onLanguageSelected(language);
  };

  render() {
    const { country, isSelected } = this.props;
    const flagIcon = require(`../images/${country}.svg`);

    return (
      <div className="language-selector__item" onClick={this.handleClick}>
        <div className={`language-selector__item-icon-border
          flex items-center br-100 ba bw1 ${isSelected ? 'b--white' : 'b--transparent'}`}>
          <img className="br-100" src={flagIcon} />
        </div>
      </div>
    );
  };
};

LanguageSelectorItem.propTypes = {
  country: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onLanguageSelected: PropTypes.func.isRequired
};

export default LanguageSelectorItem;