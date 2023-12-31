import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import {
    LOAD_FOLLOWERS_REQUEST,
    LOAD_FOLLOWINGS_REQUEST,
} from "../reducers/user";

const Profile = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user); //로그인한 내 정보 가져오기

    useEffect(() => {
        dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
        });
        dispatch({
            type: LOAD_FOLLOWINGS_REQUEST,
        });
    }, []);

    useEffect(() => {
        if (!(me && me.id)) {
            Router.push("/");
        }
    }, [me && me.id]); //로그인하지 않고 프로필 눌렀을때 홈으로 이동
    if (!me) {
        return null;
    }

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉" data={me.Followings} />
                <FollowList header="팔로워" data={me.Followers} />
            </AppLayout>
        </>
    );
};

export default Profile;
