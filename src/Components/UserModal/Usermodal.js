import React, { useState } from 'react';
import userLogo from './../../assets/user.png';
import userModalStyle from './Usermodal.module.css';
const UserModal = (props) => {
	const data = { ...props.data };
	const [ dateInput, setDateInput ] = useState();

	let filterTable = dateInput
		? data.activity_periods.filter((day) => {
				let searchDate = new Date(new Date(dateInput));
				let findingDate = new Date(day.start_time.slice(0, -6));
				return (
					findingDate.getMonth() === searchDate.getMonth() &&
					findingDate.getDate() === searchDate.getDate() &&
					findingDate.getYear() === searchDate.getYear()
				);
			})
		: data.activity_periods;
	let activity_periods = filterTable.map((day) => {
		return (
			<tr key={data.id + day.start_time + day.end_time}>
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
		<div className="modal fade" id="myModal">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header border-0">
						<h4 className="modal-title display-5">User data</h4>
						<button type="button" className="close" data-dismiss="modal">
							&times;
						</button>
					</div>

					<div className="modal-body">
						<div>
							<img style={{ width: '60%' }} src={userLogo} alt="userPP" />
							<h3 className="display-6 ">{data.real_name}</h3>
							<p>
								<b>Active sessions:</b>
							</p>

							<input
								className={userModalStyle.DateInput}
								type="date"
								onChange={(e) => setDateInput(e.target.value)}
							/>

							{usageTable}
						</div>
					</div>

					<div className="modal-footer border-0">
						<button type="button" className="btn btn-danger" data-dismiss="modal">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserModal;
