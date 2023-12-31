import { all, fork, takeLatest, put, call } from "redux-saga/effects";

import {
    LOG_IN_SUCCESS,
    LOG_IN_REQUEST,
    LOG_IN_FAILURE,
    LOAD_MY_INFO_REQUEST,
    LOAD_MY_INFO_SUCCESS,
    LOAD_MY_INFO_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    FOLLOW_FAILURE,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    UNFOLLOW_FAILURE,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS,
    CHANGE_NICKNAME_REQUEST,
    CHANGE_NICKNAME_FAILURE,
    CHANGE_NICKNAME_SUCCESS,
    LOAD_FOLLOWERS_REQUEST,
    LOAD_FOLLOWERS_FAILURE,
    LOAD_FOLLOWERS_SUCCESS,
    LOAD_FOLLOWINGS_REQUEST,
    LOAD_FOLLOWINGS_FAILURE,
    LOAD_FOLLOWINGS_SUCCESS,
    REMOVE_FOLLOWER_FAILURE,
    REMOVE_FOLLOWER_REQUEST,
    REMOVE_FOLLOWER_SUCCESS,
} from "../reducers/user";
import axios from "axios";

//유저정보 가져오기
function loadUserAPI(data) {
    //실제로 서버에 요청을 보내는 부분
    return axios.get("/user");
}

function* loadUser(action) {
    //LOG_IN_REQUEST액션이 디스패치되었을 때 호출 되는 제네레이터 함수.
    try {
        const result = yield call(loadUserAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        console.log(result);
        yield put({ type: LOAD_MY_INFO_SUCCESS, data: result.data }); //성공하면 로그인 정보 데이터를 Redux에 저장.
    } catch (err) {
        console.log(err);
        yield put({ type: LOAD_MY_INFO_FAILURE, error: err.response.data }); //실패하면 에러 데이터를 Redux에 저장.
    }
}

// 로그인
function logInAPI(data) {
    //실제로 서버에 요청을 보내는 부분
    return axios.post("/user/login", data);
}

function* logIn(action) {
    //LOG_IN_REQUEST액션이 디스패치되었을 때 호출 되는 제네레이터 함수.
    try {
        const result = yield call(logInAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        console.log(result);
        yield put({ type: LOG_IN_SUCCESS, data: result.data }); //성공하면 로그인 정보 데이터를 Redux에 저장.
    } catch (err) {
        console.log(err);
        yield put({ type: LOG_IN_FAILURE, error: err.response.data }); //실패하면 에러 데이터를 Redux에 저장.
    }
}

//로그아웃

function logOutAPI() {
    return axios.post("/user/logout");
}

function* logOut() {
    try {
        yield call(logOutAPI); //로그인 요청에 대해 결과값으로 받을 수 있다.
        yield put({ type: LOG_OUT_SUCCESS });
    } catch (err) {
        put({ type: LOG_OUT_FAILURE, error: err.response.data });
    }
}

//회원가입

function signUpAPI(data) {
    return axios.post("/user", data); //백엔드 서버 주소
}

function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        console.log(result);
        yield put({ type: SIGN_UP_SUCCESS, data: action.data });
    } catch (err) {
        yield put({ type: SIGN_UP_FAILURE, error: err.response.data });
        console.log(err);
    }
}

//팔로우
function followAPI(data) {
    return axios.patch(`/user/${data}/follow`);
}

function* follow(action) {
    try {
        const result = yield call(followAPI, action.data);
        yield put({ type: FOLLOW_SUCCESS, data: result.data });
    } catch (err) {
        console.error(err);
        put({ type: FOLLOW_FAILURE, error: err.response.data });
    }
}

//언팔로우
function unfollowAPI(data) {
    return axios.delete(`/user/${data}/follow`);
}

function* unfollow(action) {
    try {
        const result = yield call(unfollowAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        yield put({ type: UNFOLLOW_SUCCESS, data: result.data });
    } catch (err) {
        console.error(err);
        put({ type: UNFOLLOW_FAILURE, error: err.response.data });
    }
}

//닉네임 변경
function changeNicknameAPI(data) {
    return axios.patch("/user/nickname", { nickname: data });
}

function* changeNickname(action) {
    try {
        const result = yield call(changeNicknameAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        yield put({ type: CHANGE_NICKNAME_SUCCESS, data: result.data });
    } catch (err) {
        console.error(err);
        put({ type: CHANGE_NICKNAME_FAILURE, error: err.response.data });
    }
}

//팔로워 불러오기
function loadFollowersAPI(data) {
    return axios.get("/user/followers", data);
}

function* loadFollowers(action) {
    try {
        const result = yield call(loadFollowersAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        console.log(result);
        yield put({ type: LOAD_FOLLOWERS_SUCCESS, data: result.data }); //성공하면 로그인 정보 데이터를 Redux에 저장.
    } catch (err) {
        console.log(err);
        yield put({ type: LOAD_FOLLOWERS_FAILURE, error: err.response.data }); //실패하면 에러 데이터를 Redux에 저장.
    }
}

//팔로잉 불러오기
function loadFollowingsAPI(data) {
    return axios.get("/user/followings", data);
}

function* loadFollowings(action) {
    try {
        const result = yield call(loadFollowingsAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        console.log(result);
        yield put({ type: LOAD_FOLLOWINGS_SUCCESS, data: result.data }); //성공하면 로그인 정보 데이터를 Redux에 저장.
    } catch (err) {
        console.log(err);
        yield put({ type: LOAD_FOLLOWINGS_FAILURE, error: err.response.data }); //실패하면 에러 데이터를 Redux에 저장.
    }
}

//팔로워 삭제
function removeFollowerAPI(data) {
    return axios.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
    try {
        const result = yield call(removeFollowerAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        yield put({ type: REMOVE_FOLLOWER_SUCCESS, data: result.data });
    } catch (err) {
        console.error(err);
        put({ type: REMOVE_FOLLOWER_FAILURE, error: err.response.data });
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

function* watchLoadUser() {
    yield takeLatest(LOAD_MY_INFO_REQUEST, loadUser);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}
function* watchChangeNickname() {
    yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}
function* watchLoadFollowers() {
    yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}
function* watchLoadFollowings() {
    yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}
function* watchRemoveFollower() {
    yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
}
export default function* userSaga() {
    yield all([
        fork(watchRemoveFollower),
        fork(watchLoadFollowers),
        fork(watchLoadFollowings),
        fork(watchChangeNickname),
        fork(watchLoadUser),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
        fork(watchFollow),
        fork(watchUnfollow),
    ]);
}
