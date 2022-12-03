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
import { useNavigate, useParams } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Swal from 'sweetalert2'
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
    height: 35vh;
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

    const navigate = useNavigate();
    const params = useParams();
    React.useEffect(() => {
        window.scrollTo(0, 0);
        const currentuser = JSON.parse(localStorage.getItem('customerLogin'));
        if ( !currentuser) {
            navigate('/logintype');
        }
    }, [navigate,params]);

    const [loanEndDate, setLoanEndDate] = React.useState(new Date());
    const [errorMessages, setErrorMessages] = React.useState('');
    const [values, setValues] = React.useState({
        loanAmount: '',
        homeAddress: '',
        nomineeName: '',
        cibilSCore: '',
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        
        if ( values.loanAmount && values.homeAddress &&  values.nomineeName && loanEndDate && values.cibilSCore ) {
            
            if ( !isNaN(values.loanAmount) && !isNaN(values.cibilSCore) ) {
                if ( Number(values.loanAmount) >= 10000 ) {
                    const date = new Date(loanEndDate);
                    const loandate = date.toISOString().split('T')[0];
                    let data = {
                        loanAmount: values.loanAmount,
                        homeAddress: values.homeAddress,
                        nomineeName: values.nomineeName,
                        loanEndDate: loandate,
                        cibilSCore : values.cibilSCore
                    };

                    RLNDataService.openNewHomeLoan(data).then( res => {
                        console.log(res.data);
                        if ( res.statusCode === 200 ) {
                            localStorage.setItem('loanId', res.data);
                            Swal.fire({
                                title: 'Success',
                                text: 'Loan Applied Successfully',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            }).then( () => {
                                navigate('/allloans');
                            });
                        }
                        else {
                            Swal.fire({
                                title: 'Error',
                                text: res.message,
                                icon: 'error',
                                confirmButtonText: 'Ok'
                            }).then( (res) => {
                                if ( res.isConfirmed ) {
                                    setErrorMessages(res.message);
                                }
                            });

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
                setErrorMessages('Loan amount and Cibil SCore must be a number.');
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
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Enter Cibil SCore</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={values.cibilSCore}
                            onChange={handleChange('cibilSCore')}
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
                        <p>1. Loan Amount must be greater than or equal to 10000.</p>
                        <p>2. Loan Amount must be a number.</p>
                        <p>3. Enter valid Cibil SCore</p>
                        <p>4. Please fill all the fields.</p>
                        <p>5. Please Give Correct address, if you provide wrong address, your loan will not accpect</p>
                        <p>6. Address should be complete, it contains street, city, state, zip, etc.</p>
                        <p>7. Duration of the loan should be more than 3 months.</p>
                        <p>8. By clicking on the submit button, you agree to the terms and conditions of the bank.</p>
                        <p>9. The bank will not be responsible for any loss or damage caused by the use of this website.</p>
                        <p>10. The bank reserves the right to change the terms and conditions of the website at any time.</p>
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

export default NewHomeLoan;