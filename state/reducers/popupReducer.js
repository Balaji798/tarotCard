const reducer = (state = { visible: false, completeProfileVisible: false }, action) => {
	switch (action.type) {
		case 'SET_POPUP':
			return {
				...state,
				...action.payload,
				visible: true,
			};
		case 'CLOSE_POPUP':
			return {
				...state,
				visible: false,
			};
		case 'SET_PROFILE_POPUP':
			return {
				...state,
				completeProfileVisible: true,
			};
		case 'CLOSE_PROFILE_POPUP':
			return {
				...state,
				completeProfileVisible: false,
			};
		default:
			return state;
	}
};

export default reducer;
