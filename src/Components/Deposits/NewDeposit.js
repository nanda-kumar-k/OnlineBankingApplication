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
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom';
import Footer from "../Footer/Footer";
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
    height: 65vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* overflow: scroll; */

    #errormsg {
       
        color: red;
        font-size: 1rem;
        margin-top: 1vh;
        width: 40ch;
        text-align:center ;
    }
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

    const navigate = useNavigate();
    const params = useParams();
    React.useEffect(() => {
        window.scrollTo(0, 0);
        const currentuser = JSON.parse(localStorage.getItem('customerLogin'));
        if ( !currentuser) {
            navigate('/logintype');
        }
    }, [navigate,params]);

    const [errorMessages, setErrorMessages] = React.useState('');
    const [depositEndDate, setDepositEndDate] = React.useState(new Date());
    const [values, setValues] = React.useState({
        depositAmount: '',
        nomineeName: ''
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);

        if(values.depositAmount && values.nomineeName ){

            if(!isNaN(values.depositAmount)) {
                const date = new Date(depositEndDate);
                const ded = date.toISOString().split('T')[0];
                let data = {
                    depositAmount: values.depositAmount,
                    nomineeName: values.nomineeName,
                    depositEndDate: ded
                }

                RLNDataService.openNewDeposit(data).then((response) => {
                    console.log(response);
                    if(response.statusCode === 200){
                        
                        Swal.fire({
                            title: 'Success!',
                            text: 'Deposit opened successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate('/alldeposits');
                                }
                            })
                        
                    }
                    else if (response.statusCode === 401){
                        Swal.fire({
                            title: 'info!',
                            text: response.message,
                            icon: 'info',
                            confirmButtonText: 'Ok'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    setErrorMessages(response.message);
                                }
                            })
                    }
                    else {
                        Swal.fire({
                            title: 'Error!',
                            text: response.message,
                            icon: 'error',
                            confirmButtonText: 'Ok'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    setErrorMessages(response.message);
                                }
                            })
                    }
                }).catch((error) => {
                    console.log(error);
                }
                );
                
            }
            else{
                setErrorMessages("Deposit amount should be a number");
            }


        }
        else{
            setErrorMessages('Please fill all the fields');
        }
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
                                    value={values.depositAmount}
                                    onChange={handleChange('depositAmount')}
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
                                            label="Select Closing Date of Fixed Deposit" 
                                            value={depositEndDate}
                                            onChange={(newValue) => {
                                            setDepositEndDate(newValue);
                                            }}                            
                                            renderInput={(params) => <TextField {...params} /> }
                                        />
                                    </LocalizationProvider>
                                </FormControl>        
                            </DepositContainer>
                            <p id='errormsg'>{errorMessages}</p> 
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
        <div style={{marginTop:"10vh"}}>
        <Footer/>
        </div>
        </>
    )
}

export default NewDeposit;