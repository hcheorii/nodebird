import React, { useCallback, useState } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../reducers/user";

const Signup = () => {
    const ErrorMessage = styled.div`
        color: red;
    `;
    const { signUpLoading } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");
    const [nickname, onChangeNickname] = useInput("");

    const [term, setTerm] = useState("");
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);

    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordCheck(e.target.value);
            setPasswordError(e.target.value !== password);
        },
        [password]
    );

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log(id, nickname, password);
        dispatch({
            type: SIGN_UP_REQUEST,
            data: { email, password, nickname },
        });
    }, [email, password, passwordCheck, term]);
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
                <div style={{ marginTop: 10 }}>
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