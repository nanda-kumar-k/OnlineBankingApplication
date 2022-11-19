import styled from "styled-components";
import paymentimg from "./Images/payment.png";
import paymentsuccess from "./Images/paymentsuccess.gif";

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0px 1px whitesmoke;
    border-bottom: 1px solid #E6E6E6;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
`;

const SubBut = styled.button`
    height: 5vh;
    width: 20vw;
    background-color: rgb(136, 248, 136) ;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 2vh;
    margin-bottom: 2vh;
    &:hover{
        background-color: #64b4e9;
    }
`;

const InfoImg = styled.img`
    margin: 10px 0;
    width: 120px;
    height: 120px;
`;

const PaySuccessImg = styled.img`
    margin-left: 5px;
    width: 15vw;
    height: 30vh;
`;

function Successfull() { 
    return (
        <>
            <TextScroll behavior="scroll" direction="left" scrollamount="10" >
                Welcome to Online Banking Application
            </TextScroll>
            <PaymentContainer>
                <ConformationContainer>
                    <h1>RLN Online Net Banking</h1>
                    <h2>Payment Conformation</h2>
                    <InfoImg src={paymentimg} alt="" />
                  
                    <PaySuccessImg src={paymentsuccess} alt="" />    
                    
                    <SubBut > Continue </SubBut>
                    <hr/>
                </ConformationContainer>
            </PaymentContainer>
        </>
    )
}

export default Successfull;
