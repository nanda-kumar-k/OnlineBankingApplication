import AllLinks from './AllLinks';
import styled from 'styled-components';
import background from './Images/background.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import banner1 from './Images/1.jpg';
import banner2 from './Images/2.jpg';
import banner3 from './Images/3.jpg';
import banner4 from './Images/4.jpg';
import banner5 from './Images/5.jpg';
import banner6 from './Images/6.jpg';
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import businessimg from "./Images/businessimg.jpg";
import savingsimg from "./Images/savingsimg.jpg";
import Footer from '../Footer/Footer';


import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SavingsIcon from '@mui/icons-material/Savings';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import PaidIcon from '@mui/icons-material/Paid';
import ApiIcon from '@mui/icons-material/Api';
import insuranceimg from "./Images/insurance.png";
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';

export const CHContainer = styled.div`
    margin-top: 11vh;
    width: 90vw;
    height: 88vh;
    display: flex;
    padding: 2vh 5vw 0vh 5vw;
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
    height: 82vh;
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
        height: 80vh;
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

const HomeContainer = styled.div`
    /* margin-top: 100vh; */
    width: 90vw;
    height: auto;
    padding: 0vh 5vw;
`;

const SavingContainer = styled.div`
    margin-top: 5vh;
    width: 90vw;
    height: 100vh;
    background-image: url(${savingsimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
`;

const SavingContentTop = styled.div`
    padding: 15vh 5vw 5vh 5vw;
    width: 80vw;
    height: 30vh; 
    
    #tit {
        /* font-size: 2rem; */
        color: #707070 !important;
        color: #000;
        font-family: 'Lato', sans-serif;
        margin-bottom: 20px;
    }
    #maintit {
        font-family: 'Lato', sans-serif;
        /* 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
        font-size: 3.5rem;
        color: #000;

    }
`;

const SavingContentBottom = styled.div`
    width: 80vw;
    height: 60vh;
    /* background-color: #f5f5f5; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5vh 5vw;
`;

const EachServiceCard = styled.div`
    width: 25vw;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;
    transition: 0.5s;
    cursor: pointer;
    background: transparent linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%) 0% 0% no-repeat padding-box;
    &:hover {
        transform: scale(1.1);
    }
    #abt {
        margin-top: 2vh;
        font-size: 1rem;
        color: #707070 !important;
        margin-bottom: 2vh;
    }
`;

const ApplyNowBtn = styled.button`
    width: 10vw;
    height: 5vh;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    transition: 0.5s;
    &:hover {
        transform: scale(1.1);
    }
`;


const BusinessContainer = styled.div`
    width: 90vw;
    height: 90vh;
    background-image: url(${businessimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
`;


const BusinessContentTop = styled.div`
    padding: 5vh 5vw;
    width: 30vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
    margin-left: 40vw;
    margin-top: 20vh;
    #tit {
        /* font-size: 2rem; */
        color: #707070 !important;
        color: #000;
        font-family: 'Lato', sans-serif;
        margin-bottom: 20px;
    }
    #maintit {
        font-family: 'Lato', sans-serif;
        /* 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
        font-size: 3rem;
        color: #000;
        
    }
`;

const BusinessContentBottom = styled.div`
    width: 80vw;
    height: 60vh;
    /* background-color: #f5f5f5; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5vh 5vw;
`;

const InsuranceContainer = styled.div`
    margin-top: 10vh;
    width: 90vw;
    height: 100vh;
    background-image: url(${insuranceimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
`;

const InsuranceContentTop = styled.div`
    padding: 15vh 5vw 5vh 5vw;
    width: 80vw;
    height: 30vh; 
    
    #tit {
        /* font-size: 2rem; */
        color: #707070 !important;
        color: #000;
        font-family: 'Lato', sans-serif;
        margin-bottom: 20px;
    }
    #maintit {
        font-family: 'Lato', sans-serif;
        /* 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
        font-size: 3.5rem;
        color: #000;

    }
`;

const InsuranceContentBottom = styled.div`
    width: 80vw;
    height: 60vh;
    /* background-color: #f5f5f5; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5vh 5vw;
`;

function CustomerHome() {

    const [currentUser, setCurrentUser] = React.useState(null);
    const navigate = useNavigate();
    const parms = useParams();
    React.useEffect(() => {
        window.scrollTo(0, 0);
        const user = JSON.parse(localStorage.getItem('customerLogin'));
        if(user){
            setCurrentUser(true);
        }
        else {
            navigate('/logintype');
        }
    }, [currentUser, parms, navigate]);
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
                        <SwiperSlide><img src={banner2} alt="S" /></SwiperSlide>
                        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={banner4} alt="S" /></SwiperSlide>
                        <SwiperSlide><img src={banner5} alt="S" /></SwiperSlide>
                        <SwiperSlide><img src={banner3} alt="S" /></SwiperSlide>
                        <SwiperSlide><img src={banner6} alt="S" /></SwiperSlide>
                        </Swiper>
                    </CHRightContainer>
                </CHRight>
            </CHContainer>
            <HomeContainer>
                    <SavingContainer>
                    <SavingContentTop>
                        <h2 id="tit">"Savings Banking"</h2>
                        <p id="maintit">Bank when you want,</p>
                        <p id="maintit">the way you want​​</p>
                        <p>Easy accounts, deposits,loans and insurance for you and your family </p>
                    </SavingContentTop>
                    <SavingContentBottom>
                        <EachServiceCard>
                            <AccountBalanceIcon style={{ fontSize: 50 }} />
                            <p>Saving Account</p>
                            <p id="abt">A savings account is a bank account that earns interest and is designed to help you save money.</p>
                            <ApplyNowBtn onClick={() => {currentUser  ? navigate('/customerhome') : navigate('/logintype')}}>Apply Now</ApplyNowBtn>
                        </EachServiceCard>
                        <EachServiceCard>
                            <CreditScoreIcon style={{ fontSize: 50 }} />
                            <p>Loans</p>
                            <p id="abt">A loan is a sum of money that an individual borrows from a financial institution or bank.</p>
                            <ApplyNowBtn onClick={() => {currentUser  ? navigate('/customerhome') : navigate('/logintype')}}>Apply Now</ApplyNowBtn>
                            </EachServiceCard>
                        <EachServiceCard>
                            <SavingsIcon style={{ fontSize: 50 }} />
                            <p>Deposits</p>
                            <p id="abt">A deposit is a sum of money that is placed in a bank account or other financial institution.</p>
                            <ApplyNowBtn onClick={() => {currentUser  ? navigate('/customerhome') : navigate('/logintype')}}>Apply Now</ApplyNowBtn>
                            </EachServiceCard>
                    </SavingContentBottom>
                </SavingContainer>
                <BusinessContainer>
                    <BusinessContentTop>
                        <h2 id="tit">"Business Banking"</h2>
                        <p id="maintit">By growing your,</p>
                        <p id="maintit">business, you help ​​</p>
                        <p id="maintit">everyone win​</p>
                        <p>Easy business transactions for your application. </p>
                    </BusinessContentTop>
                    <BusinessContentBottom>
                        <EachServiceCard>
                            <AccountBalanceIcon style={{ fontSize: 50 }} />
                            <p>Business Account</p>
                            <p id="abt">A business account is a bank account that is used for business purposes.</p>
                            <ApplyNowBtn onClick={() => {currentUser  ? navigate('/apidocmentation') : navigate('/logintype')}}>Apply Now</ApplyNowBtn>
                        </EachServiceCard>
                        <EachServiceCard>
                            <ApiIcon style={{ fontSize: 50 }} />
                            <p>Business Api</p>
                            <p id="abt">Using Business Api, complete the payments in your application</p>
                            <ApplyNowBtn onClick={() => {currentUser  ? navigate('/apikey') : navigate('/logintype')}}>Apply Now</ApplyNowBtn>
                            </EachServiceCard>
                        <EachServiceCard>
                            <PaidIcon style={{ fontSize: 50 }} />
                            <p>Business Transactions</p>
                            <p id="abt">Using Business Transactions, complete the payments in your application</p>
                            <ApplyNowBtn onClick={() => {currentUser  ? navigate('/businesstransactionhistory') : navigate('/logintype')}}>Apply Now</ApplyNowBtn>
                            </EachServiceCard>
                    </BusinessContentBottom>
                </BusinessContainer>
                <InsuranceContainer>
                    <InsuranceContentTop>
                    <h2 id="tit">"Life Insurance"</h2>
                    <p id="maintit">Ensure financial protection </p>
                    <p id="maintit">and independence for your family​</p>
                    <p>This Service will be provided by RLN Bank Soon</p>
                    </InsuranceContentTop>
                    <InsuranceContentBottom>
                        <EachServiceCard>
                            <SettingsAccessibilityIcon style={{ fontSize: 50 }} />
                            <p>Life Insurance</p>
                            <p id="abt">When you have insurance you know that you are secured against any unforeseen events in life, and this gives you complete peace of mind.  </p>
                            <ApplyNowBtn onClick={() => {currentUser  ? navigate('/lifeinsurance') : navigate('/logintype')}}>Predict Insurance</ApplyNowBtn>
                        </EachServiceCard>
                    </InsuranceContentBottom>
                </InsuranceContainer>
            </HomeContainer>

            <div style={{marginTop:"20vh"}}>
                <Footer/>
            </div>
        </>
    )
}

export default CustomerHome;    