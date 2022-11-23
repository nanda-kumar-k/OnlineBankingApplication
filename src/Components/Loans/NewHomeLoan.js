import { CHContainer, CHLeft, CHNavbar, CHRight, BackImg } from "../CustomerHome/CustomerHome";
import background from "../CustomerHome/Images/background.png";
import AllLinks from "../CustomerHome/AllLinks";
import styled from "styled-components";
import TransferBackground from "./Images/transfer4.png";
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import RLNDataService from "../../services/rln.customer.service";

const CHRightContainer = styled.div`
    padding: 1vh 1vw;
    width: 64vw;
    height: 80vh;
    background-color: white;
    border-radius: 10px;
    overflow: scroll;
    /* background-color: red; */
    h2 {
        padding: 1vh 1vw;
        box-shadow: 1px 1px whitesmoke;
        border-bottom: 1px solid #E6E6E6;
        /* margin-bottom: 25px; */
    }
    #errormsg {
        color: red;
        font-size: 1.2rem;
        margin-top: 1vh;
        text-align:center ;
        margin-bottom: 1vh;
    }

`;

const LoanContainer = styled.div`
    width: 64vw;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 10;
`;

const TransferImg = styled.img`
    position: absolute;
    width: 60vw;
    height: 50vh;
    opacity: 30%;
`;


const DepositNote = styled.div``;

function NewHomeLoan() {

    const [loanEndDate, setLoanEndDate] = React.useState(new Date());
    const [errorMessages, setErrorMessages] = React.useState('');
    const [values, setValues] = React.useState({
        loanAmount: '',
        homeAddress: '',
        nomineeName: ''
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        
        if ( values.loanAmount && values.homeAddress &&  values.nomineeName && loanEndDate ) {
            
            if ( !isNaN(values.loanAmount) ) {
                if ( Number(values.loanAmount) >= 10000 ) {
                    const date = new Date(loanEndDate);
                    const loandate = date.toISOString().split('T')[0];
                    let data = {
                        loanAmount: values.loanAmount,
                        homeAddress: values.homeAddress,
                        nomineeName: values.nomineeName,
                        loanEndDate: loandate
                    };

                    RLNDataService.openNewHomeLoan(data).then( res => {
                        console.log(res.data);
                        if ( res.statusCode === 200 ) {
                            localStorage.setItem('loanId', res.data);
                            setErrorMessages(res.message);
                        }
                        else {
                            setErrorMessages(res.message);
                        }
                    }).catch( err => {
                        console.log(err);
                    });

                }
                else {
                    setErrorMessages('Loan amount must be greater than or equal to 10000.');
                }

            }
            else {
                setErrorMessages('Loan amount must be a number.');
            }

        }
        else {
            setErrorMessages('Please fill all the fields...!!');
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
                    <h2>New Home Loan</h2>
                    <hr/>
                    <h2 style={{textAlign : 'center'}}>Enter Details To Open New Home Loan</h2>
                    <LoanContainer>
                        <TransferImg src={TransferBackground} alt="" />
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Enter Loan Amount</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={values.loanAmount}
                            onChange={handleChange('loanAmount')}
                            />
                        </FormControl>
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Home Address</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={values.homeAddress}
                            onChange={handleChange('homeAddress')}
                            />
                        </FormControl>
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Nominee Name</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={values.nomineeName}
                            onChange={handleChange('nomineeName')}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, mt: 1, width: '50ch', '& .MuiTextField-root': {
                            width: '50ch'
                            },
                            }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker
                                    label="Select Closing Date of Home Loan" 
                                    value={loanEndDate}
                                    onChange={(newValue) => {
                                    setLoanEndDate(newValue);
                                    }}                            
                                    renderInput={(params) => <TextField {...params} /> }
                                />
                            </LocalizationProvider>
                        </FormControl>
                    </LoanContainer>
                    <p id='errormsg'>{errorMessages}</p>
                    <LoanContainer style={{height:'10vh'}}>
                        <Button variant="contained" endIcon={<SendIcon />} sx={{ m: 1, mt: 1, width: '50ch',marginBottom:'0px', backgroundColor: '#3498db', '& .MuiButton-root': {
                            color: 'balck',
                            // fontWeight: 'bold',
                            fontSize: '1.2rem',
                            
                            } }} onClick = {handleSubmit} >
                                Submit The Form
                        </Button>
                    </LoanContainer>
                    <DepositNote>
                        <h3>Note:</h3>
                        <p>1. Please Enter Valid Details.</p>
                        <p>2. Please Enter Valid Amount.</p>
                        <p>3. Please Enter Valid Account No.</p>
                        <p>4. Please Enter Valid IFSC Code.</p>


                    </DepositNote>
                </CHRightContainer>
            </CHRight>
        </CHContainer>
        </>
    )
}

export default NewHomeLoan;