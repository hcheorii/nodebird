import { all, delay, fork, put, throttle, call } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
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
    LIKE_POST_FAILURE,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    UNLIKE_POST_FAILURE,
    UNLIKE_POST_REQUEST,
    UNLIKE_POST_SUCCESS,
    UPLOAD_IMAGES_REQUEST,
    UPLOAD_IMAGES_SUCCESS,
    UPLOAD_IMAGES_FAILURE,
    RETWEET_REQUEST,
    RETWEET_SUCCESS,
    RETWEET_FAILURE,
} from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";
import axios from "axios";

function likePostAPI(data) {
    return axios.patch(`/post/${data}/like`); //data는 postid이다
}
function* likePost(action) {
    try {
        const result = yield call(likePostAPI, action.data);
        yield put({
            type: LIKE_POST_SUCCESS,
            data: result.data, //postid와 userid들어있다.
        });
    } catch (err) {
        console.error(err);
        put({ type: LIKE_POST_FAILURE, data: err.response.data });
    }
}

function unlikePostAPI(data) {
    return axios.delete(`/post/${data}/like`); //data는 postid이다
}

function* unlikePost(action) {
    try {
        const result = yield call(unlikePostAPI, action.data);
        yield put({
            type: UNLIKE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        put({ type: UNLIKE_POST_FAILURE, data: err.response.data });
    }
}

//게시글 작성
function addPostAPI(data) {
    return axios.post("/post", data);
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        //백에서 준게 result.data안에 들어있다.
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data, //우리가 만든 게시물이 들어있다
        });
        yield put({ type: ADD_POST_TO_ME, data: result.data.id });
        //내가 썼는지 확인하기 위함
    } catch (err) {
        console.error(err);
        put({ type: ADD_POST_FAILURE, data: err.response.data });
    }
}

//댓글작성

function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
    try {
        const result = yield call(addCommentAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        yield put({ type: ADD_COMMENT_SUCCESS, data: result.data });
    } catch (err) {
        console.log(err);
        put({ type: ADD_COMMENT_FAILURE, data: err.response.data });
    }
}

//게시글 삭제
function removePostAPI(data) {
    return axios.delete(`/post/${data}`); //data는 postid
}

function* removePost(action) {
    try {
        const result = yield call(removePostAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: result.data,
        });
        yield put({ type: REMOVE_POST_OF_ME, data: action.data });
    } catch (error) {
        console.error(error);
        put({ type: REMOVE_POST_FAILURE, data: error.response.data });
    }
}

//게시글 불러오기
function loadPostAPI() {
    return axios.get("/posts");
}

function* loadPosts(action) {
    try {
        const result = yield call(loadPostAPI, action.data); //로그인 요청에 대해 결과값으로 받을 수 있다.
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data,
            //스크롤 넘어갈때, 10개씩 게속 불러온다.
        });
    } catch (err) {
        console.error(err);
        put({ type: LOAD_POSTS_FAILURE, data: err.response.data });
    }
}

//이미지 업로드
function uploadImagesAPI(data) {
    return axios.post("/post/images", data); //data는 formdata다
}

function* uploadImages(action) {
    try {
        const result = yield call(uploadImagesAPI, action.data);
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        put({ type: UPLOAD_IMAGES_FAILURE, data: err.response.data });
    }
}

//리트윗
function retweetAPI(data) {
    return axios.post(`/post/${data}retweet`); //data는 formdata다
}

function* retweet(action) {
    try {
        const result = yield call(retweetAPI, action.data);
        yield put({
            type: RETWEET_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        put({ type: RETWEET_FAILURE, data: err.response.data });
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
    //ADD_POST_REQUEST 가 요청되면, addPost실행
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchLoadPosts() {
    yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
    //5초안에 들어온 같은 요청은 무시해버림 (throttle)
}

function* watchUnlikePost() {
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function* watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchLikePost() {
    yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function* watchRetweet() {
    yield takeLatest(RETWEET_REQUEST, retweet);
}
export default function* postSaga() {
    yield all([
        fork(watchRetweet),
        fork(watchUploadImages),
        fork(watchAddPost),
        fork(watchLikePost),
        fork(watchUnlikePost),
        fork(watchLoadPosts),
        fork(watchAddComment),
        fork(watchRemovePost),
    ]);
}
