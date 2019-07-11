import { TOGGLE_LOGIN, SHOW_LOGIN_TAB, SHOW_REGISTER_TAB, UPDATE_LOGIN, REQUEST_LOGIN, UPDATE_REGISTER, REQUEST_REGISTER } from "../actions/login.action";

const initState = {
  toggleLogin: false,
  showLoginTab: false,
  showRegisterTab: false,
  loginSuccess: null,
  loginMessage: null,
  loginLoading: false,
  registerSuccess: null,
  registerMessage: null,
  registerLoading: false
};

export default function loginReducer(state = initState, action) {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return Object.assign({}, state, {
        toggleLogin: action.toggleLogin,
        showLoginTab: action.showLoginTab && true,
        showRegisterTab: action.showRegisterTab && true,
        loginSuccess: null,
        loginMessage: null,
        loginLoading: false
      });
    case SHOW_LOGIN_TAB:
      return Object.assign({}, state, {
        showLoginTab: true,
        showRegisterTab: false,
        loginSuccess: null,
        loginMessage: null,
        loginLoading: false,
        registerSuccess: null,
        registerMessage: null,
        registerLoading: false
      });
    case SHOW_REGISTER_TAB:
      return Object.assign({}, state, {
        showLoginTab: false,
        showRegisterTab: true,
        loginSuccess: null,
        loginMessage: null,
        loginLoading: false,
        registerSuccess: null,
        registerMessage: null,
        registerLoading: false
      });
    case UPDATE_LOGIN:
      return Object.assign({}, state, {
        loginSuccess: action.loginSuccess,
        loginMessage: action.loginMessage,
        loginLoading: false
      });
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
        loginLoading: true
      });
    case UPDATE_REGISTER:
      return Object.assign({}, state, {
        loginSuccess: action.loginSuccess,
        loginMessage: action.loginMessage,
        loginLoading: false
      });
    case REQUEST_REGISTER:
      return Object.assign({}, state, {
        loginLoading: true
      });
    default:
      return state;
  }
}
