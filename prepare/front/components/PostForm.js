import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import React, { useCallback, useRef, useEffect } from "react";
import { ADD_POST_REQUEST } from "../reducers/post";
import useInput from "../hooks/useInput";

const PostForm = () => {
    const dispatch = useDispatch();
    const [text, onChangeText, setText] = useInput("");
    const { imagePaths, addPostDone, addPostloading } = useSelector(
        (state) => state.post
    );

    const imageInput = useRef();
    //ref는 실제DOM에 접근하기 위해서 사용

    useEffect(() => {
        if (addPostDone) {
            setText("");
        }
    }, [addPostDone]);

    const onSubmit = useCallback(() => {
        dispatch({ type: ADD_POST_REQUEST, data: text });
        // setText(""); //여기서 이렇게 초기화해줄 경우에 서버쪽에서 응답으로 오류가 났을때 게시물이 잘 올라가지 않았음에도 초기화되어버림.
        //그래서 위에 useEffect부분을 따로 작성해줌.
    }, [text]);

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    return (
        <Form
            style={{ margin: "10px 0 20px" }}
            encType="multipart/form-data"
            onFinish={onSubmit}
        >
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button
                    type="primary"
                    style={{ float: "right" }}
                    htmlType="submit"
                >
                    짹짹
                </Button>
            </div>
            <div>
                {imagePaths.map((v) => {
                    <div key={v} style={{ display: "inline-block" }}>
                        <img src={v} style={{ width: "200px" }} alt={v} />
                    </div>;
                })}
            </div>
        </Form>
    );
};

export default PostForm;
