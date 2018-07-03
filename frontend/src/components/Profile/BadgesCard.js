import React, {Component} from 'react';
import Badge from './Badge';

export default class BadgesCard extends Component {
  constructor(props) {
    super(props);
  };

 	render() {
	  return (
	    <article className="vh-75 ma3 ml1 w-50">
	    	<p className="f2 blue ml3 mb0">Badges</p>
	    	<div className="vh-60 ma2 w-98 ba b--dark-blue">
		      <Badge bgColor="blue" contentText="> 1000 on Codeforces"/>
		      <Badge bgColor="gold" contentText="Dynamic Programming Master"/>
		      <Badge bgColor="green" contentText="Added a Theme"/>
	    	</div>
	    </article>
	  );
  };
}