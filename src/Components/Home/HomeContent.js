import styled from "styled-components"
import savingsimg from "./Images/savingsimg.jpg";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SavingsIcon from '@mui/icons-material/Savings';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import PaidIcon from '@mui/icons-material/Paid';
import ApiIcon from '@mui/icons-material/Api';
import businessimg from "./Images/businessimg.jpg";
import rlnobt from "./Images/rlnobt.png";
import insuranceimg from "./Images/insurance.png";
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import React from "react";
import { useNavigate } from "react-router-dom";
// import logo from "./Images/logo.png";
const HomeContainer = styled.div`
    margin-top: 100vh;
    width: 90vw;
    height: auto;
    padding: 0vh 5vw;
`;

const AboutRLN = styled.div`
    padding-top: 5vh;
    width: 90vw;
    height: 60vh;
    background-color: #f5f5f5;

    #mainheading {
        text-align: center;
        font-size: 2rem;
        /* font-weight: 600; */
        color: #000;
        font-family: 'Lato', sans-serif;
    }
`;

const AboutRLNContent = styled.div`
    width: 80vw;
    height: auto;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5vh 5vw;
`;

const AboutRLNContentLeft = styled.div`
    width: 30vw;
    height: auto;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    color: #707070 !important;

    #abt {
        font-size: 1rem;
        margin-top: 2vh;
    }
`;

const AboutRLNContentRight = styled.div`
    width: 50vw;
    height: auto;
    padding: 0vh 0vw 0vh 5vw;
    /* background-color: black; */
    display: flex;
    flex-direction: column;
    text-align: justify;
    #abt {
        
        margin-top: 4vh;
        margin-bottom: 2vh;
        color: #707070 !important;
    }
    p{
        /* color: #707070 !important; */
        font-size: 1.1rem;
        margin-bottom: 10px;
        justify-content: justify;
    }
`;

const SavingContainer = styled.div`
    margin-top: 5vh;
    width: 90vw;
    height: 100vh;
    background-image: url(${savingsimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
`;

const SavingContentTop = styled.div`
    padding: 15vh 5vw 5vh 5vw;
    width: 80vw;
    height: 30vh; 
    
    #tit {
        /* font-size: 2rem; */
        color: #707070 !important;
        color: #000;
        font-family: 'Lato', sans-serif;
        margin-bottom: 20px;
    }
    #maintit {
        font-family: 'Lato', sans-serif;
        /* 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
        font-size: 3.5rem;
        color: #000;

    }
`;

const SavingContentBottom = styled.div`
    width: 80vw;
    height: 60vh;
    /* background-color: #f5f5f5; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5vh 5vw;
`;

const EachServiceCard = styled.div`
    width: 25vw;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;
    transition: 0.5s;
    cursor: pointer;
    background: transparent linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%) 0% 0% no-repeat padding-box;
    &:hover {
        transform: scale(1.1);
    }
    #abt {
        margin-top: 2vh;
        font-size: 1rem;
        color: #707070 !important;
        margin-bottom: 2vh;
    }
`;

const ApplyNowBtn = styled.button`
    width: 10vw;
    height: 5vh;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    transition: 0.5s;
    &:hover {
        transform: scale(1.1);
    }
`;


const BusinessContainer = styled.div`
    width: 90vw;
    height: 90vh;
    background-image: url(${businessimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
`;


const BusinessContentTop = styled.div`
    padding: 5vh 5vw;
    width: 30vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
    margin-left: 40vw;
    margin-top: 20vh;
    #tit {
        /* font-size: 2rem; */
        color: #707070 !important;
        color: #000;
        font-family: 'Lato', sans-serif;
        margin-bottom: 20px;
    }
    #maintit {
        font-family: 'Lato', sans-serif;
        /* 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
        font-size: 3rem;
        color: #000;
        
    }
`;

const BusinessContentBottom = styled.div`
    width: 80vw;
    height: 60vh;
    /* background-color: #f5f5f5; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5vh 5vw;
`;

const ObjectivesContainer = styled.div`
    margin-top: 10vh;
    width: 90vw;
    height: 100vh;
    background-image: url(${rlnobt});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column; 
`;

const ObjectivesContentTop = styled.div`
    padding: 5vh 5vw 0vh 5vw;
    width: 40vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
    #tit {
        /* font-size: 2rem; */
        color: #707070 !important;
        color: #000;
        font-family: 'Lato', sans-serif;
        margin-bottom: 20px;
    }
    #maintit {
        font-family: 'Lato', sans-serif;
        /* 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
        font-size: 3rem;
        color: #000;
        margin-bottom: 30px;
    }
`;


