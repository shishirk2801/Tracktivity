import React from 'react';
import UsercardStyle from './UserCard.module.css';
import Userlogo from './../../../assets/user.png';

const UserCard = (props) => {
	const { userData } = props;
	const { real_name, tz, activity_periods } = userData;
	const last_active = activity_periods[activity_periods.length - 1].end_time;

	return (
		<div className={UsercardStyle.Card}>
			<img src={Userlogo} class={UsercardStyle.UserPP} alt="profile" />
			<hr />
			<div className="card-body">
				<h5 className="card-title">{real_name}</h5>
				<p style={{ fontSize: '90%' }}>Timezone:{tz}</p>
				<p className="card-text">
					Last active at <br />
					{last_active}{' '}
				</p>
				<button
					type="button"
					class="btn btn-outline-dark"
					id="modalbtn"
					data-toggle="modal"
					data-target="#myModal"
					onClick={() => props.modal(props.userData)}
				>
					User data
				</button>
			</div>
		</div>
	);
};
export default UserCard;
