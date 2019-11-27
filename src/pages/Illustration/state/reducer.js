import * as actionTypes from './actionTypes';
const initialState = {
    number: 9
}
const counter = (myState = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCRENENT:
            return {
                ...myState,
                number: myState.number + action.number
            }
        case actionTypes.DECREMENT:
            return {
                ...myState,
                number: myState.number - action.number
            }
        default:
            return myState;
    }
}


export default counter