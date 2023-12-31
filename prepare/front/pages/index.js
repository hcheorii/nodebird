import AppLayout from "../components/AppLayout";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { useEffect } from "react";
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import wrapper from "../store/configureStore";
const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const { mainPosts, hasMorePost, loadPostsLoading, retweetError } =
        useSelector((state) => state.post);
    useEffect(() => {
        if (retweetError) {
            alert(retweetError);
        }
    }, [retweetError]);

    useEffect(() => {
        dispatch({
            type: LOAD_MY_INFO_REQUEST,
        });
        dispatch({
            type: LOAD_POSTS_REQUEST,
        });
    }, []);
    useEffect(() => {
        function onScroll() {
            if (
                //만약 스크롤을 끝에서 -300까지 다 내렸으면
                window.scrollY + document.documentElement.clientHeight >
                document.documentElement.scrollHeight - 300
            ) {
                if (hasMorePost && !loadPostsLoading) {
                    //로딩중이지 않을때만 딱 한번
                    const lastId = mainPosts[mainPosts.length - 1]?.id;
                    dispatch({
                        //새로운거 불러와라
                        type: LOAD_POSTS_REQUEST,
                        lastId,
                    });
                }
            }
        }
        window.addEventListener("scroll", onScroll); //스크롤 할때마다 발생하는 이벤트
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [hasMorePost, loadPostsLoading, mainPosts]);

    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => (
                <PostCard key={post.id} post={post} />
                //PostCard에 포스트 데이터 보내주기
            ))}
        </AppLayout>
    );
};

export default Home;
