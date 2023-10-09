import shortId from "shortid";

export const initialValue = {
    mainPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: "이현철",
            },
            content: "첫 번째 게시글 #해시태그 #익스프레스",
            Images: [
                {
                    id: shortId.generate(),
                    src: "https://cdn.newswatch.kr/news/photo/202210/60598_55659_5929.png",
                },
                {
                    id: shortId.generate(),
                    src: "https://cdn.newswatch.kr/news/photo/202210/60598_55659_5929.png",
                },
                {
                    id: shortId.generate(),
                    src: "https://cdn.newswatch.kr/news/photo/202210/60598_55659_5929.png",
                },
            ],
            Comments: [
                {
                    id: shortId.generate(),
                    User: {
                        id: shortId.generate(),
                        nickname: "nero",
                    },
                    content: "우와 개정판이 나왔군요~",
                },
                {
                    id: shortId.generate(),
                    User: {
                        id: shortId.generate(),
                        nickname: "hero",
                    },
                    content: "얼른 사고싶어요~",
                },
            ],
        },
    ],
    //이미지업로드 할떄 이미지경로들이 여기 들어간다.
    imagePaths: [],
    //게시글 추가가 완료되었을때 TRue
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,

    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
};
//가짜 데이터

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

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

const reducer = (state = initialValue, action) => {
    switch (action.type) {
        //게시글 추가
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            };

        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost(action.data), ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
            };
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error,
            };

        //댓글 추가
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            };

        case ADD_COMMENT_SUCCESS:
            const postIndex = state.mainPosts.findIndex(
                (v) => v.id === action.data.postId
            );
            const post = { ...state.mainPosts[postIndex] };

            post.Comments = [
                dummyComment(action.data.content),
                ...post.Comments,
            ]; //얕은 복사

            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = post; //댓글 추가하는 부분 너무어려움..
            //불변성을 지키다 보니 가독성이 너무 안좋음
            //

            return {
                ...state,
                mainPosts,
                addCommentLoading: false,
                addCommentDone: true,
            };
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading: false,
                addCommentError: action.error,
            };
        default:
            return state;
    }
};

export default reducer;
