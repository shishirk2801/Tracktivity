import React, { useState, useEffect } from 'react';
import UserCard from '../../Components/UserCard/UserCard';
import UserContainerStyle from './UserContainer.module.css';
import UserModal from '../../Components/UserModal/Usermodal';
import { connect } from 'react-redux';
import * as TRACK from './../../store/action/action';
const UserContainer = (props) => {
	const [ userInput, setUserInput ] = useState('');
	//Pulling the data from API
	const { initData, error, setUser, modal } = props;
	useEffect(() => {
		initData();
	}, []);
	//filtering user profile base on user input
	let filteredContent = userInput
		? props.members.filter((member) => {
				return !member.real_name.toLowerCase().indexOf(userInput.toLowerCase()) === true;
			})
		: props.members;
	let content;
	if (!error) {
		content = filteredContent ? (
			filteredContent.map((member) => (
				<UserCard key={member.id} userData={member} modal={(member) => setUser(member)} />
			))
		) : (
			<div className="spinner-border" />
		);
	} else {
		//Fallback for error on server end
		content = <h1 className="display-3">Opp's something went wrong</h1>;
	}

	return (
		<div className="container">
			<h2 className="display-4">Users</h2>
			<hr />
			<div className={UserContainerStyle.filter}>
				<span className="material-icons">account_circle</span>
				<input
					type="text"
					placeholder="Enter the user to filter"
					onChange={(e) => {
						setUserInput(e.target.value);
					}}
				/>
			</div>
			<div className={UserContainerStyle.users}>{content}</div>
			{modal ? <UserModal data={modal} /> : null}
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		members: state.members,
		error: state.errorStatus,
		modal: state.currentUser
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		initData: () => dispatch(TRACK.initData()),
		setUser: (user) => dispatch(TRACK.currentUser(user))
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
