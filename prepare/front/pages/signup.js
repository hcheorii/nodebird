import React, { useCallback, useState, useEffect } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../reducers/user";
import Router from "next/router";

const Signup = () => {
    const dispatch = useDispatch();

    const ErrorMessage = styled.div`
        color: red;
    `;

    const { signUpLoading, me, signUpDone, signUpError } = useSelector(
        (state) => state.user
    );

    useEffect(() => {
        if (signUpDone) {
            Router.replace("/");
        }
    }, [signUpDone]);

    useEffect(() => {
        if (signUpError) {
            alert(signUpError);
        }
    }, [signUpError]);

    const [email, onChangeEmail] = useInput(""); //이메일
    const [password, onChangePassword] = useInput(""); //비밀번호
    const [nickname, onChangeNickname] = useInput(""); //닉네임

    const [term, setTerm] = useState(""); //약관 동의
    const [termError, setTermError] = useState(false); //약관 동의 안했을때
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);

    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordCheck(e.target.value); //비밀번호 확인이 같은지 다른지
            setPasswordError(e.target.value !== password); //다르면 에러 체크
        },
        [password] //비밀번호가 바뀔 때 마다 체크
    );

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        dispatch({
            type: SIGN_UP_REQUEST,
            data: { email, password, nickname }, //회원가입 정보를 넘겨줘야함.
        });
    }, [email, password, passwordCheck, term]); //변경될때 마다 체크.

    return (
        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-email">이메일</label>
                    <br />
                    <Input
                        name="user-email"
                        value={email}
                        required
                        onChange={onChangeEmail}
                        type="email"
                    ></Input>
                </div>

                <div>
                    <label htmlFor="user-nickname">닉네임</label>
                    <br />
                    <Input
                        name="user-nickname"
                        value={nickname}
                        required
                        onChange={onChangeNickname}
                        type="text"
                    ></Input>
                </div>

                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input
                        name="user-password"
                        value={password}
                        required
                        type="password"
                        onChange={onChangePassword}
                    ></Input>
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        value={passwordCheck}
                        required
                        type="password"
                        onChange={onChangePasswordCheck}
                    ></Input>
                    {passwordError && (
                        <ErrorMessage>
                            비밀번호가 일치하지 않습니다.
                        </ErrorMessage>
                    )}
                </div>

                <Checkbox
                    name="user-term"
                    checked={term}
                    onChange={onChangeTerm}
                >
                    이현철 말을 잘 들을 것을 동의합니다.
                </Checkbox>

                {termError && (
                    <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>
                )}

                <div style={{ marginTop: 20, textAlign: "center" }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={signUpLoading}
                    >
                        가입하기
                    </Button>
                </div>
            </Form>
        </AppLayout>
    );
};

export default Signup;
