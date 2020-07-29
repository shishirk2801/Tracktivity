import * as actionTypes from './actionType';
//Action to map the fetched user data to the state
export const setDATA = (userData) => {
	return {
		type: actionTypes.SET_DATA,
		userData
	};
};

//Setting the current user to be read using modal
export const currentUser = (user) => {
	return {
		type: actionTypes.SET_CURRENT_USER,
		user
	};
};
//Action to set the failed state from the fetch being failed
export const fetchFailed = () => {
	return {
		type: actionTypes.FETCH_FAILED
	};
};
//Fetching the data from the API and handling the fetch error
export const initData = () => {
	return (dispatch) => {
		//url connecting to the mock api with GET access
		const url = 'https://5f200574fba6d400169d480b.mockapi.io/api/useractivity/data';
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				if (!data.ok) {
					//fallback for server Error
					dispatch(fetchFailed());
				} else {
					dispatch(setDATA(data.members));
					dispatch(currentUser(data.members[0]));
				}
			})
			//fallback for reachability
			.catch((err) => {
				dispatch(fetchFailed());
			});
	};
};
