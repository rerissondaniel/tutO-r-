import React, {Component} from 'react';

const problems = [
  "http://codeforces.com/problemset/problem/1009/G",
  "http://codeforces.com/problemset/problem/1009/D",
  "http://codeforces.com/problemset/problem/1009/B"
];

const references = [
  "https://www.geeksforgeeks.org/dynamic-programming/",
  "https://www.hackerearth.com/practice/algorithms/dynamic-programming/introduction-to-dynamic-programming-1/tutorial/"
];
class Tutorial extends Component {
  constructor(props) {
  	super(props);
  };
  
  render() {
  	return (
  		<div className="w-70 fr ma3">
  			<p className="green f2 mb1">Dynamic Programming</p>
  			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  			<p className="blue f2 mb1">Problems</p>
  			{
  				problems.map((problem, i) => {
  					return (
  						<p className="ma1">- <a href={problem}>{problem}</a></p>
  					);
  				})
  			}
  			<p className="blue f2 mb1">References</p>
  			{
	  			references.map((reference, i) => {
	  				return (
	  					<p className="ma1">- <a href={reference}>{reference}</a></p>
	  				);
	  			})
	  		}
  		</div>
  	);
  };
}

export default Tutorial;
