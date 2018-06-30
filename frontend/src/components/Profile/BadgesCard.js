import React, {Component} from 'react';
import Badge from './Badge';

export default class BadgesCard extends Component {
  constructor(props) {
    super(props);
  }

 	render() {
	  return (
	    <article className="h7 ma3 ml1 w-50 br3 ba b--black-10 shadow-5">
	    	<p className="f3 blue ml3">Badges</p>
	    	<div className="h6 ma2 w-98 ba b--dark-blue">
		      <Badge bgColor="Blue" contentText="> 1000 on Codeforces"/>
		      <Badge bgColor="Yellow" contentText="Dynamic Programming Master"/>
		      <Badge bgColor="Green" contentText="Added a Theme"/>
	    	</div>
	    </article>
	  );
  }
}