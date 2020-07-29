import React from 'react';
import userLogo from './../../assets/user.png';
import userModalStyle from './Usermodal.module.css';
const userModal = (props) => {
	const data = { ...props.data };

	let activity_periods = data.activity_periods.map((day) => {
		return (
			<tr>
				<td>{day.start_time}</td>
				<td>{day.end_time}</td>
			</tr>
		);
	});
	let usageTable = (
		<div className={userModalStyle.table}>
			<table className="table">
				<thead>
					<tr>
						<th>Start Time</th>
						<th>End Time</th>
					</tr>
				</thead>
				<tbody>{activity_periods}</tbody>
			</table>
		</div>
	);
	return (
		<div class="modal fade" id="myModal">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header border-0">
						<h4 class="modal-title display-5">User data</h4>
						<button type="button" class="close" data-dismiss="modal">
							&times;
						</button>
					</div>

					<div class="modal-body">
						<div>
							<img style={{ width: '60%' }} src={userLogo} alt="userPP" />
							<h3 className="display-6 ">{data.real_name}</h3>
							<p>
								<b>Active sessions:</b>
							</p>

							<input className={userModalStyle.DateInput} type="date" />

							{usageTable}
						</div>
					</div>

					<div class="modal-footer border-0">
						<button type="button" class="btn btn-danger" data-dismiss="modal">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default userModal;
