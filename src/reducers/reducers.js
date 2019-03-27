let defaultState = {
    examplePropsOne: 'example',
    examplePropsTwo: 'test'
};

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'EXAMPLE':
            return {
                ...state,
                examplePropsOne: 'newPropOne'
            }
        case 'EXAMPLE-TWO':
            return {
                ...state,
                examplePropsTwo: action.payload
            }
        default:
            return state;
    }
}

export default reducers;