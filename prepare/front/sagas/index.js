import { all, fork } from "redux-saga/effects";

import postSaga from "./post";
import userSaga from "./user";

export default function* rootSaga() {
    yield all([fork(postSaga), fork(userSaga)]); //fork는 괄호안에 있는 함수를 실행한다는 뜻
    //call과 fork는 차이가 있다. ->fork는 비동기 함수 호출 call은 동기함수호출
    //call 은 요청을 보내놓고 response가 올때까지 기다린다.
    //all은 동시에 실행 시켜준다.
}
