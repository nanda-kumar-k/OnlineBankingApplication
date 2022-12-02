import {SliderContainer, MLeftMenu, MRightMenu} from '../AllAdminServices/DashboardContainers';
import styled from 'styled-components';
import Menubar from '../Navbar/Menubar';
import React from 'react';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import RLNDataService from '../services/SuperAdmin/rln.superadmin.service';
import { useNavigate, useParams} from "react-router-dom";
import Swal from 'sweetalert2';
const EAllContainer = styled.div`
    width: 81vw; 
    height: 85vh;
    padding: 5vh 10vw 0vh 10vw;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* justify-content: flex-start; */
    /* align-items: flex-start; */

    /* background-color: red; */
    padding: 2vh 2vw;

    h2 {
        padding: 1vh 1vw;
        box-shadow: 1px 1px whitesmoke;
        border-bottom: 1px solid #E6E6E6;
    }
    hr {
        width: 100%;
        height: 1px;
        background-color: #E6E6E6;
    }
`;

const AddManagerContainer = styled.div`
    width: 70vw;
    height: 50vh;
    margin-top: 10vh;
    padding: 2vh 0vw;
    background-color: white;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    #but{
        margin-top: 5vh;
        width: 25vw;
    }
    
`;

function AddManager() {

    const navigate = useNavigate();
    const params = useParams();
    React.useEffect(() => {
        window.scrollTo(0, 0);
        const superadmin = JSON.parse(localStorage.getItem("superadmin"));
        const manager = JSON.parse(localStorage.getItem("manager"));
        const employee = JSON.parse(localStorage.getItem("employee"));

        if( superadmin || manager || employee){}
        else{
          navigate('/');
        }
        
    }, [navigate,params]);

    const [errorMessages, setErrorMessages] = React.useState('');
    const [dobvalue, setDobvalue] = React.useState(new Date());
    const [values, setValues] = React.useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailId: '',
        gender: '',
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        const date = new Date(dobvalue);
        const dob = date.toISOString().split('T')[0];

        if (values.username && values.password && values.firstName && values.lastName && values.phoneNumber && values.emailId && values.gender ) {

            let data = {
                username: values.username,
                password: values.password,
                firstName: values.firstName,
                lastName: values.lastName,
                phoneNumber: values.phoneNumber,
                emailId: values.emailId,
                gender: values.gender,
                dob: dob,
            }

            RLNDataService.addManager(data)
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        // navigate('/superadmin/dashboard');
                        Swal.fire({
                            title: 'Success!',
                            text: 'Login Success',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/allmanagers');
                            }
                        })
                    }
                    else {
                        setErrorMessages(response.message);
                    }
                }
                )
                .catch((e) => {
                    console.log(e);
                }
            );


        }
        else {
            setErrorMessages('Please fill all the fields');
        }
    };

  return (
    <>
      <SliderContainer>
        <MLeftMenu>
            <Menubar/>
        </MLeftMenu>
        <MRightMenu>
            <EAllContainer>
                <h2>Add New Manager</h2>
                <hr/>
                <AddManagerContainer>
                    <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', marginBottom:'10px', '& .MuiInputLabel-root': {
                        color: 'balck',
                        fontSize: '1.1rem',
                        },
                        '& .MuiFilledInput-root':{
                            backgroundColor: 'white',
                            height: '3rem',
                        } }} >
                        <InputLabel htmlFor="filled-adornment-amount">Enter Username</InputLabel>
                        <FilledInput
                        id="filled-adornment-amount"
                        value={values.username || ''}
                        onChange={handleChange('username')}
                        />
                    </FormControl>
                    <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', marginBottom:'10px', '& .MuiInputLabel-root': {
                        color: 'balck',
                        fontSize: '1.1rem',
                        },
                        '& .MuiFilledInput-root':{
                            backgroundColor: 'white',
                            height: '3rem',
                        } }} >
                        <InputLabel htmlFor="filled-adornment-amount">Enter First Name</InputLabel>
                        <FilledInput
                        id="filled-adornment-amount"
                        value={values.firstName || ''}
                        onChange={handleChange('firstName')}
                        />
                    </FormControl>
                    <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', marginBottom:'10px', '& .MuiInputLabel-root': {
                        color: 'balck',
                        fontSize: '1.1rem',
                        },
                        '& .MuiFilledInput-root':{
                            backgroundColor: 'white',
                            height: '3rem',
                        } }} >
                        <InputLabel htmlFor="filled-adornment-amount">Enter Last Name</InputLabel>
                        <FilledInput
                        id="filled-adornment-amount"
                        value={values.lastName || ''}
                        onChange={handleChange('lastName')}
                        />
                    </FormControl>
                    <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', marginBottom:'10px', '& .MuiInputLabel-root': {
                        color: 'balck',
                        fontSize: '1.1rem',
                        },
                        '& .MuiFilledInput-root':{
                            backgroundColor: 'white',
                            height: '3rem',
                        } }} >
                        <InputLabel htmlFor="filled-adornment-amount">Enter Email Id</InputLabel>
                        <FilledInput
                        id="filled-adornment-amount"
                        value={values.emailId || ''}
                        onChange={handleChange('emailId')}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, mt: 1, width: '50ch', marginTop:'5px',marginBottom:'10px', marginLeft:'30px'}}>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
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
                    <div style={{width:'30vw', marginTop:'10px', marginBottom:'10px', marginLeft:'10px'}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}  >
                            <DatePicker
                                label="Select Date of Birth (DD/MM/YYYY)" 
                                value={dobvalue || ''}
                                onChange={(newValue) => {
                                setDobvalue(newValue);
                                }}                            
                                renderInput={(params) => <TextField {...params} /> }
                            />
                        </LocalizationProvider>
                    </div>
                    
                    <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', marginBottom:'10px', '& .MuiInputLabel-root': {
                        color: 'balck',
                        fontSize: '1.1rem',
                        },
                        '& .MuiFilledInput-root':{
                            backgroundColor: 'white',
                            height: '3rem',
                        } }} >
                        <InputLabel htmlFor="filled-adornment-amount">Enter Phone Number</InputLabel>
                        <FilledInput
                        id="filled-adornment-amount"
                        value={values.phoneNumber || ''}
                        onChange={handleChange('phoneNumber')}
                        />
                    </FormControl>
                    <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', marginBottom:'10px', '& .MuiInputLabel-root': {
                        color: 'balck',
                        fontSize: '1.2rem',
                        },
                        '& .MuiFilledInput-root':{
                            backgroundColor: 'white',
                            height: '3rem',
                        } }} >
                        <InputLabel htmlFor="filled-adornment-amount">Enter Password</InputLabel>
                        <FilledInput
                        id="filled-adornment-amount"
                        value={values.password || ''}
                        onChange={handleChange('password')}
                        />
                    </FormControl>
                    <p style={{width:'50vw', textAlign:'center', color:'red'}}>{errorMessages}</p>
                    <Button variant="outlined" id="but" onClick={handleSubmit} >Add Manager</Button>
                </AddManagerContainer>
            </EAllContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default AddManager;