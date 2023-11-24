import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

//(이전상태, 액션) => 다음 상태
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        //HYDRATE 를 위한 index reducer하나 생성
        switch (action.type) {
            case HYDRATE:
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
});
export default rootReducer;
