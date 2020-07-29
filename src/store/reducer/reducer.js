import * as actionTypes from './../action/actionType';
import { updateObject } from '../utility';
let intialState = {
	members: [],
	errorStatus: false,
	currentUser: null
};
//initialising the fetched data
const SetData = (state, action) => {
	return updateObject(state, {
		members: action.userData,
		errorStatus: false
	});
};

//setting the current viewing User
const setCurrentUser = (state, action) => {
	return updateObject(state, {
		currentUser: action.user
	});
};
//error handling on fetch fail
const fetchFailed = (state, action) => {
	return updateObject(state, { errorStatus: true });
};
const reducer = (state = intialState, action) => {
	switch (action.type) {
		case actionTypes.SET_DATA:
			return SetData(state, action);
		case actionTypes.SET_CURRENT_USER:
			return setCurrentUser(state, action);
		case actionTypes.FETCH_FAILED:
			return fetchFailed(state, action);
		default:
			return state;
	}
};
export default reducer;
