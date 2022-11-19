import React from 'react'
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';




const TextScroll = styled.marquee`
    margin-top: 10px;
    /* margin-bottom: 20px; */
    width: 100vw;
    height: 5vh;
    background-color: #d3ebfa;
    font-size: 1.6rem;
    font-weight: 100;
    color: #000;

`;



const LoginContainer = styled.div`
    height: 78vh;
    width: 80vw;
    background-color: #d3ebfa;
    background:  linear-gradient(#b9e1fa,white);
    display: flex;
    padding: 2vh 10vw;
    font-family: "Lato-Bold" !important;
    color: #4a4a4a;
`;

const LoginLeft = styled.div`
    height: 70vh;
    width: 36vw;
    /* background-color: rgb(213, 231, 247); */
    padding: 8vh 2vw 0 2vw;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    text-align: center;
    /* box-shadow: 0px 1px whitesmoke; */
    border-bottom: 1px solid #E6E6E6;


    p{
        margin-top: 2vh;

        a{
            text-decoration: none;
            color: #3498db;
        }
    }
    hr {
        width: 100%;
        margin-top: 2vh;

    }
`;


const SubBut = styled.button`
    height: 5vh;
    width: 20vw;
    background-color: #64b4e9;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 2vh;
    margin-bottom: 2vh;
    &:hover{
        background-color: #3498db;
    }
`;

const NotePoint = styled.div`
    height: auto;
    width: 36vw;
    /* background-color: red; */
    text-align: left;
    padding: 2vh 2vw 0 2vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
    h3{
        margin-bottom: 2vh;
    }
    p{
        
        /* margin-bottom: 1vh; */
    }
    li {
        margin-left: 1vw;
    }



`;

const LoginRight = styled.div`
    height: 70vh;
    width: 36vw;
    /* background-color: green; */
    padding: 8vh 2vw 0 2vw;
    display: flex;
    flex-direction: column;
    justify-content: left;
    /* align-items: center; */

    h3{
        margin-bottom: 2vh;
    }
    p{
        
        margin-bottom: 1vh;
    }
    li {
        margin-left: 1vw;
    }
`;

function CustomerAuth() {


    const navigate = useNavigate();
    const [errorMessages, setErrorMessages] = React.useState('');
    const [values, setValues] = React.useState({
        username: '',
        password: '',
        showPassword: false,
      });
    
    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = (event) => {
        console.log("Login button clicked");
        console.log(values.username);
        console.log(values.password);
        event.preventDefault();
    }

    

    return (
        <>
            <TextScroll behavior="scroll" direction="left" scrollamount="10" >
                Welcome to Online Banking Application
            </TextScroll>
            <LoginContainer>
            <LoginLeft>
                <h2>RLN Online Net Banking</h2>
                <h2 style={{marginBottom:'30px'}}>Login</h2>
                <FormControl sx={{ m: 1, width: '40ch', marginBottom:'3ch' }} variant="standard" >
                    <InputLabel htmlFor="standard-adornment-password">Enter User Name</InputLabel>
                    <Input
                    id="standard-adornment-password"
                    value={values.username || ''}
                    onChange={handleChange('username')}
                    />
                </FormControl>    
                <FormControl sx={{ m: 1, width: '40ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
                 <p>{errorMessages}</p>
                 <SubBut onClick={handleLogin}> Login </SubBut>
                 <hr/>
                <NotePoint>
                        <h3>Note</h3>
                        <ul>
                            <li><p>Your password combination of paaword + your mobile number </p></li>
                        </ul>
                </NotePoint>
            </LoginLeft>
            <LoginRight>
                <h3>Disclaimer</h3>
                <ul>
                    <li><p>By clicking on Login button, you agree to our Terms and Conditions</p></li>
                    <li><p>By clicking on Login button, you agree to our Terms and Conditions</p></li>
                    <li><p>By clicking on Login button, you agree to our Terms and Conditions</p></li>
                </ul>
            </LoginRight>
            </LoginContainer>
        
        </>
    )
}

export default CustomerAuth;