import {SliderContainer, MLeftMenu, MRightMenu} from '../AllAdminServices/DashboardContainers';
import styled from 'styled-components';
import Menubar from '../Navbar/Menubar';
import React from 'react';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
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

function UpdateRLNDetails() {

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
    const [values, setValues] = React.useState({
        homeLoanInterest: '',
        educationLoanInterest: '',
        depositInterest: '',
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.homeLoanInterest && values.educationLoanInterest && values.depositInterest
            && !isNaN(values.homeLoanInterest)  && !isNaN(values.educationLoanInterest)  && !isNaN(values.depositInterest) 
            ) {

            let data = {
                homeLoanInterest: values.homeLoanInterest,
                educationLoanInterest: values.educationLoanInterest,
                depositInterest: values.depositInterest,
            }

            RLNDataService.updateRLNAllDetails(data)
                .then((response) => {
                    console.log(response);
                    if (response.statusCode === 200) {
                        // navigate('/superadmin/dashboard');
                        Swal.fire({
                            title: 'Success!',
                            text: 'Updated Successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/rlndetails');
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
            setErrorMessages('Please fill all the fields and enter valid data');
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
                <h2>Update RLN Details</h2>
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
                        <InputLabel htmlFor="filled-adornment-amount">Enter Home Loan Interest  </InputLabel>
                        <FilledInput
                        id="filled-adornment-amount"
                        value={values.homeLoanInterest || ''}
                        onChange={handleChange('homeLoanInterest')}
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
                        <InputLabel htmlFor="filled-adornment-amount">Enter Education Loan Interest </InputLabel>
                        <FilledInput
                        id="filled-adornment-amount"
                        value={values.educationLoanInterest || ''}
                        onChange={handleChange('educationLoanInterest')}
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
                        <InputLabel htmlFor="filled-adornment-amount">Enter Deposit Interest </InputLabel>
                        <FilledInput
                        id="filled-adornment-amount"
                        value={values.depositInterest || ''}
                        onChange={handleChange('depositInterest')}
                        />
                    </FormControl>
                    <p style={{width:'50vw', textAlign:'center', color:'red'}}>{errorMessages}</p>
                    <Button variant="outlined" id="but" onClick={handleSubmit} >Update</Button>
                </AddManagerContainer>
            </EAllContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default UpdateRLNDetails;