import { combineReducers } from 'redux';
import TwitterReducer from './TwitterReducer';

const rootReducer = combineReducers({
  twitter: TwitterReducer
});

export default rootReducer;