import { produce } from "immer";

export const initialValue = {
    logInLoading: false, //로그인 시도중
    logInDone: false,
    logInError: null,

    logOutLoading: false, //로그아웃 시도중
    logOutDone: false,
    logOutError: null,

    signUpLoading: false, //회원가입 시도중
    signUpDone: false,
    signUpError: null,

    changeNicknameLoading: false, // 닉네임 변경 시도중
    changeNicknameDone: false,
    changeNicknameError: null,

    me: null,
    signUpData: {},
    LoginData: {},
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";

export const FOLLOW_REQUEST = "FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
export const FOLLOW_FAILURE = "FOLLOW_FAILURE";

export const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME"; //user reducer상태를 바꾸는 액션
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME"; //user reducer상태를 바꾸는 액션

//함수
const dummyUser = (data) => ({
    ...data,
    nickname: "hyeon cheol lee",
    id: 1,
    Posts: [{ id: 1 }],
    Followings: [
        { nickname: "미노이" },
        { nickname: "미노이2" },
        { nickname: "미노이3" },
    ],
    Followers: [
        { nickname: "미노이" },
        { nickname: "미노이2" },
        { nickname: "미노이3" },
    ],
});

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    };
};

export const logoutRequestAction = (data) => {
    return {
        type: LOG_OUT_REQUEST,
    };
};

export default (state = initialValue, action) => {
    //리듀서란 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(단, 불변성은 지키면서)
    //draft는 불변성 상관없이 바꾸면 immer가 알아서 불변성있게 만들어준다.
    return produce(state, (draft) => {
        switch (action.type) {
            //로그인
            case LOG_IN_REQUEST:
                draft.logInLoading = true;
                draft.logInError = null;
                draft.logInDone = false;
                break;
            case LOG_IN_SUCCESS:
                draft.logInLoading = false;
                draft.logInDone = true;
                draft.me = dummyUser(action.data); //더미데이터
                break;
            case LOG_IN_FAILURE:
                draft.logInLoading = false;
                draft.logInError = action.error;
                break;
            //로그아웃
            case LOG_OUT_REQUEST:
                draft.logOutLoading = true; //로그아웃 시도중
                draft.logOutDone = false;
                draft.logOutError = null;
                break;
            case LOG_OUT_SUCCESS:
                draft.logOutLoading = false; //로그아웃 시도중
                draft.logOutDone = true;
                draft.me = null;
                break;
            case LOG_OUT_FAILURE:
                draft.logOutLoading = false; //로그아웃 시도중
                draft.logOutError = action.error;
                break;
            //회원가입
            case SIGN_UP_REQUEST:
                draft.signUpLoading = true; //로그아웃 시도중
                draft.signUpDone = false;
                draft.signUpError = null;
                break;
            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false; //로그아웃 시도중
                draft.signUpDone = true;
                break;
            case SIGN_UP_FAILURE:
                draft.signUpLoading = false; //로그아웃 시도중
                draft.signUpError = action.error;
                break;

            //닉네임 변경
            case CHANGE_NICKNAME_REQUEST:
                draft.changeNicknameLoading = true; //로그아웃 시도중
                draft.changeNicknameDone = false;
                draft.changeNicknameError = null;
                break;
            case CHANGE_NICKNAME_SUCCESS:
                draft.changeNicknameLoading = false; //로그아웃 시도중
                draft.changeNicknameDone = true;
                break;
            case CHANGE_NICKNAME_FAILURE:
                draft.changeNicknameLoading = false; //로그아웃 시도중
                draft.changeNicknameError = action.error;
                break;

            case ADD_POST_TO_ME:
                draft.me.Posts.unshift({ id: action.data });
            // return {
            //     ...state,
            //     me: {
            //         ...state.me,
            //         Posts: [{ id: action.data }, ...state.me.Posts],
            //     },
            // };
            case REMOVE_POST_OF_ME:
                draft.me.Posts = draft.me.Posts.filter(
                    (v) => v.id !== action.data
                );
                break;
            // return {
            //     ...state,
            //     me: {
            //         ...state.me,
            //         Posts: state.me.Posts.filter(
            //             (v) => v.id !== action.data
            //         ),
            //     },
            // };

            default:
                break;
        }
    });
};
