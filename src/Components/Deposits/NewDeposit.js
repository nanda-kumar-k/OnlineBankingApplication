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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CHRightContainer = styled.div`
    padding: 1vh 1vw;
    width: 64vw;
    height: 80vh;
    background-color: white;
    border-radius: 10px;
    overflow: scroll;
    /* background-color: red; */
    h2 {
        /* padding: 1vh 1vw; */
        box-shadow: 1px 1px whitesmoke;
        border-bottom: 1px solid #E6E6E6;
        /* margin-bottom: 25px; */
    }
`;

const TransferContainer = styled.div`
    width: 64vw;
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* overflow: auto; */
    /* background-color: yellow; */
`;


const TransferImg = styled.img`
    position: absolute;
    width: 60vw;
    height: 70vh;
    opacity: 30%;
`;

const TransferForm = styled.div`
    position: absolute;
    width: 64vw;
    height: 50vh;
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    /* overflow: scroll; */
`;

const DepositContainer = styled.div`
    width: 64vw;
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const DepositNote = styled.div`

`;

function NewDeposit() {

    const [values, setValues] = React.useState({
        senderaccount: '',
        receiveraccount: '',
        accounttype: '',
        amount: ''
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
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
                    <h2>New Fix Deposit</h2>
                    <hr/>
                    <TransferContainer>
                        <TransferImg src={TransferBackground} alt="" />
                        <TransferForm>
                            <h2>Account Details</h2>
                            <DepositContainer>
                                <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', '& .MuiInputLabel-root': {
                                    color: 'balck',
                                    fontSize: '1.2rem',
                                    },
                                    '& .MuiFilledInput-root':{
                                        backgroundColor: 'white',
                                    } }} >
                                    <InputLabel htmlFor="filled-adornment-amount">Enter Amount To Fix</InputLabel>
                                    <FilledInput
                                    id="filled-adornment-amount"
                                    value={values.receiveraccount}
                                    onChange={handleChange('receiveraccount')}
                                    />
                                </FormControl>
                                <FormControl variant="standard" sx={{ m: 1, width: '50ch', '& .MuiInputLabel-root': {
                                    color: 'balck',
                                    fontSize: '1.2rem',
                                    }, }}>
                                    <InputLabel id="demo-simple-select-standard-label">Select Account Type</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={values.accounttype}
                                    onChange={handleChange('accounttype')}
                                    label="Select Account Type"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Current</MenuItem>
                                    <MenuItem value={2}>Savings</MenuItem>
                                    </Select>
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
                                    value={values.receiveraccount}
                                    onChange={handleChange('receiveraccount')}
                                    />
                                </FormControl>
                                <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', '& .MuiInputLabel-root': {
                                    color: 'balck',
                                    fontSize: '1.2rem',
                                    },
                                    '& .MuiFilledInput-root':{
                                        backgroundColor: 'white',
                                    } }} >
                                    <InputLabel htmlFor="filled-adornment-amount">Nominee Account No</InputLabel>
                                    <FilledInput
                                    id="filled-adornment-amount"
                                    value={values.amount}
                                    onChange={handleChange('amount')}
                                    />
                                </FormControl>
                                <FormControl sx={{ m: 1, mt: 1, width: '50ch', '& .MuiTextField-root': {
                                    width: '50ch'
                                    },
                                    }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DatePicker
                                            label="Select Closing Date of Fixed Deposit" 
                                            // value={value}
                                            // onChange={(newValue) => {
                                            // setValue(newValue);
                                            // }}                            
                                            renderInput={(params) => <TextField {...params} /> }
                                        />
                                    </LocalizationProvider>
                                </FormControl>         
                            </DepositContainer>
                            <Button variant="contained" endIcon={<SendIcon />} sx={{ m: 1, mt: 1, width: '50ch',marginBottom:'0px', backgroundColor: '#3498db', '& .MuiButton-root': {
                                color: 'balck',
                                // fontWeight: 'bold',
                                fontSize: '1.2rem',
                                
                                } }} onClick = {handleSubmit} >
                                    Open New Deposit
                            </Button>
                        </TransferForm>
                    </TransferContainer>
                    <DepositNote>
                        <h3>Note:</h3>
                        <p>1. Minimum amount to fix is Rs. 1000/-</p>
                        <p>2. Maximum amount to fix is Rs. 100000/-</p>
                        <p>3. Interest rate is 5% per annum</p>
                        <p>4. Interest will be credited to your account on the closing date of the fixed deposit</p>

                    </DepositNote>
                </CHRightContainer>
            </CHRight>
        </CHContainer>
        </>
    )
}

export default NewDeposit;