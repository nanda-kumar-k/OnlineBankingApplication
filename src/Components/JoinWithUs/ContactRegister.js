import styled from 'styled-components';
import background from './Images/background.png'
// import { NavLink } from 'react-router-dom';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import RLNDataService from "../../services/rln.customer.service";
import Footer from '../Footer/Footer';


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
    width: 70vw;
    height: 82vh;
    padding: 5vh 15vw 0vh 15vw;
    /* background-color: yellow; */
`;

const TitleContainer = styled.div`
    width: 70vw;
    height: 10vh;
    /* background-color: red; */
    display: flex;
    position: relative;
    justify-content: space-around;

    hr{
        position: absolute;
        top: 3.5vh;
        left: 5vw;
        width: 60vw;
        /* height: 1px; */
        background-color: #E6E6E6;

    }
`;

const SingleTitleInfo = styled.div`
    width: 10vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: green; */
    z-index: 2;
   

    .numcon{
        width: 2vw;
        height: 4vh;
        background-color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #active {
        background-color: #3498db;
        width: 2.5vw;
        height: 5vh;
    }
`;

const AllInputContainer = styled.div`
    width: 66vw;
    height: 66vh;
    margin-top: 2vh;
    background-color: white;
    display: flex;
    padding: 2vh 2vw;
    overflow-y: scroll;
`;

const InputContainer = styled.div`
    /* width: 43vw;
    height: 66vh;
    background-color: white; */

    width: 38vw;
    height: 62vh;
    /* background-color: white; */

    padding: 4vh 2vw 0vh 2vw;

    h2{
        font-family: "Lato-Bold" !important;
        color: #4a4a4a;
        font-size: 1.5rem;
        margin-bottom: 2vh;
    }
    #but {
        width: 150px;
        margin-left: 6vw;
        margin-top: 8vh;
    }

    #errormsg {
        color: red;
        font-size: 1rem;
        margin-top: 1vh;
        width: 40ch;
        text-align:center ;
    }
`;

const NotePointContainer = styled.div`
    width: 22vw;
    height: 62vh;
    padding: 4vh 2vw 0vh 0vw;
    li {
        margin-left: 20px;
    }
    p{
        font-family: "Lato-Bold" !important;
        color: #4a4a4a;
        font-size: 1rem;
        margin-bottom: 1vh;
        text-align: justify !important;
    }
    /* background-color: blue; */
