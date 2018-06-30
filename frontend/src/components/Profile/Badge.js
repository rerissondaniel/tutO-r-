import React, {Component} from 'react';

const bgColors = { 
  "Blue": "#6495ED",
  "Green": "#32CD32",
  "Yellow": "#FFD700",
};

export default class Badge extends Component {
  constructor(props) {
    super(props);
  }

 	render() {
 		let {bgColor, contentText} = this.props;
	  return (
	    <article className="h3 dib w5 ma3 br3 ba b--black-10" style={{backgroundColor: bgColors[bgColor]}}>
	      <p className="tc center}">{contentText}</p>
	    </article>
	  );
  }
}