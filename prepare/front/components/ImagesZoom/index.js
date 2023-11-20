import React, { useState } from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Overlay,
    Global,
    Header,
    CloseBtn,
    ImgWrapper,
    Indicator,
    SlickWrapper,
} from "./styles";
//따로 만든 이유..
// 스타일드 컴포넌트가 많아서 ..

const ImagesZoom = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <Overlay>
            <Global />
            <Header>
                <h1>상세 이미지</h1>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </Header>
            <SlickWrapper>
                <div>
                    <Slick
                        initialSlide={0}
                        beforeChange={(slide) => setCurrentSlide(slide)}
                        infinite // 끝까지 가면 다시 처음으로
                        arrows={false} // 넘기는 화살표 삭제
                        slidesToShow={1} // 한 번에 하나씩만
                        slidesToScroll={1} // 하나씩 넘어가게
                    >
                        {images.map((v) => (
                            <ImgWrapper key={v.src}>
                                <img
                                    src={`http://localhost:3065/${v.src}`}
                                    alt={v.src}
                                />
                            </ImgWrapper>
                        ))}
                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlide + 1}
                            {` `}/{images.length}
                        </div>
                    </Indicator>
                </div>
            </SlickWrapper>
        </Overlay>
    );
};

ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
