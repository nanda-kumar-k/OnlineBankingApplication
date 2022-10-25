import AllLinks from './AllLinks';
import styled from 'styled-components';
import background from './Images/background.png';
import banner from './Images/banner.png';
import banner2 from './Images/banner2.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Footer from '../Footer/Footer';


export const CHContainer = styled.div`
    width: 90vw;
    height: 84vh;
    display: flex;
    padding: 5vh 5vw 0vh 5vw;
    position: relative;
    overflow: hidden;

`;

export const BackImg = styled.img`
    width: 200%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

export const CHLeft = styled.div`
    width: 18vw;
    height: 82vh;
    /* background-color: blue; */
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 1vh 1vw;

`;

export const CHNavbar = styled.div`
    width: 16vw;
    height: 78vh;
    /* background-color: red; */
    background-color: white;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 1vh 1vw;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 1px whitesmoke;
    border-bottom: 1px solid #E6E6E6;
    -webkit-box-shadow: 6px 3px 6px #0000001f;
    /* box-shadow: 6px 3px 6px #0000001f; */
    a {
        text-decoration: none;
        color: black;
    }
    h3 {
        margin: 2px;
        padding: 2px;
    }
    p {
        margin-left: 2px;
        padding: 2px;

        &:hover {
            /* background-color: #3498db; */
            color: #3498db;
        }
    }
    hr {
        margin-top: 10px;
    }
`;

export const CHRight = styled.div`
    width: 76vw;
    height: 82vh;
    //margin-left: 20vw;
    /* background-color: green; */
    position: relative;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
    padding: 1vh 2vw; 

    &::-webkit-scrollbar {
        display: none;
    }
`;

const CHRightContainer = styled.div`
    padding: 1vh 1vw;
    width: 64vw;
    height: 80vh;
    /* background-color: red; */
    position: relative;
    .swiper {
        width: 100%;
        height: 50vh;
        margin: 0 auto;
        border-radius: 10px;
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

function CustomerHome() {
    return (
        <>
            <CHContainer>
                <BackImg src={background} alt="" />
                <CHLeft>
                    <CHNavbar>
                        <AllLinks/>
                    </CHNavbar>
                </CHLeft>
                <CHRight>
                <CHRightContainer>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={banner} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={banner2} alt="S" /></SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </CHRightContainer>
                </CHRight>
              
            </CHContainer>
            <Footer/>
        </>
    )
}

export default CustomerHome;    