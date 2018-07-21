import React, {Component} from 'react';
import BadgesCard from './BadgesCard';
import ProfileCard from './ProfileCard';
import './Profile.css';
import { connect } from "react-redux";

class Profile extends Component {
	constructor(props) {
    super(props);
	};

	render() {
    const user = this.props.user.user;

		return (
			<div className="flex fr">
				<ProfileCard name={user.name} city="Campina Grande" institution="UFCG" username={user.email} codeforcesUser="BigHeadOfUsAll"/>
				<BadgesCard />
			</div>
		);
	};
};

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, {})(Profile);