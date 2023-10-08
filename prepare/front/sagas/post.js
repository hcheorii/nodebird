import { all, delay, fork, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import {
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
} from "../reducers/post";
function addPostAPI() {
    return axios.post("/api/post");
}

function* addPost(action) {
    try {
        yield delay(1000);
        // const result = yield call(addPostAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        yield put({ type: ADD_POST_SUCCESS, data: action.data });
    } catch (err) {
        put({ type: ADD_POST_FAILURE, data: err.response.data });
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function addCommentAPI(data) {
    return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
    try {
        yield delay(1000);
        // const result = yield call(addCommentAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        yield put({ type: ADD_COMMENT_SUCCESS, data: action.data });
    } catch (err) {
        put({ type: ADD_COMMENT_FAILURE, data: err.response.data });
    }
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
export default function* postSaga() {
    yield all([fork(watchAddPost), fork(watchAddComment)]);
}
