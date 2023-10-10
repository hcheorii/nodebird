import shortId from "shortid";
import { produce } from "immer";
import faker from "faker";

export const initialValue = {
    mainPosts: [],
    //이미지업로드 할떄 이미지경로들이 여기 들어간다.
    imagePaths: [],

    hasMorePost: true, //true면 가져올 시도를 해라.
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    //게시글 추가가 완료되었을때 TRue
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,

    removePostLoading: false,
    removePostDone: false,
    removePostError: null,

    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
};
//가짜 데이터

export const generateDummyPost = (number) =>
    Array(number)
        .fill()
        .map(() => ({
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: faker.name.findName(),
            },
            content: faker.lorem.paragraph(), //아무 문장,
            Images: [
                {
                    src: faker.image.image(),
                },
            ],
            Comments: [
                {
                    User: {
                        id: shortId.generate(),
                        nickname: faker.name.findName(),
                    },
                    content: faker.lorem.sentence(),
                },
            ],
        }));
//concat은 두개 이상의 배열을 합칠 때 사용

export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});
export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

const dummyPost = (data) => ({
    id: data.id,
    content: data.content,
    User: {
        id: 1,
        nickname: "이현철",
    },
    Images: [],
    Comments: [],
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: "이현철",
    },
});
//리듀서란 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(단, 불변성은 지키면서)
//draft는 불변성 상관없이 바꾸면 immer가 알아서 불변성있게 만들어준다.
const reducer = (state = initialValue, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            //게시글 추가
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.mainPosts.unshift(dummyPost(action.data));
                //unshift란 배열의 맨 앞에다가 추가하는 함수
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;

            //게시글 불러오기
            case LOAD_POSTS_REQUEST:
                draft.loadPostsLoading = true;
                draft.loadPostsDone = false;
                draft.loadPostsError = null;
                break;
            case LOAD_POSTS_SUCCESS:
                draft.loadPostsLoading = false;
                draft.loadPostsDone = true;
                draft.mainPosts = action.data.concat(draft.mainPosts);
                //action.data에는 더미데이터들이 들어있고 draft.mainPosts는 원래 데이터
                draft.hasMorePost = draft.mainPosts.length < 50;
                //50개보다 적으면 has
                break;
            case LOAD_POSTS_FAILURE:
                draft.loadPostsLoading = false;
                draft.loadPostsError = action.error;
                break;

            //댓글 추가
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;

            case ADD_COMMENT_SUCCESS:
                //immer버전 (너무 간단함)
                const post = draft.mainPosts.find(
                    (v) => v.id === action.data.postId
                ); //해당 게시글 찾기
                post.Comments.unshift(dummyComment(action.data.content));
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                //댓글 넣어주기
                break;

            //immer를 안 쓴 부분
            // const postIndex = state.mainPosts.findIndex(
            //     (v) => v.id === action.data.postId
            // );
            // const post = { ...state.mainPosts[postIndex] };

            // post.Comments = [
            //     dummyComment(action.data.content),
            //     ...post.Comments,
            // ]; //얕은 복사

            // const mainPosts = [...state.mainPosts];
            // mainPosts[postIndex] = post; //댓글 추가하는 부분 너무어려움..
            // //불변성을 지키다 보니 가독성이 너무 안좋음

            // return {
            //     ...state,
            //     mainPosts,
            //     addCommentLoading: false,
            //     addCommentDone: true,
            // };
            case ADD_COMMENT_FAILURE:
                draft.addCommentLoading = false;
                draft.addCommentError = action.error;
                break;

            //게시글 삭제
            case REMOVE_POST_REQUEST:
                draft.removePostDone = false;
                draft.removePostLoading = true;
                draft.removePostError = null;
                break;

            case REMOVE_POST_SUCCESS:
                draft.removePostLoading = false;
                draft.removePostDone = true;
                draft.mainPosts = draft.mainPosts.filter(
                    (v) => v.id !== action.data
                );
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;
            default:
                break;
        }
    });
};

export default reducer;
