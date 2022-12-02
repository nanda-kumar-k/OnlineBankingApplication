import styled from 'styled-components';
import background from './Images/background.png';
import personal from './Images/personal.png';
import business from './Images/business.png';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Footer from '../Footer/Footer';
// import { NavLink } from 'react-router-dom';

const SliderContainer = styled.div`
    margin-top: 11vh;
    background-image: url(${background});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 70vh;
`;

const OuterContainer = styled.div`
    width: 80vw;
    height: 75vh;
    padding: 10vh 8vw 0vh 8vw;
    /* background-color: yellow; */
`;

const InformContainer = styled.div`
    width: 84vw;
    height: 10vh;
    background-color: white;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction:column ;
    justify-content: center;
    font-size: 1rem;
    /* box-shadow: 1px 1px whitesmoke;
    border: solid 1px whitesmoke;
    border-color: black; */
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    box-shadow: 1px 1px whitesmoke;
    border-bottom: 1px solid #E6E6E6;
    -webkit-box-shadow: 6px 3px 6px #0000001f;
`;

const JoinContainer = styled.div`
    width: 82vw;
    height: 48vh;
    /* background-color: blue; */
    padding: 1vh 1vw;
    display: flex;
`;

const JoinLeftContainer = styled.div`
    width: 39vw;
    height: 45vh;
    background-color: white;
    padding: 1.5vh 1vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 1px 1px whitesmoke;
    /* border: solid 1px whitesmoke;
    border-color: black; */
    border-radius: 10px;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    box-shadow: 1px 1px whitesmoke;
    border-bottom: 1px solid #E6E6E6;
    -webkit-box-shadow: 6px 3px 6px #0000001f;
    .h3{
        text-align: center;
        margin-bottom: 10px;
        color: #0B0B61;
    }

    .personal {
        width: 39vw;
        height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .LoginCon {
        margin-top: 20px;
        width: 39vw;
        height: 5vh;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }

    .inform {
        width: 39vw;
        height: 50px;
        /* background-color: red; */
        /* box-shadow: 1px 1px whitesmoke;
        border: solid 1px whitesmoke; */
        /* border-color: black; */
        text-align: left;
        box-shadow: 1px 1px whitesmoke;
    border-bottom: 1px solid #E6E6E6;
    -webkit-box-shadow: 6px 3px 6px #0000001f;
    }

`;

const PersonalImg = styled.img`
    width : 13vw;
    height: 26vh;
    
`;

const BottomInfoContainer = styled.div`
    width: 84vw;
    height: 5vh;
    background-color: #d3ebfa;
    text-align:center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextScroll = styled.marquee`

`;

function LoginHome() {
    
    const BusinessRedirect = () => {
        localStorage.setItem('accountType', 'business');
        window.location.href = "/contractregister";
    };

    const SavingsRedirect = () => {
        localStorage.setItem('accountType', 'savings');
        window.location.href = "/contractregister";
    };

    const LoginBusinessRedirect = () => {
        localStorage.setItem('accountType', 'Business');
        window.location.href = "/customerlogin";
    };

    const LoginSavingsRedirect = () => {
        localStorage.setItem('accountType', 'Savings');
        window.location.href = "/customerlogin";
    };

    return (
        <>
            <SliderContainer>
                <OuterContainer>
                    <InformContainer>
                        <p style={{color:'orange'}}>If slowness is observed during Login Page Loading. Please refresh the page for better experience. </p>
                        <p>RLN Never asks for confidential information such as PIN and OTP from Customers.Any Such call can be made only by a fraudster. Please do not share personal Info.</p>
                    </InformContainer>
                    <JoinContainer>
                        <JoinLeftContainer>
                            <div className='personal'>
                                <PersonalImg src={personal} alt="personal" />
                            </div>
                            <h3 style={{color:'#3498db'}}>Personal Online Banking</h3>
                            <div className='LoginCon'>
                                <Stack spacing={2} direction="row">
                                    
                                        <Button variant="outlined" style={{width:'100px'}} onClick={LoginSavingsRedirect}>Login</Button>
                                    
                                    <Button variant="outlined" style={{width:'100px'}} onClick={SavingsRedirect} >Register</Button>
                                </Stack>
                            </div>
                            <div className='inform'>
                                <p style={{textAlign:'center'}}>Personal Online Banking is a convenient and secure way to manage your finances.your can Easy access accounts, deposits,loans and insurance.</p>
                         
                            </div>
                        </JoinLeftContainer>
                        <JoinLeftContainer style={{marginLeft:'1vw'}}> 
                            <div className='personal'>
                                <PersonalImg src={business} alt="personal" />
                            </div>
                            <h3 style={{color:'#3498db'}}>Online Business Banking</h3>
                            <div className='LoginCon'>
                                <Stack spacing={2} direction="row">
                                    
                                        <Button variant="outlined" style={{width:'100px'}} onClick={LoginBusinessRedirect}>Login</Button>
                                    
                                    <Button variant="outlined" style={{width:'100px'}} onClick={BusinessRedirect} >Register</Button>
                                </Stack>
                            </div>
                            <div className='inform'>
                                <p style={{textAlign:'center'}}>Online Business Banking is a convenient and secure way to manage your finances.your can Easy access Business Api and do payment in your application. </p>
                                
                            </div>
                        </JoinLeftContainer>
                    </JoinContainer>
                    <BottomInfoContainer>
                        <TextScroll  direction = "left" loop="" >
                            <p>Mandatory Profile password change after 365 days introduced for added security.   |  
                              | Call us toll free on 1800 1234 and 1800 2100 and get a wide range of services through RLN Contact Centre   |   For added security, new functionality to maintain per day and per transaction limit for general merchant payment transactions has been implemented. Please visit Define Limit under profile section.  RLN BANK never asks for your PIN details on phone, message or email. Please do not click on links received on your email or mobile asking your Bank/Card details. </p>
                        </TextScroll>
                    </BottomInfoContainer>
                </OuterContainer>
            </SliderContainer>
            <div style={{marginTop:"15vh"}}>
                <Footer/>
            </div>
        </>
    )
}

export default LoginHome;