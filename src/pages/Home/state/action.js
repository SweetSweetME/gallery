import * as actionTypes from './actionTypes';
import Store from './../../reducer';

export const changeRedTheme = () => {
    Store.dispatch({
        type: actionTypes.CHANGE_COLOR,
        color: 'red'
    });
}

export const changeBuleTheme = () => {
    Store.dispatch({
        type: actionTypes.CHANGE_COLOR,
        color: 'blue'
    });
}