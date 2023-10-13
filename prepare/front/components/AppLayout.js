import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {
    //여기서 children은 AppLayout태그를 사용하는 곳에서
    //열린태그와 닫힌 태그 사이에 있는 내용이 children에 들어간다.
    const { me } = useSelector((state) => state.user);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">
                        <a>노드버드</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">
                        <a>프로필</a>
                    </Link>
                </Menu.Item>

                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>

                <Menu.Item>
                    <Link href="/signup">
                        <a>회원가입</a>
                    </Link>
                </Menu.Item>
            </Menu>

            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {me ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a
                        href="https://www.notion.so/React-NodeBird-SNS-a918234623d4474eb767134231443283"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Made by Hyeoncheol
                    </a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired, //return 안에 들어갈 수 있는 모든 것들은 node 타입이다.
};

export default AppLayout;
