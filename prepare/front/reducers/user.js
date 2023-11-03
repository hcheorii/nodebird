import { produce } from "immer";

export const initialValue = {
    loadUserLoading: false, //로그인 정보 불러오기
    loadUserDone: false,
    loadUserError: null,

    logInLoading: false, //로그인 시도중
    logInDone: false,
    logInError: null,

    logOutLoading: false, //로그아웃 시도중
    logOutDone: false,
    logOutError: null,

    signUpLoading: false, //회원가입 시도중
    signUpDone: false,
    signUpError: null,

    followLoading: false, // 닉네임 변경 시도중
    followDone: false,
    followError: null,

    unfollowLoading: false, // 닉네임 변경 시도중
    unfollowDone: false,
    unfollowError: null,

    me: null,
    signUpData: {},
    LoginData: {},
};
export const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
export const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
export const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";

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

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    };
};

export const logoutRequestAction = () => {
    return {
        type: LOG_OUT_REQUEST,
    };
};

export default (state = initialValue, action) => {
    //리듀서란 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(단, 불변성은 지키면서)
    //draft는 불변성 상관없이 바꾸면 immer가 알아서 불변성있게 만들어준다.
    return produce(state, (draft) => {
        switch (action.type) {
            //유저정보 가져오기
            case LOAD_MY_INFO_REQUEST:
                draft.loadUserLoading = true;
                draft.loadUserError = null;
                draft.loadUserDone = false;
                break;
            case LOAD_MY_INFO_SUCCESS:
                draft.loadUserLoading = false;
                draft.me = action.data; //me가 null이면 로그인되어있지 않음
                draft.loadUserDone = true;
                break;
            case LOAD_MY_INFO_FAILURE:
                draft.loadUserLoading = false;
                draft.loadUserError = action.error;
                break;

            //팔로우 시도중
            case FOLLOW_REQUEST:
                draft.followLoading = true;
                draft.followError = null;
                draft.followDone = false;
                break;
            case FOLLOW_SUCCESS:
                draft.followLoading = false;
                draft.me.Followings.push({ id: action.data });
                draft.followDone = true;
                break;
            case FOLLOW_FAILURE:
                draft.followLoading = false;
                draft.followError = action.error;
                break;

            //언팔로우 시도중
            case UNFOLLOW_REQUEST:
                draft.unfollowLoading = true;
                draft.unfollowError = null;
                draft.unfollowDone = false;
                break;
            case UNFOLLOW_SUCCESS:
                draft.unfollowLoading = false;
                draft.me.Followings = draft.me.Followings.filter(
                    (v) => v.id !== action.data
                ); //그 해당 사람만 빠지게 된다.
                draft.unfollowDone = true;
                break;
            case UNFOLLOW_FAILURE:
                draft.unfollowLoading = false;
                draft.unfollowError = action.error;
                break;
            //로그인
            case LOG_IN_REQUEST:
                draft.logInLoading = true;
                draft.logInError = null;
                draft.logInDone = false;
                break;
            case LOG_IN_SUCCESS:
                draft.logInLoading = false;
                draft.me = action.data; //더미데이터
                draft.logInDone = true;
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
                draft.signUpLoading = true; //로그인 시도중
                draft.signUpDone = false;
                draft.signUpError = null;
                break;
            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false; //로그인 시도중
                draft.signUpDone = true;
                break;
            case SIGN_UP_FAILURE:
                draft.signUpLoading = false; //로그인 시도중
                draft.signUpError = action.error;
                break;

            //닉네임 변경
            case CHANGE_NICKNAME_REQUEST:
                draft.changeNicknameLoading = true;
                draft.changeNicknameDone = false;
                draft.changeNicknameError = null;
                break;
            case CHANGE_NICKNAME_SUCCESS:
                draft.changeNicknameLoading = false;
                draft.changeNicknameDone = true;
                draft.me.nickname = action.data.nickname;
                break;
            case CHANGE_NICKNAME_FAILURE:
                draft.changeNicknameLoading = false;
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
