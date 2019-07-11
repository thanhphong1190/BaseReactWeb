import { call, put, takeLatest, all } from "redux-saga/effects";
import { delay } from "redux-saga";
import {
  TOGGLE_LOGIN,
  REQUEST_LOGIN,
  UPDATE_LOGIN,
  UPDATE_REGISTER,
  REQUEST_REGISTER
} from "../actions/login.action";
import request from "../helpers/request.helper";
import functionsHelper from "../helpers/functions.helper";
import listUser from "../helpers/mock-data/userList";
import isLoginOk from "../helpers/mock-data/isLogin";
import AppConfig from "../config";
import SessionHelper from "../helpers/session.helper";

function* requestLogin({loginInfo}) {
    try {
        const res = yield call(request.post.bind(request), "login", loginInfo);
        yield put({
            type: UPDATE_LOGIN,
            loginSuccess: true,
            loginMessage: null
        });

        // save token after login success
        SessionHelper.setToken(res.token);
        SessionHelper.setUser(res.user);
        window.location.reload();
    } catch (e) {
        if (e.response && e.response.status === 401) {
            yield put({
                type: UPDATE_LOGIN,
                loginSuccess: false,
                loginMessage: AppConfig.loginError
            });
        } else {
            yield put({
                type: UPDATE_LOGIN,
                loginSuccess: false,
                loginMessage: AppConfig.generalError
            });
        }
    }
}

function* requestRegister({registerInfo}) {
    try {
        const res = yield call(request.post.bind(request), "register", registerInfo);
        yield put({
            type: UPDATE_REGISTER,
            registerSuccess: true,
            registerMessage: null
        });

        window.alert('Dang ky thanh cong!');

        // save token after login success
        SessionHelper.setToken(res.token);
        SessionHelper.setUser(res.user);
        window.location.reload();
    } catch (e) {
        if (e.response && e.response.status === 401) {
            yield put({
                type: UPDATE_REGISTER,
                registerSuccess: false,
                registerMessage: AppConfig.loginError
            });
        } else {
            yield put({
                type: UPDATE_REGISTER,
                registerSuccess: false,
                registerMessage: AppConfig.generalError
            });
        }
    }
}

export default function* watchLoginSagasAsync() {
  yield all([
    takeLatest(REQUEST_LOGIN, requestLogin),
    takeLatest(REQUEST_REGISTER, requestRegister)
  ]);
}