`;

function ContactRegister() {

    const [errorMessages, setErrorMessages] = React.useState('');
    const [values, setValues] = React.useState({
        username : '',
        contactNumber: '',
        emailId: '',
    });
    React.useEffect(() => {
        let find = JSON.parse(localStorage.getItem("customerRegister"));
        if (find) {
            setValues({
                username: find.customer.username,
                contactNumber: find.customer.contactNumber.toString(),
                emailId: find.customer.emailId,
            })
        }
    }, []);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(values);
        if (values.contactNumber && values.emailId && values.username ) {
            if(values.contactNumber.length === 10 && values.emailId.includes("@") && values.emailId.includes(".")) {
                await RLNDataService.checkUsernameAvailability(values.username)
                    .then(response => {
                        console.log(response.data);
                        if (response.data.statusCode === 101) {
                            setErrorMessages(response.data.message);
                        }
                        else {
                                let find = JSON.parse(localStorage.getItem("customerRegister"));
                                let accType = localStorage.getItem("accountType");
                                if (find) {
                                    find.customer.username = values.username;
                                    find.customer.contactNumber = Number(values.contactNumber);
                                    find.customer.emailId = values.emailId;
                                    find.customer.accountType = accType;
                                    localStorage.removeItem("accountType");
                                    localStorage.setItem("customerRegister", JSON.stringify(find));
                                }
                                else {
                                    let obj = {
                                        customer: {
                                            username: values.username,
                                            contactNumber: Number(values.contactNumber),
                                            emailId: values.emailId,
                                            
                                        }
                                    }
                                    if (accType) {
                                        obj.customer.accountType = accType;
                                    }
                                    else {
                                        obj.customer.accountType = "Individual";
                                    }
                                    localStorage.removeItem("accountType");
                                    localStorage.setItem("customerRegister", JSON.stringify(obj));
                                }
                                navigate('/personaldetails');
                            }
                    })
                    .catch(e => {
                        console.log(e);
                    });
                }
            else {
                if(isNaN(values.contactNumber)) {
                    setErrorMessages("Contact Number should be a number");
                }
                else if(values.contactNumber.length !== 10 ) {
                    setErrorMessages("Invalid Contact Number...!! Please enter a valid contact number");
                }
                else if(!values.emailId.includes("@") || !values.emailId.includes(".")) {
                    setErrorMessages("Invalid Email Id...!! Please enter a valid email id");
                }

            }
                
        }
        else {
            setErrorMessages("Please fill all the details");
        }
    };
    return (
        <>
            <SliderContainer>
                <OuterContainer>
                    <TitleContainer>
                        <hr/>
                        <SingleTitleInfo>
                            <div className='numcon' id='active'>
                               1
                            </div>
                            <p>Contact Details</p>
                        </SingleTitleInfo>
                        <SingleTitleInfo style={{marginLeft:'10px'}}>
                            <div className='numcon'>
                                2
                            </div>
                            <p>Personal Details</p>
                        </SingleTitleInfo>
                        <SingleTitleInfo style={{marginLeft:'10px'}}>
                            <div className='numcon'>
                                3
                            </div>
                            <p>Identification Details</p>
                        </SingleTitleInfo>
                        <SingleTitleInfo style={{marginLeft:'10px'}}>
                            <div className='numcon'>
                                4
                            </div>
                            <p>Professional Details</p>
                        </SingleTitleInfo>
                        <SingleTitleInfo style={{marginLeft:'10px'}}>
                            <div className='numcon'>
                                5
                            </div>
                            <p>Educational Details</p>
                        </SingleTitleInfo>
                        <SingleTitleInfo style={{marginLeft:'10px'}}>
                            <div className='numcon'>
                                6
                            </div>
                            <p>Family Details</p>
                        </SingleTitleInfo>
                        <SingleTitleInfo style={{marginLeft:'10px'}}>
                            <div className='numcon'>
                                7
                            </div>
                            <p>Set Password</p>
                        </SingleTitleInfo>
                    </TitleContainer>

                    <AllInputContainer>
                        <InputContainer>
                            <h2>Enter Contact Details</h2>
                            <br/>
                            <form>
                            <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '40ch', marginBottom:'20px', '& .MuiInputLabel-root': {
                                color: 'balck',
                                fontSize: '1.2rem',
                                },
                                '& .MuiFilledInput-root':{
                                    backgroundColor: 'white',
                                } }} >
                                <InputLabel htmlFor="filled-adornment-amount">Enter User Name</InputLabel>
                                <FilledInput
                                id="filled-adornment-amount"
                                value={values.username || ''}
                                onChange={handleChange('username')}
                                />
                            </FormControl>
                            <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '40ch', marginBottom:'20px', '& .MuiInputLabel-root': {
                                color: 'balck',
                                fontSize: '1.2rem',
                                },
                                '& .MuiFilledInput-root':{
                                    backgroundColor: 'white',
                                } }} >
                                <InputLabel htmlFor="filled-adornment-amount">Enter Contact Number</InputLabel>
                                <FilledInput
                                id="filled-adornment-amount"
                                value={values.contactNumber || ''}
                                onChange={handleChange('contactNumber')}
                                />
                            </FormControl>
                            <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '40ch', marginBottom:'20px', '& .MuiInputLabel-root': {
                                color: 'balck',
                                fontSize: '1.2rem',
                                },
                                '& .MuiFilledInput-root':{
                                    backgroundColor: 'white',
                                } }} 
                                >
                                <InputLabel htmlFor="filled-adornment-amount">Enter Email Id</InputLabel>
                                <FilledInput
                                id="filled-adornment-amount"
                                value={values.emailId || ''}
                                type={'email'}
                                required={true}
                                onChange={handleChange('emailId')}
                                />
                            </FormControl>
                            <p id='errormsg'>{errorMessages}</p>
                            <Button variant="outlined" id="but" type='submit' onClick={handleSubmit} >Next</Button>
                            </form>
                        </InputContainer>
                        <NotePointContainer>
                            <p style={{fontSize:'1.3rem'}}><b>Please Note</b></p>
                            <ul>
                                <li><p>username Should be Unique and it should contain minimum 8 letters</p></li>
                                <li><p>Contact Number should be a number and it should contain 10 digits</p></li>
                                <li><p>Email Id should be a valid email id</p></li>
                                <li><p>please provide your Email which  is in the use</p></li>                       

                            </ul>                          
                        </NotePointContainer>
                    </AllInputContainer>
                </OuterContainer>
            </SliderContainer>
            <div style={{marginTop:"15vh"}}>
                <Footer/>
            </div>
        </>
    )
}

export default ContactRegister;