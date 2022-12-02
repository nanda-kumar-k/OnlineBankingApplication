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
import { useNavigate, useParams } from 'react-router-dom';
import {CHContainer, CHRight, CHNavbar, BackImg, CHLeft} from "../CustomerHome/CustomerHome";

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
    height: 400vh;
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


const TranTable = styled.table`
    width: 40vw;
    margin-left: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    height: auto;
    border-collapse: collapse;
    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 10px;
        background-color: white;
    }
    td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        border-collapse: collapse;
    }
    tr:nth-child(even) {
        background-color: #f4f8fc;
    }
    tr:nth-child(odd) {
        background-color: white;
    }

`

// const ApiKeyButton = styled.button`
//     width: 20vw;
//     height: 50px;
//     margin-left: 20vw;
//     background-color: #3498db;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     font-size: 1.2em;
//     font-family: "Roboto Condensed", "Open Sans", sans-serif;
//     line-height: normal;
//     cursor: pointer;
//     margin-top: 20px;
//     margin-bottom: 50px;
//     &:hover {
//         background-color: #2980b9;
//     }
// `;


function ApiDocumentation() {
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
                            <p style={{fontSize : "25px", marginTop : "50px",
                            fontWeight: 600}}>Integration Guide</p>

                            <p id="subtitle">Integration steps : </p>

                            <p  id = "content" >1. Create a Payment request</p>
                            <p id = "content" >2. Redirect payer to request link</p>
                            <p id = "content" >3. Handle successful/failed payments</p>
                            <p id = "content" >4. Webhook</p>

                            <p id="subtitle" >Create a Payment Request:</p>
                            <p id = "content">
                            Get the final amount from your cart total and call the post request to create a payment request. For post request you need to pass the all the required parameters.
                            </p>
                            <p id = "content">The clientUsername field can be used to pass the custom data (unique identifier) created on your end. This is going to be useful later on to identify the order using this custom data (unique identifier) for which a particular client was done the payment.</p>
                            
                            <p id="subtitle" >Redirect payer to request link:</p>
                            <p id = "content">The Payment link creation will return a longurl, this URL can be used to get the payment from the user. You need to redirect the buyer to this Payment link programmatically by using redirection statements in your respective programming language.</p>
                            
                            <p id="subtitle" >Post payment processing:</p>
                            <p id = "content" style={{fontWeight: 600}}>1. Redirection</p>
                            <p id = "content">Once the payment is done user will be redirected to the redirectURL specified during the link creation. Redirect will take place in both case, for successfull and failure payment.  </p>
                            
                            <p id = "content" style={{fontWeight: 600}}>2. Webhook ( Your end ) :</p>
                            <p id = "content">Webhook is the URL to which you send the payment details as a POST request. Note that the content type of this request is application/x-www-form-urlencoded</p>
                            <p id = "content">Following fields need to sent with the webhook request:</p>
                            <TranTable>
                                <tr>
                                    <th>Field</th>
                                    <th>Description</th>
                                    <th>Example</th>
                                </tr>
                                <tr>
                                    <td>Client Username</td>
                                    <td>Unique identifier of the client in your end application </td>
                                    <td>123456ADcde</td>
                                </tr>
                                <tr>
                                    <td>amount</td>
                                    <td>Amount paid by the client</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>purpose</td>
                                    <td>Purpose of the payment</td>
                                    <td>Company Name </td>
                                </tr>
                                <tr>
                                    <td>Redirect URL</td>
                                    <td>URL to which the client will be redirected after the payment</td>
                                    <td>https://www.example.com/redirect</td>
                                </tr>
                                <tr>
                                    <td>Webhook URL/ Redirect Get URL</td>
                                    <td>URL to which the payment details will be sent to your end application. </td>
                                    <td>https://www.example.com/webhook</td>
                                </tr>
                                <tr>
                                    <td>Api Key</td>
                                    <td>Api Key to access the RLN Bank API</td>
                                    <td>0b52c981-f1f9-4a2a-92e3-c02cd592d35d</td>
                                </tr>
                                <tr>
                                    <td>Auth Domain</td>
                                    <td>Domain to access the RLN Bank API</td>
                                    <td>cc9f8fe6-7cb0-4d7d-a4fe-f213d65e64c2.nandakumark</td>
                                </tr>
                            </TranTable>
                            
                            <p id = "content" style={{fontWeight: 600}}>3. Webhook ( Redirect Get Url ) </p>
                            <p id = "content">Webhook is the URL to which we send the payment details as a POST request. Note that the content type of this request is application/x-www-form-urlencoded.</p>
                            <p id = "content">Following fields are sent with the webhook request:</p>
                            <TranTable>
                                <tr>
                                    <th>Field</th>
                                    <th>Description</th>
                                    <th>Example</th>
                                </tr>
                                <tr>
                                    <td>Status Code</td>
                                    <td>Payment status code</td>
                                    <td>200 for successfull payment and 400 for failure payment </td>
                                </tr>
                                <tr>
                                    <td>Time Stamp</td>
                                    <td>Time stamp of the Request</td>
                                    <td>2021-05-20 12:00:00</td>
                                </tr>
                                <tr>
                                    <td>Message</td>
                                    <td>Message of the payment</td>
                                    <td>Payment Successfull / Payment Failed </td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>Description of the payment Status </td>
                                    <td>Payment Successfull / Payment Failed </td>
                                </tr>
                                <tr>
                                    <td>Payment ID</td>
                                    <td>Payment ID of the payment</td>
                                    <td>w3r2c4rg-f1f9-472a-92e3-c02c4ft2d35d</td>
                                </tr>
                                <tr>
                                    <td>Payment Request Id</td>
                                    <td>Payment Request Id of the payment</td>
                                    <td>0b52c981-f1f9-4a2a-92e3-c02cd592d35d</td>
                                </tr>
                                <tr>
                                    <td>Payment Status</td>
                                    <td>Payment Status of the payment</td>
                                    <td>True (Success) / False (Failed) </td>
                                </tr>
                                <tr>
                                    <td>Payment Amount</td>
                                    <td>Payment Amount of the payment</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>Client Username</td>
                                    <td>Unique identifier of the client in your end application </td>
                                    <td>123456ADcde</td>
                                </tr>
                            </TranTable>

                            <p style={{fontSize : "25px", marginTop : "50px",
                            fontWeight: 600}}>Available Platform</p>
                            <p  id = "content" >1. <NavLink to={"/springbootdocmentation"} >Spring Boot</NavLink>  </p>
                            <p  id = "content" >2. <NavLink to={"/pythondoc"} >Python</NavLink>  </p>
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

export default ApiDocumentation;