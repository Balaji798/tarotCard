const reducer = (state = [], action) => {
	switch (action.type) {
		case 'UPDATE_VOUCHERS':
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
