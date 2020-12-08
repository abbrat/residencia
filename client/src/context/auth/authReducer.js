import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, HOTELS } from '../types';
export default (state, action) => {
  switch (action.type) {
    case HOTELS:
      return {
        ...state,
        hotels: action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload,
        isAuthenticated: true
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false
      };
    case LOGOUT:
      console.log('logout');
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false
      };
  }
};
