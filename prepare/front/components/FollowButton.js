import React, { useCallback } from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from "../reducers/user";
const FollowButton = ({ post }) => {
    const { me, followLoading, unFollowLoading } = useSelector(
        (state) => state.user
    );
    const dispatch = useDispatch();

    const isFollowing = me?.Followings.find((v) => v.id === post.User.id);
    //이미 팔로우를 하고 있는지.
    const onClickButton = useCallback(() => {
        if (isFollowing) {
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: post.User.id, //이 게시물을 쓴 사람의 정보
            });
        } else {
            dispatch({
                type: FOLLOW_REQUEST,
                data: post.User.id, //이 게시물을 쓴 사람의 정보
            });
        }
    }, [isFollowing]);
    return (
        <Button
            loading={followLoading || unFollowLoading}
            onClick={onClickButton}
        >
            {isFollowing ? "언팔로우" : "팔로우"}
        </Button>
    );
};

FollowButton.propTypes = {
    post: PropTypes.object.isRequired,
};
export default FollowButton;
