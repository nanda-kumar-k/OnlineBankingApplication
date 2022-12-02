import React from 'react'
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate,useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import loginimg from './Images/loginimg.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "./LSlider.css";
import { Autoplay} from "swiper";
import CustomerAuthService from '../../../services/auth.customer.service';
import Swal from 'sweetalert2'
// import login1 from './Images/login1.jpg'
import login2 from './Images/login2.png'
import login3 from './Images/login3.jpg'
import login7 from './Images/login7.jpg'
import login5 from './Images/login5.jpg'
import login6 from './Images/login6.jpg'
import Footer from '../../Footer/Footer';

const LoginContainer = styled.div`
    margin-top: 11vh;
    height: 85vh;
    width: 80vw;
    /* background-color: #3498db; */
    display: flex;
    padding: 2vh 10vw;
    font-family: "Lato-Bold" !important;
    color: #4a4a4a;
`;

const LoginLeft = styled.div`
    height: 70vh;
    width: 36vw;
    /* background-color: rgb(213, 231, 247); */
    padding: 14vh 2vw 0 2vw;
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
        /* margin-top: 2vh; */

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
    padding: 2vh 2vw;
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
    height: 78vh;
    width: 36vw;
    /* background-color: green; */
    padding: 2vh 2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function CustomerLogin() {
    const [user , setUser] = React.useState('');
    const navigate = useNavigate();
    const parms = useParams();
    React.useEffect(() => {
        const currentuser = JSON.parse(localStorage.getItem('customerLogin'));
        if ( currentuser) {
            navigate('/customerhome');
        }
        let user = localStorage.getItem('accountType');
        setUser(user);
        localStorage.removeItem('accountType');
    }, [parms, navigate]);

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
        if(values.username && values.password ){
            if(values.password.length >= 8){
                CustomerAuthService.authenticateRLNCustomer(values.username, values.password)
                .then((response) => {
                    console.log(response);
                    if(response.statusCode === 200){
                        console.log("Login Success");
                        navigate('/customer/dashboard');
                    }
                    else if (response.statusCode === 100){
                        Swal
                        .fire({
                            title: 'warning',
                            text: 'Accont is pending for approval, please contact the near RLN bank',
                            icon: 'error',
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/');
                            }
                        })
                    }
                    else if (response.statusCode === 400) {
                        Swal
                        .fire({
                            title: 'error',
                            text: 'Invalid username or password',
                            icon: 'error',
                            confirmButtonText: 'Ok'
                        })
                        setErrorMessages("Invalid username or password");
                    }
                    else  {
                        Swal
                        .fire({
                            title: 'error',
                            text: 'Invalid username or password',
                            icon: 'error',
                            confirmButtonText: 'Ok'
                        })
                        setErrorMessages(response);
                    }
                })
                .catch((error) => {
                    setErrorMessages("Server Not responding ...!!! Please try after sometime");
                });
            }
            else {
                setErrorMessages("Password must be 8 characters long");
            }
        }
        else{
            setErrorMessages("Please fill all the fields");
        }
    }

    

    return (
        <>
        <LoginContainer>
            <LoginLeft>
                <h2>Login With RLN Online Banking</h2>
                <h2 style={{marginBottom:'30px'}}>{user} Account</h2>
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
                 
                 <p style={{marginBottom:"10px"}}>Don't Have account ?. <NavLink to = "/contractregister">Register Here</NavLink ></p>
                 <p>{errorMessages}</p>
                 <SubBut onClick={handleLogin}> Login </SubBut>
                 <hr/>
                <NotePoint>
                        <h3>Note</h3>
                        <ul>
                            <li><p>Your password should be minimum 8 letters  </p></li>
                        </ul>
                </NotePoint>
            </LoginLeft>
            <LoginRight>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    }}
                    
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={loginimg} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={login2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={login3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={login7} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={login5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={login6} alt="" /></SwiperSlide>
                </Swiper>
            </LoginRight>
        </LoginContainer>
        <div>
            <Footer/>
        </div>
        </>
    )
}

export default CustomerLogin;