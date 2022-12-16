const reducer = (state={}, action) => {
    switch (action.type) {
        case "SET_DEVICE_NOTIFICATION":
            return action.payload;
        default:
            return state;
    }
}

export default reducer;