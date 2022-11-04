import styled from 'styled-components';
import background from './Images/background.png';
import personal from './Images/personal.png';
import business from './Images/business.png';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
const SliderContainer = styled.div`
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
                                    <NavLink to="/contractregister">
                                        <Button variant="outlined" style={{width:'100px'}}>Login</Button>
                                    </NavLink>
                                    <NavLink to="/contractregister">
                                        <Button variant="outlined" style={{width:'100px'}}>Register</Button>
                                    </NavLink>
                                </Stack>
                            </div>
                            <div className='inform'>
                                <p>SBI's internet banking portal provides personal banking services that gives you complete control over all your banking demands online.</p>
                            </div>
                        </JoinLeftContainer>
                        <JoinLeftContainer style={{marginLeft:'1vw'}}>
                            <div className='personal'>
                                <PersonalImg src={business} alt="personal" />
                            </div>
                            <h3 style={{color:'#3498db'}}>Online Business Banking</h3>
                            <div className='LoginCon'>
                                <Stack spacing={2} direction="row">
                                    <NavLink to="/contractregister">
                                        <Button variant="outlined" style={{width:'100px'}}>Login</Button>
                                    </NavLink>
                                    <NavLink to="/contractregister">
                                        <Button variant="outlined" style={{width:'100px'}}>Register</Button>
                                    </NavLink>
                                </Stack>
                            </div>
                            <div className='inform'>
                                <p>Corporate Banking application to administer and manage non personal accounts online.</p>
                            </div>
                        </JoinLeftContainer>
                    </JoinContainer>
                    <BottomInfoContainer>
                        <TextScroll  direction = "left" loop="" >
                            <p>Mandatory Profile password change after 365 days introduced for added security.   |   Customers who have installed “SBI Secure OTP App” on their mobile and completed registration process will now receive Login OTP for OnlineSBI.com on the app instead of SMS OTP   |   Call us toll free on 1800 1234 and 1800 2100 and get a wide range of services through SBI Contact Centre   |   For added security, new functionality to maintain per day and per transaction limit for general merchant payment transactions has been implemented. Please visit Define Limit under profile section.SBI never asks for your Card/PIN/OTP/CVV details on phone, message or email. Please do not click on links received on your email or mobile asking your Bank/Card details. </p>
                        </TextScroll>
                    </BottomInfoContainer>
                </OuterContainer>
            </SliderContainer>
        </>
    )
}

export default LoginHome;