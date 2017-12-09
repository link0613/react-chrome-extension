import { combineReducers } from 'redux';
import loginReducer from '../containers/Login/reducer.js';

const rootReducer = combineReducers({
 login: loginReducer,
});

export default rootReducer;
