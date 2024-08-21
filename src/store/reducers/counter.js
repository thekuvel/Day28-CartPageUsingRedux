const initialState = {
    count : 100,
}

//Reducer is same as simple reducer but treat action {type: "", data} as a object
const countReducer = (state=initialState, action) => {
    switch(action.type) {
        case "inc":
            return {
                ...state,
                count : state.count + 1
            };
        case "dec":
            return {
                ...state,
                count : state.count - 1,
            };
        case "reset":
            return initialState
        default:
            return state
    }
};

export default countReducer