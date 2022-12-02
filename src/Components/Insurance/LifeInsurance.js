import {CHContainer, CHRight, CHNavbar, BackImg, CHLeft} from "../CustomerHome/CustomerHome";
import AllLinks from "../CustomerHome/AllLinks";
import styled from 'styled-components';
import background from './Images/background.png';
import banner from './Images/insurance1.jpg';
import banner2 from './Images/insurance2.jpg';
import banner10 from './Images/insurance10.jpg';
import banner11 from './Images/insurance11.jpg';
import banner12 from './Images/insurance12.jpg';
import banner3 from './Images/insurance3.jpg';
import banner4 from './Images/insurance9.jpg';
import banner5 from './Images/insurance5.jpg';
import banner6 from './Images/insurance6.jpg';
import banner8 from './Images/insurance8.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
import { Autoplay, Pagination, Navigation } from "swiper";
import Swal from 'sweetalert2'
import Footer from '../Footer/Footer';
import RLNDataService from "../../services/rln.customer.service";
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


const AboutInsurance = styled.div`
    width: 60vw;
    padding: 2vh 2vw;
    height: 400vh;
    background-color: white;
    /* background-color: red; */

    h1 {
        margin-top: 50px;
        text-align: center;
        color: #768089;
        font-family: "Roboto Condensed", "Open Sans", sans-serif;
        line-height: normal;
    }
    #title {
        text-align: center;
        color: #768089;
        font-family: "Roboto Condensed", "Open Sans", sans-serif;
        line-height: normal;
    }
    p {
        /* margin-top: 20px; */
        /* text-align: center; */
        /* color: #768089; */
        font-family: "Roboto Condensed", "Open Sans", sans-serif;
        line-height: normal;
        text-align: justify;
        margin-bottom: 20px;
        color: "#444";
        font-size: 1.2em;
    }
`;


const PredictContainer = styled.div`
    width: 38vw;
    height: 80vh;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    margin-left: 30ch;
`;


const ImagesContainer = styled.div`
    display: flex;
    width: 60vw;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

`;

