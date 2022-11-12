import { CHContainer, CHLeft, CHNavbar, CHRight, BackImg } from "../CustomerHome/CustomerHome";
import background from "../CustomerHome/Images/background.png";
import AllLinks from "../CustomerHome/AllLinks";
import styled from "styled-components";
import BalanaceImg from "./Images/balance.jpg";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import React from "react";
import RLNDataService from "../../services/rln.customer.service";

export const CHRightContainer = styled.div`
    padding: 1vh 1vw;
    width: 64vw;
    height: 70vh;
    background-color: white;
    border-radius: 10px;
    h2 {
        padding: 1vh 1vw;
        box-shadow: 1px 1px whitesmoke;
        border-bottom: 1px solid #E6E6E6;
    }
`;
const BalanceContainer = styled.div`
    width: 64vw;
    height: 70vh;
    display: flex;
    justify-content: center;
`;

const BalanceCard = styled.div`
    width: 60vw;
    height: 70vh;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img:first-child {
        width: 15vw;
        height: 30vh;
        border-radius: 50%;
        margin-bottom: 1vh;
    }
    a {
        text-decoration: none;
        color: black;

        &:hover {
            color: #3498db;
            text-decoration: underline;
        }
    }
`;

const NotePoint = styled.div`
    margin-top: 5vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
`;



function Balance() {

    const [balance, setBalance] = React.useState('');
    const parms = useParams();
    const navigate = useNavigate();
    const fetchDataFun = () => {
        navigate('/login');
    }
    React.useEffect(() => {
        RLNDataService.checkCustomerBalance().then((response) => {
            console.log(response);
            if(response){
                setBalance(response.data);
            }
            else{
                navigate('/login');
            }
        })
    },[parms,navigate]);

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
                <h2>Account Balance</h2>
                <hr/>
                <BalanceContainer>
                    <BalanceCard>
                        <img src={BalanaceImg} alt="" />
                        <div style={{display:'flex'}}><h3>Account Number : </h3><h3> {balance.accountNumber}</h3></div>
                        <div style={{display:'flex'}}><h3>Account Type : </h3><h3> {balance.accountType}</h3></div>
                        <div style={{display:'flex'}}><h3>Balance : </h3><h3>{balance.balance}</h3></div>
                        <p style={{marginTop:'20px'}}>To Check Your Transaction History.   <NavLink to='/Transaction'>Click Her</NavLink> !!!.</p>
                        <NotePoint>
                        <p style={{marginTop:'20px',textAlign:'left'}}><b>Note</b></p>
                        <p>1. This is a demo application. So, the data is not real.</p>
                        </NotePoint>
                    </BalanceCard>
                </BalanceContainer>
            </CHRightContainer>
        </CHRight>
      
    </CHContainer>
        </>
    )
}

export default Balance;