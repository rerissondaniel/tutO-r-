import React, {Component} from 'react';

export default class Badge extends Component {
  constructor(props) {
    super(props);
  };

 	render() {
 		let {bgColor, contentText} = this.props;
 		let badgeClass = `h-10 dib w5 ma3 br3 ba b--black-10 bg-${bgColor}`;
	  return (
	    <article className={badgeClass}>
	      <p className="tc center">{contentText}</p>
	    </article>
	  );
  };
}