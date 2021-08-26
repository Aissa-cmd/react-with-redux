import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userStateReducer from './userStateReducer';


const rootReducer = combineReducers({
	counter: counterReducer,
	userState: userStateReducer
});

export default rootReducer;