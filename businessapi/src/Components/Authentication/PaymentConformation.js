import styled from "styled-components";
import paymentimg from "./Images/payment.png";
import React from "react";
import RLNBussinessService from "../../services/rln.business.service";
import { useNavigate, useParams } from "react-router-dom";

const TextScroll = styled.marquee`
    margin-top: 10px;
    /* margin-bottom: 20px; */
    width: 100vw;
    height: 5vh;
    background-color: #d3ebfa;
    font-size: 1.6rem;
    font-weight: 100;
    color: #000;
`;

const PaymentContainer = styled.div`
    height: 82vh;
    width: 100vw;
    background-color:#dcedf7;
    /* background:  linear-gradient(#b9e1fa,white); */
    display: flex;
    flex-direction: column;
    /* padding: 2vh 10vw; */
    font-family: "Lato-Bold" !important;
    color: #4a4a4a;
    justify-content: center;
    align-items: center;
`;

const ConformationContainer = styled.div`
    margin-top: 5px;
    height: 74vh;
    width: 23vw;
     background:  linear-gradient(#b9e1fa,white);
    padding: 2vh 1vw;
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0px 1px whitesmoke;
    border-bottom: 1px solid #E6E6E6;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    img {
        margin: 10px 0;
        width: 120px;
        height: 120px;
    }
    hr {
        width: 100%;
        margin-top: 2vh;
    }
    .info {
        margin-top: 5vh;
        margin-bottom: 5vh;
        width: 25vw;
        tr {
            height: 5vh;
            font-size: 1.2rem;
        }
        td {
            text-align: left;
            padding: 0 1vw;
        }
    }

    .butrow {
        display: flex;
        width: 23vw;
        justify-content: space-between;

        #pay {
            &:hover{
                background-color: #4CAF50;
            }
        }

        #cancel {
            &:hover{
                background-color: #f44336;
            }
        }
    }

    #timeout {
        margin-top: 2vh;
        margin-bottom: 2vh;
        &:hover{
                background-color: #f44336;
            }
    }
`;


const SubBut = styled.button`
    height: 5vh;
    width: 10vw;
    background-color: #64b4e9;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 2vh;
    margin-bottom: 2vh;

    
    
`;




function PaymentConformation() { 

    const [payData, setPayData] = React.useState('');
    const [infoData, setInfoData] = React.useState('');
    const [timeOut, setTimeOut] = React.useState('');
    const [errormssg , setErrormssg] = React.useState('');
    const parms = useParams();

    React.useEffect(() => {
        RLNBussinessService.customerPaymentDetailsAuthentication().then((response) => {
            console.log(response);
            if(response.statusCode === 200) {
                setPayData(response.data);
            }
            else if (response.statusCode === 100) {
                setInfoData(response.data);
                setPayData(response.data);
                // navigate('/login');
            }
            else if (response.statusCode === 101) {
                setTimeOut(response.message)
                setErrormssg(response.message);
            }
            else {
                setErrormssg(response.message);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    },[parms]);

    const navigate = useNavigate();

    const handlePay = async () => {
       await RLNBussinessService.amountPaymentAuthentication(payData.username, payData.amount ).then((response) => {
            console.log(response);
            if(response.statusCode === 200) {
                localStorage.setItem('redirecturl', response.data);
                navigate('/successfull');

            }
            else if (response.statusCode === 100) {
                setInfoData(response.message);
                // navigate('/login');
            }
            else if (response.statusCode === 101) {
                setTimeOut(response.message)
                setErrormssg(response.message);
            }
            else {
                navigate('/failure');
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    const handleCancel = async () => {
        await RLNBussinessService.cancelPaymentAuthentication(payData.username, payData.amount ).then((response) => {
            console.log(response);
            if(response.statusCode === 200) {
                localStorage.setItem('redirecturl', response.data);
                navigate('/failure');

            }
            else {
                navigate('/failure');
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }


    return (
        <>
            <TextScroll behavior="scroll" direction="left" scrollamount="10" >
                Welcome to Online Banking Application
            </TextScroll>
            <PaymentContainer>
                <ConformationContainer>
                    <h1>RLN Online Net Banking</h1>
                    <h2>Payment Conformation</h2>
                    <img src={paymentimg} alt="" />
                    {  ( payData ) ? 
                        <>
                            <div className="info">
                        
                                <table>
                                    <tr>
                                        <td>Customer Username : </td>
                                        <td>{payData.username}</td>
                                    </tr>
                                    <tr>
                                        <td>Account Number : </td>
                                        <td>{payData.accountNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>Amount :</td>
                                        <td>{payData.amount}</td>
                                    </tr>
                                    <tr >
                                        <td>Purpose :</td>
                                        <td>{payData.purpose}</td>
                                    </tr>
                                </table>
                            </div>
                            { infoData ? <>
                                <p>{infoData}</p>
                                <SubBut id="timeout" onClick={handleCancel}> Cancel </SubBut>
                                </>
                                 : 
                            <div className="butrow"> 
                                <SubBut id="cancel" onClick={handleCancel}> Cancel </SubBut>
                                <SubBut id="pay" onClick={handlePay}> Pay </SubBut>
                            </div>
                            }
                        </>
                        : <h3 style={{color:"red"}}>{errormssg}</h3>
                        }
                        { timeOut ? <SubBut id="timeout" onClick={handleCancel}> Continue </SubBut> : <></> }
                       
                    <hr/>
                </ConformationContainer>
            </PaymentContainer>
        </>
    )
}

export default PaymentConformation;
