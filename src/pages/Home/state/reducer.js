import * as actionTypes from './actionTypes';

const initialState = {
    theme: {
        color: 'red'
    }
}


const theme = (myState = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_COLOR:
            return {
                ...myState,
                color: action.color
            }
        default:
            return myState;
    }
}

export default theme