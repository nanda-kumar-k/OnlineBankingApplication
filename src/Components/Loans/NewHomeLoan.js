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
        padding: 1vh 1vw;
        box-shadow: 1px 1px whitesmoke;
        border-bottom: 1px solid #E6E6E6;
        /* margin-bottom: 25px; */
    }
`;

const LoanContainer = styled.div`
    width: 64vw;
    height: 50vh;
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

const InputFileContainer = styled.div`
    width: 50ch;
    height: 7.7vh;
    display: flex;
    z-index: 1;
    justify-content:center ;
    align-items: center;
    background-color: white;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    border: solid 0.5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    color:rgba(0, 0, 0, 0.6);
    button {
        cursor: pointer;
        background: transparent;
        border: 0;
        margin-right: 10px;
    } 

    button:focus {
        outline: none;
    }

     button img {
        width: 20px;
        height: 20px;
    }
    
    input[type='file'] {
        display: none;
    }
`;

const FImg = styled.img`
    width: 20px;
    height: 20px;
`;

const DepositNote = styled.div``;

function NewHomeLoan() {

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
    const [file, setFile] = React.useState([]);
    const inputFile = React.useRef(null);
    
    const FhandleChange = (e) => {
        setFile([...file, e.target.files[0]]);
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
                            value={values.receiveraccount}
                            onChange={handleChange('receiveraccount')}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1, width: '50ch', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            }, }}>
                            <InputLabel id="demo-simple-select-standard-label">Select Account Type To Transfer Amount</InputLabel>
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
                            <InputLabel htmlFor="filled-adornment-amount">Home Address</InputLabel>
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
                                    label="Select Closing Date of Home Loan" 
                                    // value={value}
                                    // onChange={(newValue) => {
                                    // setValue(newValue);
                                    // }}                            
                                    renderInput={(params) => <TextField {...params} /> }
                                />
                            </LocalizationProvider>
                        </FormControl>
                        <InputFileContainer>   
                        <button onClick={() => inputFile.current.click()}>
                            <FImg src="https://www.svgrepo.com/show/12604/paper-clip.svg" />
                        </button>
                        <input type="file" onChange={FhandleChange} ref={inputFile} />
                        <p>Uploaded Files:</p> {file.map((x) => x.name).join(', ')}
                        </InputFileContainer>
                    </LoanContainer>
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