

const combineReducers = (reducers) => {
    return function combination(myState = {}, action) {
        let nextState = {};
        let hasChanged = false;
        for (var key in reducers) {
            const prevStateForKey = myState[key];
            const nextStateForKey = reducers[key](myState[key], action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== prevStateForKey;
        }

        return hasChanged ? nextState : myState;
    }
}

export default combineReducers;