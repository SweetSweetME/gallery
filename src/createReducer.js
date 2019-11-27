const createStore = (reducer) => {
    let myState;
    let listeners = [];
    const getState = () => myState;

    const subscribe = (ln) => {
        listeners.push(ln);
        const unsubscribe = () => {
            console.log('取消订阅');
            listeners = listeners.filter(listener => ln !== listener);
            console.log(listeners);
        }
        return unsubscribe;
    }

    const dispatch = (action) => {
        myState = reducer(myState, action);
        listeners.forEach(ln => ln());
    }
    dispatch({ type: `@@redux/__INIT__${Math.random()}` });
    return {
        getState,
        dispatch,
        subscribe
    }
}

export default createStore;