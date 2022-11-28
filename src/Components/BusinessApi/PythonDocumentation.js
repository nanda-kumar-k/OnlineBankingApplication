import AllLinks from "../CustomerHome/AllLinks";
import styled from 'styled-components';
import background from './Images/background.png';
import banner from './Images/insurance1.jpg';
import banner2 from './Images/insurance2.jpg';
import banner10 from './Images/insurance10.jpg';
import banner11 from './Images/insurance11.jpg';
import banner12 from './Images/insurance12.jpg';
import banner3 from './Images/insurance3.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import * as React from 'react';
import { Autoplay, Pagination, Navigation } from "swiper";
import Footer from '../Footer/Footer';
import { NavLink } from "react-router-dom";

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
    overflow-y: scroll;
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


const ApiKeyContainer = styled.div`
    width: 60vw;
    padding: 2vh 2vw;
    height: 500vh;
    background-color: white;
    /* background-color: red; */

    h1 {
        margin-top: 50px;
        text-align: center;
        color: #3498db;
        font-weight: 1000;
        font-family: "Roboto Condensed", "Open Sans", sans-serif;
        line-height: normal;
    }
    #title {
        text-align: center;
        color: #3498db;
        font-weight: 1000;
        font-family: "Roboto Condensed", "Open Sans", sans-serif;
        line-height: normal;
    }
    p {
        /* margin-top: 20px; */
        /* text-align: center; */
        /* color: #768089; */
        /* font-family: "Roboto Condensed", "Open Sans", sans-serif; */
        /* line-height: normal; */
        text-align: justify;
        margin-bottom: 15px;
        font-size: 1.1em;
        font-weight: 500;
    }
    #subtitle {
        margin-top: 20px;
        font-weight: 400;
        font-size: 1.4em;
        margin-bottom: 20px;

    }

    #content {
        margin-right: 20px;
        margin-left: 20px;
        color: #444;
    }

`;

function PythonDocumentation() {

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
                            <SwiperSlide><img src={banner3} alt="S" /></SwiperSlide>
                            <SwiperSlide><img src={banner10} alt="S" /></SwiperSlide>
                            <SwiperSlide><img src={banner11} alt="S" /></SwiperSlide>
                            <SwiperSlide><img src={banner12} alt="S" /></SwiperSlide>
                        </Swiper>
                        <ApiKeyContainer>
                            <h1>Business Api</h1>
                            <h2 id="title">Grow Your Business With RLN Bank</h2>
                            <h3 id="title">In the business world, the rearview mirror is always clearer than the windshield.</h3>
                            <p style={{fontSize : "25px", marginTop : "50px",
                            fontWeight: 600}}>Business With RLN Bank</p>
                            <p> RLN Bank provides an easy way for developers for online payments. Developers need not take bother but the security, RLN Bank will take care of all security of the customer transactions. Grow your Business with RLN Bank.   </p>
                            <p>This Service Will be Available Soon...! </p>

                            <p style={{fontSize : "25px", marginTop : "50px",
                            fontWeight: 600, textAlign:"center"}}>Python Api Service will be Available Soon.</p>
                            
                            <p style={{fontSize : "25px", marginTop : "50px",
                            fontWeight: 600}}>Available Platform</p>
                            <p  id = "content" >1. <NavLink to={"/springbootdocmentation"} >Spring Boot</NavLink>  </p>
                            <p  id = "content" >1. <NavLink to={"/pythondoc"} >Python</NavLink>  </p>
                            </ApiKeyContainer>
                    </CHRightContainer>
                    
                </CHRight>
            </CHContainer>
            <Footer/>
        </>
    )
}

export default PythonDocumentation;