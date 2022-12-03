import { CHContainer, CHLeft, CHNavbar, CHRight, BackImg } from "../CustomerHome/CustomerHome";
import background from "../CustomerHome/Images/background.png";
import AllLinks from "../CustomerHome/AllLinks";
import styled from "styled-components";
import CustomerImage from "./Images/customer.jpg";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import React from "react";
import RLNDataService from "../../services/rln.customer.service";
import Footer from "../Footer/Footer";
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Swal from "sweetalert2";
const CHRightContainer = styled.div`
    padding: 1vh 1vw;
    width: 64vw;
    height: auto;
    background-color: white;
    border-radius: 10px;

    .profileImgContainer{
        width: 64vw;
        height: 20vh;
        /* background-color: green; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* border-radius: 10px; */
        /* box-shadow: 1px 1px whitesmoke; */
        border-bottom: 1px solid #E6E6E6;
        /* -webkit-box-shadow: 0px 3px  #0000001f; */
        /* position: sticky;
        top: 0;
        z-index: 1; */

        hr{
            width: 28vw;
            height: 2px;
            background-color:  #3498db;
        }
    }
`;

const ProfileImg = styled.img`
    width: 10vw;
    height: 20vh;
    border-radius: 50%;
`;

const ProfileUpdate = styled.div`
    width: 64vw;
    height: auto;
    /* background-color: red; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 1vh 1vw;
`;


