import { produce } from "immer";
export const initialValue = {
    mainPosts: [],
    //이미지업로드 할떄 이미지경로들이 여기 들어간다.
    imagePaths: [],

    hasMorePost: true, //true면 가져올 시도를 해라. (스크롤 했을 때)

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

    likePostLoading: false,
    likePostDone: false,
    likePostError: null,

    unlikePostLoading: false,
    unlikePostDone: false,
    unlikePostError: null,

    uploadImagesLoading: false,
    uploadImagesDone: false,
    uploadImagesError: null,
};
//가짜 데이터
export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";

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

//리듀서란 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(단, 불변성은 지키면서)
//draft는 불변성 상관없이 바꾸면 immer가 알아서 불변성있게 만들어준다.
const reducer = (state = initialValue, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case LIKE_POST_REQUEST:
                draft.likePostLoading = true;
                draft.likePostDone = false;
                draft.likePostError = null;
                break;
            case LIKE_POST_SUCCESS: {
                const post = draft.mainPosts.find(
                    (v) => v.id === action.data.PostId
                );
                post.Likers.push({ id: action.data.UserId });
                draft.likePostLoading = false;
                draft.likePostDone = true;

                break;
            }
            case LIKE_POST_FAILURE:
                draft.likePostLoading = false;
                draft.likePostError = action.error;
                break;

            case UNLIKE_POST_REQUEST:
                draft.unlikePostLoading = true;
                draft.unlikePostDone = false;
                draft.unlikePostError = null;
                break;
            case UNLIKE_POST_SUCCESS: {
                const post = draft.mainPosts.find(
                    (v) => v.id === action.data.PostId
                );
                post.Likers = post.Likers.filter(
                    (v) => v.id !== action.data.UserId
                );
                draft.unlikePostLoading = false;
                draft.unlikePostDone = true;
                break;
            }

            case UNLIKE_POST_FAILURE:
                draft.unlikePostLoading = false;
                draft.unlikePostError = action.error;
                break;

            //게시글 추가
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.mainPosts.unshift(action.data);
                draft.imagePaths = [];
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
                //concat은 두개 이상의 배열을 합칠 때 사용
                //action.data에는 더미데이터들이 들어있고 draft.mainPosts는 원래 데이터
                draft.hasMorePost = draft.mainPosts.length < 50;
                //50개보다 적으면 불러와야함
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
                    (v) => v.id === action.data.PostId //routes/post.js에서 PostId를 보내줌
                ); //해당 게시글 찾기
                post.Comments.unshift(action.data);
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
                    (v) => v.id !== action.data.PostId
                );
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;

            //이미지 업로드
            case UPLOAD_IMAGES_REQUEST:
                draft.uploadImagesDone = false;
                draft.uploadImagesLoading = true;
                draft.uploadImagesError = null;
                break;

            case UPLOAD_IMAGES_SUCCESS:
                draft.uploadImagesLoading = false;
                draft.uploadImagesDone = true;
                draft.imagePaths = action.data;
                break;
            case UPLOAD_IMAGES_FAILURE:
                draft.uploadImagesLoading = false;
                draft.uploadImagesError = action.error;
                break;
            default:
                break;
        }
    });

export default reducer;
