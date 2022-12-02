import AllLinks from "../CustomerHome/AllLinks";
import styled from 'styled-components';
import background from './Images/background.png';
import banner1 from './Images/bus1.png';
import banner2 from './Images/bus2.jpeg';
import banner3 from './Images/bus3.jpg';
import banner4 from './Images/bus4.jpg';
import banner5 from './Images/bus5.png';
import banner6 from './Images/bus6.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import * as React from 'react';
import { Autoplay, Pagination, Navigation } from "swiper";
import Footer from '../Footer/Footer';
import { NavLink } from "react-router-dom";

import {CHContainer, CHRight, CHNavbar, BackImg, CHLeft} from "../CustomerHome/CustomerHome";
import { useNavigate, useParams } from 'react-router-dom';



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
    height: 100vh;
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
    const navigate = useNavigate();
    const params = useParams();
    React.useEffect(() => {
        window.scrollTo(0, 0);
        const currentuser = JSON.parse(localStorage.getItem('customerLogin'));
        if ( !currentuser) {
            navigate('/logintype');
        }
    }, [navigate,params]);

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
                        <SwiperSlide><img src={banner1} alt="S" /></SwiperSlide>
                        <SwiperSlide><img src={banner2} alt="S" /></SwiperSlide>
                        <SwiperSlide><img src={banner3} alt="S" /></SwiperSlide>
                        <SwiperSlide><img src={banner4} alt="S" /></SwiperSlide>
                        <SwiperSlide><img src={banner5} alt="S" /></SwiperSlide>
                        <SwiperSlide><img src={banner6} alt="S" /></SwiperSlide>
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
            <div style={{marginTop:"20vh"}}>
            <Footer/>
            </div>
        </>
    )
}

export default PythonDocumentation;