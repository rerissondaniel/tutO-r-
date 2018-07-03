import React, {Component} from 'react';
import BadgesCard from './BadgesCard';
import ProfileCard from './ProfileCard';
import './Profile.css';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  };

 	render() {
	   return (
	   	<div className="flex fr">
        <ProfileCard name="Gustavo Ribeiro" city="Campina Grande" institution="UFCG" username="@tapioca" codeforcesUser="BigHeadOfUsAll"/>
		   	<BadgesCard />
		  </div>
	   );
	 };
}