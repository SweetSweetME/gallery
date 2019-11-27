import * as actionTypes from './actionTypes';
import Store from './../../reducer';

export const add = () => {
    Store.dispatch({
        type: actionTypes.INCRENENT,
        number: 2
    });
}

export const dec = () => {
    Store.dispatch({
        type: actionTypes.DECREMENT,
        number: 3
    });
}