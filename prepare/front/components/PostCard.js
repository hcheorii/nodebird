import React, { useState } from "react";
import { Button, Card, Popover, Avatar, Image, List, Comment } from "antd";
import {
    RetweetOutlined,
    HeartOutlined,
    MessageOutlined,
    EllipsisOutlined,
    HeartTwoTone,
} from "@ant-design/icons";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import {
    REMOVE_POST_REQUEST,
    LIKE_POST_REQUEST,
    UNLIKE_POST_REQUEST,
    RETWEET_REQUEST,
} from "../reducers/post";
import FollowButton from "./FollowButton";

const PostCard = ({ post }) => {
    //pages/index.js에서 mainPosts에서 하나씩 뜯어서 보내줌
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.me?.id); //내 아이디
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    //댓글창 열지 말지

    const onLike = useCallback(() => {
        if (!id) {
            return alert("로그인이 필요합니다."); //로그인을 하지 않았다면 알림 띄우고 return
        }
        return dispatch({
            type: LIKE_POST_REQUEST,
            data: post.id,
        });
    }, [id]); //좋아요

    const onUnlike = useCallback(() => {
        if (!id) {
            return alert("로그인이 필요합니다."); //로그인을 하지 않았다면 알림 띄우고 return
        }
        return dispatch({
            type: UNLIKE_POST_REQUEST,
            data: post.id,
        });
    }, [id]); //좋아요 취소

    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []); //폼 버튼 한번 더 누르면 폼 닫기

    const onRemovePost = useCallback(() => {
        if (!id) {
            return alert("로그인이 필요합니다."); //로그인을 하지 않았다면 알림 띄우고 return
        }
        return dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        });
    }, [id]);

    const onRetweet = useCallback(() => {
        if (!id) {
            return alert("로그인이 필요합니다."); //로그인을 하지 않았다면 알림 띄우고 return
        }
        return dispatch({
            type: RETWEET_REQUEST,
            data: post.id,
        });
    }, [id]);

    const { removePostloading } = useSelector((state) => state.post);
    const liked = post.Likers && post.Likers.find((v) => v.id === id); //게시글 좋아요 누른 사람 중에 내가 있는지.

    return (
        <div style={{ marginBottom: 20 }}>
            <Card
                cover={post.Images?.[0] && <PostImages images={post.Images} />}
                //이미지가 존재한다면 PostImages를 출력
                actions={[
                    //카드 아래에 존재하는 것들
                    <RetweetOutlined key="retweet" onClick={onRetweet} />, //리트윗 버튼
                    liked ? (
                        <HeartTwoTone twoToneColor="red" onClick={onUnlike} />
                    ) : (
                        <HeartOutlined key="heart" onClick={onLike} />
                    ),
                    <MessageOutlined onClick={onToggleComment} key="comment" />,
                    <Popover //더보기 같은 역할
                        key="more"
                        content={
                            <Button.Group>
                                {id && post.User.id === id ? (
                                    <>
                                        {/* 내가 쓴 글이면 수정, 삭제 */}
                                        <Button>수정</Button>
                                        <Button
                                            type="danger"
                                            onClick={onRemovePost}
                                            loading={removePostloading}
                                        >
                                            삭제
                                        </Button>
                                    </>
                                ) : (
                                    // 내가 쓴 글이 아니라면
                                    <Button>신고</Button>
                                )}
                            </Button.Group>
                        }
                    >
                        <EllipsisOutlined />
                    </Popover>,
                ]}
                title={
                    post.RetweetId
                        ? `${post.User.nickname}님이 리트윗하셨습니다.`
                        : null
                }
                extra={id && <FollowButton post={post} />}
            >
                {post.RetweetId && post.Retweet ? (
                    <Card
                        cover={
                            post.Retweet.Images?.[0] && (
                                <PostImages images={post.Retweet.Images} />
                            )
                        }
                    >
                        <Card.Meta //프로필과 내용 등
                            avatar={
                                <Avatar>{post.Retweet.User.nickname[0]}</Avatar>
                            }
                            title={post.Retweet.User.nickname}
                            description={
                                <PostCardContent
                                    postData={post.Retweet.content}
                                />
                            }
                        />
                    </Card>
                ) : (
                    <Card.Meta //프로필과 내용 등
                        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                        title={post.User.nickname}
                        description={
                            <PostCardContent postData={post.content} />
                        }
                    />
                )}
            </Card>
            {commentFormOpened && (
                //commentFormOpened가 true이면 열어라
                <div>
                    {/* 어떤 게시글에 댓글을 남기는지.. */}
                    <CommentForm post={post} />
                    <List
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments} //데이터는 여기서 가져와서
                        renderItem={(
                            item //이런식으로 출력한다
                        ) => (
                            <li>
                                <Comment
                                    author={item.User.nickname} //댓글쓴사람
                                    avatar={
                                        <Avatar>{item.User.nickname[0]}</Avatar> //아바타
                                    }
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}
        </div>
    );
};

PostCard.PropTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.string,
        Comment: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
        Likers: PropTypes.arrayOf(PropTypes.object),
        RetweetId: PropTypes.number,
        Retweet: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
};

export default PostCard;
