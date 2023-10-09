import { all, fork, takeLatest, delay, put } from "redux-saga/effects";

import {
    LOG_IN_SUCCESS,
    LOG_IN_REQUEST,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
} from "../reducers/user";

// 로그인
function logInAPI(data) {
    //실제로 서버에 요청을 보내는 부분
    return axios.post("/api/login", data);
}

function* logIn(action) {
    //LOG_IN_REQUEST액션이 디스패치되었을 때 호출 되는 제네레이터 함수.
    try {
        yield delay(1000);
        // const result = yield call(logInAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        yield put({ type: LOG_IN_SUCCESS, data: action.data }); //성공하면 로그인 정보 데이터를 Redux에 저장.
    } catch (err) {
        put({ type: LOG_IN_FAILURE, error: err.response.data }); //실패하면 에러 데이터를 Redux에 저장.
    }
}
function* watchLogIn() {
    //액션을 감시하고 필요한 작업을 수행하는데에 사용.
    //이벤트 리스터 같은 역할.
    yield takeLatest(LOG_IN_REQUEST, logIn); //LOG_IN이라는 액션이 실행되면, logIn함수를 실행시킨다.

    //take는 일회용이다. takeEvery는 계속 받을 수 있다. 하지만 여러번 입력을 한번에 하게되면 그 여러개 요청이 모두 가기 때문에
    //takeLatest를 사용한다.
    //완료되지 않은 것들 중에서 로딩중인것들을 중단. 응답을 취소.
    //throttle은 초를 정해서 그 안에서는 요청은 한번만 할 수 있게 설정할 수 있다.
}

//로그아웃
function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function logOutAPI() {
    return axios.post("/api/logout");
}

function* logOut() {
    try {
        yield delay(1000);
        // const result = yield call(logOutAPI); //로그인 요청에 대해 결과값으로 받을 수 있다.
        yield put({ type: LOG_OUT_SUCCESS, data: result.data });
    } catch (err) {
        put({ type: LOG_OUT_FAILURE, error: err.response.data });
    }
}

//회원가입

function signUpAPI() {
    return axios("/api/signup");
}
function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* signUp(action) {
    try {
        yield delay(1000);
        // const result = yield call(signUpAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        yield put({ type: SIGN_UP_SUCCESS, data: action.data });
    } catch (err) {
        put({ type: SIGN_UP_FAILURE, error: err.response.data });
    }
}

export default function* userSaga() {
    yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}