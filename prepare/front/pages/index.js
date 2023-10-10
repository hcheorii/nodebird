import AppLayout from "../components/AppLayout";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { useEffect } from "react";
import { LOAD_POSTS_REQUEST } from "../reducers/post";

const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const { mainPosts, hasMorePost, loadPostsLoading } = useSelector(
        (state) => state.post
    );
    useEffect(() => {
        dispatch({
            type: LOAD_POSTS_REQUEST,
        });
    }, []);

    useEffect(() => {
        function onScroll() {
            console.log(
                window.scrollY,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight
            );
            if (
                //만약 스크롤을 끝까지 다 내렸으면
                window.scrollY + document.documentElement.clientHeight >
                document.documentElement.scrollHeight - 300
            ) {
                if (hasMorePost && !loadPostsLoading) {
                    //로딩중이지 않을때만 딱 한번
                    dispatch({
                        //새로운거 불러와라
                        type: LOAD_POSTS_REQUEST,
                    });
                }
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [hasMorePost, loadPostsLoading]);

    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </AppLayout>
    );
};

export default Home;
