export const setPopup = (dispatch, popup) => {
	return dispatch({ type: 'SET_POPUP', payload: popup });
};

export const closePopup = dispatch => {
	return dispatch({ type: 'CLOSE_POPUP' });
};

export const setProfilePopup = dispatch => {
	return dispatch({ type: 'SET_PROFILE_POPUP' });
};

export const closeProfilePopup = dispatch => {
	return dispatch({ type: 'CLOSE_PROFILE_POPUP' });
};
