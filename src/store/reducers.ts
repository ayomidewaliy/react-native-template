import {combineReducers} from 'redux';
import userState from './user/user.slice';

const appReducers = combineReducers({
  userState,
});

export type AppState = ReturnType<typeof appReducers>;

export default appReducers;
