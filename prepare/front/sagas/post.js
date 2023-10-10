import { all, delay, fork, put, throttle } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import shortId, { generate } from "shortid";
import {
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    REMOVE_POST_FAILURE,
    REMOVE_POST_SUCCESS,
    REMOVE_POST_REQUEST,
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE,
} from "../reducers/post";
import { generateDummyPost } from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";

//게시글 작성
function addPostAPI() {
    return axios.post("/api/post");
}

function* addPost(action) {
    try {
        yield delay(1000);
        const id = shortId.generate();
        // const result = yield call(addPostAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        yield put({
            type: ADD_POST_SUCCESS,
            data: {
                id,
                content: action.data,
            },
        });
        yield put({ type: ADD_POST_TO_ME, data: id });
    } catch (err) {
        put({ type: ADD_POST_FAILURE, data: err.response.data });
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

//댓글작성

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

//게시글 삭제
function removePostAPI() {
    return axios.post("/api/post");
}
function* removePost(action) {
    try {
        yield delay(1000);
        // const result = yield call(addPostAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data,
        });
        yield put({ type: REMOVE_POST_OF_ME, data: action.data });
    } catch (err) {
        put({ type: REMOVE_POST_FAILURE, data: err.response.data });
    }
}

//게시글 불러오기

function* watchLoadPosts() {
    yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}

function loadPostAPI() {
    return axios.post("/api/post");
}
function* loadPosts(action) {
    try {
        yield delay(1000);
        // const result = yield call(addPostAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: generateDummyPost(10),
        });
    } catch (err) {
        put({ type: LOAD_POSTS_FAILURE, data: err.response.data });
    }
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchLoadPosts),
        fork(watchAddComment),
        fork(watchRemovePost),
    ]);
}
