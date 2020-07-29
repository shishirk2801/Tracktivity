import React, { useState, useEffect } from 'react';
import UserCard from './UserCard/UserCard';
import UserContainerStyle from './UserContainer.module.css';
import UserModal from '../UserModal/Usermodal';
const UserContainer = () => {
	const [ Error, setError ] = useState(false);
	const [ members, setMember ] = useState();
	const [ userInput, setUserInput ] = useState('');
	const [ modal, setModal ] = useState();
	useEffect(() => {
		fetch('https://5f200574fba6d400169d480b.mockapi.io/api/useractivity/data')
			.then((response) => response.json())
			.then((data) => {
				if (!data.ok) {
					setError(true);
				}
				setMember(data.members);
				setModal(data.members[0]);
			})
			.catch((err) => {
				setError(true);
			});
	}, []);

	let content;
	let filteredContent = userInput
		? members.filter((member) => {
				return !member.real_name.toLowerCase().indexOf(userInput.toLowerCase()) === true;
			})
		: members;
	if (!Error) {
		content = filteredContent ? (
			filteredContent.map((member) => (
				<UserCard key={member.id} userData={member} modal={(key) => setModal(key)} />
			))
		) : (
			<div class="spinner-border" />
		);
	} else {
		content = <h1 className="display-3">Opp's something went wrong</h1>;
	}

	return (
		<div class="container" style={{ marginTop: '50px' }}>
			<h2 className="display-4">Users</h2>
			<hr />
			<div className={UserContainerStyle.filter}>
				<span class="material-icons">account_circle</span>
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
export default UserContainer;
