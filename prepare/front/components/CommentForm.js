import { Form, Button, Input } from "antd";
import React, { useCallback, useEffect } from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../reducers/post";

const CommentForm = ({ post }) => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.me?.id);
    const { addCommentDone, addCommentLoading } = useSelector(
        (state) => state.post
    );

    const [commentText, onChangeCommentText, setCommentText] = useInput("");

    useEffect(() => {
        if (addCommentDone) {
            setCommentText("");
        }
    }, [addCommentDone]); //댓글 다 올라갔을 때 done응답이 오면 초기화해주기

    const onSubmitComment = useCallback(() => {
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: { content: commentText, postId: post.id, userId: id },
        });
    }, [commentText, id]); //댓글을 추가하려면 id를 통해서 해당 게시글을 찾고 그 해당하는 게시글의
    //Comments로 이동
    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{ position: "relative", margin: 0 }}>
                <Input.TextArea
                    value={commentText}
                    onChange={onChangeCommentText}
                    rows={4}
                />
                <Button
                    style={{
                        position: "absolute",
                        right: 0,
                        top: 105,
                        zIndex: 1,
                    }}
                    type="primary"
                    htmlType="submit"
                    loading={addCommentLoading}
                >
                    삐약
                </Button>
            </Form.Item>
        </Form>
    );
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
};

export default CommentForm;
