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
import RLNDataService from "../../services/rln.customer.service";
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import Footer from "../Footer/Footer";

export const CHRightContainer = styled.div`
    padding: 1vh 1vw;
    width: 64vw;
    height: 80vh;
    background-color: white;
    border-radius: 10px;
    overflow: scroll;
    h2 {
        padding: 1vh 1vw;
        box-shadow: 1px 1px whitesmoke;
        border-bottom: 1px solid #E6E6E6;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 10;
`;

const DepositNote = styled.div``;

const TransferImg = styled.img`
    position: absolute;
    width: 60vw;
    height: 50vh;
    opacity: 30%;
`;

function LoanPayment() {

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
    const [values, setValues] = React.useState({
        loanId: '',
        amountPaid: '',
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
      };

      const handleSubmit = (event) => {
        event.preventDefault();

        if ( values.loanId && values.amountPaid ) {

            if ( !isNaN(values.loanId) ) {

                if ( values.loanId.length === 8 ) {

                    if ( !isNaN(values.amountPaid) || Number(values.amountPaid >=0) ) {
                        
                        let data = {
                            loanId : values.loanId,
                            amountPaid : values.amountPaid
                        };

                        RLNDataService.loanPayment(data).then( res => {
                            console.log(res.data);
                            if ( res.statusCode === 200 ) {
                                Swal.fire({
                                    title: 'Success',
                                    text: res.message,
                                    icon: 'success',
                                    confirmButtonText: 'Ok'
                                }).then( () => {
                                    navigate('/loanpaymentshistory');
                                });
                            
                            }
                            else {
                                Swal.fire({
                                    title: 'Loan Payment Status',
                                    text: res.message,
                                    icon: 'info',
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
                        setErrorMessages("Amount Should be number and greater than 0...!!");
                    }
                }
                else {
                    setErrorMessages("Loan ID should be 8 digit number...!!");
                }
            }
            else {
                setErrorMessages("Loan Id Should be number...!!");
            }

        }
        else {
            setErrorMessages('Please fill all the fields...!!');
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
                    <h2>Loan Payment</h2>
                    <hr/>
                    <h2 style={{textAlign : 'center'}}>Enter Loan Details To Pay</h2>
                    <LoanContainer>
                        <TransferImg src={TransferBackground} alt="" />
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Enter Loan Id</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={values.loanId}
                            onChange={handleChange('loanId')}
                            />
                        </FormControl>
                        <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch', '& .MuiInputLabel-root': {
                            color: 'balck',
                            fontSize: '1.2rem',
                            },
                            '& .MuiFilledInput-root':{
                                backgroundColor: 'white',
                            } }} >
                            <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                            <FilledInput
                            id="filled-adornment-amount"
                            value={values.amountPaid}
                            onChange={handleChange('amountPaid')}
                            />
                        </FormControl>
                    </LoanContainer>
                    <p id='errormsg'>{errorMessages}</p>
                    <LoanContainer style={{height:'10vh'}}>
                        <Button variant="contained" endIcon={<SendIcon />} sx={{ m: 1, mt: 1, width: '50ch',marginBottom:'0px', backgroundColor: '#3498db', '& .MuiButton-root': {
                            color: 'balck',
                            // fontWeight: 'bold',
                            fontSize: '1.2rem',
                            
                            } }} onClick = {handleSubmit} >
                                Pay
                        </Button>
                    </LoanContainer>
                    <DepositNote>
                        <h3>Note:</h3>
                        <p>1. Loan Id should be 8 digit number.</p>
                        <p>2. Amount should be number and greater than 0.</p>
                        <p>3. By clicking on the submit button, you agree to the terms and conditions of the bank.</p>
                        <p>4. The bank will not be responsible for any loss or damage caused by the use of this website.</p>
                        <p>5. The bank reserves the right to change the terms and conditions of the website at any time.</p>
                    </DepositNote>
                </CHRightContainer>
            </CHRight>
        </CHContainer>
        <div style={{marginTop:"10vh"}} >
            <Footer/>
        </div>
        </>
    )

}

export default LoanPayment;