const InsuranceContainer = styled.div`
    margin-top: 10vh;
    width: 90vw;
    height: 100vh;
    background-image: url(${insuranceimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
`;

const InsuranceContentTop = styled.div`
    padding: 15vh 5vw 5vh 5vw;
    width: 80vw;
    height: 30vh; 
    
    #tit {
        /* font-size: 2rem; */
        color: #707070 !important;
        color: #000;
        font-family: 'Lato', sans-serif;
        margin-bottom: 20px;
    }
    #maintit {
        font-family: 'Lato', sans-serif;
        /* 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
        font-size: 3.5rem;
        color: #000;

    }
`;

const InsuranceContentBottom = styled.div`
    width: 80vw;
    height: 60vh;
    /* background-color: #f5f5f5; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5vh 5vw;
`;

// const FinalBottom = styled.div`
//     width: 90vw;
//     height: 30vh;
//     /* background-color: #000; */
//     text-align: center;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     h1 {
//         font-size: 3rem;
//         color: #000;
//         font-weight: 1000;
//         font-family: 'Lato', sans-serif;
//         /* margin-bottom: 20px; */
//     }
//     h2 {
//         font-size: 2rem;
//         color: #000;
//         font-weight: 600;
//         font-family: 'Lato', sans-serif;
//     }
//     hr {
//         width: 50vw;
//     }
// `;

// const FinalBottomImg = styled.img`
//     margin-top: 20vh;
//     width: 15vw;
//     height: 30vh;
// `;

