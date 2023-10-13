import React, { useState } from "react";
import { Button, Card, Popover, Avatar, Image, List, Comment } from "antd";
import {
    RetweetOutlined,
    HeartOutlined,
    MessageOutlined,
    EllipsisOutlined,
    HeartTwoTone,
} from "@ant-design/icons";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import { REMOVE_POST_REQUEST } from "../reducers/post";
import FollowButton from "./FollowButton";

const PostCard = ({ post }) => {
    const dispatch = useDispatch();

    //pages/index.js에서 mainPosts에서 하나씩 뜯어서 보내줌
    const [liked, setLiked] = useState(false); //좋아요
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    //댓글창 열지 말지

    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, []); //좋아요를 한번 더 누르면 좋아요 취소

    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []); //폼 버튼 한번 더 누르면 폼 닫기

    const onRemovePost = useCallback(() => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        });
    }, []);

    const id = useSelector((state) => state.user.me?.id);
    const { removePostloading } = useSelector((state) => state.post);

    return (
        <div style={{ marginBottom: 20 }}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                //이미지가 존재한다면 PostImages를 출력
                actions={[
                    //카드 아래에 존재하는 것들
                    <RetweetOutlined key="retweet" />,
                    liked ? (
                        <HeartTwoTone
                            twoToneColor="red"
                            onClick={onToggleLike}
                        />
                    ) : (
                        <HeartOutlined key="heart" onClick={onToggleLike} />
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
                extra={id && <FollowButton post={post} />}
            >
                <Card.Meta //프로필과 내용 등
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />
            </Card>
            {commentFormOpened && (
                //commentFormOpened가 true이면 열어라
                <div>
                    {/* 어떤 게시글에 댓글을 남기는지.. */}
                    <CommentForm post={post} />
                    <List
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname} //댓글쓴사람
                                    avatar={
                                        <Avatar>{item.User.nickname[0]}</Avatar> //아바타
                                    }
                                    content={item.content} //
                                />
                            </li>
                        )}
                    />
                </div>
            )}
            {/* <CommentForm />
            <Comments /> */}
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comment: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};

export default PostCard;
