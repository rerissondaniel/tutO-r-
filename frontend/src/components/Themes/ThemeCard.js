import React, {Component} from 'react';

const bgColors = {
  "Explorar": "#00BFFF",
  "Explorando": "#FFD700",
  "Explorado": "#32CD32"
};

export default class ThemeCard extends Component {
  constructor(props) {
    super(props);
  };

  render() {
	  let {theme, requisites, status} = this.props;
    return (
 	    <div>
        <article className="mr3 mt2 mb2 br3 ba w-96 b--dark-blue dib">
    	    <div className="fl">
  		      <p className="f3 ml2 b green">{theme}</p>
  		      <p className="f5 ml2 mt4 b"> Pre-requisites: {requisites}</p>
  	      </div>
    	    <article className="br3 ma3 mt4 ba b--dark-blue fr mb3" style={{backgroundColor: bgColors[status], borderColor: bgColors[status]}}>
    		    <p className="w4 f4 center tc white">{status}</p>
  	      </article>
        </article>
      </div>
    );
  }
}