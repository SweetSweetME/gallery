import Reducer from './../reducer';
import createStore from './../createReducer';
import theme from './Home/state/reducer';
import counter from './Illustration/state/reducer';
const store = createStore(Reducer({
    theme,
    counter
}));

export default store;