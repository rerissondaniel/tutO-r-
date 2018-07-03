import React, {Component} from 'react';

const bgColors = {
  "Explored": "green",
  "Exploring": "gold",
  "Explore": "blue"
};

export default class ThemeCard extends Component {
  constructor(props) {
    super(props);
  };

  render() {
	  let {theme, requisites, status} = this.props;
    let statusClass = `br3 ma3 mt4 fr mb3 bg-${bgColors[status]}`;
    return (
 	    <div>
        <article className="mr3 mt2 mb2 br3 ba w-96 b--dark-blue dib">
    	    <div className="fl">
  		      <p className="f3 ml2 b green">{theme}</p>
  		      <p className="f5 ml2 mt4 b"> Pre-requisites: {requisites}</p>
  	      </div>
    	    <article className={statusClass}>
    		    <p className="w4 f4 center tc white">{status}</p>
  	      </article>
        </article>
      </div>
    );
  }
}