const ImgCon = styled.div`
    width: 28vw;
    height: 28vh;
    /* background-color: red; */
    margin: 1vh 1vw;
    border-radius: 10px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

function LifeInsurance() {

    const navigate = useNavigate();
    const params = useParams();
    React.useEffect(() => {
        window.scrollTo(0, 0);
        const currentuser = JSON.parse(localStorage.getItem('customerLogin'));
        if ( !currentuser) {
            navigate('/logintype');
        }
    }, [navigate,params]);

    const [errorMessages, setErrorMessages] = React.useState('');
    const [values, setValues] = React.useState({
        bmi: '',
        age: '',
        gender: '',
        childerns: '',
        smoker: '',
        region : '',
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
            if (values.bmi  && values.age  && values.childerns  && values.region ) {
                
                if (!isNaN(values.bmi) && !isNaN(values.age) && !isNaN(values.childerns)) {
                    let bmi = parseFloat(values.bmi);
                    let sex = values.gender;
                    let age = parseInt(values.age);
                    let childerns = parseInt(values.childerns);
                    let smoker = values.smoker;
                    let region = values.region;

                    RLNDataService.predictInsurance(age,bmi,childerns,sex,smoker,region)
                    .then(response => {
                        console.log(response.data);
                        setErrorMessages('');
                        Swal.fire({
                            title: response,
                            showClass: {
                              popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                              popup: 'animate__animated animate__fadeOutUp'
                            }
                          })
                    })
                    .catch(e => {
                        console.log(e);
                        setErrorMessages(e);
                    });

                } else {
                    setErrorMessages('Please enter valid values');
                }
            }
            else {
                setErrorMessages('Please fill all the fields');
            }
        };

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
                        <AboutInsurance>
                            <h1>Life Insurance</h1>
                            <h2 id="title">Predict Insurance Premiums</h2>
                            <p style={{fontSize : "22px", marginTop : "50px",color: "#004a80",
                            fontWeight: 800}}>Life Insurance - Meaning</p>
                            <p style={{color: "#444",
                                fontSize: "1.2em",
                                }}>Life Insurance can be defined as a contract between an insurance policy holder and an insurance company, where the insurer promises to pay a sum of money in exchange for a premium, upon the death of an insured person or after a set period. Here, at RLN BANK Prudential Life Insurance, you pay premiums for a specific term and in return, we provide you with a Life Cover. This Life Cover secures your loved ones’ future by paying a lump sum amount in case of an unfortunate event. In some policies, you are paid an amount called Maturity Benefit at the end of the policy term.</p>
                            <p>There are two basic types of Life Insurance plans -</p>
                            <p style={{ marginRight: "20px", marginLeft: "20px", color: "#444",
                            }}>1. Pure Protection</p>
                            <p style={{ marginRight: "20px", marginLeft: "20px", color: "#444",
                            }}>2. Protection with Savings</p>
                            <p style={{fontSize : "22px", marginTop : "50px",color: "#004a80",
                            fontWeight: 800}}>What is Pure Protection Plan?</p>
                            <p>A Pure Protection plan is designed to secure your family’s future by providing a lump sum amount, in your absence.</p>
                            <p style={{fontSize : "22px",color: "#004a80",
                            fontWeight: 800}}>What is Protection and Savings Plan?</p>
                            <p>A Protection and Savings plan is a financial tool that helps you plan for your long-term goals like purchasing a home, funding your children’s education, and more, while offering the benefits of a Life Cover.</p>
                            
                            <p style={{fontSize : "22px",color: "#004a80",
                            fontWeight: 800}}>Factors that affect life insurance premium</p>
                            <p>Now that you know what is life insurance and why you need it, find out the factors that can affect the life insurance premium:</p>
                            <ul>
                                <li style={{marginLeft: "20px",fontSize: "1.2em"
                                }}><b>Age : </b>One of the prime factors that affect the premium for a life insurance plan is your age. The life insurance premium is lower for younger people and gradually increases with age</li>
                                <li style={{marginLeft: "20px",fontSize: "1.2em"
                                }}><b>Gender : </b>Studies have shown women live longer than men1. Therefore, the life insurance premium is lower for women as compared to men</li>
                                <li style={{marginLeft: "20px",fontSize: "1.2em"
                                }}><b>Health conditions : </b>Your present and past health conditions can determine the premium for your life insurance plan. If you have any pre-existing illnesses or have suffered from an illness in the past that may resurface or affect your present health, you would be charged a higher premium</li>
                                <li style={{marginLeft: "20px",fontSize: "1.2em"
                                }}><b>Family health history : </b>The chances of suffering from a disease that runs in your family are considerably high. So, if any hereditary illnesses run in your family, you may have to pay a higher premium</li>
                                <li style={{marginLeft: "20px",fontSize: "1.2em"
                                }}><b>Smoking and drinking alcohol : </b>Lifestyle habits like smoking and drinking alcohol can impact your health and lead to multiple health issues. Therefore, insurance companies charge a high premium for individuals who smoke or drink alcohol</li>
                                <li style={{marginLeft: "20px",fontSize: "1.2em"
                                }}><b>Type of coverage : </b>The type of coverage you opt for can increase or decrease the life insurance plan’s premium. If you add any riders to your plan, the premium would increase. A longer policy term can also result in a higher premium compared to a shorter term. In addition to this, the type of life insurance plan you select also impacts the premium. For instance, term life insurance is the most affordable form of life insurance</li>
                                <li style={{marginLeft: "20px",fontSize: "1.2em"
                                }}><b>Amount of coverage : </b>A higher sum assured would result in a higher premium and vice versa</li>
                                <li style={{marginLeft: "20px",fontSize: "1.2em"
                                }}><b>Occupation : </b>If you work in a high-risk job, the premium for your life insurance plan would be higher than others. For example, if you work in construction or if your job puts you at any kind of risk, such as regular exposure to chemicals, the insurance company will charge a higher premium</li>
                                </ul>
                                <img src={banner4} alt="" style={{width: "70%", height: "auto", marginTop: "50px", marginLeft:"15%"}}/>

                                <h2  id="title" style={{marginTop:"50px", marginBottom:"30px"}}>Enter Details To Predict Insurance Premiums</h2>

                                <PredictContainer>
                                    <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', '& .MuiInputLabel-root': {
                                        color: 'balck',
                                        fontSize: '1.2rem',
                                        },
                                        '& .MuiFilledInput-root':{
                                            backgroundColor: 'white',
                                        } }} >
                                        <InputLabel htmlFor="filled-adornment-amount">Enter BMI</InputLabel>
                                        <FilledInput
                                        id="filled-adornment-amount"
                                        value={values.bmi}
                                        onChange={handleChange('bmi')}
                                        />
                                    </FormControl>
                                    <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', '& .MuiInputLabel-root': {
                                        color: 'balck',
                                        fontSize: '1.2rem',
                                        },
                                        '& .MuiFilledInput-root':{
                                            backgroundColor: 'white',
                                        } }} >
                                        <InputLabel htmlFor="filled-adornment-amount">Enter Age</InputLabel>
                                        <FilledInput
                                        id="filled-adornment-amount"
                                        value={values.age}
                                        onChange={handleChange('age')}
                                        />
                                    </FormControl>
                                    <FormControl variant="standard" sx={{ m: 1, width: '50ch', '& .MuiInputLabel-root': {
                                        color: 'balck',
                                        fontSize: '1.2rem',
                                        }, }}>
                                        <InputLabel id="demo-simple-select-standard-label">Select Gender</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={values.gender}
                                        onChange={handleChange('gender')}
                                        label="Select Gender"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>male</MenuItem>
                                        <MenuItem value={0}>female</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', '& .MuiInputLabel-root': {
                                        color: 'balck',
                                        fontSize: '1.2rem',
                                        },
                                        '& .MuiFilledInput-root':{
                                            backgroundColor: 'white',
                                        } }} >
                                        <InputLabel htmlFor="filled-adornment-amount">Enter childerns</InputLabel>
                                        <FilledInput
                                        id="filled-adornment-amount"
                                        value={values.childerns}
                                        onChange={handleChange('childerns')}
                                        />
                                    </FormControl>
                                    <FormControl variant="standard" sx={{ m: 1, width: '50ch', '& .MuiInputLabel-root': {
                                        color: 'balck',
                                        fontSize: '1.2rem',
                                        }, }}>
                                        <InputLabel id="demo-simple-select-standard-label">Do you Smoke</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={values.smoker}
                                        onChange={handleChange('smoker')}
                                        label="Do you Smoke"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>YES</MenuItem>
                                        <MenuItem value={0}>NO</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl variant="standard" sx={{ m: 1, width: '50ch', '& .MuiInputLabel-root': {
                                        color: 'balck',
                                        fontSize: '1.2rem',
                                        }, }}>
                                        <InputLabel id="demo-simple-select-standard-label">Select region</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={values.region}
                                        onChange={handleChange('region')}
                                        label="Select region"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>southwest</MenuItem>
                                        <MenuItem value={2}>northwest</MenuItem>
                                        <MenuItem value={3}>southeast</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <p>{errorMessages}</p>
                                    <Button variant="contained" endIcon={<SendIcon />} sx={{ m: 1, mt: 1, width: '54ch',marginTop: '50px',marginBottom:'0px', backgroundColor: '#3498db', '& .MuiButton-root': {
                                        color: 'balck',
                                        // fontWeight: 'bold',
                                        marginTop: '50px',
                                        fontSize: '1.2rem',
                                        
                                        } }} onClick = {handleSubmit} >
                                            Check Premium Amount
                                    </Button>
                                </PredictContainer>
                                <ImagesContainer>
                                        <ImgCon>
                                            <img src={banner5} alt="" />
                                        </ImgCon>
                                        <ImgCon>
                                            <img src={banner6} alt="" />
                                        </ImgCon>
                                        <ImgCon>
                                            <img src={banner8} alt="" />
                                        </ImgCon>
                                </ImagesContainer>
                                <h1>This Service will be provided by RLN Bank Soon</h1>
                                <p style={{textAlign:"center"}}>When you have insurance you know that you are secured against any unforeseen events in life, and this gives you complete peace of mind.</p>
                            </AboutInsurance>
                    </CHRightContainer>
                    
                </CHRight>
            </CHContainer>
            <div style={{marginTop:"20vh"}}>
                <Footer />
            </div>
        </>
    )
}

export default LifeInsurance;    