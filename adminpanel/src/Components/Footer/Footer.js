import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import rlnlogo from './Images/logo.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import banner1 from './Images/footer1.jpg';
import banner2 from './Images/footer2.jpg';
import banner3 from './Images/footer3.jpg';
import banner4 from './Images/footer4.jpg';
import banner5 from './Images/footer5.jpg';
import banner6 from './Images/footer6.jpg';
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const AllContainer = styled.div`
    width: auto;
    height: auto;
    background:  #051E31;
    color: white;
`;

const TopContainer = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: #F4F8FC; */
    position: relative;
    .topCol {
        width: 100vw;
        height: 25vh;
        background-color: white;
    }
    .bottomCol {
        width: 100vw;
        height: 30vh;
        /* background-color: black; */
    }
`;

const SliderContainer = styled.div`
    width: 70vw;
    height: 35vh;
    position: absolute;
    top: 5vh;
    left: 15vw;
    /* background-color: red; */
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
    width: 90vw;
    height: 30vh;
    /* background:  linear-gradient(white,rgba(34, 40, 40, 0.7));; */
    /* background-color: yellow; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0vh 5vw;
    color: white;
    
`;

const EachContainer = styled.div`
    width: 20vw;
    height: 30vh;
    /* background-color: red; */

    .divcon1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* background-color: blue;  */
            #mainheading {
            text-align: center;
            font-size: 2rem;
            font-weight: 600;
            margin-top: 5px;
            color: white;
            font-family: 'Lato', sans-serif;
        }   
    }
    .divcon2 {
        /* background-color: green; */
        padding: 0vh 0vw 0vh 3vw;
        h3 {
            margin-top: 20px;
            color: white;
            font-family: 'Lato', sans-serif;
        }
        ul {
            li {
                margin: 10px 20px;
                color: white;
                font-family: 'Lato', sans-serif;
            }
        }
        p {
            cursor: pointer;
            &:hover {
                color: #3498db;
            }
        }
        .social {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 150px;
            margin-top: 20px;
            .social-icon {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: #000;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                background-color: white;
                color: black;
                &:hover {
                    background-color: #3498db;
                }
            }
        }

    }
`;

const LogoImg = styled.img`
    margin-top: 20px;
    width: 100px;
    height: 100px;
`


function Footer (){
    return(
        <>
        <AllContainer>
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
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src ={banner6} alt="S" /></SwiperSlide>
                    <SwiperSlide><img src={banner1} alt="S" /></SwiperSlide>
                    <SwiperSlide><img src={banner2} alt="S" /></SwiperSlide>
                    <SwiperSlide><img src={banner3} alt="S" /></SwiperSlide>
                    <SwiperSlide><img src={banner4} alt="S" /></SwiperSlide>
                    <SwiperSlide><img src={banner5} alt="S" /></SwiperSlide>
                    
                </Swiper>
                </SliderContainer>
            </TopContainer>
            <BottomContainer>
            <hr/>
                <EachContainer>
                    <div className='divcon1'>
                        <LogoImg src={rlnlogo} alt="logo"/>
                        <h1 id='mainheading'>RLN BANK</h1>
                        <h4>Everything you need, Everything is here.</h4>
                    </div>
                </EachContainer>
                <EachContainer >
                    <div className='divcon2'>
                        <h3>Saving Banking</h3>
                        <ul>
                            <li><p>Saving Account</p></li>
                            <li><p>Home Loans</p></li>
                            <li><p>Education Loans</p></li>
                            <li><p>Deposits</p></li>
                            <li><p>Insurance</p></li>
                        </ul>
                        
                    </div>
                </EachContainer>
                <EachContainer>
                    <div className='divcon2'>
                        <h3>Business Banking</h3>
                        <ul>
                            <li><p>Business Account</p></li>
                            <li><p>Business Api</p></li>
                            <li><p>Business Transactions</p></li>
                            <li><p>Business Api Documentation</p></li>
                        </ul>
                        
                    </div>
                </EachContainer>
                <EachContainer>
                    <div className='divcon2'>
                        <h3>Support</h3>
                        <ul>
                            <li><p>FAQ</p></li>
                            <li><p>Terms & Conditions</p></li>
                            <li><p>Privacy Policy</p></li>
                        </ul>
                        <div className='social'>
                            <div className='social-icon'>
                                <LinkedInIcon/>
                            </div>
                            <div className='social-icon'>
                                <TwitterIcon/>
                            </div>
                            <div className='social-icon'>
                                <FacebookIcon/>
                            </div>
                            <div className='social-icon'>
                                <InstagramIcon/>
                            </div>

                        </div>
                    </div>
                </EachContainer>
                <hr/>
            </BottomContainer>
        </AllContainer>
        </>
    )
}

export default Footer;