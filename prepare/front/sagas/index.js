import { all, fork } from "redux-saga/effects";
import axios from "axios";
import postSaga from "./post";
import userSaga from "./user";

axios.defaults.baseURL = "http://localhost:3065";
axios.defaults.withCredentials = true; //누가 요청을 보냈는지 알려면 쿠키를 보내줘야하는데, 도메인이 달라서 이 옵션을 무조건 넣어줘야 가능
export default function* rootSaga() {
    yield all([fork(postSaga), fork(userSaga)]); //fork는 괄호안에 있는 함수를 실행한다는 뜻
    //call과 fork는 차이가 있다. ->fork는 비동기 함수 호출 call은 동기함수호출
    //call 은 요청을 보내놓고 response가 올때까지 기다린다.
    //all은 동시에 실행 시켜준다.
}