function CustomerProfileUpdate() {

    const [values, setValues] = React.useState('');
    const [fvalue, setFvalue] = React.useState(new Date());
    const [mvalue, setMvalue] = React.useState(new Date());
    const [dobvalue, setDobvalue] = React.useState(new Date());
    const [update, setUpdate] = React.useState('');

    const params = useParams();
    const navigate = useNavigate();
    React.useEffect(() => {
        window.scrollTo(0, 0);
        const currentuser = JSON.parse(localStorage.getItem('customerLogin'));
        if ( !currentuser) {
            navigate('/logintype');
        }
        RLNDataService.getCustomerProfile ().then((response) => {
            if(response.statusCode === 200) {

                if (response.data.customer !== undefined ) {
                    setFvalue(response.data.fatherDob);
                    setMvalue(response.data.motherDob);
                    setDobvalue(response.data.dob);
                    setValues(response.data);
                    setUpdate(response.data.customer);
                }
                
            }
            else if (response.statusCode === 204) {
                // navigate('/login');
            }
        })
        .catch((error) => {
            console.log(error);
        });
    },[params,navigate]);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
    };

    const handleChangeUpdate = (prop) => (event) => {
        setUpdate({ ...update, [prop]: event.target.value });
        // console.log(values);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // useStates to json object
        let data = values;
        data.fatherDob = fvalue;
        data.motherDob = mvalue;
        data.dob = dobvalue;
        console.log(data);
        RLNDataService.customerProfileUpdate(data).then((response) => {
            if(response.statusCode === 200) {
                Swal.fire({
                    title: "Success!",
                    text: "Profile Updated Successfully",
                    icon: "success",
                    confirmButtonText: "Ok",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/profile');
                    }
                });
            }
            else if (response.statusCode === 204) {
                // navigate('/login');
            }
        })
        .catch((error) => {
            console.log(error);
        });

    }

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
                    <div className="profileImgContainer">
                        <hr/>
                        <ProfileImg src={CustomerImage} alt="" />
                        <hr/>
                    </div>
                    {values ? 
                        <>
                    <ProfileUpdate>
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '40ch', marginBottom:'20px', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Update Contact Number</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={update.contactNumber || ''}
                            onChange={handleChangeUpdate('contactNumber')}
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
                            <InputLabel htmlFor="filled-adornment-amount">Update Email Id</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={update.emailId || ''}
                            type={'email'}
                            required={true}
                            onChange={handleChangeUpdate('emailId')}
                            />
                        </FormControl>
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '40ch', marginBottom:'20px', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Update First Name</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={update.firstName || ''}
                            onChange={handleChangeUpdate('firstName')}
                            />
                        </FormControl>
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '40ch', marginBottom:'20px', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Update Last Name</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={update.lastName || ''}
                            onChange={handleChangeUpdate('lastName')}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, mt: 1, width: '40ch', marginTop:'20px',marginBottom:'20px'}}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Update Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={values.gender || ''}
                            onChange={handleChange('gender')}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                        </FormControl>
                        <div style={{width:'20vw', marginTop:'20px', marginBottom:'20px', marginLeft:'10px'}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}  >
                                <DatePicker
                                    label="Update Date of Birth (DD/MM/YYYY)" 
                                    value={dobvalue || ''}
                                    onChange={(newValue) => {
                                    setDobvalue(newValue);
                                    }}                            
                                    renderInput={(params) => <TextField {...params} /> }
                                />
                            </LocalizationProvider>
                        </div>
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '40ch', marginBottom:'20px', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Update Address</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={values.address || ''}
                            onChange={handleChange('address')}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, mt: 1, width: '40ch', marginTop:'20px',marginBottom:'20px'}}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Update Marital Status</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={values.maritalStatus || ''}
                            onChange={handleChange('maritalStatus')}
                        >
                            <FormControlLabel value="true" control={<Radio />} label="Yes" />
                            <FormControlLabel value="false" control={<Radio />} label="No" />
                        </RadioGroup>
                        </FormControl>
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '40ch', marginBottom:'20px', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Update Aadhaar Number</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={values.aadhaarNumber  || ''  }
                            onChange={handleChange('aadhaarNumber')}
                            />
                        </FormControl>
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '40ch', marginBottom:'20px', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Update PAN Number</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={values.panNumber  || ''}
                            onChange={handleChange('panNumber')}
                            />
                        </FormControl>
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '40ch', marginBottom:'20px', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Update Highest Qualification</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={values.qualification || ''}
                            onChange={handleChange('qualification')}
                            />
                        </FormControl>
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '40ch', marginBottom:'20px', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Update Father's Name</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={values.fatherName || ''}
                            onChange={handleChange('fatherName')}
                            />
                        </FormControl>
                        <div style={{width:'20vw', marginTop:'20px', marginBottom:'20px'}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}  >
                                <DatePicker
                                    label="Update Father's DOB (DD/MM/YYYY)" 
                                    value={fvalue || ''}
                                    onChange={(newValue) => {
                                    setFvalue(newValue);
                                    }}                            
                                    renderInput={(params) => <TextField {...params} /> }
                                />
                            </LocalizationProvider>
                        </div>
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '40ch', marginBottom:'20px', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Update Mother's Name</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={values.motherName || ''}
                            onChange={handleChange('motherName')}
                            />
                        </FormControl>
                        <div style={{width:'22vw', marginTop:'20px', marginBottom:'20px'}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}  >
                                <DatePicker
                                    label="Update Mother's DOB (DD/MM/YYYY)" 
                                    value={mvalue || ''}
                                    onChange={(newValue) => {
                                    setMvalue(newValue);
                                    }}                            
                                    renderInput={(params) => <TextField {...params} /> }
                                />
                            </LocalizationProvider>
                        </div>
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '40ch', marginBottom:'20px', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Update Password</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={''}
                            onChange={handleChangeUpdate('password')}
                            />
                        </FormControl>
                    </ProfileUpdate>
                    <Stack spacing={2} direction="row" style={{marginTop:"10vh"}}>
                            <NavLink to="/profile">
                                <Button variant="outlined" style={{marginLeft:"20vw"}} >Back</Button>
                            </NavLink>
                            <Button variant="outlined" id="but" style={{marginLeft:'100px'}} onClick={handleSubmit} >Update</Button>
                    </Stack>
                    </>
                    : <></> }
                    
                </CHRightContainer>
            </CHRight>
        </CHContainer>
        <div style={{marginTop:"10vh"}}>
            <Footer/>
        </div>
    </>
    )
}

export default CustomerProfileUpdate;