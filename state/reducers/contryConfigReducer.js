const reducer = (state = {}, action) => {
	switch (action.type) {
		case 'SET_COUNTRY_CONFIG':
			return action.config;
		default:
			return state;
	}
};

export default reducer;
