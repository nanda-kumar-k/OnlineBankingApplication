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
const CHRightContainer = styled.div`
    padding: 1vh 1vw;
    width: 64vw;
    height: 80vh;
    background-color: white;
    border-radius: 10px;
    /* background-color: red; */
    h2 {
        padding: 1vh 1vw;
        box-shadow: 1px 1px whitesmoke;
        border-bottom: 1px solid #E6E6E6;
        /* margin-bottom: 25px; */
    }
`;

const TransferContainer = styled.div`
    width: 64vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
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
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    /* https://mui.com/material-ui/react-text-field/ */
`;

function Transfer() {

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
                    <h2>Money Transfer</h2>
                    <hr/>
                    <TransferContainer>
                        <TransferImg src={TransferBackground} alt="" />
                        <TransferForm>
                        <h2 style={{marginBottom:'20px'}}>Account Details</h2>
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', marginBottom:'20px', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Your Account Number</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={values.senderaccount}
                            onChange={handleChange('senderaccount')}
                            />
                        </FormControl>
                            <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch',marginBottom:'20px', '& .MuiInputLabel-root': {
                                color: 'balck',
                                fontSize: '1.2rem',
                                },
                                '& .MuiFilledInput-root':{
                                    backgroundColor: 'white',
                            } }} >
                                <InputLabel htmlFor="filled-adornment-amount">Account Number</InputLabel>
                                <FilledInput
                                id="filled-adornment-amount"
                                value={values.receiveraccount}
                                onChange={handleChange('receiveraccount')}
                                />
                            </FormControl>
                            <FormControl variant="standard" sx={{ m: 1, width: '50ch',marginBottom:'20px', '& .MuiInputLabel-root': {
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
                            <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch',marginBottom:'20px', '& .MuiInputLabel-root': {
                                color: 'balck',
                                fontSize: '1.2rem',
                                },
                                '& .MuiFilledInput-root':{
                                    backgroundColor: 'white',
                                } }} >
                                <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                                <FilledInput
                                id="filled-adornment-amount"
                                value={values.amount}
                                onChange={handleChange('amount')}
                                />
                            </FormControl>
                            <Button variant="contained" endIcon={<SendIcon />} sx={{ m: 1, mt: 1, width: '50ch',marginBottom:'50px', backgroundColor: '#3498db', '& .MuiButton-root': {
                                color: 'balck',
                                // fontWeight: 'bold',
                                fontSize: '1.2rem',
                                
                                } }} onClick = {handleSubmit} >
                                    Send
                            </Button>
                        </TransferForm>
                    </TransferContainer>
                </CHRightContainer>
            </CHRight>
        </CHContainer>
        </>
    )
}

export default Transfer;