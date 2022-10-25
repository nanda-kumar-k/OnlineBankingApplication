import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

// import required modules
// import { Autoplay, Pagination, Navigation } from "swiper";

const TopContainer = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F4F8FC;
    position: relative;

    .topCol {
        width: 100vw;
        height: 25vh;
        background-color: white;
    }
    .bottomCol {
        width: 100vw;
        height: 30vh;
        background-color: black;
    }
`;

const SliderContainer = styled.div`
    width: 70vw;
    height: 35vh;
    position: absolute;
    top: 5vh;
    left: 15vw;
    background-color: red;
    /* position: relative; */
    .swiper {
        width: 100%;
        height: 35vh;
        position: relative;
        margin-left: -0vw;
        /* margin: 0 auto;
        border-radius: 10px; */
        /* border-bottom: 1px solid #E6E6E6; */
    
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const BottomContainer = styled.div`
    width: 100vw;
    height: 40vh;
    background-color: yellow;
`;


function Footer (){
    return(
        <>
            <TopContainer>
                <div className="topCol"></div>
                <div className="bottomCol"></div>
                <SliderContainer>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    }}
                    // pagination={{
                    // clickable: true,
                    // }}
                    // navigation={true}
                    // modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
                </SliderContainer>
            </TopContainer>
            <BottomContainer>
            </BottomContainer>
        </>
    )
}

export default Footer;