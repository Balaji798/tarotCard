const storeReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SET_STORE':
			return action.payload;
		default:
			return state;
	}
};

const flyerStoreReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SET_FLYER_STORE':
			return action.payload;
		default:
			return state;
	}
};

export default storeReducer;
export { flyerStoreReducer };
