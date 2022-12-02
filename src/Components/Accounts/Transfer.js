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
import Footer from "../Footer/Footer";
import Swal from 'sweetalert2'

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

    #errormsg {
        color: red;
        font-size: 1.2rem;
        margin-top: 1vh;
        width: 40ch;
        text-align:center ;
        margin-bottom: 1vh;
    }
`;

function Transfer() {
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
        amountTransfer: '',
        recieverName: '',
        recieverAccountNumber: ''
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(values);
        if (values.amountTransfer && values.recieverName && values.recieverAccountNumber) {
            
            if (values.recieverAccountNumber.length === 12) {

                if (!isNaN(values.recieverAccountNumber)) {

                    if (!isNaN(values.amountTransfer)) {
                        if (Number(values.amountTransfer) > 0) {

                            let data = {
                                amountTransfer: values.amountTransfer,
                                recieverName: values.recieverName,
                                recieverAccountNumber: values.recieverAccountNumber
                            };

                           await RLNDataService.customerAmountTransfer(data).then(response => {
                                console.log(response);
                                if (response.statusCode === 200) {
                                    Swal.fire({
                                        title: 'Success!',
                                        text: response.message,
                                        icon: 'success',
                                        confirmButtonText: 'Ok'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            navigate('/transaction');
                                        }
                                    })   
                                }
                                else if (response.statusCode === 401) {
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
                            })
                            .catch(err => {
                                console.log(err);
                                // navigate('/setpassword');
                            });                           
                        } else {
                            setErrorMessages("Amount should be greater than 0");
                        }
                    } else {
                        setErrorMessages('Please enter a valid amount');
                    } 
                } 
                else {
                    setErrorMessages('Account Number should be in 12 digits number');
                }
            }
            else  {
                setErrorMessages("Account Number should be 12 digits number");
            }

            
        }
        else {
            setErrorMessages('Please fill all the fields');
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
                                <InputLabel htmlFor="filled-adornment-amount">Account Number</InputLabel>
                                <FilledInput
                                id="filled-adornment-amount"
                                value={values.recieverAccountNumber}
                                onChange={handleChange('recieverAccountNumber')}
                                />
                            </FormControl>
                            <FormControl variant="filled" sx={{ m: 1, mt: 1, width: '50ch',marginBottom:'20px', '& .MuiInputLabel-root': {
                                color: 'balck',
                                fontSize: '1.2rem',
                                },
                                '& .MuiFilledInput-root':{
                                    backgroundColor: 'white',
                            } }} >
                                <InputLabel htmlFor="filled-adornment-amount">Account Holder Name</InputLabel>
                                <FilledInput
                                id="filled-adornment-amount"
                                value={values.recieverName}
                                onChange={handleChange('recieverName')}
                                />
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
                                value={values.amountTransfer}
                                onChange={handleChange('amountTransfer')}
                                />
                            </FormControl>
                            <p id='errormsg'>{errorMessages}</p>
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
        <div style={{marginTop:"10vh"}}>
            <Footer/>
        </div>
        </>
    )
}

export default Transfer;