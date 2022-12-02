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
    height: 700vh;
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
        margin-bottom: 10px;
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


const CodeClass = styled.div`
    background-color: #e3edf8;
    border: 1px solid #dedcdc;
    border-radius: 3px;
    color: #333;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 12px;
    line-height: 18px;
    overflow: auto;
    padding: 6px 10px;
    white-space: pre;
    word-wrap: normal;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 20px;

    p {
        margin: 10px 0 0 5px;
    }

    #tab1 {
        margin-left: 40px;
    }
    #tab2 {
        margin-left: 80px;
    }
`;

function SpringBootDocumentation() {
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
                            <p style={{fontSize : "25px", marginTop : "50px",
                            fontWeight: 600}}>Spring Boot Integration Guide</p>

                            <p id="subtitle">Integration steps : </p>
                            <p id = "content" style={{fontWeight: 600}}>Files Creations</p>
                            <p id = "content">1. Create a Package with name - rln.businessapi </p>
                            <p id = "content">2. Create a Class with name - BusinessApiAuthentication.java </p>
                            <p id = "content">3. Create a Class with name - BusinessApiPaymentRequest.java </p>
                            <p id = "content">4. Create a Class with name - ApiPaymentUrlResponse.java </p>
                            <p id = "content">5. Create a Class with name - PaymentStatusResponse.java </p>
                            
                            <p id = "content" style={{fontWeight: 600, marginTop:"30px"}}>Code</p>

                            <p id = "content" style={{fontWeight: 600, marginTop:"10px"}}>BusinessApiAuthentication.java </p>
                            <p id = "content">This class contains all BusinessApi Authentication details</p>
                            <p id = "content">This class contains the following code : </p>
                            <CodeClass>
                                <p>package rln.businessapi;</p>
                                <br/>
                                <p>{`public class RLNApiAuthentication {`}</p>
                                <p id="tab1">private String apiKey = "YOUR_API_KEY";</p>
                                <p id="tab1">private String authDomain = "YOUR_AUTH_DOMAIN";</p>
                                <p id="tab1">private String rlnApiPostUrl = "http://localhost:2006/api/business/paymentrequest";</p>
                                <br/>
                                <p id="tab1">{`//Create Setters and Getters For fields`}</p>
                               <p>{`}`}</p>
                            </CodeClass>

                            <p id = "content">To Get Your API KEY and AUTH DOMAIN <NavLink to={"/apikey"}>click her</NavLink> </p>

                            <p id = "content" style={{fontWeight: 600, marginTop:"50px"}}>BusinessApiPaymentRequest.java</p>
                            <p id = "content">This class is used to create a request for payment. </p>
                            <p id = "content">This class contains the following code : </p>
                            
                            <CodeClass>
                                <p>package rln.businessapi;</p>
                                <br/>
                                <p>{`public class BusinessApiPaymentRequest { `} </p>
                                <br/>
                                <p id="tab1">private String apiKey; </p>
                                <p id="tab1">private String authDomain;</p>
                                <p id="tab1">private double amount;</p>
                                <p id="tab1">private String redirectGetURL;</p>
                                <p id="tab1">private String purpose;</p>
                                <p id="tab1">private String clientUsername;</p>
                                <p id="tab1">private String redirectURL;</p>
                                <br/>
                                <p id="tab1">{`//Create Setters and Getters For fields`}</p>
                               <p>{`}`}</p>
                            </CodeClass>

                            <p id = "content" style={{fontWeight: 600, marginTop:"50px"}}>ApiPaymentUrlResponse.java</p>
                            <p id = "content">This class is used to create a payment url. </p>
                            <p id = "content">This class contains the following code : </p>
                            <CodeClass>
                                <p>package rln.businessapi;</p>
                                <br/>
                                <p>{`public class ApiPaymentUrlResponse { `}</p>
	
                                <p id="tab1">private int statusCode;</p>
                                <p id="tab1">private Date timestamp;</p>
                                <p id="tab1">private String message;</p>
                                <p id="tab1">private String paymentURL;</p>
                                <p id="tab1">private String description;</p>
                                <p id="tab1">{`//Create Setters and Getters For fields`}</p>
                                <p>{`}`}</p>
                            </CodeClass>

                            <p id = "content" style={{fontWeight: 600, marginTop:"50px"}}>PaymentStatusResponse.java</p>
                            <p id = "content">This class is used to get the payment status. </p>
                            <p id = "content">This class contains the following code : </p>
                            <CodeClass>
                                <p>package rln.businessapi;</p>
                                <br/>
                                <p>{`public class PaymentStatusResponse { `}</p>
                                <p id="tab1">private int statusCode;</p>
                                <p id="tab1">private int statusCode;</p>
                                <p id="tab1">private Date timestamp;</p>
                                <p id="tab1">private String message;</p>
                                <p id="tab1">private String description;</p>
                                <p id="tab1">private boolean paymentStatus;</p>
                                <p id="tab1">private String paymentRequestId;</p>
                                <p id="tab1">private String paymentId;</p>
                                <p id="tab1">private String clientUsername;</p>
                                <p id="tab1">private double amount;</p>
                                <p id="tab1">{`//Create Setters and Getters For fields`}</p>
                                <p>{`}`}</p>
                            </CodeClass>

                            <p id = "content" style={{fontWeight: 600}}>Sending Post Request To RLN BUSINESS API</p>
                            <p id = "content">In Your Controller Package, Create New Class with Name - RLNAPIController.java</p>
                            <p id = "content"> and create a function PaymentRequest() </p>
                            <p id = "content">This class contains the following code : </p>
                            <CodeClass>
                                <p>@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)</p>
                                <p>@RestController</p>
                                <p>{`public class BusinessApiTestingController {`}</p>
                                <br/>
                                <p id="tab1">RestTemplate restTemplate = new RestTemplate();</p>
                                <br/>
                                <p id="tab1">{`@GetMapping("") //Mention payment url for application `}</p>
                                <p id="tab1">{`public ResponseEntity<Object> PaymentRequest() throws URISyntaxException {`}</p>
                                <p id="tab2">RLNApiAuthentication apiAuthentication = new RLNApiAuthentication();</p>
                                <p id="tab2">BusinessApiPaymentRequest req = new BusinessApiPaymentRequest();</p>
                                <br/>
                                <p id="tab2">{`req.setAmount(); // Mention amount`}</p>
                                <p id="tab2">req.setApiKey(apiAuthentication.getApiKey());</p>
                                <p id="tab2">req.setAuthDomain(apiAuthentication.getAuthDomain());</p>
                                <p id="tab2">{`req.setClientUsername(""); // Mention Unique username for client in your application`}</p>
                                <p id="tab2">{`req.setPurpose(""); // Mention purpose of the payment`}</p>
                                <p id="tab2">{`req.setRedirectGetURL("") // Mention redirect get url, to get the payment status from rln business api`};</p>
                                <p id="tab2">{`req.setRedirectURL(""); // Mention redirect url for after payment to redirect`}</p>
                                <p id="tab2">ApiPaymentUrlResponse rlnresponsed =	restTemplate.postForObject(apiAuthentication.getRlnApiPostUrl(), req,ApiPaymentUrlResponse.class , "");</p>
                                <br/>
                                <p id="tab2">URI uri = new URI(rlnresponsed.getPaymentURL());</p>
                                <p id="tab2">HttpHeaders httpHeaders = new HttpHeaders();</p>
                                <p id="tab2">httpHeaders.setLocation(uri);</p>
                                <br/>
                                <p id="tab2">{`return new ResponseEntity<>(httpHeaders, HttpStatus.SEE_OTHER);`}</p>
                                <p id="tab1">{`}`}</p>
                                <p>{`}`}</p>
                                <br/>
                                <br/>
                            </CodeClass>


                            <p id = "content" style={{fontWeight: 600}}>Getting Payment From RLN BUSINESS API</p>
                            <p id = "content">In Your Controller RLNAPIController.java class </p>
                            <p id = "content">create a function PaymentStatusFromRLNBusinessApi() </p>
                            <p id = "content">This class contains the following code : </p>
                            <CodeClass>
                                <p>@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)</p>
                                <p>@RestController</p>
                                <p>{`public class BusinessApiTestingController {`}</p>
                                <br/>
                                <p id="tab1">RestTemplate restTemplate = new RestTemplate();</p>
                                <br/>
                                <p id="tab1">{`@GetMapping("") //Mention payment url for application `}</p>
                                <p id="tab1">{`public ResponseEntity<Object> PaymentRequest() throws URISyntaxException {`}</p>
                                <p id="tab2">RLNApiAuthentication apiAuthentication = new RLNApiAuthentication();</p>
                                <p id="tab2">BusinessApiPaymentRequest req = new BusinessApiPaymentRequest();</p>
                                <br/>
                                <p id="tab2">{`req.setAmount(); // Mention amount`}</p>
                                <p id="tab2">req.setApiKey(apiAuthentication.getApiKey());</p>
                                <p id="tab2">req.setAuthDomain(apiAuthentication.getAuthDomain());</p>
                                <p id="tab2">{`req.setClientUsername(""); // Mention Unique username for client in your application`}</p>
                                <p id="tab2">{`req.setPurpose(""); // Mention purpose of the payment`}</p>
                                <p id="tab2">{`req.setRedirectGetURL("") // Mention redirect get url, to get the payment status from rln business api`};</p>
                                <p id="tab2">{`req.setRedirectURL(""); // Mention redirect url for after payment to redirect`}</p>
                                <p id="tab2">ApiPaymentUrlResponse rlnresponsed =	restTemplate.postForObject(apiAuthentication.getRlnApiPostUrl(), req,ApiPaymentUrlResponse.class , "");</p>
                                <br/>
                                <p id="tab2">URI uri = new URI(rlnresponsed.getPaymentURL());</p>
                                <p id="tab2">HttpHeaders httpHeaders = new HttpHeaders();</p>
                                <p id="tab2">httpHeaders.setLocation(uri);</p>
                                <br/>
                                <p id="tab2">{`return new ResponseEntity<>(httpHeaders, HttpStatus.SEE_OTHER);`}</p>
                                <p id="tab1">{`}`}</p>
                                <br/>
                                <br/>
                                <p id="tab1">@PostMapping("/testback")</p>
                                <p id="tab1">{`public String PaymentStatusFromRLNBusinessApi( @RequestBody PaymentStatusResponse paymentStatusResponse ) {`}</p>
                                <p id="tab2">System.out.println(paymentStatusResponse.getMessage());</p>
                                <p id="tab2">System.out.println(paymentStatusResponse.isPaymentStatus());</p>
                                <br/>
                                <p id="tab2">{`// You can check payment status and update in your application using paymentStatusResponse object.`}</p>
                                <p id="tab2">{`return "success";`}</p>
                                <p id="tab1">{`}`}</p>
                                <p>{`}`}</p>
                                <br/>
                                <br/>
                            </CodeClass>

                            <p id = "content">For Complete Code <a href="https://github.com/nanda-kumar-k/">Click her</a></p>

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

export default SpringBootDocumentation;