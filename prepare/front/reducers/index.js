import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

const initialState = {
    user: {},
    post: {},
};

export const loginAction = (data) => {
    return {
        type: "LOG_IN",
        data,
    };
};

export const logoutAction = (data) => {
    return {
        type: "LOG_OUT",
    };
};
//action creator
const changeNickname = (data) => {
    return {
        type: "CHANGE_NICKNAME",
        data,
    };
};

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