function HomeContent() {

    const [currentUser , setCurrentUser] = React.useState(false);
    const navigate = useNavigate();
    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem('customerLogin'));
        if ( user) {
            setCurrentUser(true);
        }
    }, []);

    return(
        <>
        <HomeContainer>
            <AboutRLN>
                <h1 id="mainheading">RLN Bank</h1>
                <h1 id="mainheading">Everything you need, Everything is here.</h1>
                <AboutRLNContent>
                    <AboutRLNContentLeft>
                        <h2>"&lrm;Banking that's ethical"</h2>
                        <img src="https://www.bandhanbank.com/sites/default/files/2020-12/Banking%20thats%20ethical_0.png" alt="Banking that's ethical" />
                        <p id="abt">At RLN Bank, we believe in banking that's ethical. We are committed to providing you with a banking experience that is transparent, fair and ethical.</p>
                    </AboutRLNContentLeft>
                    <AboutRLNContentRight>
                        <h2 id="abt">About RLN Bank</h2>
                        <p>RLN BANK is an industry that handles online banking and other financial transactions for individual consumers and businesses alike. Bank provides the liquidity needed for families and businesses to invest in the future.
                        RLN Bank is a lawful organisation that accepts deposits that can be withdrawn on demand.This is an  institutions that help the public in the management of their finances, public deposit their savings in banks with the assurance to withdraw money from the deposits whenever required.</p>
                        <p>RLN Bank also lend and recycle excess money within the financial system and create, distribute, and trade securities.
                        RLN Bank have several ways of making money besides pocketing the difference (or spread) between the interest they pay on deposits and borrowed money and the interest they collect from borrowers or securities they hold.</p>
                    </AboutRLNContentRight>
                </AboutRLNContent>
                <SavingContainer>
                    <SavingContentTop>
                        <h2 id="tit">"Savings Banking"</h2>
                        <p id="maintit">Bank when you want,</p>
                        <p id="maintit">the way you want​​</p>
                        <p>Easy accounts, deposits,loans and insurance for you and your family </p>
                    </SavingContentTop>
                    <SavingContentBottom>
                        <EachServiceCard>
                            <AccountBalanceIcon style={{ fontSize: 50 }} />
                            <p>Saving Account</p>
                            <p id="abt">A savings account is a bank account that earns interest and is designed to help you save money.</p>
                            <ApplyNowBtn onClick={() => {currentUser  ? navigate('/customerhome') : navigate('/logintype')}} >Apply Now</ApplyNowBtn>
                        </EachServiceCard>
                        <EachServiceCard>
                            <CreditScoreIcon style={{ fontSize: 50 }} />
                            <p>Loans</p>
                            <p id="abt">A loan is a sum of money that an individual borrows from a financial institution or bank.</p>
                            <ApplyNowBtn onClick={() => {currentUser  ? navigate('/customerhome') : navigate('/logintype')}} >Apply Now</ApplyNowBtn>
                            </EachServiceCard>
                        <EachServiceCard>
                            <SavingsIcon style={{ fontSize: 50 }} />
                            <p>Deposits</p>
                            <p id="abt">A deposit is a sum of money that is placed in a bank account or other financial institution.</p>
                            <ApplyNowBtn onClick={() => {currentUser  ? navigate('/customerhome') : navigate('/logintype')}} >Apply Now</ApplyNowBtn>
                            </EachServiceCard>
                    </SavingContentBottom>
                </SavingContainer>
                <BusinessContainer>
                    <BusinessContentTop>
                        <h2 id="tit">"Business Banking"</h2>
                        <p id="maintit">By growing your,</p>
                        <p id="maintit">business, you help ​​</p>
                        <p id="maintit">everyone win​</p>
                        <p>Easy business transactions for your application. </p>
                    </BusinessContentTop>
                    <BusinessContentBottom>
                        <EachServiceCard>
                            <AccountBalanceIcon style={{ fontSize: 50 }} />
                            <p>Business Account</p>
                            <p id="abt">A business account is a bank account that is used for business purposes.</p>
                            <ApplyNowBtn onClick={() => {currentUser  ? navigate('/apidocmentation') : navigate('/logintype')}}>Apply Now</ApplyNowBtn>
                        </EachServiceCard>
                        <EachServiceCard>
                            <ApiIcon style={{ fontSize: 50 }} />
                            <p>Business Api</p>
                            <p id="abt">Using Business Api, complete the payments in your application</p>
                            <ApplyNowBtn onClick={() => {currentUser  ? navigate('/apikey') : navigate('/logintype')}}>Apply Now</ApplyNowBtn>
                            </EachServiceCard>
                        <EachServiceCard>
                            <PaidIcon style={{ fontSize: 50 }} />
                            <p>Business Transactions</p>
                            <p id="abt">Using Business Transactions, complete the payments in your application</p>
                            <ApplyNowBtn onClick={() => {currentUser  ? navigate('/businesstransactionhistory') : navigate('/logintype')}}>Apply Now</ApplyNowBtn>
                            </EachServiceCard>
                    </BusinessContentBottom>
                </BusinessContainer>
                <InsuranceContainer>
                    <InsuranceContentTop>
                    <h2 id="tit">"Life Insurance"</h2>
                    <p id="maintit">Ensure financial protection </p>
                    <p id="maintit">and independence for your family​</p>
                    <p>This Service will be provided by RLN Bank Soon</p>
                    </InsuranceContentTop>
                    <InsuranceContentBottom>
                        <EachServiceCard>
                            <SettingsAccessibilityIcon style={{ fontSize: 50 }} />
                            <p>Life Insurance</p>
                            <p id="abt">When you have insurance you know that you are secured against any unforeseen events in life, and this gives you complete peace of mind.  </p>
                            <ApplyNowBtn onClick={() => {currentUser  ? navigate('/lifeinsurance') : navigate('/logintype')}}>Predict Insurance</ApplyNowBtn>
                        </EachServiceCard>
                    </InsuranceContentBottom>
                </InsuranceContainer>
                <ObjectivesContainer>
                    <ObjectivesContentTop>
                        <h2 id="tit">"Objectives of RLN Bank"</h2>
                        <p id="maintit">Everything you need, Everything is here.</p>
                        <p>1. To establish as an institution for maximizing profits and to conduct overall economic activities.</p>
                        <p>2. To collect savings or idle money from the public at a lower rate of interests and lend these public money at a higher rate of interests.</p>
                        <p>3. To create propensity of savings amongst the people.</p>
                        <p>4. To motivate people for investing money with a view to bringing solvency in them .</p>
                        <p>5. To create money against money as an alternative for enhancing supply of money.</p>
                        <p>6. To build up capital through savings.</p>
                        <p>7. To expedite investments.</p>
                        <p>8. To extend services to the customers</p>
                        <p>9. Acceptance of deposits from the public</p>
                        <p>10.Provide demand withdrawal facility</p>
                        <p>11.Lending facility</p>
                        <p>12.Transfer of funds</p>
                        <p>13.Issue of drafts</p>
                        <p>14.Provide safe custody of valuables</p>
                        <p>15.Provide safe custody of securities</p>
                        <p>16.Provide safe custody of documents</p>
                        <p>17.Provide safe custody of cash</p>
                        <p>18.Provide safe custody of insurance policies</p>
                        </ObjectivesContentTop>
                </ObjectivesContainer>
                
            </AboutRLN>
           
        </HomeContainer>
        </>
    )
}

export default HomeContent;


// <FinalBottom>
//                     <FinalBottomImg src={logo} alt="Final Bottom" />
//                     <h1>RLN BANK</h1>
//                     <h2>Everything you need, Everything is here.</h2>
//                     <hr/>
//                 </FinalBottom>