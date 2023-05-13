import {AppState} from '../reducers';

export const selectUser = ({userState}: AppState) => userState.user;
