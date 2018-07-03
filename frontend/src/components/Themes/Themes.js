import React, {Component} from 'react';
import ThemeCard from './ThemeCard';
import './Themes.css';

export default class Themes extends Component {
  constructor(props) {
    super(props);
  };

 	render() {
    return (
      <React.Fragment>
 		    <div className="ml3">
          <p className="f2 blue mb0">Themes</p>
        </div>
   	      <div className="vh-75 w-70 h6 overflow-scroll ma3">
          <ThemeCard theme="Dynamic Programming" requisites="Bitmasks, Backtracking" status="Explored"/>
          <ThemeCard theme="Bitmasks" requisites="Number Representation, Numeric Bases" status="Exploring"/>
          <ThemeCard theme="Brute force" requisites="None" status="Explore"/>
          <ThemeCard theme="Greedy" requisites="None" status="Explore"/>
        </div>
  		</React.Fragment>
 		);
 	};
}