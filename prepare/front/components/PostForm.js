import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import React, { useCallback, useRef, useEffect } from "react";
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST } from "../reducers/post";
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
        dispatch({
            type: ADD_POST_REQUEST,
            data: text,
        });
        // setText(""); //여기서 이렇게 초기화해줄 경우에 서버쪽에서 응답으로 오류가 났을때 게시물이 잘 올라가지 않았음에도 초기화되어버림.
        //그래서 위에 useEffect부분을 따로 작성해줌.
        // dispatch(addPost(text));
    }, [text]);

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    const onChangeImages = useCallback((e) => {
        console.log("images", e.target.files);
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append("image", f);
        });
        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        });
    }, []);

    return (
        <Form
            style={{ margin: "10px 0 20px" }}
            encType="multipart/form-data" //이미지의 형식. 비디오도 대부분 이 형식을 따름
            onFinish={onSubmit}
        >
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                <input
                    type="file"
                    name="image"
                    multiple
                    hidden
                    ref={imageInput}
                    onChange={onChangeImages} //이미지를 선택하고 확인을 눌렀을 때 발생하는 이벤트
                />
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
