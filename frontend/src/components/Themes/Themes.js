import React, {Component} from 'react';
import ThemeCard from './ThemeCard';
import './Themes.css';

export default class Themes extends Component {
  constructor(props) {
    super(props);
  };

 	render() {
    return (
 	    <div>
 		    <div className="ml3">
          <p className="f2 blue mb0">Themes</p>
 		    </div>
   	      <div className="vh-75 w-70 h6 pre ma3">
            <ThemeCard theme="Dynamic Programming" requisites="Bitmasks, Backtracking" status="Explorado"/>
            <ThemeCard theme="Bitmasks" requisites="Number Representation, Numeric Bases" status="Explorando"/>
            <ThemeCard theme="Brute force" requisites="None" status="Explorar"/>
            <ThemeCard theme="Greedy" requisites="None" status="Explorar"/>
	      </div>
  </div>
 );
	 }
}