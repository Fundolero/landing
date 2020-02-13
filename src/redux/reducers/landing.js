var initialState = {
    loggedIn: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...state,
                loggedIn: action.payload
            }
        default:
            return state
    }
}

export default reducer;