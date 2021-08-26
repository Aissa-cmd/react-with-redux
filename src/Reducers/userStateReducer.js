import { LOGIN, LOGOUT } from '../Actions/userStateActions';


function userStateReducer(state='logout', action) {
  switch(action.type) {
    case LOGIN:
      return 'login';
    case LOGOUT:
      return 'logout';
    default:
      return state;
  }
}

export default userStateReducer;